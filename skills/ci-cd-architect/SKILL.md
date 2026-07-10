---
name: ci-cd-architect
description: "Design and implement comprehensive CI/CD pipelines. Covers build optimization, test automation, security scanning, multi-environment deployment, and rollback strategies."
category: devops
tags: [ci-cd, pipeline, automation, deployment, devops]
complexity: advanced
risk: low
compatibility: [claude-code, antigravity, gemini-cli, cursor, copilot, codex-cli, autohand, kiro]
source: antigravity-official
version: "1.0.0"
date_added: "2026-07-10"
last_updated: "2026-07-10"
---

# CI/CD Pipeline Architect

## Purpose
Build efficient, reliable CI/CD pipelines that automate testing, security scanning, and deployment with confidence.

## Pipeline Stages Design

### Standard Pipeline Flow
```
Push/PR → Lint → Test → Security Scan → Build → Deploy (staging) → E2E → Deploy (prod)
```

### GitHub Actions Complete Pipeline
```yaml
name: CI/CD Pipeline
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  lint-and-type-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci --ignore-scripts
      - run: npm run lint
      - run: npm run type-check

  test:
    needs: lint-and-type-check
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:16
        env: { POSTGRES_PASSWORD: test, POSTGRES_DB: testdb }
        options: --health-cmd pg_isready --health-interval 10s
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npm run db:migrate:test
        env: { DATABASE_URL: postgresql://postgres:test@localhost:5432/testdb }
      - run: npm run test:coverage
        env: { DATABASE_URL: postgresql://postgres:test@localhost:5432/testdb }
      - uses: codecov/codecov-action@v4

  security-scan:
    needs: lint-and-type-check
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm audit --audit-level=high
      - uses: aquasecurity/trivy-action@master
        with:
          scan-type: fs
          severity: CRITICAL,HIGH
          exit-code: 1

  build-image:
    needs: [test, security-scan]
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    outputs:
      image-tag: ${{ steps.meta.outputs.version }}
    steps:
      - uses: actions/checkout@v4
      - uses: docker/setup-buildx-action@v3
      - uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
      - id: meta
        uses: docker/metadata-action@v5
        with:
          images: ghcr.io/${{ github.repository }}
          tags: |
            type=sha,prefix=
            type=semver,pattern={{version}}
      - uses: docker/build-push-action@v5
        with:
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          cache-from: type=gha
          cache-to: type=gha,mode=max

  deploy-staging:
    needs: build-image
    runs-on: ubuntu-latest
    environment: staging
    steps:
      - run: echo "Deploy to staging"
      # Kubernetes: kubectl set image deployment/myapp myapp=ghcr.io/...
      # ECS: aws ecs update-service ...

  e2e-tests:
    needs: deploy-staging
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npx playwright test
        env: { BASE_URL: https://staging.example.com }

  deploy-production:
    needs: e2e-tests
    runs-on: ubuntu-latest
    environment:
      name: production
      url: https://example.com
    steps:
      - run: echo "Deploy to production with canary"
```

## Outputs
1. Complete CI/CD pipeline configuration
2. Environment-specific deployment configs
3. Rollback procedure documentation
4. Pipeline performance optimization
5. Notification and alerting setup
6. Deployment metrics dashboard
