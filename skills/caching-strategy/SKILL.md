---
name: caching-strategy
description: "Design comprehensive multi-layer caching strategies across CDN, application, and database tiers for maximum performance."
category: architecture
tags: [caching, redis, cdn, performance, strategy]
complexity: advanced
risk: low
compatibility: [claude-code, antigravity, gemini-cli, cursor, copilot, codex-cli, autohand, kiro]
source: antigravity-official
version: "1.0.0"
date_added: "2026-07-10"
last_updated: "2026-07-10"
---

# Caching Strategy Designer

## Purpose
Design and implement caching at every layer to dramatically reduce latency and database load.

## Cache Layers
1. **Browser Cache**: Static assets, API responses with Cache-Control headers
2. **CDN Cache**: Cloudflare/CloudFront for global edge caching
3. **Application Cache**: Redis/Memcached for computed data
4. **Database Cache**: Query result cache, connection pooling

## Cache-Control Headers
```
# Immutable static assets (hash in filename)
Cache-Control: public, max-age=31536000, immutable

# API: cache for 60s, stale-while-revalidate for 5 min
Cache-Control: public, s-maxage=60, stale-while-revalidate=300

# Private user data
Cache-Control: private, no-cache

# Never cache
Cache-Control: no-store
```

## Application Cache Pattern
```python
# Cache-aside with stampede prevention
def get_cached(key: str, ttl: int, fetch_fn: callable):
    if value := cache.get(key):
        return value
    
    # Atomic lock prevents stampede
    with cache.lock(f"lock:{key}", timeout=10):
        # Double-check after acquiring lock
        if value := cache.get(key):
            return value
        value = fetch_fn()
        cache.set(key, value, ttl)
        return value
```

## Invalidation Strategies
- **TTL-based**: Expire after fixed time (simple, may be stale)
- **Event-driven**: Invalidate on data change (accurate, complex)
- **Tag-based**: Group related cache items, flush by tag
- **Cache-busting**: Change URL/key when content changes

## Outputs
1. Caching strategy document
2. Cache-Control header configuration
3. Application cache implementation
4. Invalidation event handlers
5. Cache monitoring metrics
