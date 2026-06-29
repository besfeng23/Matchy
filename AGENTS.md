# Matchy Agent Instructions

These instructions apply to OpenAI Codex and any coding agent that reads `AGENTS.md`.

## Product truth

Matchy must be built as a disclosed operator-assisted social chat platform with subscription and credit billing. Do not build hidden-deception mechanics. If a profile or conversation is operator-assisted, the data model and UI must preserve that truth.

## Non-negotiable rules

- No feature is complete without billing, permissions, audit, security, and test coverage.
- Frontend success pages are not payment proof. Provider webhooks are payment truth.
- Credit balance changes must go through an immutable ledger.
- Moderator actions must be attributed and audit-logged.
- Pandora memory may summarize or suggest, but must not bypass billing, consent, or human review.
- Email must respect consent, suppression, bounces, complaints, and warmup limits.
- Never commit secrets, raw API keys, production env values, or private tokens.

## Expected repo shape

- `apps/web` for the user app, admin, and moderator console.
- `packages/db` for schema, migrations, and query helpers.
- `packages/billing` for credits, subscriptions, and entitlement logic.
- `packages/yoursafe` for Yoursafe provider implementation.
- `packages/chat` for conversations, messages, queues, and moderator workflow.
- `packages/pandora` for memory events and summaries.
- `packages/email` for templates, jobs, suppression, health, and warmup.
- `packages/compliance` for audit logs, disclosures, and policy checks.
- `workers` for webhooks, email, queue, and Pandora background jobs.
- `tests` for unit, integration, E2E, and acceptance tests.

## Required completion checklist

Before claiming a task is done, report:

1. What changed.
2. Affected files and modules.
3. Billing impact.
4. Security/privacy impact.
5. Compliance/disclosure impact.
6. Tests run or why none exist yet.
7. Remaining risks or follow-up work.

## Skill use

Use the skills in `.agents/skills` whenever a task touches that domain. For Claude Code, equivalent skills also exist in `.claude/skills`.
