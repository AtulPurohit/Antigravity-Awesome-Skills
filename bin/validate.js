const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '../skills');
const SCHEMA = require('../schemas/skill.schema.json');

const VALID_CATEGORIES = SCHEMA.properties.category.enum;
const VALID_COMPLEXITIES = SCHEMA.properties.complexity.enum;
const VALID_RISKS = SCHEMA.properties.risk.enum;

function parseFrontmatter(content) {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
  if (!match) return null;
  
  const text = match[1];
  const data = {};
  text.split('\n').forEach(line => {
    if (line.includes(':')) {
      const idx = line.indexOf(':');
      const k = line.substring(0, idx).trim();
      let v = line.substring(idx + 1).trim();
      if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1);
      if (v.startsWith("'") && v.endsWith("'")) v = v.slice(1, -1);
      data[k] = v;
    }
  });
  return data;
}

let errors = 0;
const dirs = fs.readdirSync(BASE).filter(d => fs.statSync(path.join(BASE, d)).isDirectory());

console.log(`Checking ${dirs.length} skill files...\n`);

dirs.forEach(name => {
  if (name === 'skills') return;
  const filePath = path.join(BASE, name, 'SKILL.md');
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Missing SKILL.md for skill: ${name}`);
    errors++;
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  const fm = parseFrontmatter(content);
  if (!fm) {
    console.error(`❌ Invalid or missing frontmatter in ${filePath}`);
    errors++;
    return;
  }
  
  // Validate name format
  if (!/^[a-z0-9-]+$/.test(fm.name)) {
    console.error(`❌ [${name}] name format invalid: "${fm.name}" (should be kebab-case)`);
    errors++;
  }
  
  // Validate category
  if (!VALID_CATEGORIES.includes(fm.category)) {
    console.error(`❌ [${name}] invalid category: "${fm.category}"`);
    errors++;
  }
  
  // Validate complexity
  if (!VALID_COMPLEXITIES.includes(fm.complexity)) {
    console.error(`❌ [${name}] invalid complexity: "${fm.complexity}"`);
    errors++;
  }
  
  // Validate risk
  if (!VALID_RISKS.includes(fm.risk)) {
    console.error(`❌ [${name}] invalid risk: "${fm.risk}"`);
    errors++;
  }
  
  // Validate description length
  if (!fm.description || fm.description.length < 10) {
    console.error(`❌ [${name}] description is too short`);
    errors++;
  }
});

if (errors > 0) {
  console.log(`\nValidation failed: ${errors} errors found.`);
  process.exit(1);
} else {
  console.log('\n✅ All skills validate successfully!');
}
