const fs = require('fs');
const path = require('path');

const SKILLS_DIR = path.join(__dirname, '../../skills');

const DANGEROUS_PATTERNS = [
  {
    regex: /sk-[a-zA-Z0-9]{32,}/,
    error: 'Potential OpenAI/Anthropic API Key leak'
  },
  {
    regex: /mongodb\+srv:\/\/[^\s]+/i,
    error: 'Potential MongoDB Connection String leak'
  },
  {
    regex: /postgres:\/\/[^\s]+/i,
    error: 'Potential PostgreSQL connection leak'
  },
  {
    regex: /rm -rf \/(\s|$)/,
    error: 'Extremely dangerous rm -rf root pattern'
  },
  {
    regex: /password\s*=\s*['"][a-zA-Z0-9_.-]{4,}['"]/i,
    error: 'Hardcoded password string found'
  }
];

const dirs = fs.readdirSync(SKILLS_DIR).filter(d => fs.statSync(path.join(SKILLS_DIR, d)).isDirectory() && d !== 'skills');
let violations = 0;

console.log(`Auditing documentation safety for ${dirs.length} skills...\n`);

dirs.forEach(name => {
  const filePath = path.join(SKILLS_DIR, name, 'SKILL.md');
  if (!fs.existsSync(filePath)) return;
  
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  lines.forEach((line, idx) => {
    DANGEROUS_PATTERNS.forEach(pattern => {
      if (pattern.regex.test(line)) {
        console.error(`⚠️ Security Warning [${name}]: ${pattern.error} on line ${idx + 1}`);
        console.error(`   > "${line.trim().slice(0, 100)}"`);
        violations++;
      }
    });
  });
});

if (violations > 0) {
  console.log(`\nAudit complete: ${violations} potential safety issues detected.`);
  process.exit(1);
} else {
  console.log('\n✅ Skills Security Audit passed! No credential leaks or dangerous patterns detected.');
}
