---
name: event-driven-architecture
description: "Design event-driven systems using async messaging, Kafka, and event patterns. Covers event sourcing, CQRS, saga patterns, and consumer groups."
category: architecture
tags: [event-driven, kafka, events, async, messaging]
complexity: expert
risk: low
compatibility: [claude-code, antigravity, gemini-cli, cursor, copilot, codex-cli, autohand, kiro]
source: antigravity-official
version: "1.0.0"
date_added: "2026-07-10"
last_updated: "2026-07-10"
---

# Event-Driven Architecture Designer

## Purpose
Design systems where components communicate through events for loose coupling, scalability, and resilience.

## Core Concepts

### 1️⃣ Event Design Standards
```json
// Every event should have:
{
  "eventId": "550e8400-e29b-41d4-a716-446655440000",
  "eventType": "order.placed",
  "version": "1.0",
  "timestamp": "2026-07-10T10:00:00Z",
  "source": "order-service",
  "correlationId": "abc123",        // For tracing across services
  "causationId": "previous-event-id",
  "payload": {
    "orderId": "ORD-001",
    "customerId": "CUST-001",
    "total": 99.99,
    "currency": "USD"
  }
}
```

### 2️⃣ Kafka Topic Design
```
Naming convention: {domain}.{entity}.{event}
Examples:
- orders.order.placed
- payments.payment.processed  
- inventory.stock.reserved

Partition strategy:
- Partition by customerId → same customer events in order
- Partition by orderId → same order events in order

Retention:
- Business events: 7-30 days
- Audit events: 1 year
- Metrics/analytics: 24 hours
```

### 3️⃣ Event Sourcing
```python
class OrderEventStore:
    def append(self, stream_id: str, events: list[DomainEvent], expected_version: int) -> None:
        # Optimistic concurrency check
        current_version = self.get_stream_version(stream_id)
        if current_version != expected_version:
            raise ConcurrencyException(f"Expected {expected_version}, got {current_version}")
        
        for event in events:
            self.db.insert({
                "stream_id": stream_id,
                "event_type": event.event_type,
                "payload": event.to_dict(),
                "version": current_version + 1,
            })
    
    def load_stream(self, stream_id: str) -> list[DomainEvent]:
        rows = self.db.query("SELECT * FROM events WHERE stream_id = ? ORDER BY version", stream_id)
        return [self._deserialize(row) for row in rows]

# Rebuild aggregate from event history
order = Order.replay(event_store.load_stream(f"order-{order_id}"))
```

### 4️⃣ Saga Pattern (Distributed Transactions)
```
Choreography Saga (events trigger reactions):
1. order.placed → inventory-service: reserve-stock
2. stock.reserved → payment-service: process-payment  
3. payment.processed → order-service: confirm-order
4. payment.failed → inventory-service: release-stock
                 → order-service: cancel-order

Orchestration Saga (coordinator manages flow):
SagaOrchestrator:
  step1: ReserveStockCommand → on success: goto step2, on failure: compensate
  step2: ProcessPaymentCommand → on success: goto step3, on failure: goto compensate1
  step3: ConfirmOrderCommand
  compensate1: ReleaseStockCommand
```

## Outputs
1. Event catalog with schemas
2. Kafka topic design
3. Consumer group configuration
4. Saga implementation
5. Dead letter queue handling
6. Event schema registry setup
