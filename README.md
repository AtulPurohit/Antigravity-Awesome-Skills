# Antigravity Awesome Skills

🚀 **The ultimate collection of 300+ production-ready agentic skill definitions for AI coding assistants.** Optimized for **Claude Code, Antigravity, Gemini CLI, Cursor, Copilot, AutoHand Code, Kiro**, and more.

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Skills Count](https://img.shields.io/badge/Skills-313%20Available-brightgreen.svg)](#)
[![Compatibility](https://img.shields.io/badge/Compatibility-Multi--Platform-orange.svg)](#compatibility)
[![Build Status](https://img.shields.io/badge/Tests-Passing-brightgreen.svg)](#)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-blue.svg)](#)

[![Antigravity IDE](https://img.shields.io/badge/Antigravity%20IDE-AI%20IDE-blue)](#)
[![Claude Code](https://img.shields.io/badge/Claude%20Code-Anthropic-purple)](#)
[![Cursor](https://img.shields.io/badge/Cursor-AI%20IDE-orange)](#)
[![Gemini CLI](https://img.shields.io/badge/Gemini%20CLI-Google-blue)](#)
[![Copilot](https://img.shields.io/badge/Copilot-GitHub-black)](#)
[![AutoHand Code](https://img.shields.io/badge/AutoHand%20Code-CLI-green)](#)

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Donate-FFDD00?logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/atulpurohit)

**Antigravity Awesome Skills** is an installable, enterprise-grade repository and NPM package providing pre-compiled, structured `SKILL.md` playbooks. Built for modern developer workflows, it helps AI coding assistants (including Claude Code, Antigravity IDE, Cursor, Gemini CLI, and GitHub Copilot) operate with explicit context boundaries, clear system constraints, and checkable verification steps. Rather than managing ad-hoc prompt snippets or loose directives, this library introduces a validated catalog of structured blueprints and roles that automate complex coding tasks reliably.

This repository is an independent open-source initiative. All product names, logos, and brands (including Google, Gemini, Antigravity, Anthropic, Claude, and Cursor) are properties of their respective owners, and are referenced here solely for compatibility, tooling integration, and setup instructions.

Developers can deploy the catalog as a full-library installation, start with focused stack-specific bundles (e.g. Backend Microservices, Frontend, Mobile, AI/LLMs), or run audits using the built-in security checker tools. The root documentation and matching Skills Explorer app serve as a high-signal discovery platform designed to get you the right guidelines quickly, minimizing context pollution and maximizing the accuracy of agentic code outputs.

---

## 📖 Table of Contents
1. [Quick Installation](#-quick-installation)
2. [Platform Compatibility](#-platform-compatibility)
3. [Workflow Bundles](#-workflow-bundles)
4. [Library Statistics](#-library-statistics)
5. [Folder Structure](#-folder-structure)
6. [Complete Skill Library](#-complete-skill-library)
7. [System Requirements](#-system-requirements)
8. [Validation & Linter](#-validation--linter)
9. [Core Advantages](#-core-advantages)
10. [Disclaimers & Safety](#-disclaimers--safety)
11. [Sponsorship & Support](#-sponsorship--support)
12. [Licensing](#-licensing)

---

## ⚡ Quick Installation

You can install all or specific subsets of the skills instantly using our custom NPX installer commands. Both commands are supported and run the exact same installer script:

```bash
# Run interactive installer
npx antigravity-awesome-skills
# OR
npx claude-awesome-skills
```

To install the entire catalog automatically without interactive prompts, use:
```bash
npx antigravity-awesome-skills --all
```

---

## 🔌 Platform Compatibility

These skill profiles are strictly compatible with all major agentic development CLI tools and IDE plugins:

*   **Claude Code**: Drop into your project's custom tools or configuration system.
*   **Antigravity IDE**: Automatically recognized via global or workspace customization directories (`.agents/skills/`).
*   **Gemini CLI**: Integrate as system instruction context profiles.
*   **Cursor**: Inject into `.cursorrules` or reference templates.
*   **Copilot & AutoHand Code**: Load as custom system instructions.

---

## 📦 Workflow Bundles

We have grouped the skills into specialized role bundles matching your stack. You can install specific bundles directly using the `--bundle` (or `-b`) flag:

| Command | Stack/Role Covered |
|---|---|
| `npx antigravity-awesome-skills --bundle frontend-architect` | React, Next.js, Vue, Angular, CSS, state-management, PWA, accessibility. |
| `npx antigravity-awesome-skills --bundle backend-microservices` | Go, Rust, Node.js, Fastify, APIs, gRPC, Kafka, WebSockets, Redis, queues. |
| `npx antigravity-awesome-skills --bundle database-data-ops` | SQL, PostgreSQL, MySQL, MongoDB, Elasticsearch, Vector Databases, dbt, Airflow. |
| `npx antigravity-awesome-skills --bundle devops-cloud-infra` | AWS, Azure, GCP, Docker, Kubernetes, Terraform, CI/CD pipelines, logging. |
| `npx antigravity-awesome-skills --bundle ai-llm-engineering` | LLMs, prompt engineering, RAG systems, embeddings, fine-tuning, safety filters. |
| `npx antigravity-awesome-skills --bundle mobile-engineer` | Flutter, React Native, iOS, Android, push notifications, store deployment. |
| `npx antigravity-awesome-skills --bundle security-pentester` | OWASP Top 10, secrets scanning, pen-testing, compliance, zero-trust. |
| `npx antigravity-awesome-skills --bundle php-cms-suite` | Laravel, CodeIgniter, CakePHP, WordPress Plugins/Themes, WooCommerce. |
| `npx antigravity-awesome-skills --bundle dx-qa-automation` | Unit/E2E testing, linter, formatting, git hooks, commit conventions, SemVer. |

---

## 📊 Library Statistics

| Metric | Details |
|---|---|
| **Total Skills** | 313 Agentic Skills |
| **Categories** | 12 Distinct Skill Categories |
| **Frameworks Covered** | React, Next.js, Node.js, Flutter, React Native, Laravel, Python (FastAPI/Flask), Go, Rust, iOS (Swift), Android (Kotlin), Angular, Vue, WordPress, CodeIgniter, CakePHP |
| **Databases & Cache** | PostgreSQL, MySQL, Redis, MongoDB, Elasticsearch, Vector Databases (Chroma/Pinecone/pgvector), SQLite, Memcached |
| **Standard Format** | Custom Frontmatter (YAML) + Clean Markdown (SKILL.md) |

## 📁 Folder Structure

Our repository mirrors modern enterprise tool architectures:

```
Antigravity_Awesome_Skills/
├── assets/               # Visual badges and graphic assets
├── bin/
│   ├── cli.js            # CLI installer script
│   └── validate.js       # Local skill validator/linter
├── data/
│   └── bundles.json      # Group mapping of workflow bundles
├── docs/
│   └── guides/           # Integration manual, onboarding, and bundle profiles
├── explorer/             # Vite React catalog web application
├── plugins/              # Pre-packaged stack plugin modules
│   ├── ai-llm-engineering/
│   ├── backend-microservices/
│   ├── database-data-ops/
│   ├── devops-cloud-infra/
│   ├── dx-qa-automation/
│   ├── frontend-architect/
│   ├── mobile-engineer/
│   ├── php-cms-suite/
│   └── security-pentester/
├── schemas/
│   └── skill.schema.json # JSON Schema for frontmatter validation
├── skills/
│   ├── [skill-name]/
│   │   └── SKILL.md      # Metadata + Blueprint + Checklist
│   └── ...
├── tools/
│   └── scripts/          # Safety guard and index builders
├── AGENT_STANDARDS.md    # Repository coding standards
├── CATALOG.md            # Automatically compiled skills catalog
└── README.md             # Complete Documentation
```

---
## 🗃️ Complete Skill Library
Here is the full directory of the 313 available agentic skills, grouped by category.

### 📂 Ai Ml

| Skill Name | Link | Complexity | Risk | Description |
|---|---|---|---|---|
| **Ai Content Filter Expert** | [SKILL.md](./skills/ai-content-filter/SKILL.md) | `Advanced` | `LOW` | Professional Ai Content Filter Expert skill. Integrate LLM API workflows, safe system prompt guidelines, and agentic workflows. |
| **Ai Engineer** | [SKILL.md](./skills/ai-engineer/SKILL.md) | `Advanced` | `LOW` | Professional Ai Engineer skill. Integrate LLM API workflows, safe system prompt guidelines, and agentic workflows. |
| **Ai Product Manager Expert** | [SKILL.md](./skills/ai-product-manager/SKILL.md) | `Advanced` | `LOW` | Professional Ai Product Manager Expert skill. Integrate LLM API workflows, safe system prompt guidelines, and agentic workflows. |
| **Embedding Architect** | [SKILL.md](./skills/embedding-architect/SKILL.md) | `Advanced` | `LOW` | Professional Embedding Architect skill. Integrate LLM API workflows, safe system prompt guidelines, and agentic workflows. |
| **Eval Harness Expert** | [SKILL.md](./skills/eval-harness/SKILL.md) | `Advanced` | `LOW` | Professional Eval Harness Expert skill. Integrate LLM API workflows, safe system prompt guidelines, and agentic workflows. |
| **Feature Engineer** | [SKILL.md](./skills/feature-engineer/SKILL.md) | `Advanced` | `LOW` | Professional Feature Engineer skill. Integrate LLM API workflows, safe system prompt guidelines, and agentic workflows. |
| **Few Shot Architect** | [SKILL.md](./skills/few-shot-architect/SKILL.md) | `Advanced` | `LOW` | Professional Few Shot Architect skill. Integrate LLM API workflows, safe system prompt guidelines, and agentic workflows. |
| **Fine Tuner Expert** | [SKILL.md](./skills/fine-tuner/SKILL.md) | `Advanced` | `LOW` | Professional Fine Tuner Expert skill. Integrate LLM API workflows, safe system prompt guidelines, and agentic workflows. |
| **Hallucination Detector Expert** | [SKILL.md](./skills/hallucination-detector/SKILL.md) | `Advanced` | `LOW` | Professional Hallucination Detector Expert skill. Integrate LLM API workflows, safe system prompt guidelines, and agentic workflows. |
| **Langchain Expert** | [SKILL.md](./skills/langchain-expert/SKILL.md) | `Advanced` | `LOW` | Professional Langchain Expert skill. Integrate LLM API workflows, safe system prompt guidelines, and agentic workflows. |
| **LLM Prompt Master** | [SKILL.md](./skills/llm-prompt-master/SKILL.md) | `Advanced` | `LOW` | Professional LLM Prompt Master skill. Integrate LLM API workflows, safe system prompt guidelines, and agentic workflows. |
| **Mlops Engineer** | [SKILL.md](./skills/mlops-engineer/SKILL.md) | `Advanced` | `LOW` | Professional Mlops Engineer skill. Integrate LLM API workflows, safe system prompt guidelines, and agentic workflows. |
| **Model Card Writer Expert** | [SKILL.md](./skills/model-card-writer/SKILL.md) | `Advanced` | `LOW` | Professional Model Card Writer Expert skill. Integrate LLM API workflows, safe system prompt guidelines, and agentic workflows. |
| **Model Monitor Expert** | [SKILL.md](./skills/model-monitor/SKILL.md) | `Advanced` | `LOW` | Professional Model Monitor Expert skill. Integrate LLM API workflows, safe system prompt guidelines, and agentic workflows. |
| **Multimodal Builder** | [SKILL.md](./skills/multimodal-builder/SKILL.md) | `Advanced` | `LOW` | Professional Multimodal Builder skill. Integrate LLM API workflows, safe system prompt guidelines, and agentic workflows. |
| **Rag Builder** | [SKILL.md](./skills/rag-builder/SKILL.md) | `Advanced` | `LOW` | Professional Rag Builder skill. Integrate LLM API workflows, safe system prompt guidelines, and agentic workflows. |
| **Responsible Ai Expert** | [SKILL.md](./skills/responsible-ai/SKILL.md) | `Advanced` | `LOW` | Professional Responsible Ai Expert skill. Integrate LLM API workflows, safe system prompt guidelines, and agentic workflows. |

### 📂 Architecture

| Skill Name | Link | Complexity | Risk | Description |
|---|---|---|---|---|
| **API Design Expert** | [SKILL.md](./skills/api-design/SKILL.md) | `Advanced` | `LOW` | Design clean, versioned, consistent APIs using REST, GraphQL, or gRPC best practices. Use before building any public or internal API surface. |
| **Caching Strategy Expert** | [SKILL.md](./skills/caching-strategy/SKILL.md) | `Advanced` | `LOW` | Design comprehensive multi-layer caching strategies across CDN, application, and database tiers for maximum performance. |
| **Circuit Breaker Expert** | [SKILL.md](./skills/circuit-breaker/SKILL.md) | `Advanced` | `LOW` | Implement circuit breaker patterns to prevent cascading failures in distributed systems and enable graceful degradation. |
| **Clean Architecture Expert** | [SKILL.md](./skills/clean-architecture/SKILL.md) | `Expert` | `LOW` | Apply Uncle Bob's Clean Architecture to create maintainable, testable systems with proper separation of concerns. |
| **Ddd Modeling Expert** | [SKILL.md](./skills/ddd-modeling/SKILL.md) | `Expert` | `LOW` | Apply DDD principles to model complex business domains. Covers bounded contexts, aggregates, domain events, repositories, and ubiquitous language. |
| **Event Driven Architecture Expert** | [SKILL.md](./skills/event-driven-architecture/SKILL.md) | `Expert` | `LOW` | Design event-driven systems using async messaging, Kafka, and event patterns. Covers event sourcing, CQRS, saga patterns, and consumer groups. |
| **Microservices Design Expert** | [SKILL.md](./skills/microservices-design/SKILL.md) | `Expert` | `LOW` | Design and decompose systems into well-bounded microservices. Use when splitting monoliths or designing new distributed systems. |
| **Rate Limiting Design Expert** | [SKILL.md](./skills/rate-limiting-design/SKILL.md) | `Advanced` | `LOW` | Design and implement rate limiting strategies to protect APIs and services from abuse while maintaining quality of service. |
| **System Architect** | [SKILL.md](./skills/system-architect/SKILL.md) | `Expert` | `LOW` | Design scalable, maintainable system architectures. Use before greenfield projects, major refactors, or when evaluating technical direction. Produces architecture decision records, component diagrams, and trade-off analyses. |

### 📂 Backend

| Skill Name | Link | Complexity | Risk | Description |
|---|---|---|---|---|
| **12 Factor App Expert** | [SKILL.md](./skills/12-factor-app/SKILL.md) | `Advanced` | `LOW` | Professional 12 Factor App Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Architecture Decision Expert** | [SKILL.md](./skills/architecture-decision/SKILL.md) | `Advanced` | `LOW` | Professional Architecture Decision Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Backend Architect** | [SKILL.md](./skills/backend-architect/SKILL.md) | `Advanced` | `LOW` | Professional Backend Architect skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Background Jobs Expert** | [SKILL.md](./skills/background-jobs/SKILL.md) | `Advanced` | `LOW` | Professional Background Jobs Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Bulkhead Pattern Expert** | [SKILL.md](./skills/bulkhead-pattern/SKILL.md) | `Advanced` | `LOW` | Professional Bulkhead Pattern Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Cakephp Developer** | [SKILL.md](./skills/cakephp-developer/SKILL.md) | `Advanced` | `LOW` | Build enterprise MVC web applications using the CakePHP framework with strict ORM and conventions. |
| **Cakephp Rest Expert** | [SKILL.md](./skills/cakephp-rest/SKILL.md) | `Advanced` | `LOW` | Build secure, fast RESTful APIs using CakePHP's built-in routing and serialization capabilities. |
| **CDC Streams Expert** | [SKILL.md](./skills/cdc-streams/SKILL.md) | `Advanced` | `LOW` | Professional CDC Streams Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Chain Of Thought Expert** | [SKILL.md](./skills/chain-of-thought/SKILL.md) | `Advanced` | `LOW` | Professional Chain Of Thought Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Chaos Engineer** | [SKILL.md](./skills/chaos-engineer/SKILL.md) | `Advanced` | `LOW` | Professional Chaos Engineer skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Codeigniter Rest Expert** | [SKILL.md](./skills/codeigniter-rest/SKILL.md) | `Advanced` | `LOW` | Build secure RESTful APIs using the CodeIgniter framework. |
| **Competitive Analysis Expert** | [SKILL.md](./skills/competitive-analysis/SKILL.md) | `Advanced` | `LOW` | Professional Competitive Analysis Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Connection Pooling Expert** | [SKILL.md](./skills/connection-pooling/SKILL.md) | `Advanced` | `LOW` | Professional Connection Pooling Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Context Optimizer Expert** | [SKILL.md](./skills/context-optimizer/SKILL.md) | `Advanced` | `LOW` | Professional Context Optimizer Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Cost Optimizer Expert** | [SKILL.md](./skills/cost-optimizer/SKILL.md) | `Advanced` | `LOW` | Professional Cost Optimizer Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Cqrs Pattern Expert** | [SKILL.md](./skills/cqrs-pattern/SKILL.md) | `Advanced` | `LOW` | Professional Cqrs Pattern Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Cron Scheduler Expert** | [SKILL.md](./skills/cron-scheduler/SKILL.md) | `Advanced` | `LOW` | Professional Cron Scheduler Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Cross Platform Expert** | [SKILL.md](./skills/cross-platform/SKILL.md) | `Advanced` | `LOW` | Professional Cross Platform Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Debugging Expert** | [SKILL.md](./skills/debugging-expert/SKILL.md) | `Advanced` | `LOW` | Professional Debugging Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Design System Expert** | [SKILL.md](./skills/design-system/SKILL.md) | `Advanced` | `LOW` | Professional Design System Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Distributed Systems Expert** | [SKILL.md](./skills/distributed-systems/SKILL.md) | `Advanced` | `LOW` | Professional Distributed Systems Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Dx Auditor** | [SKILL.md](./skills/dx-auditor/SKILL.md) | `Advanced` | `LOW` | Professional Dx Auditor skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Evaluation Engineer** | [SKILL.md](./skills/evaluation-engineer/SKILL.md) | `Advanced` | `LOW` | Professional Evaluation Engineer skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Event Sourcing Expert** | [SKILL.md](./skills/event-sourcing/SKILL.md) | `Advanced` | `LOW` | Professional Event Sourcing Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Event Tracker Expert** | [SKILL.md](./skills/event-tracker/SKILL.md) | `Advanced` | `LOW` | Professional Event Tracker Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Feature Flag Architecture Expert** | [SKILL.md](./skills/feature-flag-architecture/SKILL.md) | `Advanced` | `LOW` | Professional Feature Flag Architecture Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Feature Prioritizer Expert** | [SKILL.md](./skills/feature-prioritizer/SKILL.md) | `Advanced` | `LOW` | Professional Feature Prioritizer Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **File Uploader Expert** | [SKILL.md](./skills/file-uploader/SKILL.md) | `Advanced` | `LOW` | Professional File Uploader Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Golang Engineer** | [SKILL.md](./skills/golang-engineer/SKILL.md) | `Advanced` | `LOW` | Professional Golang Engineer skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Graphql API Expert** | [SKILL.md](./skills/graphql-api/SKILL.md) | `Advanced` | `LOW` | Professional Graphql API Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Graphql Server Expert** | [SKILL.md](./skills/graphql-server/SKILL.md) | `Advanced` | `LOW` | Professional Graphql Server Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Grpc Builder** | [SKILL.md](./skills/grpc-builder/SKILL.md) | `Advanced` | `LOW` | Professional Grpc Builder skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Hexagonal Architecture Expert** | [SKILL.md](./skills/hexagonal-architecture/SKILL.md) | `Advanced` | `LOW` | Professional Hexagonal Architecture Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Infrastructure As Code Expert** | [SKILL.md](./skills/infrastructure-as-code/SKILL.md) | `Advanced` | `LOW` | Professional Infrastructure As Code Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Input Validator Expert** | [SKILL.md](./skills/input-validator/SKILL.md) | `Advanced` | `LOW` | Professional Input Validator Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Kafka Engineer** | [SKILL.md](./skills/kafka-engineer/SKILL.md) | `Advanced` | `LOW` | Professional Kafka Engineer skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Laravel Nova Expert** | [SKILL.md](./skills/laravel-nova/SKILL.md) | `Advanced` | `LOW` | Build custom administration panels using Laravel Nova with advanced fields, lenses, actions, and cards. |
| **Logging Architect** | [SKILL.md](./skills/logging-architect/SKILL.md) | `Advanced` | `LOW` | Professional Logging Architect skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Metric Tracker Expert** | [SKILL.md](./skills/metric-tracker/SKILL.md) | `Advanced` | `LOW` | Professional Metric Tracker Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Micro Frontend Expert** | [SKILL.md](./skills/micro-frontend/SKILL.md) | `Advanced` | `LOW` | Professional Micro Frontend Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Microservice Scaffolder Expert** | [SKILL.md](./skills/microservice-scaffolder/SKILL.md) | `Advanced` | `LOW` | Professional Microservice Scaffolder Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Migration Manager Expert** | [SKILL.md](./skills/migration-manager/SKILL.md) | `Advanced` | `LOW` | Professional Migration Manager Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Monolith To Micro Expert** | [SKILL.md](./skills/monolith-to-micro/SKILL.md) | `Advanced` | `LOW` | Professional Monolith To Micro Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Monorepo Architect** | [SKILL.md](./skills/monorepo-architect/SKILL.md) | `Advanced` | `LOW` | Professional Monorepo Architect skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Multi DB Strategy Expert** | [SKILL.md](./skills/multi-db-strategy/SKILL.md) | `Advanced` | `LOW` | Professional Multi DB Strategy Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Multi Tenant Design Expert** | [SKILL.md](./skills/multi-tenant-design/SKILL.md) | `Advanced` | `LOW` | Professional Multi Tenant Design Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Node Expert** | [SKILL.md](./skills/node-expert/SKILL.md) | `Advanced` | `LOW` | Professional Node Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Node Express Expert** | [SKILL.md](./skills/node-express-expert/SKILL.md) | `Advanced` | `LOW` | Build production Node.js applications with Express. Covers middleware architecture, authentication, validation, error handling, testing, and performance. |
| **Node Fastify Expert** | [SKILL.md](./skills/node-fastify/SKILL.md) | `Advanced` | `LOW` | Professional Node Fastify Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Node Realtime Expert** | [SKILL.md](./skills/node-realtime/SKILL.md) | `Advanced` | `LOW` | Professional Node Realtime Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Offline First Expert** | [SKILL.md](./skills/offline-first/SKILL.md) | `Advanced` | `LOW` | Professional Offline First Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Onboarding Designer** | [SKILL.md](./skills/onboarding-designer/SKILL.md) | `Advanced` | `LOW` | Professional Onboarding Designer skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Onboarding Flow Expert** | [SKILL.md](./skills/onboarding-flow/SKILL.md) | `Advanced` | `LOW` | Professional Onboarding Flow Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Output Validator Expert** | [SKILL.md](./skills/output-validator/SKILL.md) | `Advanced` | `LOW` | Professional Output Validator Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Platform Engineer** | [SKILL.md](./skills/platform-engineer/SKILL.md) | `Advanced` | `LOW` | Professional Platform Engineer skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Platform Engineering Expert** | [SKILL.md](./skills/platform-engineering/SKILL.md) | `Advanced` | `LOW` | Professional Platform Engineering Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Postgresql Expert** | [SKILL.md](./skills/postgresql-expert/SKILL.md) | `Advanced` | `LOW` | Design, optimize, and administer PostgreSQL databases. Covers advanced indexing, partitioning, full-text search, JSON operations, replication, and performance tuning. |
| **Profiling Guide Expert** | [SKILL.md](./skills/profiling-guide/SKILL.md) | `Advanced` | `LOW` | Professional Profiling Guide Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Python API Expert** | [SKILL.md](./skills/python-api/SKILL.md) | `Advanced` | `LOW` | Professional Python API Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Quality Gatekeeper Expert** | [SKILL.md](./skills/quality-gatekeeper/SKILL.md) | `Advanced` | `LOW` | Professional Quality Gatekeeper Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Rate Limiter Expert** | [SKILL.md](./skills/rate-limiter/SKILL.md) | `Advanced` | `LOW` | Professional Rate Limiter Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Real Time Systems Expert** | [SKILL.md](./skills/real-time-systems/SKILL.md) | `Advanced` | `LOW` | Professional Real Time Systems Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Redis Cache Master** | [SKILL.md](./skills/redis-cache-master/SKILL.md) | `Advanced` | `LOW` | Configure, monitor, and optimize Redis caches for caching patterns, session storage, and pub/sub queues. |
| **Reporting Engine Expert** | [SKILL.md](./skills/reporting-engine/SKILL.md) | `Advanced` | `LOW` | Professional Reporting Engine Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Rest API Builder** | [SKILL.md](./skills/rest-api-builder/SKILL.md) | `Advanced` | `LOW` | Professional Rest API Builder skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Revenue Tracker Expert** | [SKILL.md](./skills/revenue-tracker/SKILL.md) | `Advanced` | `LOW` | Professional Revenue Tracker Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Rust Developer** | [SKILL.md](./skills/rust-developer/SKILL.md) | `Advanced` | `LOW` | Professional Rust Developer skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Saga Orchestrator Expert** | [SKILL.md](./skills/saga-orchestrator/SKILL.md) | `Advanced` | `LOW` | Professional Saga Orchestrator Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Schema Design Expert** | [SKILL.md](./skills/schema-design/SKILL.md) | `Advanced` | `LOW` | Professional Schema Design Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Seed Data Expert** | [SKILL.md](./skills/seed-data/SKILL.md) | `Advanced` | `LOW` | Professional Seed Data Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Semantic Search Expert** | [SKILL.md](./skills/semantic-search/SKILL.md) | `Advanced` | `LOW` | Professional Semantic Search Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **SEO Optimizer Expert** | [SKILL.md](./skills/seo-optimizer/SKILL.md) | `Advanced` | `LOW` | Professional SEO Optimizer Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **SEO Strategist Expert** | [SKILL.md](./skills/seo-strategist/SKILL.md) | `Advanced` | `LOW` | Professional SEO Strategist Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Serverless Architecture Expert** | [SKILL.md](./skills/serverless-architecture/SKILL.md) | `Advanced` | `LOW` | Professional Serverless Architecture Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Service Discovery Expert** | [SKILL.md](./skills/service-discovery/SKILL.md) | `Advanced` | `LOW` | Professional Service Discovery Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Service Mesh Expert** | [SKILL.md](./skills/service-mesh/SKILL.md) | `Advanced` | `LOW` | Professional Service Mesh Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Tablet Layout Expert** | [SKILL.md](./skills/tablet-layout/SKILL.md) | `Advanced` | `LOW` | Professional Tablet Layout Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Tech Debt Planner Expert** | [SKILL.md](./skills/tech-debt-planner/SKILL.md) | `Advanced` | `LOW` | Professional Tech Debt Planner Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Tech Debt Tracker Expert** | [SKILL.md](./skills/tech-debt-tracker/SKILL.md) | `Advanced` | `LOW` | Professional Tech Debt Tracker Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Typescript Expert** | [SKILL.md](./skills/typescript-expert/SKILL.md) | `Advanced` | `LOW` | Professional Typescript Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Visual Regression Expert** | [SKILL.md](./skills/visual-regression/SKILL.md) | `Advanced` | `LOW` | Professional Visual Regression Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Webhook Handler Expert** | [SKILL.md](./skills/webhook-handler/SKILL.md) | `Advanced` | `LOW` | Professional Webhook Handler Expert skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Websocket Realtime Expert** | [SKILL.md](./skills/websocket-realtime/SKILL.md) | `Advanced` | `LOW` | Implement bi-directional real-time communication systems using raw WebSockets or Socket.io with proper authentication and scaling. |
| **Widget Builder** | [SKILL.md](./skills/widget-builder/SKILL.md) | `Advanced` | `LOW` | Professional Widget Builder skill. Build performant, secure, and scalable backend logic and RESTful or GraphQL APIs. |
| **Wordpress Plugin Expert** | [SKILL.md](./skills/wordpress-plugin/SKILL.md) | `Advanced` | `MEDIUM` | Develop high-quality, secure WordPress plugins using actions, filters, shortcodes, and custom database tables. |
| **Wordpress Theme Expert** | [SKILL.md](./skills/wordpress-theme/SKILL.md) | `Advanced` | `LOW` | Develop custom WordPress themes from scratch with proper hierarchy, template parts, and block editor support. |
| **Wordpress Woocommerce Expert** | [SKILL.md](./skills/wordpress-woocommerce/SKILL.md) | `Expert` | `MEDIUM` | Customize and scale WooCommerce stores with custom checkout options, payment gateways, and subscription hooks. |

### 📂 Collaboration

| Skill Name | Link | Complexity | Risk | Description |
|---|---|---|---|---|
| **Brainstorming Facilitator Expert** | [SKILL.md](./skills/brainstorming-facilitator/SKILL.md) | `Intermediate` | `LOW` | Facilitate structured brainstorming sessions to transform vague ideas into validated designs. Uses design thinking, divergent/convergent thinking, and structured dialogue. |
| **Code Review Coach Expert** | [SKILL.md](./skills/code-review-coach/SKILL.md) | `Intermediate` | `LOW` | Conduct thorough, constructive code reviews that improve code quality, catch bugs, and teach best practices. Covers security, performance, readability, and design. |
| **Code Reviewer Expert** | [SKILL.md](./skills/code-reviewer/SKILL.md) | `Intermediate` | `LOW` | Professional Code Reviewer Expert skill. Orchestrate technical collaboration, design reviews, sprint planning, and system diagnostics. |
| **Decision Matrix Expert** | [SKILL.md](./skills/decision-matrix/SKILL.md) | `Intermediate` | `LOW` | Professional Decision Matrix Expert skill. Orchestrate technical collaboration, design reviews, sprint planning, and system diagnostics. |
| **Estimation Expert** | [SKILL.md](./skills/estimation-expert/SKILL.md) | `Intermediate` | `LOW` | Professional Estimation Expert skill. Orchestrate technical collaboration, design reviews, sprint planning, and system diagnostics. |
| **Handoff Documentor Expert** | [SKILL.md](./skills/handoff-documentor/SKILL.md) | `Intermediate` | `LOW` | Professional Handoff Documentor Expert skill. Orchestrate technical collaboration, design reviews, sprint planning, and system diagnostics. |
| **Incident Manager Expert** | [SKILL.md](./skills/incident-manager/SKILL.md) | `Intermediate` | `LOW` | Professional Incident Manager Expert skill. Orchestrate technical collaboration, design reviews, sprint planning, and system diagnostics. |
| **Incident Responder Expert** | [SKILL.md](./skills/incident-responder/SKILL.md) | `Intermediate` | `LOW` | Professional Incident Responder Expert skill. Orchestrate technical collaboration, design reviews, sprint planning, and system diagnostics. |
| **Pair Programming Expert** | [SKILL.md](./skills/pair-programming/SKILL.md) | `Intermediate` | `LOW` | Professional Pair Programming Expert skill. Orchestrate technical collaboration, design reviews, sprint planning, and system diagnostics. |
| **Planning Master** | [SKILL.md](./skills/planning-master/SKILL.md) | `Intermediate` | `LOW` | Professional Planning Master skill. Orchestrate technical collaboration, design reviews, sprint planning, and system diagnostics. |
| **Postmortem Writer Expert** | [SKILL.md](./skills/postmortem-writer/SKILL.md) | `Intermediate` | `LOW` | Professional Postmortem Writer Expert skill. Orchestrate technical collaboration, design reviews, sprint planning, and system diagnostics. |
| **Pr Review Expert** | [SKILL.md](./skills/pr-review-expert/SKILL.md) | `Intermediate` | `LOW` | Professional Pr Review Expert skill. Orchestrate technical collaboration, design reviews, sprint planning, and system diagnostics. |
| **Retrospective Guide Expert** | [SKILL.md](./skills/retrospective-guide/SKILL.md) | `Intermediate` | `LOW` | Professional Retrospective Guide Expert skill. Orchestrate technical collaboration, design reviews, sprint planning, and system diagnostics. |
| **RFC Writer Expert** | [SKILL.md](./skills/rfc-writer/SKILL.md) | `Intermediate` | `LOW` | Professional RFC Writer Expert skill. Orchestrate technical collaboration, design reviews, sprint planning, and system diagnostics. |
| **Sprint Planner Expert** | [SKILL.md](./skills/sprint-planner/SKILL.md) | `Intermediate` | `LOW` | Professional Sprint Planner Expert skill. Orchestrate technical collaboration, design reviews, sprint planning, and system diagnostics. |
| **Stakeholder Briefer Expert** | [SKILL.md](./skills/stakeholder-briefer/SKILL.md) | `Intermediate` | `LOW` | Professional Stakeholder Briefer Expert skill. Orchestrate technical collaboration, design reviews, sprint planning, and system diagnostics. |

### 📂 Data

| Skill Name | Link | Complexity | Risk | Description |
|---|---|---|---|---|
| **Analytics Audit Expert** | [SKILL.md](./skills/analytics-audit/SKILL.md) | `Intermediate` | `LOW` | Audit analytics implementations for tracking gaps and data quality issues. |
| **BI Connector Expert** | [SKILL.md](./skills/bi-connector/SKILL.md) | `Advanced` | `LOW` | Professional BI Connector Expert skill. Design and maintain secure, optimized, and performant databases and data storage solutions. |
| **Churn Fighter Expert** | [SKILL.md](./skills/churn-fighter/SKILL.md) | `Advanced` | `LOW` | Professional Churn Fighter Expert skill. Design and maintain secure, optimized, and performant databases and data storage solutions. |
| **Churn Predictor Expert** | [SKILL.md](./skills/churn-predictor/SKILL.md) | `Advanced` | `LOW` | Professional Churn Predictor Expert skill. Design and maintain secure, optimized, and performant databases and data storage solutions. |
| **Cohort Analysis Expert** | [SKILL.md](./skills/cohort-analysis/SKILL.md) | `Advanced` | `LOW` | Professional Cohort Analysis Expert skill. Design and maintain secure, optimized, and performant databases and data storage solutions. |
| **Data Analyst** | [SKILL.md](./skills/data-analyst/SKILL.md) | `Advanced` | `LOW` | Professional Data Analyst skill. Design and maintain secure, optimized, and performant databases and data storage solutions. |
| **Data Archiver Expert** | [SKILL.md](./skills/data-archiver/SKILL.md) | `Advanced` | `LOW` | Professional Data Archiver Expert skill. Design and maintain secure, optimized, and performant databases and data storage solutions. |
| **Data Governance Expert** | [SKILL.md](./skills/data-governance/SKILL.md) | `Advanced` | `LOW` | Professional Data Governance Expert skill. Design and maintain secure, optimized, and performant databases and data storage solutions. |
| **Data Modeling Expert** | [SKILL.md](./skills/data-modeling/SKILL.md) | `Advanced` | `LOW` | Professional Data Modeling Expert skill. Design and maintain secure, optimized, and performant databases and data storage solutions. |
| **Data Warehouse Expert** | [SKILL.md](./skills/data-warehouse/SKILL.md) | `Advanced` | `LOW` | Professional Data Warehouse Expert skill. Design and maintain secure, optimized, and performant databases and data storage solutions. |
| **Database Migration Expert** | [SKILL.md](./skills/database-migration/SKILL.md) | `Advanced` | `LOW` | Professional Database Migration Expert skill. Design and maintain secure, optimized, and performant databases and data storage solutions. |
| **Database Optimizer Expert** | [SKILL.md](./skills/database-optimizer/SKILL.md) | `Advanced` | `LOW` | Professional Database Optimizer Expert skill. Design and maintain secure, optimized, and performant databases and data storage solutions. |
| **Elasticsearch Expert** | [SKILL.md](./skills/elasticsearch-expert/SKILL.md) | `Advanced` | `LOW` | Professional Elasticsearch Expert skill. Design and maintain secure, optimized, and performant databases and data storage solutions. |
| **Etl Builder** | [SKILL.md](./skills/etl-builder/SKILL.md) | `Advanced` | `LOW` | Professional Etl Builder skill. Design and maintain secure, optimized, and performant databases and data storage solutions. |
| **Funnel Analyzer Expert** | [SKILL.md](./skills/funnel-analyzer/SKILL.md) | `Advanced` | `LOW` | Professional Funnel Analyzer Expert skill. Design and maintain secure, optimized, and performant databases and data storage solutions. |
| **KPI Designer** | [SKILL.md](./skills/kpi-designer/SKILL.md) | `Advanced` | `LOW` | Professional KPI Designer skill. Design and maintain secure, optimized, and performant databases and data storage solutions. |
| **LTV Optimizer Expert** | [SKILL.md](./skills/ltv-optimizer/SKILL.md) | `Advanced` | `LOW` | Professional LTV Optimizer Expert skill. Design and maintain secure, optimized, and performant databases and data storage solutions. |
| **Mongodb Specialist Expert** | [SKILL.md](./skills/mongodb-specialist/SKILL.md) | `Advanced` | `LOW` | Professional Mongodb Specialist Expert skill. Design and maintain secure, optimized, and performant databases and data storage solutions. |
| **Product Analytics Expert** | [SKILL.md](./skills/product-analytics/SKILL.md) | `Advanced` | `LOW` | Professional Product Analytics Expert skill. Design and maintain secure, optimized, and performant databases and data storage solutions. |
| **Query Planner Expert** | [SKILL.md](./skills/query-planner/SKILL.md) | `Advanced` | `LOW` | Professional Query Planner Expert skill. Design and maintain secure, optimized, and performant databases and data storage solutions. |
| **Retention Analyzer Expert** | [SKILL.md](./skills/retention-analyzer/SKILL.md) | `Advanced` | `LOW` | Professional Retention Analyzer Expert skill. Design and maintain secure, optimized, and performant databases and data storage solutions. |
| **Retention Specialist Expert** | [SKILL.md](./skills/retention-specialist/SKILL.md) | `Advanced` | `LOW` | Professional Retention Specialist Expert skill. Design and maintain secure, optimized, and performant databases and data storage solutions. |
| **SQL Expert** | [SKILL.md](./skills/sql-expert/SKILL.md) | `Advanced` | `LOW` | Write complex, optimized SQL queries for analytics, reporting, and data manipulation. Covers window functions, CTEs, subqueries, performance tuning, and database-specific features. |
| **Vector Database Expert** | [SKILL.md](./skills/vector-database/SKILL.md) | `Advanced` | `LOW` | Professional Vector Database Expert skill. Design and maintain secure, optimized, and performant databases and data storage solutions. |

### 📂 Developer Experience

| Skill Name | Link | Complexity | Risk | Description |
|---|---|---|---|---|
| **Changelog Automator Expert** | [SKILL.md](./skills/changelog-automator/SKILL.md) | `Intermediate` | `LOW` | Professional Changelog Automator Expert skill. Improve code delivery speed and developer workflows through automation and modern tooling. |
| **Changelog Generator Expert** | [SKILL.md](./skills/changelog-generator/SKILL.md) | `Intermediate` | `LOW` | Professional Changelog Generator Expert skill. Improve code delivery speed and developer workflows through automation and modern tooling. |
| **CLI Builder** | [SKILL.md](./skills/cli-builder/SKILL.md) | `Intermediate` | `LOW` | Professional CLI Builder skill. Improve code delivery speed and developer workflows through automation and modern tooling. |
| **Code Smell Detector Expert** | [SKILL.md](./skills/code-smell-detector/SKILL.md) | `Intermediate` | `LOW` | Professional Code Smell Detector Expert skill. Improve code delivery speed and developer workflows through automation and modern tooling. |
| **Commit Convention Expert** | [SKILL.md](./skills/commit-convention/SKILL.md) | `Intermediate` | `LOW` | Professional Commit Convention Expert skill. Improve code delivery speed and developer workflows through automation and modern tooling. |
| **Dependency Auditor** | [SKILL.md](./skills/dependency-auditor/SKILL.md) | `Intermediate` | `LOW` | Professional Dependency Auditor skill. Improve code delivery speed and developer workflows through automation and modern tooling. |
| **Dependency Manager Expert** | [SKILL.md](./skills/dependency-manager/SKILL.md) | `Intermediate` | `LOW` | Professional Dependency Manager Expert skill. Improve code delivery speed and developer workflows through automation and modern tooling. |
| **Devcontainer Setup Expert** | [SKILL.md](./skills/devcontainer-setup/SKILL.md) | `Intermediate` | `LOW` | Professional Devcontainer Setup Expert skill. Improve code delivery speed and developer workflows through automation and modern tooling. |
| **Developer Portal Expert** | [SKILL.md](./skills/developer-portal/SKILL.md) | `Intermediate` | `LOW` | Professional Developer Portal Expert skill. Improve code delivery speed and developer workflows through automation and modern tooling. |
| **Documentation Writer Expert** | [SKILL.md](./skills/documentation-writer/SKILL.md) | `Intermediate` | `LOW` | Write clear, comprehensive technical documentation. Covers README files, API docs, tutorials, architecture guides, and documentation systems. |
| **Formatter Setup Expert** | [SKILL.md](./skills/formatter-setup/SKILL.md) | `Intermediate` | `LOW` | Professional Formatter Setup Expert skill. Improve code delivery speed and developer workflows through automation and modern tooling. |
| **Linting Configurator Expert** | [SKILL.md](./skills/linting-configurator/SKILL.md) | `Intermediate` | `LOW` | Professional Linting Configurator Expert skill. Improve code delivery speed and developer workflows through automation and modern tooling. |
| **Openapi Designer** | [SKILL.md](./skills/openapi-designer/SKILL.md) | `Advanced` | `LOW` | Design complete OpenAPI 3.1 specifications for RESTful APIs. Covers schemas, security, examples, webhooks, and documentation generation. |
| **Readme Master** | [SKILL.md](./skills/readme-master/SKILL.md) | `Intermediate` | `LOW` | Professional Readme Master skill. Improve code delivery speed and developer workflows through automation and modern tooling. |
| **Refactor Advisor Expert** | [SKILL.md](./skills/refactor-advisor/SKILL.md) | `Intermediate` | `LOW` | Professional Refactor Advisor Expert skill. Improve code delivery speed and developer workflows through automation and modern tooling. |
| **SDK Designer** | [SKILL.md](./skills/sdk-designer/SKILL.md) | `Intermediate` | `LOW` | Professional SDK Designer skill. Improve code delivery speed and developer workflows through automation and modern tooling. |
| **Semantic Versioning Expert** | [SKILL.md](./skills/semantic-versioning/SKILL.md) | `Intermediate` | `LOW` | Professional Semantic Versioning Expert skill. Improve code delivery speed and developer workflows through automation and modern tooling. |
| **Workspace Optimizer Expert** | [SKILL.md](./skills/workspace-optimizer/SKILL.md) | `Intermediate` | `LOW` | Professional Workspace Optimizer Expert skill. Improve code delivery speed and developer workflows through automation and modern tooling. |

### 📂 Devops

| Skill Name | Link | Complexity | Risk | Description |
|---|---|---|---|---|
| **Alerting Config Expert** | [SKILL.md](./skills/alerting-config/SKILL.md) | `Advanced` | `LOW` | Design effective alerting that catches real issues and minimizes false alarms. |
| **Auto Scaler Expert** | [SKILL.md](./skills/auto-scaler/SKILL.md) | `Advanced` | `LOW` | Professional Auto Scaler Expert skill. Build robust, automated deployment pipelines and configure cloud infrastructure as code. |
| **Aws Architect** | [SKILL.md](./skills/aws-architect/SKILL.md) | `Advanced` | `LOW` | Professional Aws Architect skill. Build robust, automated deployment pipelines and configure cloud infrastructure as code. |
| **Azure Developer** | [SKILL.md](./skills/azure-developer/SKILL.md) | `Advanced` | `LOW` | Professional Azure Developer skill. Build robust, automated deployment pipelines and configure cloud infrastructure as code. |
| **Backup Strategy Expert** | [SKILL.md](./skills/backup-strategy/SKILL.md) | `Advanced` | `LOW` | Professional Backup Strategy Expert skill. Build robust, automated deployment pipelines and configure cloud infrastructure as code. |
| **Blue Green Deploy Expert** | [SKILL.md](./skills/blue-green-deploy/SKILL.md) | `Advanced` | `LOW` | Professional Blue Green Deploy Expert skill. Build robust, automated deployment pipelines and configure cloud infrastructure as code. |
| **Canary Release Expert** | [SKILL.md](./skills/canary-release/SKILL.md) | `Advanced` | `LOW` | Professional Canary Release Expert skill. Build robust, automated deployment pipelines and configure cloud infrastructure as code. |
| **CDN Optimizer Expert** | [SKILL.md](./skills/cdn-optimizer/SKILL.md) | `Advanced` | `LOW` | Professional CDN Optimizer Expert skill. Build robust, automated deployment pipelines and configure cloud infrastructure as code. |
| **Ci Cd Architect** | [SKILL.md](./skills/ci-cd-architect/SKILL.md) | `Advanced` | `LOW` | Design and implement comprehensive CI/CD pipelines. Covers build optimization, test automation, security scanning, multi-environment deployment, and rollback strategies. |
| **Data Pipeline Expert** | [SKILL.md](./skills/data-pipeline/SKILL.md) | `Advanced` | `LOW` | Professional Data Pipeline Expert skill. Build robust, automated deployment pipelines and configure cloud infrastructure as code. |
| **Disaster Recovery Expert** | [SKILL.md](./skills/disaster-recovery/SKILL.md) | `Advanced` | `LOW` | Professional Disaster Recovery Expert skill. Build robust, automated deployment pipelines and configure cloud infrastructure as code. |
| **Docker Expert** | [SKILL.md](./skills/docker-expert/SKILL.md) | `Advanced` | `LOW` | Build optimized, secure Docker images with multi-stage builds. Configure Docker Compose for full development and production stacks. |
| **Gcp Engineer** | [SKILL.md](./skills/gcp-engineer/SKILL.md) | `Advanced` | `LOW` | Professional Gcp Engineer skill. Build robust, automated deployment pipelines and configure cloud infrastructure as code. |
| **Github Actions Expert** | [SKILL.md](./skills/github-actions/SKILL.md) | `Advanced` | `LOW` | Professional Github Actions Expert skill. Build robust, automated deployment pipelines and configure cloud infrastructure as code. |
| **Gitlab Ci Expert** | [SKILL.md](./skills/gitlab-ci/SKILL.md) | `Advanced` | `LOW` | Professional Gitlab Ci Expert skill. Build robust, automated deployment pipelines and configure cloud infrastructure as code. |
| **Gitops Flow Expert** | [SKILL.md](./skills/gitops-flow/SKILL.md) | `Advanced` | `LOW` | Professional Gitops Flow Expert skill. Build robust, automated deployment pipelines and configure cloud infrastructure as code. |
| **Helm Packager Expert** | [SKILL.md](./skills/helm-packager/SKILL.md) | `Advanced` | `LOW` | Professional Helm Packager Expert skill. Build robust, automated deployment pipelines and configure cloud infrastructure as code. |
| **Kubernetes Operator Expert** | [SKILL.md](./skills/kubernetes-operator/SKILL.md) | `Expert` | `LOW` | Deploy and manage applications on Kubernetes. Covers deployments, services, ingress, HPA, secrets, and production-grade cluster configuration. |
| **Load Balancer Expert** | [SKILL.md](./skills/load-balancer/SKILL.md) | `Advanced` | `LOW` | Professional Load Balancer Expert skill. Build robust, automated deployment pipelines and configure cloud infrastructure as code. |
| **Monitoring Setup Expert** | [SKILL.md](./skills/monitoring-setup/SKILL.md) | `Advanced` | `LOW` | Set up comprehensive monitoring with Prometheus, Grafana, and alerting. Covers metrics, dashboards, SLOs, and on-call runbooks. |
| **Multi Cloud Expert** | [SKILL.md](./skills/multi-cloud/SKILL.md) | `Advanced` | `LOW` | Professional Multi Cloud Expert skill. Build robust, automated deployment pipelines and configure cloud infrastructure as code. |
| **Release Manager Expert** | [SKILL.md](./skills/release-manager/SKILL.md) | `Advanced` | `LOW` | Professional Release Manager Expert skill. Build robust, automated deployment pipelines and configure cloud infrastructure as code. |
| **Sre Runbook Expert** | [SKILL.md](./skills/sre-runbook/SKILL.md) | `Advanced` | `LOW` | Professional Sre Runbook Expert skill. Build robust, automated deployment pipelines and configure cloud infrastructure as code. |
| **Terraform Builder** | [SKILL.md](./skills/terraform-builder/SKILL.md) | `Expert` | `LOW` | Build infrastructure as code with Terraform. Covers module design, state management, AWS/GCP/Azure resources, and production-grade practices. |

### 📂 Frontend

| Skill Name | Link | Complexity | Risk | Description |
|---|---|---|---|---|
| **Accessibility Champion Expert** | [SKILL.md](./skills/accessibility-champion/SKILL.md) | `Advanced` | `LOW` | Professional Accessibility Champion Expert skill. Build accessible, performance-tuned, responsive UI components with clean design standards. |
| **Angular Enterprise Expert** | [SKILL.md](./skills/angular-enterprise/SKILL.md) | `Advanced` | `LOW` | Professional Angular Enterprise Expert skill. Build accessible, performance-tuned, responsive UI components with clean design standards. |
| **Animation Engineer** | [SKILL.md](./skills/animation-engineer/SKILL.md) | `Intermediate` | `LOW` | Build smooth, accessible web animations using CSS, Framer Motion, and GSAP. |
| **Component Library Expert** | [SKILL.md](./skills/component-library/SKILL.md) | `Advanced` | `LOW` | Professional Component Library Expert skill. Build accessible, performance-tuned, responsive UI components with clean design standards. |
| **Dark Mode Master** | [SKILL.md](./skills/dark-mode-master/SKILL.md) | `Advanced` | `LOW` | Professional Dark Mode Master skill. Build accessible, performance-tuned, responsive UI components with clean design standards. |
| **Dashboard Builder** | [SKILL.md](./skills/dashboard-builder/SKILL.md) | `Advanced` | `LOW` | Professional Dashboard Builder skill. Build accessible, performance-tuned, responsive UI components with clean design standards. |
| **Dashboard Designer** | [SKILL.md](./skills/dashboard-designer/SKILL.md) | `Advanced` | `LOW` | Professional Dashboard Designer skill. Build accessible, performance-tuned, responsive UI components with clean design standards. |
| **Data Table Builder** | [SKILL.md](./skills/data-table-builder/SKILL.md) | `Advanced` | `LOW` | Professional Data Table Builder skill. Build accessible, performance-tuned, responsive UI components with clean design standards. |
| **Form Wizard Expert** | [SKILL.md](./skills/form-wizard/SKILL.md) | `Advanced` | `LOW` | Professional Form Wizard Expert skill. Build accessible, performance-tuned, responsive UI components with clean design standards. |
| **Infinite Scroll Expert** | [SKILL.md](./skills/infinite-scroll/SKILL.md) | `Advanced` | `LOW` | Professional Infinite Scroll Expert skill. Build accessible, performance-tuned, responsive UI components with clean design standards. |
| **Landing Page Expert** | [SKILL.md](./skills/landing-page/SKILL.md) | `Advanced` | `LOW` | Professional Landing Page Expert skill. Build accessible, performance-tuned, responsive UI components with clean design standards. |
| **Nextjs Architect** | [SKILL.md](./skills/nextjs-architect/SKILL.md) | `Advanced` | `LOW` | Build production Next.js applications with App Router, Server Components, server actions, ISR, and full-stack patterns. |
| **Payment UI Expert** | [SKILL.md](./skills/payment-ui/SKILL.md) | `Advanced` | `LOW` | Professional Payment UI Expert skill. Build accessible, performance-tuned, responsive UI components with clean design standards. |
| **PWA Builder** | [SKILL.md](./skills/pwa-builder/SKILL.md) | `Advanced` | `LOW` | Professional PWA Builder skill. Build accessible, performance-tuned, responsive UI components with clean design standards. |
| **React Builder** | [SKILL.md](./skills/react-builder/SKILL.md) | `Advanced` | `LOW` | Build scalable React applications with proper component architecture, custom hooks, state management, and performance optimization. |
| **Responsive Design Expert** | [SKILL.md](./skills/responsive-design/SKILL.md) | `Advanced` | `LOW` | Professional Responsive Design Expert skill. Build accessible, performance-tuned, responsive UI components with clean design standards. |
| **Rich Text Editor Expert** | [SKILL.md](./skills/rich-text-editor/SKILL.md) | `Advanced` | `LOW` | Professional Rich Text Editor Expert skill. Build accessible, performance-tuned, responsive UI components with clean design standards. |
| **State Management Expert** | [SKILL.md](./skills/state-management/SKILL.md) | `Advanced` | `LOW` | Professional State Management Expert skill. Build accessible, performance-tuned, responsive UI components with clean design standards. |
| **Tailwind Designer** | [SKILL.md](./skills/tailwind-designer/SKILL.md) | `Advanced` | `LOW` | Professional Tailwind Designer skill. Build accessible, performance-tuned, responsive UI components with clean design standards. |
| **Vue Craftsman Expert** | [SKILL.md](./skills/vue-craftsman/SKILL.md) | `Advanced` | `LOW` | Professional Vue Craftsman Expert skill. Build accessible, performance-tuned, responsive UI components with clean design standards. |
| **Web Performance Expert** | [SKILL.md](./skills/web-performance/SKILL.md) | `Advanced` | `LOW` | Professional Web Performance Expert skill. Build accessible, performance-tuned, responsive UI components with clean design standards. |

### 📂 Mobile

| Skill Name | Link | Complexity | Risk | Description |
|---|---|---|---|---|
| **Accessibility Mobile Expert** | [SKILL.md](./skills/accessibility-mobile/SKILL.md) | `Advanced` | `LOW` | Professional Accessibility Mobile Expert skill. Build performance-tuned, secure, and intuitive mobile applications for iOS and Android. |
| **Android Expert** | [SKILL.md](./skills/android-expert/SKILL.md) | `Advanced` | `LOW` | Professional Android Expert skill. Build performance-tuned, secure, and intuitive mobile applications for iOS and Android. |
| **Android Playstore Builder** | [SKILL.md](./skills/android-playstore-builder/SKILL.md) | `Advanced` | `MEDIUM` | Build, sign, and publish Android apps to Google Play Store. Covers AAB builds, signing configs, Play Console, staged rollouts, and automated CI/CD. |
| **App Release Manager Expert** | [SKILL.md](./skills/app-release-manager/SKILL.md) | `Advanced` | `LOW` | Manage the complete mobile app release lifecycle from versioning to store submission. |
| **App Store Optimizer Expert** | [SKILL.md](./skills/app-store-optimizer/SKILL.md) | `Advanced` | `LOW` | Professional App Store Optimizer Expert skill. Build performance-tuned, secure, and intuitive mobile applications for iOS and Android. |
| **Biometric Auth Expert** | [SKILL.md](./skills/biometric-auth/SKILL.md) | `Advanced` | `LOW` | Professional Biometric Auth Expert skill. Build performance-tuned, secure, and intuitive mobile applications for iOS and Android. |
| **Bluetooth Expert** | [SKILL.md](./skills/bluetooth-expert/SKILL.md) | `Advanced` | `LOW` | Professional Bluetooth Expert skill. Build performance-tuned, secure, and intuitive mobile applications for iOS and Android. |
| **Camera Integration Expert** | [SKILL.md](./skills/camera-integration/SKILL.md) | `Advanced` | `LOW` | Professional Camera Integration Expert skill. Build performance-tuned, secure, and intuitive mobile applications for iOS and Android. |
| **Deep Link Specialist Expert** | [SKILL.md](./skills/deep-link-specialist/SKILL.md) | `Advanced` | `LOW` | Professional Deep Link Specialist Expert skill. Build performance-tuned, secure, and intuitive mobile applications for iOS and Android. |
| **Deep Linking Expert** | [SKILL.md](./skills/deep-linking/SKILL.md) | `Advanced` | `LOW` | Professional Deep Linking Expert skill. Build performance-tuned, secure, and intuitive mobile applications for iOS and Android. |
| **Flutter Architect** | [SKILL.md](./skills/flutter-architect/SKILL.md) | `Advanced` | `LOW` | Professional Flutter Architect skill. Build performance-tuned, secure, and intuitive mobile applications for iOS and Android. |
| **Flutter Developer** | [SKILL.md](./skills/flutter-developer/SKILL.md) | `Advanced` | `LOW` | Build beautiful, performant Flutter applications for iOS, Android, and web. Covers state management, navigation, animations, platform channels, and deployment. |
| **In App Purchase Expert** | [SKILL.md](./skills/in-app-purchase/SKILL.md) | `Advanced` | `LOW` | Professional In App Purchase Expert skill. Build performance-tuned, secure, and intuitive mobile applications for iOS and Android. |
| **In App Purchase Expert** | [SKILL.md](./skills/in-app-purchase-expert/SKILL.md) | `Advanced` | `LOW` | Professional In App Purchase Expert skill. Build performance-tuned, secure, and intuitive mobile applications for iOS and Android. |
| **Ios Appstore Builder** | [SKILL.md](./skills/ios-appstore-builder/SKILL.md) | `Advanced` | `MEDIUM` | Prepare, configure, and publish iOS apps to the Apple App Store. Covers certificates, provisioning profiles, TestFlight, App Store submission, and review guidelines. |
| **Ios Specialist Expert** | [SKILL.md](./skills/ios-specialist/SKILL.md) | `Advanced` | `LOW` | Professional Ios Specialist Expert skill. Build performance-tuned, secure, and intuitive mobile applications for iOS and Android. |
| **Location Service Expert** | [SKILL.md](./skills/location-service/SKILL.md) | `Advanced` | `LOW` | Professional Location Service Expert skill. Build performance-tuned, secure, and intuitive mobile applications for iOS and Android. |
| **Mobile App Architect** | [SKILL.md](./skills/mobile-app-architect/SKILL.md) | `Advanced` | `LOW` | Professional Mobile App Architect skill. Build performance-tuned, secure, and intuitive mobile applications for iOS and Android. |
| **Mobile Ci Cd Expert** | [SKILL.md](./skills/mobile-ci-cd/SKILL.md) | `Advanced` | `LOW` | Automate mobile app build, test, and deployment pipelines for iOS and Android using Fastlane, EAS Build, or GitHub Actions. |
| **Mobile Performance Expert** | [SKILL.md](./skills/mobile-performance/SKILL.md) | `Advanced` | `LOW` | Professional Mobile Performance Expert skill. Build performance-tuned, secure, and intuitive mobile applications for iOS and Android. |
| **OTA Update Manager Expert** | [SKILL.md](./skills/ota-update-manager/SKILL.md) | `Advanced` | `LOW` | Professional OTA Update Manager Expert skill. Build performance-tuned, secure, and intuitive mobile applications for iOS and Android. |
| **Push Notification Expert** | [SKILL.md](./skills/push-notification/SKILL.md) | `Advanced` | `LOW` | Professional Push Notification Expert skill. Build performance-tuned, secure, and intuitive mobile applications for iOS and Android. |
| **Push Notification Expert** | [SKILL.md](./skills/push-notification-expert/SKILL.md) | `Advanced` | `LOW` | Professional Push Notification Expert skill. Build performance-tuned, secure, and intuitive mobile applications for iOS and Android. |
| **React Native Builder** | [SKILL.md](./skills/react-native-builder/SKILL.md) | `Advanced` | `LOW` | Professional React Native Builder skill. Build performance-tuned, secure, and intuitive mobile applications for iOS and Android. |
| **React Native Developer** | [SKILL.md](./skills/react-native-developer/SKILL.md) | `Advanced` | `LOW` | Build production React Native apps with Expo or bare workflow. Covers navigation, state management, native modules, performance, and deployment. |

### 📂 Php Frameworks

| Skill Name | Link | Complexity | Risk | Description |
|---|---|---|---|---|
| **Cache Strategist Expert** | [SKILL.md](./skills/cache-strategist/SKILL.md) | `Advanced` | `LOW` | Design comprehensive caching strategies across all layers: browser cache, CDN, application cache, database query cache, and Redis. Maximize performance while maintaining data freshness. |
| **Codeigniter Builder** | [SKILL.md](./skills/codeigniter-builder/SKILL.md) | `Intermediate` | `LOW` | Build clean, efficient CodeIgniter 4 applications. Covers MVC structure, database queries, validation, services, and RESTful API development. |
| **Laravel API Expert** | [SKILL.md](./skills/laravel-api/SKILL.md) | `Advanced` | `LOW` | Build production-ready RESTful APIs with Laravel. Covers authentication (Sanctum/Passport), versioning, resources, rate limiting, and API testing. |
| **Laravel Architect** | [SKILL.md](./skills/laravel-architect/SKILL.md) | `Advanced` | `LOW` | Design and build robust Laravel applications using best practices, proper architecture patterns, Eloquent ORM, service containers, and Laravel ecosystem tools. |
| **Laravel Livewire Expert** | [SKILL.md](./skills/laravel-livewire/SKILL.md) | `Intermediate` | `LOW` | Build dynamic, reactive Laravel applications using Livewire. Create real-time interfaces without writing JavaScript for SPA-like experiences. |
| **Laravel Queues Expert** | [SKILL.md](./skills/laravel-queues/SKILL.md) | `Advanced` | `LOW` | Implement robust background job processing with Laravel Queues. Covers job design, Redis queues, Laravel Horizon, retry logic, and job monitoring. |
| **Mysql Expert** | [SKILL.md](./skills/mysql-expert/SKILL.md) | `Advanced` | `LOW` | Design, optimize, and maintain MySQL databases. Covers schema design, indexing strategies, query optimization, replication, and performance tuning. |
| **Node API Builder** | [SKILL.md](./skills/node-api-builder/SKILL.md) | `Advanced` | `LOW` | Build production-ready Node.js APIs with Express or Fastify. Covers middleware, authentication, validation, error handling, and performance optimization. |
| **Nosql Specialist Expert** | [SKILL.md](./skills/nosql-specialist/SKILL.md) | `Advanced` | `LOW` | Design and implement NoSQL database solutions. Covers MongoDB, DynamoDB, Cassandra, and document/key-value patterns for high-scale applications. |
| **Redis Master** | [SKILL.md](./skills/redis-master/SKILL.md) | `Advanced` | `LOW` | Leverage Redis for caching, sessions, pub/sub, queues, rate limiting, and real-time features. Design Redis data structures for optimal performance. |
| **Restful API Design Expert** | [SKILL.md](./skills/restful-api-design/SKILL.md) | `Advanced` | `LOW` | Design professional RESTful APIs following HTTP standards, REST constraints, and industry best practices. Covers versioning, pagination, filtering, and HATEOAS. |
| **Websocket Architect** | [SKILL.md](./skills/websocket-architect/SKILL.md) | `Advanced` | `LOW` | Design and implement real-time features using WebSockets. Covers Laravel Reverb, Pusher, Socket.io, broadcasting, and live update patterns. |
| **Wordpress Developer** | [SKILL.md](./skills/wordpress-developer/SKILL.md) | `Intermediate` | `LOW` | Develop professional WordPress sites, custom themes, and plugins. Covers WordPress best practices, hooks system, custom post types, WP REST API, and security. |

### 📂 Product

| Skill Name | Link | Complexity | Risk | Description |
|---|---|---|---|---|
| **Activation Engineer** | [SKILL.md](./skills/activation-engineer/SKILL.md) | `Intermediate` | `LOW` | Professional Activation Engineer skill. Define product strategy, launch features, and run experiments with user metrics. |
| **Content Marketer Expert** | [SKILL.md](./skills/content-marketer/SKILL.md) | `Intermediate` | `LOW` | Professional Content Marketer Expert skill. Define product strategy, launch features, and run experiments with user metrics. |
| **Email Campaign Expert** | [SKILL.md](./skills/email-campaign/SKILL.md) | `Intermediate` | `LOW` | Professional Email Campaign Expert skill. Define product strategy, launch features, and run experiments with user metrics. |
| **Growth Hacker Expert** | [SKILL.md](./skills/growth-hacker/SKILL.md) | `Intermediate` | `LOW` | Professional Growth Hacker Expert skill. Define product strategy, launch features, and run experiments with user metrics. |
| **Journey Mapper Expert** | [SKILL.md](./skills/journey-mapper/SKILL.md) | `Intermediate` | `LOW` | Professional Journey Mapper Expert skill. Define product strategy, launch features, and run experiments with user metrics. |
| **MVP Launcher Expert** | [SKILL.md](./skills/mvp-launcher/SKILL.md) | `Intermediate` | `LOW` | Design and launch Minimum Viable Products that validate hypotheses with minimum waste. Covers hypothesis validation, feature selection, success metrics, and launch strategy. |
| **Persona Builder** | [SKILL.md](./skills/persona-builder/SKILL.md) | `Intermediate` | `LOW` | Professional Persona Builder skill. Define product strategy, launch features, and run experiments with user metrics. |
| **Pricing Optimizer Expert** | [SKILL.md](./skills/pricing-optimizer/SKILL.md) | `Intermediate` | `LOW` | Professional Pricing Optimizer Expert skill. Define product strategy, launch features, and run experiments with user metrics. |
| **Product Strategist Expert** | [SKILL.md](./skills/product-strategist/SKILL.md) | `Advanced` | `LOW` | Define product vision, strategy, and roadmap. Covers OKRs, market positioning, competitive analysis, and prioritization frameworks. |
| **Referral System Expert** | [SKILL.md](./skills/referral-system/SKILL.md) | `Intermediate` | `LOW` | Professional Referral System Expert skill. Define product strategy, launch features, and run experiments with user metrics. |
| **User Behavior Expert** | [SKILL.md](./skills/user-behavior/SKILL.md) | `Intermediate` | `LOW` | Professional User Behavior Expert skill. Define product strategy, launch features, and run experiments with user metrics. |
| **User Researcher Expert** | [SKILL.md](./skills/user-researcher/SKILL.md) | `Intermediate` | `LOW` | Professional User Researcher Expert skill. Define product strategy, launch features, and run experiments with user metrics. |
| **Viral Loop Builder** | [SKILL.md](./skills/viral-loop-builder/SKILL.md) | `Intermediate` | `LOW` | Professional Viral Loop Builder skill. Define product strategy, launch features, and run experiments with user metrics. |

### 📂 Security

| Skill Name | Link | Complexity | Risk | Description |
|---|---|---|---|---|
| **Ai Safety Guard Expert** | [SKILL.md](./skills/ai-safety-guard/SKILL.md) | `Expert` | `HIGH` | Professional Ai Safety Guard Expert skill. Implement enterprise-grade web application security controls and encryption standards. |
| **API Security Expert** | [SKILL.md](./skills/api-security/SKILL.md) | `Advanced` | `HIGH` | Harden APIs against OWASP API Top 10 vulnerabilities. |
| **Auth Flow UI Expert** | [SKILL.md](./skills/auth-flow-ui/SKILL.md) | `Expert` | `HIGH` | Professional Auth Flow UI Expert skill. Implement enterprise-grade web application security controls and encryption standards. |
| **Auth Hardener Expert** | [SKILL.md](./skills/auth-hardener/SKILL.md) | `Expert` | `HIGH` | Professional Auth Hardener Expert skill. Implement enterprise-grade web application security controls and encryption standards. |
| **Cloud Security Expert** | [SKILL.md](./skills/cloud-security/SKILL.md) | `Expert` | `HIGH` | Professional Cloud Security Expert skill. Implement enterprise-grade web application security controls and encryption standards. |
| **Compliance Checker Expert** | [SKILL.md](./skills/compliance-checker/SKILL.md) | `Expert` | `HIGH` | Professional Compliance Checker Expert skill. Implement enterprise-grade web application security controls and encryption standards. |
| **Container Security Expert** | [SKILL.md](./skills/container-security/SKILL.md) | `Expert` | `HIGH` | Professional Container Security Expert skill. Implement enterprise-grade web application security controls and encryption standards. |
| **CSRF Protection Expert** | [SKILL.md](./skills/csrf-protection/SKILL.md) | `Expert` | `HIGH` | Professional CSRF Protection Expert skill. Implement enterprise-grade web application security controls and encryption standards. |
| **Encryption Expert** | [SKILL.md](./skills/encryption-expert/SKILL.md) | `Expert` | `HIGH` | Professional Encryption Expert skill. Implement enterprise-grade web application security controls and encryption standards. |
| **Gdpr Enforcer Expert** | [SKILL.md](./skills/gdpr-enforcer/SKILL.md) | `Expert` | `HIGH` | Professional Gdpr Enforcer Expert skill. Implement enterprise-grade web application security controls and encryption standards. |
| **JWT Security Expert** | [SKILL.md](./skills/jwt-security/SKILL.md) | `Expert` | `HIGH` | Professional JWT Security Expert skill. Implement enterprise-grade web application security controls and encryption standards. |
| **Mobile Security Expert** | [SKILL.md](./skills/mobile-security/SKILL.md) | `Expert` | `HIGH` | Professional Mobile Security Expert skill. Implement enterprise-grade web application security controls and encryption standards. |
| **OAuth Implementer Expert** | [SKILL.md](./skills/oauth-implementer/SKILL.md) | `Expert` | `HIGH` | Professional OAuth Implementer Expert skill. Implement enterprise-grade web application security controls and encryption standards. |
| **OWASP Guard Expert** | [SKILL.md](./skills/owasp-guard/SKILL.md) | `Expert` | `HIGH` | Professional OWASP Guard Expert skill. Implement enterprise-grade web application security controls and encryption standards. |
| **Restful API Security Expert** | [SKILL.md](./skills/restful-api-security/SKILL.md) | `Expert` | `HIGH` | Professional Restful API Security Expert skill. Implement enterprise-grade web application security controls and encryption standards. |
| **Secrets Manager Expert** | [SKILL.md](./skills/secrets-manager/SKILL.md) | `Expert` | `HIGH` | Professional Secrets Manager Expert skill. Implement enterprise-grade web application security controls and encryption standards. |
| **Secrets Scanner Expert** | [SKILL.md](./skills/secrets-scanner/SKILL.md) | `Expert` | `HIGH` | Professional Secrets Scanner Expert skill. Implement enterprise-grade web application security controls and encryption standards. |
| **Security Auditor** | [SKILL.md](./skills/security-auditor/SKILL.md) | `Expert` | `HIGH` | Perform comprehensive security audits of applications and APIs. Produces CVSS-scored vulnerability reports with detailed remediation steps. |
| **SQL Injection Guard Expert** | [SKILL.md](./skills/sql-injection-guard/SKILL.md) | `Expert` | `HIGH` | Professional SQL Injection Guard Expert skill. Implement enterprise-grade web application security controls and encryption standards. |
| **Supply Chain Security Expert** | [SKILL.md](./skills/supply-chain-security/SKILL.md) | `Expert` | `HIGH` | Professional Supply Chain Security Expert skill. Implement enterprise-grade web application security controls and encryption standards. |
| **Threat Modeler Expert** | [SKILL.md](./skills/threat-modeler/SKILL.md) | `Expert` | `HIGH` | Professional Threat Modeler Expert skill. Implement enterprise-grade web application security controls and encryption standards. |
| **XSS Prevention Expert** | [SKILL.md](./skills/xss-prevention/SKILL.md) | `Expert` | `HIGH` | Professional XSS Prevention Expert skill. Implement enterprise-grade web application security controls and encryption standards. |
| **Zero Trust Architect** | [SKILL.md](./skills/zero-trust-architect/SKILL.md) | `Expert` | `HIGH` | Professional Zero Trust Architect skill. Implement enterprise-grade web application security controls and encryption standards. |

### 📂 Testing

| Skill Name | Link | Complexity | Risk | Description |
|---|---|---|---|---|
| **Ab Test Designer** | [SKILL.md](./skills/ab-test-designer/SKILL.md) | `Advanced` | `LOW` | Professional Ab Test Designer skill. Implement robust test suites and automated quality checks for modern web/mobile applications. |
| **Accessibility Tester Expert** | [SKILL.md](./skills/accessibility-tester/SKILL.md) | `Advanced` | `LOW` | Professional Accessibility Tester Expert skill. Implement robust test suites and automated quality checks for modern web/mobile applications. |
| **API Contract Tester Expert** | [SKILL.md](./skills/api-contract-tester/SKILL.md) | `Advanced` | `LOW` | Implement consumer-driven contract testing with Pact to ensure API compatibility. |
| **BDD Cucumber Expert** | [SKILL.md](./skills/bdd-cucumber/SKILL.md) | `Advanced` | `LOW` | Professional BDD Cucumber Expert skill. Implement robust test suites and automated quality checks for modern web/mobile applications. |
| **DAST Runner Expert** | [SKILL.md](./skills/dast-runner/SKILL.md) | `Advanced` | `LOW` | Professional DAST Runner Expert skill. Implement robust test suites and automated quality checks for modern web/mobile applications. |
| **E2E Automator Expert** | [SKILL.md](./skills/e2e-automator/SKILL.md) | `Advanced` | `LOW` | Build robust end-to-end test suites with Playwright or Cypress. Covers page objects, fixtures, visual testing, and CI integration. |
| **Flaky Test Fixer Expert** | [SKILL.md](./skills/flaky-test-fixer/SKILL.md) | `Advanced` | `LOW` | Professional Flaky Test Fixer Expert skill. Implement robust test suites and automated quality checks for modern web/mobile applications. |
| **Integration Tester Expert** | [SKILL.md](./skills/integration-tester/SKILL.md) | `Advanced` | `LOW` | Professional Integration Tester Expert skill. Implement robust test suites and automated quality checks for modern web/mobile applications. |
| **Load Tester Expert** | [SKILL.md](./skills/load-tester/SKILL.md) | `Advanced` | `LOW` | Professional Load Tester Expert skill. Implement robust test suites and automated quality checks for modern web/mobile applications. |
| **Mobile Testing Expert** | [SKILL.md](./skills/mobile-testing/SKILL.md) | `Advanced` | `LOW` | Professional Mobile Testing Expert skill. Implement robust test suites and automated quality checks for modern web/mobile applications. |
| **Mock Master** | [SKILL.md](./skills/mock-master/SKILL.md) | `Advanced` | `LOW` | Professional Mock Master skill. Implement robust test suites and automated quality checks for modern web/mobile applications. |
| **Mutation Tester Expert** | [SKILL.md](./skills/mutation-tester/SKILL.md) | `Advanced` | `LOW` | Professional Mutation Tester Expert skill. Implement robust test suites and automated quality checks for modern web/mobile applications. |
| **Pen Tester Expert** | [SKILL.md](./skills/pen-tester/SKILL.md) | `Advanced` | `LOW` | Professional Pen Tester Expert skill. Implement robust test suites and automated quality checks for modern web/mobile applications. |
| **Performance Tester Expert** | [SKILL.md](./skills/performance-tester/SKILL.md) | `Advanced` | `LOW` | Design and run performance tests to identify bottlenecks, validate SLOs, and measure system capacity. Covers load tests, stress tests, and spike tests. |
| **SAST Scanner Expert** | [SKILL.md](./skills/sast-scanner/SKILL.md) | `Advanced` | `LOW` | Professional SAST Scanner Expert skill. Implement robust test suites and automated quality checks for modern web/mobile applications. |
| **Security Tester Expert** | [SKILL.md](./skills/security-tester/SKILL.md) | `Advanced` | `LOW` | Professional Security Tester Expert skill. Implement robust test suites and automated quality checks for modern web/mobile applications. |
| **Snapshot Tester Expert** | [SKILL.md](./skills/snapshot-tester/SKILL.md) | `Advanced` | `LOW` | Professional Snapshot Tester Expert skill. Implement robust test suites and automated quality checks for modern web/mobile applications. |
| **Tdd Practitioner** | [SKILL.md](./skills/tdd-practitioner/SKILL.md) | `Advanced` | `LOW` | Practice Test-Driven Development with the red-green-refactor cycle. Write tests before code to drive better design, coverage, and confidence. |
| **Test Architect** | [SKILL.md](./skills/test-architect/SKILL.md) | `Advanced` | `LOW` | Professional Test Architect skill. Implement robust test suites and automated quality checks for modern web/mobile applications. |
| **Test Coverage Expert** | [SKILL.md](./skills/test-coverage/SKILL.md) | `Advanced` | `LOW` | Professional Test Coverage Expert skill. Implement robust test suites and automated quality checks for modern web/mobile applications. |
| **Test Data Builder** | [SKILL.md](./skills/test-data-builder/SKILL.md) | `Advanced` | `LOW` | Professional Test Data Builder skill. Implement robust test suites and automated quality checks for modern web/mobile applications. |
| **Test Reporter Expert** | [SKILL.md](./skills/test-reporter/SKILL.md) | `Advanced` | `LOW` | Professional Test Reporter Expert skill. Implement robust test suites and automated quality checks for modern web/mobile applications. |
| **Unit Test Writer Expert** | [SKILL.md](./skills/unit-test-writer/SKILL.md) | `Intermediate` | `LOW` | Write comprehensive unit tests that verify behavior, catch regressions, and document intent. Covers test organization, assertions, mocking, and coverage. |

---

## 🔍 Validation & Linter

Every skill folder follows a strict format defined in [skill.schema.json](./schemas/skill.schema.json). You can run validation locally to check frontmatter correctness:

```bash
npm run validate
```

---

## 📋 System Requirements

To utilize these skills with maximum efficacy, ensure your local environment meets:
- **Node.js**: v18.0.0 or later.
- **Python**: v3.10.0+ (for analytics, A/B testing, and AI engineering scripts).
- **Git**: v2.30.0+ for commit convention hooks and pipeline integrations.
- **Docker**: For running services using the containerization blueprints.

---

## 💎 Core Advantages

1.  **Zero Duplication**: Dynamic templates enforce clean abstractions and modular code architecture.
2.  **Turnkey Checklists**: Avoid missing edge cases with structured validation steps.
3.  **Strict Parity**: High compatibility ensures seamless usage across various AI tools.
4.  **Deep Technical Coverage**: Explicit configuration blueprints for complex architectures (e.g. CDC streams, micro-frontends, event sourcing).

---

## ⚠️ Disclaimers & Safety

*   **Production Safety**: Blueprints and scripts provided within individual skills must be customized to fit your specific environments (e.g. database credentials, domains). Never run unverified scripts directly in production.
*   **Security Auditing**: While skills like `security-auditor` provide checklists, they do not replace official security compliance verification from certified professionals.

---

## 💖 Sponsorship & Support

If you find this project valuable and want to support its active development, please consider buying us a coffee!

<a href="https://buymeacoffee.com/atulpurohit" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="200">
</a>

---

## 📄 Licensing

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute these templates across your projects.
