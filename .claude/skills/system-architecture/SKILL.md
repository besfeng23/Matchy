---
name: system-architecture
description: Use when creating or changing modules, folders, services, APIs, package boundaries, workers, queues, or cross-module dependencies.
---

# System Architecture Skill

## Mission
Keep Matchy modular, testable, and auditable. Put logic in the correct owner package instead of scattering behavior through UI code.

## Non-negotiable rules
- Frontend never owns pricing, payment truth, or credit mutation.
- Provider integrations stay behind service interfaces.
- Background work belongs in workers or queues, not random request handlers.
- Sensitive modules must expose narrow APIs and log important actions.
- Do not create circular dependencies between billing, chat, memory, email, and compliance.

## Required checks
- Which module owns this logic?
- Is this server-trusted or client-display only?
- What data does it own?
- What events does it emit?
- What tests prove the boundary works?

## Acceptance criteria
- New code sits in the correct package.
- Public APIs are typed and documented.
- Cross-module calls go through service functions.
- No direct database or payment shortcuts from UI components.
