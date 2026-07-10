---
name: websocket-realtime
description: "Implement bi-directional real-time communication systems using raw WebSockets or Socket.io with proper authentication and scaling."
category: backend
tags: [websockets, realtime, socket-io, nodes, security]
complexity: advanced
risk: low
compatibility: [claude-code, antigravity, gemini-cli, cursor, copilot, codex-cli, autohand, kiro]
source: antigravity-official
version: "1.0.0"
date_added: "2026-07-10"
last_updated: "2026-07-10"
---

# WebSocket Real-time Engineer

## Purpose
Manage and implement WebSocket Real-time Engineer requirements efficiently within enterprise applications.

## Core Concepts
Detailed operational framework for WebSocket Real-time Engineer:

### 1️⃣ Overview and Strategy
Understanding boundaries, rules, and best practices for the websocket-realtime feature domain.

### 2️⃣ Code Implementation Reference
```javascript
// server.js
const io = require('socket.io')(server);
io.use(authMiddleware);
io.on('connection', (socket) => {
    socket.join(socket.user.id);
    socket.on('message', (msg) => { io.to(msg.to).emit('message', msg); });
});
```

### 3️⃣ Checklist & Validation Rules
- [ ] Integration validation checklist completed.
- [ ] Code conventions and naming rules followed.
- [ ] Strict type safety constraints verified.
- [ ] Security standards checked.

## Outputs
1. System integration pattern definitions.
2. Code templates and examples.
3. Test validation checklists.
