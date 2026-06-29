# Matchy

Matchy is a repo-first build system for a subscription/credit-based social chat platform with operator tooling, billing discipline, memory continuity, email deliverability, and compliance controls.

## Agent-ready setup

This repository is prepared for both Claude Code and OpenAI Codex:

- `AGENTS.md` is the root instruction file for Codex.
- `CLAUDE.md` imports `AGENTS.md` and adds Claude Code-specific guidance.
- `.claude/skills/` contains project-scoped Claude Code skills.
- `.agents/skills/` contains project-scoped Codex skills.
- `docs/AGENT_SETUP.md` explains local CLI setup and verification.

## Non-negotiable build rule

No feature is complete unless billing, audit, permissions, disclosure, security, and tests are handled.
