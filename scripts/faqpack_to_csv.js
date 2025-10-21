// node scripts/faqpack_to_csv.js docs/kit/faqpacks/beauty.json > docs/kit/generated/beauty_faq.csv
const fs = require('fs');
const path = process.argv[2];

function exitWithError(message, showUsage = false) {
    console.error(message);
    if (showUsage) {
        console.error('Usage: node scripts/faqpack_to_csv.js <path-to-faqpack.json>');
    }
    process.exit(1);
}

if (!path) {
    exitWithError('Missing path to FAQ pack.', true);
}

let raw;
try {
    raw = fs.readFileSync(path, 'utf8');
} catch (err) {
    exitWithError(`Failed to read file "${path}": ${err.message}`);
}

let data;
try {
    data = JSON.parse(raw);
} catch (err) {
    exitWithError(`Invalid JSON in "${path}": ${err.message}`);
}

const verticalKeys = Object.keys(data || {});
if (verticalKeys.length === 0) {
    exitWithError(`FAQ pack "${path}" did not contain any vertical keys.`);
}

const vertical = verticalKeys[0];
const intents = data[vertical];
if (!Array.isArray(intents)) {
    exitWithError(`Expected an array of intents for vertical "${vertical}".`);
}

function csvEscape(value) {
    return String(value ?? '')
        .replace(/\r?\n+/g, ' ')
        .replace(/"/g, '""')
        .trim();
}

console.log('Q,A,Tone,Source/Notes');
for (const intent of intents) {
    if (!intent?.intent) {
        console.warn(`Skipping an item in "${path}" which is missing the required 'intent' property.`);
        continue;
    }
    const utterances = Array.isArray(intent.utterances) ? intent.utterances : [];
    const question = utterances.length > 0 ? utterances[0] : intent.intent;
    const answer = intent.reply ?? '';
    const qEscaped = csvEscape(question);
    const aEscaped = csvEscape(answer);
    const source = csvEscape(`faqpack:${vertical}/${intent.intent}`);
    console.log(`"${qEscaped}","${aEscaped}","friendly, concise, ≤60 words","${source}"`);
}
