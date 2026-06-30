# Matchy

Matchy is a repo-first build system for a subscription/credit-based social chat platform with operator tooling, billing discipline, memory continuity, email deliverability, and compliance controls.

## Product truth

Matchy must be built as a **disclosed operator-assisted social chat platform**. Do not build hidden-deception mechanics. If a profile or conversation is operator-assisted, the data model and UI must preserve that truth.

Canonical disclosure baseline:

> Some profiles and conversations on this platform may be operator-assisted, moderated, fictional, or managed on behalf of a profile owner; credits and subscriptions pay for platform chat and entertainment access, not guaranteed romance, meetings, direct access, or any relationship outcome.

## Agent-ready setup

This repository is prepared for both Claude Code and OpenAI Codex:

- `AGENTS.md` is the root instruction file for Codex.
- `CLAUDE.md` imports `AGENTS.md` and adds Claude Code-specific guidance.
- `.claude/skills/` contains project-scoped Claude Code skills.
- `.agents/skills/` contains project-scoped Codex skills.
- `docs/AGENT_SETUP.md` explains local CLI setup and verification.

## Monorepo structure

```text
apps/web                 Next.js App Router app for public, member, operator, admin, and finance routes
packages/db              Database schema, migrations, and query helpers
packages/billing         Credits, subscriptions, and entitlement logic
packages/yoursafe        Yoursafe payment provider contract/adapter
packages/chat            Conversations, messages, queues, and operator workflow
packages/pandora         Pandora memory events and summaries
packages/email           Transactional email templates, suppression, and delivery
packages/compliance      Disclosures, profile modes, and policy helpers
workers                  Background worker placeholders
docs                     Product, risk, architecture, route, and go/no-go docs
```

## Local setup

```bash
pnpm install
pnpm dev
```

The web app runs from `apps/web`.

Useful commands:

```bash
pnpm typecheck
pnpm lint
pnpm test
pnpm build
pnpm verify
```

## Environment

Copy `.env.example` to `.env.local` or configure deployment environment variables directly.

Never commit real secrets.

Required production variables are documented in `.env.example` and enforced server-side by `apps/web/src/lib/env.ts`.

## Current routes

Prompt 2 creates these structural routes:

- `/`
- `/app`
- `/operator`
- `/admin`
- `/admin/finance`
- `/api/health`

These routes are placeholders until later prompts add auth, roles, database, billing, and workflow logic.

## Non-negotiable build rule

No feature is complete unless billing, audit, permissions, disclosure, security, and tests are handled.

Frontend success pages are not payment proof. Provider webhooks are payment truth. Credit balance changes must go through an immutable ledger. Operator actions must be attributed and audit-logged.
