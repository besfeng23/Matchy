# Technical Architecture

## 1. Current repo state

Prompt 2 establishes Matchy's implementation skeleton. Before this prompt, the repository was docs/agent oriented and did not contain a runtime application package. The alpha codebase is now structured as a pnpm workspace with a Next.js web app, domain packages, workers, environment placeholders, and architecture documentation.

## 2. Architecture principle

Matchy must be built as a disclosed operator-assisted social chat platform with subscription/credit billing. The architecture must keep these facts enforceable:

- disclosures are shown and accepted before messaging/payment;
- operator-assisted conversations remain disclosed;
- every operator action is internally traceable;
- credits/subscriptions use append-only ledger logic;
- provider webhooks are payment truth;
- Pandora memory is server-only and consent-gated;
- SMTP is transactional and suppression-aware;
- admin, operator, and finance access are separated server-side.

## 3. Workspace layout

```text
apps/web                 Next.js App Router app for public, member, operator, admin, and finance routes
packages/db              Database schema, migrations, query helpers, RLS helpers
packages/billing         Credits, subscriptions, ledger, entitlement logic
packages/yoursafe        Yoursafe provider adapter and webhook mapping
packages/chat            Conversations, messages, queue, operator workflow
packages/pandora         Memory event policy, client, and summary helpers
packages/email           Transactional email templates, suppression, event logging
packages/compliance      Disclosures, profile modes, policy checks, audit helpers
workers                  Background jobs for webhooks, email, queues, and memory
docs                     Product, architecture, route, setup, and go/no-go documentation
tests                    Future unit, integration, E2E, and smoke tests
```

## 4. Web application

The web app lives in `apps/web` and uses the Next.js App Router. The current Prompt 2 shell includes:

- `/` public landing shell;
- `/app` customer/member shell;
- `/operator` operator shell;
- `/admin` admin shell;
- `/admin/finance` finance-admin shell;
- `/api/health` safe health endpoint.

These are intentionally placeholders. Prompt 4 will add real authentication and role guards. Until then, no placeholder route should be treated as secure.

## 5. Frontend route groups

Future route groups should be organized by access level:

- public unauthenticated routes;
- authenticated customer routes;
- operator/moderator routes;
- admin routes;
- finance-admin routes;
- API routes for health, auth callbacks, webhooks, server actions, and jobs.

Navigation hiding must never be considered security. Route handlers, server actions, and database access must enforce permissions.

## 6. Server-side environment handling

`apps/web/src/lib/env.ts` centralizes server-side environment validation. Development can run with missing provider variables. Production must fail loudly if required secrets or provider configuration are missing.

The safe health endpoint returns only booleans showing whether integrations appear configured. It must never return raw keys, tokens, SMTP credentials, database URLs, webhook secrets, or service role credentials.

## 7. Environment variables

`.env.example` contains placeholders only:

- `NEXT_PUBLIC_APP_URL`
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `DATABASE_URL`
- `YOURSAFE_API_KEY`
- `YOURSAFE_WEBHOOK_SECRET`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASSWORD`
- `SMTP_FROM`
- `PANDORA_BASE_URL`
- `PANDORA_INTERNAL_TOKEN`
- `PANDORA_NAMESPACE`

Real secrets must only live in local `.env` files or deployment environment settings, never source control.

## 8. Database architecture

The database layer belongs in `packages/db`. Prompt 3 will create the actual schema and migrations.

Expected core data domains:

- users/accounts;
- roles/memberships;
- profile cards/profile owners/profile disclosure metadata;
- disclosure versions and acceptance events;
- conversations and messages;
- operator assignments and moderation events;
- audit logs;
- credit accounts and append-only ledger entries;
- subscriptions and plans;
- payment intents and webhook events;
- email events;
- memory links.

RLS/server-side authorization must enforce row-level access by user, operator assignment, admin role, finance role, and service role.

## 9. Billing architecture

Billing logic belongs in `packages/billing`.

Required rules:

- balance changes use append-only ledger entries;
- no direct balance mutation without adjustment/reversal event;
- message debits must be idempotent;
- payment credit grants must be idempotent;
- subscription entitlements must be checked server-side;
- finance adjustments require reason and audit log.

## 10. Yoursafe architecture

Provider logic belongs in `packages/yoursafe`.

Prompt 9 must implement an adapter interface around official Yoursafe documentation only. If official docs/sandbox credentials are not available, the package must remain a stub with contract tests. Do not invent live endpoint behavior.

Webhook handling must verify signatures, store raw event metadata safely, enforce idempotency, map provider statuses to internal statuses, and mutate money only through ledger functions.

## 11. Chat and operator architecture

Chat logic belongs in `packages/chat`.

Prompt 6 and Prompt 7 must implement:

- first-message disclosure gating;
- published-profile eligibility checks;
- credit/subscription entitlement checks;
- conversation creation/reuse;
- message statuses;
- operator queue routing;
- claim/release/reply workflow;
- escalation and block/review placeholders;
- internal operator traceability;
- customer-facing disclosure-consistent labels.

## 12. Pandora memory architecture

Memory logic belongs in `packages/pandora`.

Rules:

- Pandora token is server-only;
- memory writes require consent and purpose;
- sensitive data and secrets are denylisted;
- memory failures must not block messaging;
- local `memory_links` records connect local entities to memory references;
- AI/memory must not bypass billing, consent, or human moderation.

## 13. Email architecture

Email logic belongs in `packages/email`.

Rules:

- SMTP credentials are server-only;
- only transactional emails exist until marketing consent is implemented;
- suppression/bounce/preference handling is required;
- email events are logged;
- deliverability must be documented before production;
- fake warm-up/spam behavior is forbidden.

## 14. Workers

The `workers` workspace is reserved for background execution:

- payment webhook post-processing;
- email delivery jobs;
- queue/assignment jobs;
- Pandora memory summary jobs;
- reconciliation jobs.

Workers must use service credentials server-side only and must write audit/job outcome records.

## 15. Observability

Alpha observability must include:

- `/api/health` safe status;
- structured server logs without secrets;
- audit log table;
- payment webhook event table;
- email event table;
- memory link/error status;
- smoke test outputs;
- go/no-go report.

## 16. Testing strategy

Minimum layers:

- unit tests for domain packages;
- integration tests for database/RLS and billing;
- route tests for protected pages;
- webhook idempotency tests;
- message gating tests;
- smoke tests for deployment readiness.

Prompt 2 adds a placeholder smoke script. Real tests must be added as the implementation exists.

## 17. Deployment model

Target deployment:

- web app: Vercel or equivalent Node-compatible host;
- database/auth/storage: Supabase/Postgres;
- background jobs: workers or scheduled jobs depending on final host;
- email: SMTP provider with SPF/DKIM/DMARC configured;
- payments: Yoursafe provider with webhook endpoint;
- memory: Pandora memory API with server-only token.

## 18. Prompt 2 completion status

Prompt 2 creates structure and placeholders. It does not yet implement auth, database schema, RLS, real payments, real SMTP, real Pandora writes, or operator workflows. Those belong to later prompts.
