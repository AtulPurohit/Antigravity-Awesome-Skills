# AI Agent Integration Manual

This manual provides detailed instructions on how to load and reference the **Antigravity Awesome Skills** inside various AI coding tools.

---

## 🤖 Claude Code

Claude Code supports custom tools and context. You can reference specific skills directly during prompts:
```bash
# Example: Injecting a security audit checklist
claude write "Perform a security audit using rules in ./skills/security-auditor/SKILL.md"
```

---

## 🧭 Cursor IDE

Cursor reads context files and rules. You can integrate skills in two ways:

### 1. Project-wide Rules
Add the skill contents into your `.cursorrules` file to make them persistent.

### 2. File Reference (Mentions)
Type `@` in the Cursor Chat or Edit box, search for the `SKILL.md` file, and select it to provide immediate reference context for your commands.

---

## ♊ Gemini CLI

For Gemini CLI configurations:
1. Copy the skill definition directories under `~/.gemini/config/skills/`.
2. Reference the skill in your command options:
   ```bash
   gemini run --skill clean-architecture "refactor this directory"
   ```

---

## 💻 GitHub Copilot

For GitHub Copilot (VS Code / JetBrains):
1. Keep the skills catalog under your project directory (e.g. `docs/skills/` or `.agents/skills/`).
2. In the Copilot Chat window, use the `#file` command to reference the target `SKILL.md` (e.g. `#file:SKILL.md`).
