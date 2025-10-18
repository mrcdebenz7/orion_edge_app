#!/usr/bin/env node
// Usage examples:
// node scripts/faqpack_to_csv.js docs/kit/faqpacks/beauty.json > docs/kit/faqpacks/generated/beauty.csv
// node scripts/faqpack_to_csv.js docs/kit/faqpacks src=./docs/kit/faqpacks out=./docs/kit/faqpacks/generated

const fs = require('fs');
const path = require('path');

function die(msg, code=1){ console.error(`[faqpack_to_csv] ${msg}`); process.exit(code); }

function loadJson(p){
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); }
  catch(e){ die(`Invalid JSON ${p}: ${e.message}`); }
}

function validateAgainstSchema(packObj, schema){
  // Minimal validator (no external deps): structural checks only
  if (typeof packObj !== 'object' || !packObj) die('Pack is not an object');
  const verticals = Object.keys(packObj);
  if (verticals.length !== 1) die('Pack must contain exactly one top-level vertical key');
  const vertical = verticals[0];
  const intents = packObj[vertical];
  if (!Array.isArray(intents) || intents.length === 0) die('intents must be a non-empty array');
  for (const it of intents){
    if (!it || typeof it !== 'object') die('intent entry must be an object');
    if (!it.intent || typeof it.intent !== 'string' || it.intent.length < 1 || it.intent.length > 80) die(`bad intent: ${it.intent}`);
    if (!Array.isArray(it.utterances) || it.utterances.length < 1) die(`utterances required for ${it.intent}`);
    if (!it.reply || typeof it.reply !== 'string') die(`reply required for ${it.intent}`);
    // length sanity
    if (it.reply.length > 800) die(`reply too long for ${it.intent}`);
    for (const u of it.utterances){ if (typeof u !== 'string' || u.length < 1 || u.length > 200) die(`bad utterance for ${it.intent}`); }
  }
  return { vertical, intents };
}

function csvEscape(v){
  const s = String(v ?? '').replace(/\r?\n/g, ' ');
  return '"' + s.replace(/"/g,'""') + '"';
}

function toDeterministicRows(vertical, intents){
  const rows = [];
  // Stable sort by intent then first question
  const sorted = intents.slice().sort((a,b)=>{
    const ai = (a.intent||'').localeCompare(b.intent||'');
    if (ai !== 0) return ai;
    const aq = ((a.utterances&&a.utterances[0])||'').localeCompare((b.utterances&&b.utterances[0])||'');
    return aq;
  });
  for (const it of sorted){
    const question = (it.utterances && it.utterances[0]) || it.intent || '';
    const answer = (it.reply || '').trim();
    const tone = it.tone || 'friendly, concise, ≤60 words';
    const source = it.source_notes || `faqpack:${vertical}/${it.intent || ''}`;
    rows.push({ vertical, question, answer, tone, source_notes: source });
  }
  return rows;
}

function writeCsv(rows, outStream){
  outStream.write('vertical,question,answer,tone,source_notes\n');
  for (const r of rows){
    outStream.write([
      csvEscape(r.vertical),
      csvEscape(r.question),
      csvEscape(r.answer),
      csvEscape(r.tone),
      csvEscape(r.source_notes)
    ].join(',') + '\n');
  }
}

function processFile(filePath, outDir){
  const pack = loadJson(filePath);
  const schema = loadJson(path.join(__dirname, '..', 'docs', 'kit', 'faqpacks', 'schema.json'));
  const { vertical, intents } = validateAgainstSchema(pack, schema);
  const rows = toDeterministicRows(vertical, intents);
  if (!outDir) {
    writeCsv(rows, process.stdout);
  } else {
    fs.mkdirSync(outDir, { recursive: true });
    const outPath = path.join(outDir, `${vertical}.csv`);
    const ws = fs.createWriteStream(outPath, { encoding: 'utf8' });
    writeCsv(rows, ws);
    ws.end();
    console.error(`Wrote ${outPath}`);
  }
}

function main(){
  const arg1 = process.argv[2];
  const arg2 = process.argv[3] || '';
  const arg3 = process.argv[4] || '';
  const srcDirArg = (arg2.startsWith('src=') ? arg2.slice(4) : (arg3.startsWith('src=') ? arg3.slice(4) : null));
  const outDirArg = (arg2.startsWith('out=') ? arg2.slice(4) : (arg3.startsWith('out=') ? arg3.slice(4) : null));

  if (!arg1) die('Usage: node scripts/faqpack_to_csv.js <pack.json|dir> [src=dir] [out=dir]');
  const stat = fs.existsSync(arg1) ? fs.statSync(arg1) : null;
  if (!stat) die(`ENOENT: ${arg1}`);

  if (stat.isDirectory()){
    const srcDir = srcDirArg || arg1;
    const outDir = outDirArg || path.join(srcDir, 'generated');
    const files = fs.readdirSync(srcDir).filter(f=>f.endsWith('.json') && f !== 'schema.json');
    if (files.length === 0) die('No JSON packs found in ' + srcDir);
    for (const f of files){ processFile(path.join(srcDir, f), outDir); }
  } else {
    processFile(arg1, null);
  }
}

main();

