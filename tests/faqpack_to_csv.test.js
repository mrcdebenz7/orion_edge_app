const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

test('escapes commas and quotes in CSV', () => {
  const tmp = path.join(__dirname, 'tmp_pack.json');
  fs.writeFileSync(tmp, JSON.stringify({
    vertical: 'pets',
    items: [{ question: 'hello, "world"', answer: 'yes, "indeed"', intent: 'test' }]
  }));
  const out = execSync(`node scripts/faqpack_to_csv.js ${tmp}`).toString().trim();
  expect(out).toBe('pets,"hello, ""world""","yes, ""indeed""","friendly, concise, ≤60 words","faqpack:pets/test"');
  fs.unlinkSync(tmp);
});
