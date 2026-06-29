---
name: security-privacy-rls
description: Use when changing auth, roles, RLS, admin access, operator access, storage, external events, user data, or privacy lifecycle flows.
---

# Security + Privacy + RLS

Use before editing access control or sensitive data paths.

Rules:
- Backend verifies roles; never trust frontend role claims.
- Use least-privilege service access.
- Do not commit private configuration values.
- Add RLS or equivalent checks for user-facing records.
- Audit sensitive admin and operator actions.
- Model data export, deletion, anonymization, and retention rules.

Checks:
- Who can read this data?
- Who can write it?
- Is there a server-side permission check?
- Are private config values isolated?
- Is the action logged?

Done:
- Role checks are tested.
- Sensitive paths have policies.
- No private config values are committed.
- Privacy lifecycle is documented.
