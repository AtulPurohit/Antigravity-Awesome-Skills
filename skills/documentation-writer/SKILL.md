---
name: documentation-writer
description: "Write clear, comprehensive technical documentation. Covers README files, API docs, tutorials, architecture guides, and documentation systems."
category: developer-experience
tags: [documentation, readme, api-docs, technical-writing]
complexity: intermediate
risk: low
compatibility: [claude-code, antigravity, gemini-cli, cursor, copilot, codex-cli, autohand, kiro]
source: antigravity-official
version: "1.0.0"
date_added: "2026-07-10"
last_updated: "2026-07-10"
---

# Documentation Writer

## Purpose
Create documentation that developers actually read and use, reducing friction and support burden.

## Documentation Types

### 1️⃣ README Best Practices
```markdown
# Project Name

> One-line description of what this project does.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![CI](https://github.com/user/repo/actions/workflows/ci.yml/badge.svg)](...)
[![npm version](https://badge.fury.io/js/package-name.svg)](...)

## What is this?
[2-3 sentence explanation for someone who has never heard of this]

## Quick Start
[The absolute minimum to get something running in < 5 minutes]

```bash
npm install package-name
```

```javascript
import { feature } from 'package-name';
const result = feature('hello');
```

## Features
- ✅ Feature one (benefit, not just name)
- ✅ Feature two

## Installation
[Detailed installation including prerequisites]

## Usage
[Common use cases with complete examples]

## API Reference
[Complete API documentation or link to it]

## Contributing
[How to contribute, run tests, submit PRs]

## License
MIT
```

### 2️⃣ API Documentation (OpenAPI + Examples)
Every endpoint should document:
- What it does (human readable)
- Request: URL, method, headers, body (with schema and examples)
- Response: status codes, body (with schema and examples)
- Errors: all possible error codes and messages
- Authentication: what's required
- Rate limits: if applicable
- Code examples in multiple languages (curl, JS, Python)

### 3️⃣ Architecture Documentation
Use ADRs (Architecture Decision Records):
```markdown
# ADR-001: Use PostgreSQL for Primary Database

## Status: Accepted

## Context
We need to store user profiles, orders, and analytics data.
The data has complex relationships and requires ACID transactions.

## Decision
Use PostgreSQL 16 as our primary database.

## Rationale
- Mature, battle-tested for 20+ years
- Full ACID compliance for financial data
- JSON support for flexible metadata
- Team has deep PostgreSQL expertise
- Excellent tooling (pgAdmin, migrations, backups)

## Alternatives Considered
- MySQL: Similar capabilities, less advanced features
- MongoDB: Better for unstructured data, but our data is relational

## Consequences
✅ Strong consistency and reliability
✅ Complex queries with JOINs
❌ Harder to scale horizontally than NoSQL
❌ Schema migrations require planning
```

## Outputs
1. README template with all sections
2. API documentation in OpenAPI format
3. Architecture decision records
4. Onboarding guide for new developers
5. Runbook / operations guide
