# Repository Guidelines & Agent Standards

Welcome to the **Antigravity Awesome Skills** repository. This document serves as the guide for AI coding agents and human contributors maintaining or extending the skill catalog.

---

## 📁 Repository Structure

```
Antigravity_Awesome_Skills/
├── bin/
│   ├── cli.js              # Command-line installer
│   └── validate.js         # Core frontmatter validation script
├── tools/
│   └── scripts/
│       ├── index-skills.js # Auto-generates CATALOG.md & JSON index
│       └── guard-skills.js # Safety auditing script
├── schemas/
│   └── skill.schema.json   # Frontmatter schema specification
├── data/
│   └── bundles.json        # Bundle group definitions
├── explorer/               # Vite-powered React UI Catalog App
└── skills/                 # 313 Agentic Skill folders
    └── [skill-name]/
        └── SKILL.md        # Metadata + Instructions + Checklist
```

---

## 🛠️ Build, Test, and Quality Commands

Always run these verification scripts before committing changes or opening pull requests:

*   **`npm run validate`**: Validates that all skills contain properly formatted YAML frontmatter matching our JSON schema.
*   **`npm run index:skills`**: Recompiles the `skills_index.json` manifest and rebuilds the root `CATALOG.md`.
*   **`npm run guard:skills`**: Scans skill files for API key leaks, cleartext credentials, or dangerous execution scripts.
*   **`npm run explorer:install`**: Installs dependencies for the local Skills Explorer catalog app.
*   **`npm run explorer:dev`**: Runs the Skills Explorer app locally at `http://localhost:5173`.
*   **`npm run explorer:build`**: Builds a static production version of the Skills Explorer.

---

## ✍️ Coding Style & Skill Authoring Guidelines

1.  **kebab-case folder names**: Every skill must reside in `skills/<skill-name>/SKILL.md` using lowercase alphanumeric characters and hyphens.
2.  **Extended Frontmatter**: Every `SKILL.md` must start with valid YAML frontmatter matching the schema properties (`name`, `description`, `category`, `tags`, `complexity`, `risk`, `compatibility`).
3.  **Strict Verification Checklists**: Include a `## Outputs` or `## Verification` section with specific, checkable verification bullet points.
4.  **No Leaked Credentials**: Never include real tokens, credentials, or keys in examples. Use descriptive placeholder strings (e.g. `process.env.API_KEY` or `<API_KEY>`).
