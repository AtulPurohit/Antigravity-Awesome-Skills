# Developer Onboarding Guide

Welcome to the **Antigravity Awesome Skills** catalog! This guide helps you set up and begin using our pre-packaged agentic skills in your local workspaces.

---

## 🚀 Quick Start in 3 Steps

### 1. Install Node.js
Ensure you have **Node.js (v18+)** installed. Verify via your terminal:
```bash
node -v
```

### 2. Download/Copy the Skills
You can copy the entire folder into your projects manually, or run our automated setup command from your target workspace directory:
```bash
npx antigravity-awesome-skills
```
*This command runs an interactive prompt allowing you to select specific stack bundles or import the full library.*

### 3. Verify the Target Directory
Depending on your coding assistant, verify the directory where the skills are placed:
- **Antigravity Workspace**: Check that folders exist under `.agents/skills/`.
- **Global Gemini Config**: Check `~/.gemini/config/skills/`.

---

## 🛠️ Usage Patterns

Once imported, you can point your AI assistant to any `SKILL.md` to guide its coding context. For example:
- **Cursor**: Reference the file in your chat input or `.cursorrules`.
- **Claude Code**: Run:
  ```bash
  claude write "implement the login schema according to /skills/auth-hardener/SKILL.md"
  ```
