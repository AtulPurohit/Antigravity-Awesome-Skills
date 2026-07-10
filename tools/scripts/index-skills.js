const fs = require('fs');
const path = require('path');

const SKILLS_DIR = path.join(__dirname, '../../skills');
const INDEX_PATH = path.join(__dirname, '../../skills_index.json');
const CATALOG_PATH = path.join(__dirname, '../../CATALOG.md');

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

const dirs = fs.readdirSync(SKILLS_DIR).filter(d => fs.statSync(path.join(SKILLS_DIR, d)).isDirectory() && d !== 'skills');
const indexData = [];
const categories = {};

dirs.forEach(name => {
  const filePath = path.join(SKILLS_DIR, name, 'SKILL.md');
  if (!fs.existsSync(filePath)) return;
  
  const content = fs.readFileSync(filePath, 'utf8');
  const fm = parseFrontmatter(content);
  if (!fm) return;
  
  const skillInfo = {
    name,
    title: name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    category: fm.category || 'general',
    description: fm.description || '',
    complexity: fm.complexity || 'advanced',
    risk: fm.risk || 'low',
    tags: fm.tags || '[]'
  };
  
  indexData.push(skillInfo);
  categories.setdefault = categories[skillInfo.category] = categories[skillInfo.category] || [];
  categories[skillInfo.category].push(skillInfo);
});

// Write skills_index.json
fs.writeFileSync(INDEX_PATH, JSON.stringify(indexData, null, 2));
const PUBLIC_INDEX_PATH = path.join(__dirname, '../../explorer/public/skills_index.json');
fs.mkdirSync(path.dirname(PUBLIC_INDEX_PATH), { recursive: true });
fs.writeFileSync(PUBLIC_INDEX_PATH, JSON.stringify(indexData, null, 2));
console.log(`Generated skills_index.json with ${indexData.length} entries in root and explorer/public/`);

// Write CATALOG.md
let catalogContent = `# Antigravity Skills Catalog

This catalog is an automatically generated index listing all **${indexData.length} agentic skills** available in this repository.

---

## 🗂️ Categories Index
`;

const sortedCategories = Object.keys(categories).sort();
sortedCategories.forEach(cat => {
  catalogContent += `- [${cat.replace('-', ' ').toUpperCase()}](#-${cat})\n`;
});

catalogContent += '\n---\n';

sortedCategories.forEach(cat => {
  const catTitle = cat.replace('-', ' ').toUpperCase();
  catalogContent += `\n### 📂 ${catTitle}\n\n`;
  catalogContent += '| Skill Name | Complexity | Risk | Description |\n';
  catalogContent += '|---|---|---|---|\n';
  
  categories[cat].sort((a, b) => a.name.localeCompare(b.name)).forEach(s => {
    catalogContent += `| **[${s.title}](./skills/${s.name}/SKILL.md)** | \`${s.complexity.toUpperCase()}\` | \`${s.risk.toUpperCase()}\` | ${s.description} |\n`;
  });
});

fs.writeFileSync(CATALOG_PATH, catalogContent);
console.log('Successfully generated CATALOG.md catalog directory.');
