const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

function run(cmd, args, opts = {}) {
    const r = spawnSync(cmd, args, { encoding: 'utf8', ...opts });
    if (r.error) throw r.error;
    return r;
}

// Create a tiny temp pack to exercise quotes/commas
const tmpDir = path.join(__dirname, '..', '.tmp');
fs.mkdirSync(tmpDir, { recursive: true });
const packPath = path.join(tmpDir, 'tmp_pack.json');
fs.writeFileSync(packPath, JSON.stringify({
    test_vertical: [
        { intent: 'alpha', utterances: ['hello, "world"'], reply: 'Line1\nLine2, "quoted"' },
        { intent: 'beta', utterances: ['hi'], reply: 'ok' }
    ]
}, null, 2));

const out = run('node', ['scripts/faqpack_to_csv.js', packPath]);
if (out.status !== 0) {
    console.error(out.stderr);
    process.exit(1);
}

const csv = out.stdout.trim();
if (!csv.startsWith('vertical,question,answer,tone,source_notes')) {
    console.error('Missing header row');
    process.exit(2);
}
if (!csv.includes('"hello, ""world"""')) {
    console.error('Quotes/commas not escaped as expected');
    process.exit(3);
}
console.log('ok');


