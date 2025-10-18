// node scripts/faqpack_to_csv.js docs/kit/faqpacks/beauty.json > docs/kit/generated/beauty_faq.csv
const fs = require('fs');
const src = process.argv[2];
if (!src) {
  console.error('usage: node scripts/faqpack_to_csv.js <path/to/faqpacks/*.json>');
  process.exit(1);
}
const data = JSON.parse(fs.readFileSync(src,'utf8'));
const vertical = Object.keys(data)[0];
const intents = data[vertical];
console.log('Q,A,Tone,Source/Notes');
for (const it of intents) {
  const qRaw = (it.utterances && it.utterances[0]) || it.intent || '';
  const aRaw = (it.reply || '').replace(/\n+/g,' ').trim();
  const q = qRaw.replace(/"/g,'""');
  const a = aRaw.replace(/"/g,'""');
  const srcNote = `faqpack:${vertical}/${it.intent || ''}`;
  if (q && a) {
    console.log(`"${q}","${a}","friendly, concise, ≤60 words","${srcNote}"`);
  }
}

