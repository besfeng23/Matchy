---
name: moderator-operations
description: Use for message queues, claim/reply flows, operator tools, persona cards, escalation, notes, QA, or assignment logic.
---

# Moderator Operations

Rules:
- Two operators cannot claim the same queue item.
- Every reply records actor id and profile context.
- Operators cannot edit account state, provider records, pricing, or audit logs.
- Persona and disclosure notes must be visible before reply.

Done:
- Claim/reply/escalate flows work.
- Concurrent claim test passes.
- Audit trail is complete.
