# Route Map

This route map defines the alpha navigation and implementation order. Routes created in Prompt 2 are structural placeholders only. Prompt 4 must add real authentication and server-side authorization.

## Public routes

| Route | Purpose | Access | Build phase |
|---|---|---|---|
| `/` | Public landing and disclosure baseline | Public | Prompt 2 |
| `/login` | Login/start auth | Public | Prompt 4 |
| `/signup` | Signup and disclosure acceptance | Public/auth flow | Prompt 4 |
| `/terms` | Terms and service model | Public | Later legal/policy pass |
| `/privacy` | Privacy policy | Public | Later legal/policy pass |
| `/refunds` | Refund/dispute policy | Public | Later legal/policy pass |

## Customer/member routes

| Route | Purpose | Access | Build phase |
|---|---|---|---|
| `/app` | Member dashboard shell | Authenticated customer | Prompt 2 shell, Prompt 4 gate |
| `/app/onboarding` | Profile basics and disclosure acceptance | Authenticated customer | Prompt 4 |
| `/app/profiles` | Browse published profiles | Authenticated customer | Prompt 5 |
| `/app/profiles/[profileId]` | Profile detail and pre-chat disclosure | Authenticated customer | Prompt 5 |
| `/app/conversations` | Conversation list | Authenticated customer | Prompt 6 |
| `/app/conversations/[conversationId]` | Customer chat thread | Authenticated customer, owner only | Prompt 6 |
| `/app/billing` | Credits/subscription overview | Authenticated customer | Prompt 8 |
| `/app/billing/checkout` | Start Yoursafe payment | Authenticated customer | Prompt 9 |
| `/app/receipts` | Payment/ledger receipts | Authenticated customer | Prompt 9 |
| `/app/support` | Support/refund requests | Authenticated customer | Prompt 12+ |
| `/app/settings` | Preferences, email, privacy | Authenticated customer | Prompt 11+ |

## Operator/moderator routes

| Route | Purpose | Access | Build phase |
|---|---|---|---|
| `/operator` | Operator dashboard shell | Operator/senior moderator | Prompt 2 shell, Prompt 4 gate |
| `/operator/queue` | Claimable queue | Operator/senior moderator | Prompt 7 |
| `/operator/conversations/[conversationId]` | Assigned conversation workspace | Assigned operator/senior moderator | Prompt 7 |
| `/operator/escalations` | Escalated items | Senior moderator | Prompt 7/12 |
| `/operator/performance` | Operator metrics | Senior moderator/admin | Prompt 12+ |

## Admin routes

| Route | Purpose | Access | Build phase |
|---|---|---|---|
| `/admin` | Admin control tower shell | Admin | Prompt 2 shell, Prompt 4 gate |
| `/admin/users` | User management | Admin | Prompt 12 |
| `/admin/profiles` | Profile CRUD/publishing | Admin | Prompt 5/12 |
| `/admin/disclosures` | Disclosure versions and copy | Admin | Prompt 4/12 |
| `/admin/conversations` | Conversation oversight | Admin/senior moderator | Prompt 12 |
| `/admin/operators` | Operator management | Admin | Prompt 12 |
| `/admin/moderation` | Escalations/blocks/reviews | Admin/senior moderator | Prompt 12 |
| `/admin/audit` | Audit log viewer | Admin | Prompt 12 |
| `/admin/system` | Health/config surface | Admin | Prompt 12 |

## Finance admin routes

| Route | Purpose | Access | Build phase |
|---|---|---|---|
| `/admin/finance` | Finance shell | Finance admin/admin | Prompt 2 shell, Prompt 4 gate |
| `/admin/finance/payments` | Payment intents and statuses | Finance admin | Prompt 9/12 |
| `/admin/finance/ledger` | Credit ledger entries | Finance admin | Prompt 8/12 |
| `/admin/finance/webhooks` | Yoursafe webhook events | Finance admin | Prompt 9/12 |
| `/admin/finance/reconciliation` | Reconciliation and adjustments | Finance admin | Prompt 12 |
| `/admin/finance/refunds` | Refund/reversal workflow | Finance admin/senior moderator | Prompt 12 |

## API routes

| Route | Purpose | Access | Build phase |
|---|---|---|---|
| `/api/health` | Safe non-secret health status | Public/read-only | Prompt 2 |
| `/api/auth/callback` | Auth provider callback | Public callback | Prompt 4 |
| `/api/payments/yoursafe/webhook` | Yoursafe webhook receiver | Provider-signed only | Prompt 9 |
| `/api/jobs/email` | Internal email job trigger | Internal/service only | Prompt 11 |
| `/api/jobs/memory` | Internal Pandora memory job trigger | Internal/service only | Prompt 10 |

## Security notes

- Public links in the header are not access control.
- Prompt 2 shell routes are not secure until Prompt 4 adds auth and role gates.
- API mutation routes must check server-side auth, role, idempotency, and audit logging.
- Finance routes must not be accessible to normal operators.
- Operators must not access all conversations by default; assignment/queue rules apply.
- Payment webhooks must verify signature and enforce idempotency before creating ledger effects.
