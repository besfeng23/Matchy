---
name: system-architecture
description: Use for module boundaries, folders, services, APIs, workers, queues, package ownership, and cross-module dependencies.
---

# System Architecture

Rules:
- Put logic in the package that owns it.
- UI does not own provider truth, pricing truth, or ledger changes.
- External providers stay behind interfaces.
- Background work belongs in workers or queues.
- Avoid circular dependencies.

Done:
- Module owner is clear.
- APIs are typed.
- Cross-module calls go through service functions.
- Boundaries are testable.
