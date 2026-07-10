---
name: docker-expert
description: "Build optimized, secure Docker images with multi-stage builds. Configure Docker Compose for full development and production stacks."
category: devops
tags: [docker, containers, dockerfile, compose, containerization]
complexity: advanced
risk: low
compatibility: [claude-code, antigravity, gemini-cli, cursor, copilot, codex-cli, autohand, kiro]
source: antigravity-official
version: "1.0.0"
date_added: "2026-07-10"
last_updated: "2026-07-10"
---

# Docker Expert

## Purpose
Create production-ready Docker images and container orchestration setups that are secure, minimal, and efficient.

## Optimized Multi-Stage Dockerfile
```dockerfile
# Node.js production example
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./

FROM base AS deps
RUN npm ci --only=production && npm cache clean --force

FROM base AS builder
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS production
WORKDIR /app

# Security: non-root user
RUN addgroup -S app && adduser -S appuser -G app
USER appuser

COPY --from=deps --chown=appuser:app /app/node_modules ./node_modules
COPY --from=builder --chown=appuser:app /app/dist ./dist
COPY --chown=appuser:app package.json .

EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=10s   CMD wget -qO- http://localhost:3000/health || exit 1

CMD ["node", "dist/server.js"]
```

## Docker Compose (Production)
```yaml
services:
  app:
    build: { context: ., target: production }
    environment:
      DATABASE_URL: postgresql://app:${DB_PASSWORD}@db:5432/myapp
    depends_on:
      db: { condition: service_healthy }
    restart: unless-stopped

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: app
      POSTGRES_PASSWORD: ${DB_PASSWORD}
      POSTGRES_DB: myapp
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U app"]
      interval: 10s

  nginx:
    image: nginx:alpine
    ports: ["80:80", "443:443"]
    volumes:
      - ./nginx.conf:/etc/nginx/conf.d/default.conf:ro
    depends_on: [app]

volumes:
  postgres_data:
```

## .dockerignore
```
node_modules
.git
.env*
*.md
coverage
.nyc_output
dist
```

## Security Best Practices
- Pin image versions: `node:20.11.0-alpine` not `node:alpine`
- Scan: `docker scout cves my-image`
- Run as non-root
- Use secrets mount for sensitive build args
- Minimize layers in production image

## Outputs
1. Optimized Dockerfile for your stack
2. Docker Compose configuration
3. .dockerignore template
4. Security scanning setup
5. Production health check configuration
