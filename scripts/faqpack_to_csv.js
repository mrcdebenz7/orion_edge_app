// node scripts/faqpack_to_csv.js docs/kit/faqpacks/beauty.json > docs/kit/generated/beauty_faq.csv
const fs = require('fs');

const [, , inputPath] = process.argv;

if (!inputPath) {
  console.error('Usage: node scripts/faqpack_to_csv.js <path-to-faqpack.json>');
  process.exit(1);
}

const exitWithError = (message, error) => {
  console.error(message);
  if (error) {
    console.error(error.message);
  }
  process.exit(1);
};

let raw;
try {
  raw = fs.readFileSync(inputPath, 'utf8');
} catch (error) {
  exitWithError(`Unable to read file: ${inputPath}`, error);
}

let data;
try {
  data = JSON.parse(raw);
} catch (error) {
  exitWithError('File is not valid JSON.', error);
}

const verticalKeys = Object.keys(data || {});
if (verticalKeys.length === 0) {
  exitWithError('FAQ pack must contain exactly one top-level vertical.');
}
if (verticalKeys.length > 1) {
  exitWithError('FAQ pack should contain a single top-level vertical key.');
}

const vertical = verticalKeys[0];
const intents = data[vertical];
if (!Array.isArray(intents)) {
  exitWithError(`Expected an array of intents for vertical "${vertical}".`);
}

const csvEscape = (value) => {
  if (value === undefined || value === null) {
    return '""';
  }

  const normalized = String(value)
    .replace(/\r?\n+/g, ' ')
    .trim()
    .replace(/"/g, '""');

  return `"${normalized}"`;
};

console.log('Q,A,Tone,Source/Notes');
for (const intent of intents) {
  const question = Array.isArray(intent.utterances) && intent.utterances.length > 0
    ? intent.utterances[0]
    : intent.intent || '';
  const answer = intent.reply || '';
  const tone = 'friendly, concise, ≤60 words';
  const sourceTag = `faqpack:${vertical}/${intent.intent || 'unknown'}`;

  console.log([
    csvEscape(question),
    csvEscape(answer),
    csvEscape(tone),
    csvEscape(sourceTag),
  ].join(','));
}
