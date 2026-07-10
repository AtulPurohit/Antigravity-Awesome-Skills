---
name: clean-architecture
description: "Apply Uncle Bob's Clean Architecture to create maintainable, testable systems with proper separation of concerns."
category: architecture
tags: [clean-architecture, solid, layers, domain-driven]
complexity: expert
risk: low
compatibility: [claude-code, antigravity, gemini-cli, cursor, copilot, codex-cli, autohand, kiro]
source: antigravity-official
version: "1.0.0"
date_added: "2026-07-10"
last_updated: "2026-07-10"
---

# Clean Architecture Expert

## Purpose
Structure codebases with clean boundaries between business logic, use cases, infrastructure, and UI — making systems testable and changeable.

## The Four Layers

### 1️⃣ Entities (Innermost)
Pure business objects with business rules:
```python
class Order:
    def __init__(self, id: str, items: list[OrderItem], customer: Customer):
        self.id = id
        self.items = items
        self.customer = customer
    
    def calculate_total(self) -> Decimal:
        return sum(item.subtotal for item in self.items)
    
    def can_be_cancelled(self) -> bool:
        return self.status in [OrderStatus.PENDING, OrderStatus.PROCESSING]
    
    def apply_discount(self, discount: Discount) -> None:
        if not self.can_apply_discount():
            raise BusinessRuleViolation("Cannot apply discount to this order")
        self.discount = discount
```

### 2️⃣ Use Cases (Application Layer)
Application-specific business rules:
```python
class CreateOrderUseCase:
    def __init__(
        self,
        order_repository: OrderRepository,  # Interface, not implementation
        payment_gateway: PaymentGateway,    # Interface
        notification_service: NotificationService,
    ):
        self.orders = order_repository
        self.payments = payment_gateway
        self.notifications = notification_service
    
    def execute(self, request: CreateOrderRequest) -> CreateOrderResponse:
        # Validate request
        if not request.items:
            raise ValidationError("Order must have at least one item")
        
        # Create entity
        order = Order.create(request.customer_id, request.items)
        
        # Apply business rules
        if request.coupon_code:
            coupon = self.orders.find_coupon(request.coupon_code)
            order.apply_discount(coupon.to_discount())
        
        # Save and trigger side effects
        self.orders.save(order)
        self.notifications.notify_order_created(order)
        
        return CreateOrderResponse(order_id=order.id, total=order.calculate_total())
```

### 3️⃣ Interface Adapters
Controllers, presenters, gateways — translate between use cases and external world:
```python
class OrderController:
    def __init__(self, use_case: CreateOrderUseCase):
        self.use_case = use_case
    
    def create(self, http_request: HttpRequest) -> HttpResponse:
        try:
            request = CreateOrderRequest(
                customer_id=http_request.user.id,
                items=[OrderItem(**item) for item in http_request.body["items"]],
                coupon_code=http_request.body.get("coupon_code"),
            )
            response = self.use_case.execute(request)
            return HttpResponse.created({"order_id": response.order_id, "total": str(response.total)})
        except ValidationError as e:
            return HttpResponse.bad_request({"error": str(e)})
```

### 4️⃣ Frameworks & Drivers (Outermost)
Database implementations, web frameworks, external APIs — all pluggable.

## The Dependency Rule
Dependencies only point INWARD:
```
Frameworks → Interface Adapters → Use Cases → Entities
```
- Business logic never imports from outer layers
- Outer layers depend on inner layers via interfaces

## Outputs
1. Layer structure for your project
2. Entity and use case design
3. Interface definitions for dependencies
4. Adapter implementations
5. Dependency injection setup
