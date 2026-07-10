---
name: alerting-config
description: "Design effective alerting that catches real issues and minimizes false alarms."
category: devops
tags: [alerting,pagerduty,prometheus,monitoring,on-call]
complexity: advanced
risk: low
compatibility: [claude-code, antigravity, gemini-cli, cursor, copilot, codex-cli, autohand, kiro]
source: antigravity-official
version: "1.0.0"
date_added: "2026-07-10"
last_updated: "2026-07-10"
---

# Alerting Configuration Expert

## Purpose
Build alerting systems that notify engineers only for actionable, high-severity events.

## Key Principles
1. Every alert must be actionable
2. Alert on symptoms (high latency) not causes (high CPU)
3. Severity-appropriate routing
4. SLO-based burn rate alerts (better than threshold alerts)

## Prometheus Alert Rules
```yaml
groups:
  - name: slo.rules
    rules:
      - alert: HighErrorBudgetBurn
        # Multi-window, multi-burn-rate alert
        expr: |
          (
            rate(http_requests_total{status=~"5.."}[1h]) /
            rate(http_requests_total[1h]) > 0.14
          ) and (
            rate(http_requests_total{status=~"5.."}[5m]) /
            rate(http_requests_total[5m]) > 0.14
          )
        for: 2m
        labels:
          severity: critical
          team: backend
        annotations:
          summary: "Error rate {{ $value | humanizePercentage }} - burning error budget fast"
          runbook: "https://wiki/runbooks/high-error-rate"

      - alert: HighP99Latency
        expr: histogram_quantile(0.99, rate(http_duration_seconds_bucket[5m])) > 1.0
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "P99 latency is {{ $value | humanizeDuration }}"
```

## AlertManager Routing
```yaml
route:
  group_by: [alertname, service]
  group_wait: 30s
  group_interval: 5m
  repeat_interval: 12h
  receiver: slack-default
  routes:
    - matchers: [severity=critical]
      receiver: pagerduty-critical
      continue: true
    - matchers: [severity=warning]
      receiver: slack-warnings

receivers:
  - name: pagerduty-critical
    pagerduty_configs:
      - service_key: $PAGERDUTY_KEY
  - name: slack-warnings
    slack_configs:
      - channel: '#alerts-warnings'
```

## Outputs
1. Alert rules for application and infrastructure
2. AlertManager routing configuration
3. Runbook template for each alert
4. On-call schedule configuration
5. Alert review process (monthly)