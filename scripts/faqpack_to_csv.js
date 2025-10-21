#!/usr/bin/env node
// Usage examples:
// node scripts/faqpack_to_csv.js docs/kit/faqpacks/beauty.json > docs/kit/faqpacks/generated/beauty.csv
// node scripts/faqpack_to_csv.js docs/kit/faqpacks src=./docs/kit/faqpacks out=./docs/kit/faqpacks/generated

const fs = require('fs');
const path = require('path');

function die(message, code = 1) {
  console.error(`[faqpack_to_csv] ${message}`);
  process.exit(code);
}

function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    die(`Unable to read ${filePath}: ${error.message}`);
  }
}

function loadJson(filePath) {
  const raw = readFileSafe(filePath);
  try {
    return JSON.parse(raw);
  } catch (error) {
    die(`Invalid JSON ${filePath}: ${error.message}`);
  }
}

function validatePack(packObj) {
  if (typeof packObj !== 'object' || !packObj) die('Pack must be a JSON object');
  const verticals = Object.keys(packObj);
  if (verticals.length !== 1) die('Pack must contain exactly one top-level vertical key');

  const vertical = verticals[0];
  const intents = packObj[vertical];
  if (!Array.isArray(intents) || intents.length === 0) die('intents must be a non-empty array');

  for (const it of intents) {
    if (!it || typeof it !== 'object') die('intent entry must be an object');
    if (!it.intent || typeof it.intent !== 'string') die('intent name is required for each entry');
    if (!Array.isArray(it.utterances) || it.utterances.length === 0) die(`utterances required for ${it.intent}`);
    for (const utterance of it.utterances) {
      if (typeof utterance !== 'string' || utterance.trim().length === 0) {
        die(`Invalid utterance for ${it.intent}`);
      }
    }
    if (typeof it.reply !== 'string' || it.reply.trim().length === 0) {
      die(`reply required for ${it.intent}`);
    }
  }

  return { vertical, intents };
}

function csvEscape(value) {
  const normalized = String(value ?? '').replace(/\r?\n/g, ' ');
  return '"' + normalized.replace(/"/g, '""') + '"';
}

function toDeterministicRows(vertical, intents) {
  const rows = [];
  const sorted = intents.slice().sort((a, b) => {
    const intentCompare = (a.intent || '').localeCompare(b.intent || '');
    if (intentCompare !== 0) return intentCompare;
    const aq = ((a.utterances && a.utterances[0]) || '').localeCompare((b.utterances && b.utterances[0]) || '');
    return aq;
  });

  for (const it of sorted) {
    const question = (Array.isArray(it.utterances) && it.utterances[0]) ? it.utterances[0] : (it.intent || '');
    const answer = typeof it.reply === 'string' ? it.reply.replace(/\r?\n/g, ' ').trim() : '';
    const tone = (typeof it.tone === 'string' && it.tone.trim()) ? it.tone.trim() : 'friendly, concise, ≤60 words';
    const source = (typeof it.source_notes === 'string' && it.source_notes.trim())
      ? it.source_notes.trim()
      : `faqpack:${vertical}/${it.intent || ''}`;

    rows.push({ question, answer, tone, source });
  }

  return rows;
}

function writeCsv(rows, outStream) {
  outStream.write('Q,A,Tone,Source/Notes\n');
  for (const row of rows) {
    outStream.write([
      csvEscape(row.question),
      csvEscape(row.answer),
      csvEscape(row.tone),
      csvEscape(row.source)
    ].join(',') + '\n');
  }
}

function processFile(filePath, outDir) {
  const pack = loadJson(filePath);
  const { vertical, intents } = validatePack(pack);
  const rows = toDeterministicRows(vertical, intents);

  if (!outDir) {
    writeCsv(rows, process.stdout);
    return;
  }

  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, `${vertical}.csv`);
  const ws = fs.createWriteStream(outPath, { encoding: 'utf8' });
  writeCsv(rows, ws);
  ws.end();
  console.error(`Wrote ${outPath}`);
}

function main() {
  const arg1 = process.argv[2];
  const arg2 = process.argv[3] || '';
  const arg3 = process.argv[4] || '';
  const srcDirArg = arg2.startsWith('src=') ? arg2.slice(4)
    : (arg3.startsWith('src=') ? arg3.slice(4) : null);
  const outDirArg = arg2.startsWith('out=') ? arg2.slice(4)
    : (arg3.startsWith('out=') ? arg3.slice(4) : null);

  if (!arg1) die('Usage: node scripts/faqpack_to_csv.js <pack.json|dir> [src=dir] [out=dir]');

  let stat;
  try {
    stat = fs.statSync(arg1);
  } catch (error) {
    die(`ENOENT: ${arg1}`);
  }

  if (stat.isDirectory()) {
    const srcDir = srcDirArg || arg1;
    const outDir = outDirArg || path.join(srcDir, 'generated');
    let files;
    try {
      files = fs.readdirSync(srcDir).filter(f => f.endsWith('.json') && f !== 'schema.json');
    } catch (error) {
      die(`Unable to list directory ${srcDir}: ${error.message}`);
    }
    if (files.length === 0) die(`No JSON packs found in ${srcDir}`);
    for (const file of files) {
      processFile(path.join(srcDir, file), outDir);
    }
  } else {
    processFile(arg1, null);
  }
}

main();

