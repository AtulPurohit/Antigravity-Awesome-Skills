---
name: security-auditor
description: "Perform comprehensive security audits of applications and APIs. Produces CVSS-scored vulnerability reports with detailed remediation steps."
category: security
tags: [security, audit, owasp, vulnerability, penetration]
complexity: expert
risk: high
compatibility: [claude-code, antigravity, gemini-cli, cursor, copilot, codex-cli, autohand, kiro]
source: antigravity-official
version: "1.0.0"
date_added: "2026-07-10"
last_updated: "2026-07-10"
---

# Security Auditor

## Purpose
Systematically identify and document security vulnerabilities with clear severity ratings and remediation guidance.

⚠️ IMPORTANT: Only perform security testing on systems you have explicit written authorization to test.

## Audit Framework

### 1️⃣ OWASP Top 10 (2021)
```
A01: Broken Access Control
  - IDOR (access user B's data as user A)
  - Missing authorization on admin endpoints
  - CORS misconfiguration

A02: Cryptographic Failures
  - HTTP instead of HTTPS
  - Weak cipher suites (RC4, MD5)
  - Passwords stored as plain text or MD5
  - Sensitive data in URL params/logs

A03: Injection
  - SQL injection
  - Command injection
  - LDAP injection
  - Template injection

A04: Insecure Design
  - Missing rate limiting
  - Business logic bypasses
  - Missing input validation

A05: Security Misconfiguration
  - Default credentials
  - Exposed debug endpoints
  - Verbose error messages
  - Unnecessary services running

A06: Vulnerable Components
  - npm/pip packages with known CVEs
  - Outdated frameworks
  - Unpatched dependencies
```

### 2️⃣ Automated Scanning Tools
```bash
# Dependency vulnerability scan
npm audit --audit-level=high
pip-audit
bundle audit

# SAST (Static analysis)
semgrep --config=auto ./src

# Secret scanning
truffleHog scan --disk .
git-secrets --scan

# Docker image scanning
docker scout cves my-image:latest

# DAST (Dynamic analysis)
nikto -h https://api.example.com
owasp-zap-scan https://api.example.com
```

### 3️⃣ Manual Testing Checklist
```
Authentication:
[ ] Brute force protection (lockout after N failures)
[ ] Secure password reset flow (time-limited tokens)
[ ] JWT algorithm confusion possible?
[ ] Session invalidation on logout

Authorization:
[ ] Every endpoint checks authorization
[ ] IDOR possible (access /orders/123 as different user)
[ ] Admin endpoints accessible to non-admins?

Input Validation:
[ ] SQL injection in all query parameters
[ ] XSS in all user-controlled display fields
[ ] File upload: MIME type, size, content validation
[ ] Path traversal in file operations
```

### 4️⃣ Vulnerability Report Format
```markdown
## [CRITICAL] SQL Injection — POST /api/search

**CVSS Score:** 9.8 (Critical)
**CWE:** CWE-89

### Steps to Reproduce
1. POST /api/search with body: {"query": "test' OR '1'='1"}
2. Observe: Returns all records

### Impact
Full database read/write access as database user

### Evidence
Response includes records from other users

### Remediation
Use parameterized queries:
❌ db.query(`WHERE name = '${input}'`)
✅ db.query('WHERE name = ?', [input])

### References
- OWASP: https://owasp.org/www-community/attacks/SQL_Injection
```

## Outputs
1. Executive summary with risk rating
2. Technical vulnerability report (CVSS scored)
3. Prioritized remediation roadmap
4. Verification test cases
5. Security baseline recommendations
