---
name: monitoring-setup
description: "Set up comprehensive monitoring with Prometheus, Grafana, and alerting. Covers metrics, dashboards, SLOs, and on-call runbooks."
category: devops
tags: [monitoring, prometheus, grafana, alerting, observability]
complexity: advanced
risk: low
compatibility: [claude-code, antigravity, gemini-cli, cursor, copilot, codex-cli, autohand, kiro]
source: antigravity-official
version: "1.0.0"
date_added: "2026-07-10"
last_updated: "2026-07-10"
---

# Monitoring & Observability Setup

## Purpose
Build comprehensive observability for production systems covering metrics, logs, traces, and alerts.

## The Three Pillars of Observability

### 1️⃣ Metrics (Prometheus + Grafana)
```yaml
# prometheus.yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'myapp'
    static_configs:
      - targets: ['myapp:3000']
    metrics_path: '/metrics'

  - job_name: 'postgresql'
    static_configs:
      - targets: ['postgres-exporter:9187']
```

### Key Metrics to Track
```
Application:
- Request rate (req/s)
- Error rate (% 5xx)
- P50/P95/P99 latency
- Active connections

Infrastructure:
- CPU utilization
- Memory usage
- Disk I/O
- Network throughput

Business:
- Active users
- Orders per minute
- Revenue per hour
- Conversion rate
```

### Alerting Rules
```yaml
# alerts.yml
groups:
  - name: application
    rules:
      - alert: HighErrorRate
        expr: rate(http_requests_total{status=~"5.."}[5m]) / rate(http_requests_total[5m]) > 0.05
        for: 2m
        labels:
          severity: critical
        annotations:
          summary: "Error rate above 5%"
          runbook_url: "https://wiki.example.com/runbooks/high-error-rate"

      - alert: HighLatency
        expr: histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m])) > 1.0
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "P99 latency above 1 second"
```

### 2️⃣ Logging (Structured)
```javascript
// Always use structured JSON logs
logger.info('Order processed', {
  orderId: order.id,
  userId: order.userId,
  amount: order.total,
  duration_ms: processingTime,
  requestId: req.id,
});

// Never use string interpolation for log data
// ❌ logger.info(`Order ${orderId} processed in ${time}ms`)
```

### 3️⃣ Distributed Tracing (OpenTelemetry)
```javascript
import { trace } from '@opentelemetry/api';

const tracer = trace.getTracer('my-service');

async function processOrder(orderId: string) {
  const span = tracer.startSpan('processOrder');
  span.setAttribute('order.id', orderId);
  
  try {
    // Business logic...
    span.setStatus({ code: SpanStatusCode.OK });
  } catch (error) {
    span.setStatus({ code: SpanStatusCode.ERROR, message: error.message });
    span.recordException(error);
    throw error;
  } finally {
    span.end();
  }
}
```

## Outputs
1. Prometheus configuration
2. Grafana dashboards (JSON)
3. Alert rules for SLOs
4. Structured logging setup
5. OpenTelemetry instrumentation
6. On-call runbook template
