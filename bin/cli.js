#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Shebang check and execution
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');

// Parse bundle flag
let targetBundle = null;
const bundleIdx = args.findIndex(arg => arg === '--bundle' || arg === '-b');
if (bundleIdx !== -1 && args[bundleIdx + 1]) {
  targetBundle = args[bundleIdx + 1];
}

const HOME = process.env.HOME || process.env.USERPROFILE;
const DEFAULT_SKILLS_PATH = path.join(HOME, '.agents/skills');
const GEMINI_SKILLS_PATH = path.join(HOME, '.gemini/config/skills');

const BUNDLES = require('../data/bundles.json');
const SKILLS_DIR = path.join(__dirname, '../skills');

function copyDirRecursive(src, dest) {
  if (dryRun) {
    console.log(`[DRY RUN] Would copy: ${src} -> ${dest}`);
    return;
  }
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function installSkills(selectedSkills, targetPath) {
  console.log(`\nInstalling ${selectedSkills.length} skills to: ${targetPath}`);
  let count = 0;
  
  selectedSkills.forEach(name => {
    const srcPath = path.join(SKILLS_DIR, name);
    const destPath = path.join(targetPath, name);
    if (fs.existsSync(srcPath)) {
      copyDirRecursive(srcPath, destPath);
      count++;
    } else {
      console.warn(`⚠️ Skill not found in library: ${name}`);
    }
  });
  
  console.log(`\n🎉 Successfully installed ${count} skills!`);
}

function getSkillsForBundle(bundleKey) {
  const bundle = BUNDLES[bundleKey];
  if (!bundle) {
    console.error(`❌ Bundle not found: ${bundleKey}`);
    console.log('Available bundles: ' + Object.keys(BUNDLES).join(', '));
    process.exit(1);
  }
  return bundle.skills;
}

function getAllSkills() {
  return fs.readdirSync(SKILLS_DIR).filter(d => fs.statSync(path.join(SKILLS_DIR, d)).isDirectory() && d !== 'skills');
}

// CLI Logic
console.log('==============================================');
console.log('     Antigravity Awesome Skills Installer     ');
console.log('==============================================\n');

// Detect tool directories
const defaultExists = fs.existsSync(path.dirname(DEFAULT_SKILLS_PATH));
const geminiExists = fs.existsSync(path.dirname(GEMINI_SKILLS_PATH));

let installPath = DEFAULT_SKILLS_PATH;
if (!defaultExists && geminiExists) {
  installPath = GEMINI_SKILLS_PATH;
}

// Non-interactive path if bundle or full auto is specified
if (targetBundle || args.includes('--all')) {
  const skills = targetBundle ? getSkillsForBundle(targetBundle) : getAllSkills();
  installSkills(skills, installPath);
  process.exit(0);
}

// Interactive prompt using readline (zero external dependencies required for immediate execution)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Available installation options:');
console.log('1. Full Library (All 300+ skills)');
Object.keys(BUNDLES).forEach((key, index) => {
  console.log(`${index + 2}. ${BUNDLES[key].name} (${BUNDLES[key].description})`);
});

rl.question('\nSelect an option to install [1]: ', (answer) => {
  let selectedSkills = [];
  const choice = parseInt(answer.trim()) || 1;
  
  if (choice === 1) {
    selectedSkills = getAllSkills();
  } else {
    const keys = Object.keys(BUNDLES);
    const selectedKey = keys[choice - 2];
    if (selectedKey) {
      selectedSkills = BUNDLES[selectedKey].skills;
      console.log(`\nSelected Bundle: ${BUNDLES[selectedKey].name}`);
    } else {
      console.log('Invalid option. Installing full library by default.');
      selectedSkills = getAllSkills();
    }
  }

  rl.question(`Target installation path [${installPath}]: `, (customPath) => {
    const finalPath = customPath.trim() || installPath;
    installSkills(selectedSkills, finalPath);
    rl.close();
  });
});
