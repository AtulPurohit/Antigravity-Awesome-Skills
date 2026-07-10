---
name: circuit-breaker
description: "Implement circuit breaker patterns to prevent cascading failures in distributed systems and enable graceful degradation."
category: architecture
tags: [circuit-breaker, resilience, fault-tolerance, microservices]
complexity: advanced
risk: low
compatibility: [claude-code, antigravity, gemini-cli, cursor, copilot, codex-cli, autohand, kiro]
source: antigravity-official
version: "1.0.0"
date_added: "2026-07-10"
last_updated: "2026-07-10"
---

# Circuit Breaker Implementer

## Purpose
Prevent cascading failures in microservices by detecting failing dependencies and failing fast with fallback behavior.

## Circuit Breaker States
```
CLOSED (normal): Requests flow through, failures tracked
   ↓ threshold exceeded
OPEN (failed): Requests rejected immediately, no calls to dependency
   ↓ after timeout
HALF-OPEN (testing): Limited requests allowed through to test recovery
   ↓ success
CLOSED (recovered)
   ↓ failure
OPEN again
```

## Implementation (Python)
```python
class CircuitBreaker:
    def __init__(self, failure_threshold=5, timeout=60, success_threshold=2):
        self.failure_count = 0
        self.success_count = 0
        self.state = 'CLOSED'
        self.failure_threshold = failure_threshold
        self.timeout = timeout
        self.success_threshold = success_threshold
        self.last_failure_time = None
    
    def call(self, fn, *args, **kwargs):
        if self.state == 'OPEN':
            if time.time() - self.last_failure_time > self.timeout:
                self.state = 'HALF-OPEN'
            else:
                raise CircuitOpenError("Circuit is OPEN")
        
        try:
            result = fn(*args, **kwargs)
            self._on_success()
            return result
        except Exception as e:
            self._on_failure()
            raise
    
    def _on_success(self):
        if self.state == 'HALF-OPEN':
            self.success_count += 1
            if self.success_count >= self.success_threshold:
                self.state = 'CLOSED'
                self.failure_count = 0
    
    def _on_failure(self):
        self.failure_count += 1
        self.last_failure_time = time.time()
        if self.failure_count >= self.failure_threshold:
            self.state = 'OPEN'
```

## Fallback Strategies
- **Default values**: Return cached/default data
- **Graceful degradation**: Serve reduced functionality
- **Queue for later**: Store request for retry when service recovers

## Outputs
1. Circuit breaker implementation
2. Fallback handler configuration
3. State monitoring dashboard
4. Alert rules for circuit opening
5. Recovery testing procedures
