---
name: restful-api-design
description: "Design professional RESTful APIs following HTTP standards, REST constraints, and industry best practices. Covers versioning, pagination, filtering, and HATEOAS."
category: php-frameworks
tags: ['rest', 'api', 'http', 'openapi', 'best-practices']
complexity: advanced
risk: low
compatibility: [claude-code, antigravity, gemini-cli, cursor, copilot, codex-cli, autohand, kiro]
source: antigravity-official
version: "1.0.0"
date_added: "2026-07-10"
last_updated: "2026-07-10"
---

# RESTful API Design Expert

## Purpose
Design RESTful APIs that are intuitive, consistent, well-documented, and follow HTTP standards and REST architectural constraints.

## Operating Mode
You are a **REST API design authority**. You produce OpenAPI specs, enforce consistency, and ensure APIs are developer-friendly.

## Core REST Principles

### 1️⃣ Resource-Oriented Design
```
# ✅ Good: noun-based resources
GET    /users              # List users
GET    /users/123          # Get specific user
POST   /users              # Create user
PATCH  /users/123          # Partial update
PUT    /users/123          # Full replace
DELETE /users/123          # Delete user

# Sub-resources
GET    /users/123/orders   # User's orders
POST   /users/123/orders   # Create order for user

# ❌ Bad: verb-based
POST /createUser
GET  /getUserById?id=123
POST /deleteUser
```

### 2️⃣ HTTP Status Codes (Complete Reference)
```
200 OK          - Successful GET, PATCH, PUT
201 Created     - Successful POST (include Location header)
204 No Content  - Successful DELETE
400 Bad Request - Invalid request body/params
401 Unauthorized - No or invalid auth token
403 Forbidden    - Authenticated but not authorized
404 Not Found    - Resource doesn't exist
409 Conflict     - Duplicate resource, version conflict
422 Unprocessable - Validation errors
429 Too Many Requests - Rate limited
500 Internal Server Error
503 Service Unavailable
```

### 3️⃣ Request/Response Standards
```json
// ✅ Consistent response envelope
// Success (single resource)
{
  "data": {
    "id": "123",
    "type": "users",
    "attributes": {
      "name": "John Doe",
      "email": "john@example.com",
      "createdAt": "2026-07-10T10:00:00Z"
    },
    "relationships": {
      "orders": { "links": { "related": "/users/123/orders" } }
    }
  },
  "meta": { "requestId": "abc123" }
}

// Success (collection)
{
  "data": [...],
  "meta": {
    "total": 100,
    "page": 1,
    "perPage": 20,
    "totalPages": 5
  },
  "links": {
    "self": "/users?page=1",
    "next": "/users?page=2",
    "last": "/users?page=5"
  }
}

// Error response (RFC 7807)
{
  "type": "https://api.example.com/errors/validation",
  "title": "Validation Failed",
  "status": 422,
  "detail": "One or more fields failed validation",
  "errors": {
    "email": ["Email is already taken"],
    "name": ["Name is required"]
  }
}
```

### 4️⃣ Filtering, Sorting & Pagination
```
# Filtering
GET /products?status=active&category=electronics
GET /orders?created_after=2026-01-01&min_total=100

# Sorting (prefix with - for descending)
GET /products?sort=-price,name

# Pagination (cursor-based for large datasets)
GET /posts?cursor=eyJpZCI6MTAwfQ&limit=20

# Field selection (sparse fieldsets)
GET /users?fields=id,name,email

# Search
GET /products?q=laptop&in=title,description
```

### 5️⃣ Versioning Strategy
```
# URL versioning (most common, most visible)
GET /api/v1/users
GET /api/v2/users

# Header versioning (cleaner URLs)
GET /api/users
Accept: application/vnd.myapi.v2+json

# Deprecation headers
Deprecation: true
Sunset: Sat, 01 Jan 2028 00:00:00 GMT
Link: </api/v2/users>; rel="successor-version"
```

### 6️⃣ Idempotency & Safety
```
# Idempotency key for POST (prevent duplicate processing)
POST /payments
Idempotency-Key: 550e8400-e29b-41d4-a716-446655440000

# Conditional updates (optimistic locking)
GET /users/123
ETag: "abc123"

PATCH /users/123
If-Match: "abc123"  # Only update if unchanged
Content-Type: application/json
```

### 7️⃣ API Design Checklist
- [ ] All resources are nouns
- [ ] Correct HTTP verbs for operations
- [ ] Consistent response structure across all endpoints
- [ ] Pagination on all list endpoints
- [ ] Filtering and sorting support
- [ ] Proper error responses with RFC 7807
- [ ] Authentication documented (Bearer token, API key)
- [ ] Rate limiting with `X-RateLimit-*` headers
- [ ] CORS configured
- [ ] OpenAPI 3.1 spec generated
- [ ] Versioning strategy documented
- [ ] Deprecation policy stated

## Outputs
1. Complete OpenAPI 3.1 specification
2. API style guide document
3. Error codes reference table
4. Postman/Insomnia collection
5. API changelog format template
