const { execSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

function main() {
    const cwd = process.cwd();
    const output = execSync('git ls-files', { encoding: 'utf8' });
    const files = output.split(/\r?\n/).filter(Boolean);
    const zeroFiles = [];
    for (const rel of files) {
        const abs = path.join(cwd, rel);
        try {
            const st = fs.statSync(abs);
            if (st.size === 0) zeroFiles.push(rel);
        } catch {
            // Ignore missing files
        }
    }
    if (zeroFiles.length) {
        console.log('Zero-sized tracked files:');
        for (const f of zeroFiles) console.log(f);
        process.exitCode = 1;
    } else {
        console.log('No zero-sized tracked files found.');
    }
}

main();


