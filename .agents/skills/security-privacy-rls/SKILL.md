---
name: security-privacy-rls
description: Use for auth, roles, RLS, admin access, operator access, storage, external events, user data, or privacy lifecycle flows.
---

# Security + Privacy + RLS

Rules:
- Backend verifies roles.
- Use least-privilege service access.
- Do not commit private configuration values.
- Add RLS or equivalent checks for user-facing records.
- Audit sensitive admin and operator actions.

Done:
- Role checks are tested.
- Sensitive paths have policies.
- Private config values are not committed.
- Privacy lifecycle is documented.
