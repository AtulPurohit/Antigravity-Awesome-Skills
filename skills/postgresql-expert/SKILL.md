---
name: postgresql-expert
description: "Design, optimize, and administer PostgreSQL databases. Covers advanced indexing, partitioning, full-text search, JSON operations, replication, and performance tuning."
category: backend
tags: [postgresql, sql, database, performance, indexing]
complexity: advanced
risk: low
compatibility: [claude-code, antigravity, gemini-cli, cursor, copilot, codex-cli, autohand, kiro]
source: antigravity-official
version: "1.0.0"
date_added: "2026-07-10"
last_updated: "2026-07-10"
---

# PostgreSQL Expert

## Purpose
Design high-performance PostgreSQL databases with optimal schemas, indexes, and configurations for production workloads.

## PostgreSQL Specific Features

### 1️⃣ Advanced Data Types
```sql
-- JSON/JSONB for flexible attributes
CREATE TABLE products (
    id      BIGSERIAL PRIMARY KEY,
    name    VARCHAR(255) NOT NULL,
    attrs   JSONB NOT NULL DEFAULT '{}',
    tags    TEXT[] NOT NULL DEFAULT '{}',
    price   NUMERIC(10, 2) NOT NULL
);

-- Index on JSONB field
CREATE INDEX idx_products_category ON products USING GIN ((attrs->'category'));
CREATE INDEX idx_products_tags ON products USING GIN (tags);

-- Query JSONB
SELECT * FROM products
WHERE attrs->>'category' = 'electronics'
  AND attrs->'specs'->>'ram' = '16GB'
  AND 'sale' = ANY(tags);

-- UUID type
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL
);
```

### 2️⃣ Full-Text Search
```sql
-- Full-text search with ranking
ALTER TABLE posts ADD COLUMN search_vector tsvector;
CREATE INDEX idx_posts_search ON posts USING GIN (search_vector);

-- Auto-update trigger
CREATE TRIGGER posts_search_update
BEFORE INSERT OR UPDATE ON posts
FOR EACH ROW EXECUTE FUNCTION
    tsvector_update_trigger(search_vector, 'pg_catalog.english', title, body);

-- Search query with ranking
SELECT
    id,
    title,
    ts_rank(search_vector, query) AS rank,
    ts_headline('english', body, query, 'MaxWords=50') AS excerpt
FROM posts, to_tsquery('english', 'laravel & api') query
WHERE search_vector @@ query
ORDER BY rank DESC
LIMIT 10;
```

### 3️⃣ Partitioning
```sql
-- Range partitioning for time-series data
CREATE TABLE events (
    id          BIGSERIAL,
    user_id     BIGINT NOT NULL,
    event_type  VARCHAR(100) NOT NULL,
    properties  JSONB,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
) PARTITION BY RANGE (created_at);

-- Create monthly partitions
CREATE TABLE events_2026_01 PARTITION OF events
    FOR VALUES FROM ('2026-01-01') TO ('2026-02-01');
CREATE TABLE events_2026_02 PARTITION OF events
    FOR VALUES FROM ('2026-02-01') TO ('2026-03-01');

-- Automated partition management with pg_partman
SELECT partman.create_parent('public.events', 'created_at', 'native', 'monthly');
```

### 4️⃣ Performance Configuration
```ini
# postgresql.conf for a 16GB RAM server
shared_buffers = 4GB              # 25% of RAM
work_mem = 64MB                   # Per sort/hash operation
maintenance_work_mem = 1GB        # For VACUUM, CREATE INDEX
effective_cache_size = 12GB       # OS + PG cache estimate
max_connections = 200
checkpoint_completion_target = 0.9
wal_buffers = 64MB
random_page_cost = 1.1            # SSD (default 4.0 for HDD)
effective_io_concurrency = 200    # SSD concurrent I/O

# Logging for performance analysis
log_slow_queries = on
log_min_duration_statement = 1000 # Log queries > 1 second
```

### 5️⃣ Connection Pooling (PgBouncer)
```ini
# pgbouncer.ini
[databases]
myapp = host=localhost port=5432 dbname=myapp

[pgbouncer]
pool_mode = transaction    # Best for web apps
max_client_conn = 1000
default_pool_size = 25
min_pool_size = 5
reserve_pool_size = 5
server_idle_timeout = 600
client_idle_timeout = 0
```

## Outputs
1. Optimized schema with PostgreSQL-specific features
2. Indexing strategy (B-tree, GIN, GiST, BRIN)
3. Full-text search implementation
4. Partitioning strategy for large tables
5. PgBouncer connection pooling configuration
6. Monitoring queries and alerts
