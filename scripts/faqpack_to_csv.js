// node scripts/faqpack_to_csv.js docs/kit/faqpacks/beauty.json > docs/kit/generated/beauty_faq.csv
const fs = require('fs');
const path = process.argv[2];
if (!path) {
    console.error('Usage: node scripts/faqpack_to_csv.js <path-to-faqpack.json>');
    process.exit(1);
}
const data = JSON.parse(fs.readFileSync(path, 'utf8'));
const vertical = Object.keys(data)[0];
const intents = data[vertical];
console.log('Q,A,Tone,Source/Notes');
for (const it of intents) {
    const q = (it.utterances && it.utterances[0]) || it.intent;
    const a = (it.reply || '').replace(/\n+/g, ' ').trim();
    console.log(`"${q}","${a}","friendly, concise, ≤60 words","faqpack:${vertical}/${it.intent}"`);
}
