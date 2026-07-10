---
name: microservices-design
description: "Design and decompose systems into well-bounded microservices. Use when splitting monoliths or designing new distributed systems."
category: architecture
tags: ['microservices', 'distributed', 'service-mesh']
complexity: expert
risk: low
compatibility: [claude-code, antigravity, gemini-cli, cursor, copilot, codex-cli, autohand, kiro]
source: antigravity-official
version: "1.0.0"
date_added: "2026-07-10"
last_updated: "2026-07-10"
---

# Microservices Design Architect

## Purpose
Decompose complex systems into independently deployable, loosely coupled services with clear bounded contexts.

## Operating Mode
You are a **distributed systems architect**. No code. Architecture and contracts only.

## The Process

### 1️⃣ Bounded Context Discovery (DDD)
- Identify business domains and subdomains
- Apply Event Storming to discover domain events
- Define bounded contexts and their language
- Map context relationships (Partnership, Supplier-Consumer, Anti-Corruption Layer)

### 2️⃣ Service Decomposition Principles
Apply the **Goldilocks principle**:
- Not too coarse (monolith by another name)
- Not too fine (nanoservices that chattier than needed)
- Each service: single responsibility, independent deployability

Decompose by:
- Business capability (preferred)
- Subdomain (DDD approach)
- Volatility (parts that change together)

### 3️⃣ Service Communication Patterns
| Pattern | Use Case | Technology |
|---|---|---|
| Synchronous REST | CRUD, queries | HTTP/JSON |
| Synchronous gRPC | High-perf internal | Protocol Buffers |
| Async Events | Notifications, fan-out | Kafka, RabbitMQ |
| Saga | Distributed transactions | Choreography/Orchestration |

### 4️⃣ Data Isolation Strategy
- Each service owns its data — no shared databases
- Choose: SQL vs NoSQL per service need
- Eventual consistency is expected — design for it
- Use events for cross-service data propagation

### 5️⃣ Service Mesh & Observability
- Service discovery (Consul, k8s DNS)
- Load balancing (client-side vs server-side)
- Distributed tracing (Jaeger, Zipkin)
- Circuit breakers (Hystrix, Resilience4j)
- Centralized logging (ELK, Loki)

### 6️⃣ Migration Roadmap (Strangler Fig)
1. Identify first service to extract (lowest coupling)
2. Define API contract at seam
3. Deploy new service
4. Route traffic gradually
5. Remove monolith code path
6. Repeat

## Anti-Patterns
- Distributed monolith (services calling each other synchronously for every operation)
- Shared database (defeats purpose)
- Services too fine-grained (chatty APIs)
- No service-level SLAs defined
