# Agent Setup

This repo is prepared for both Claude Code and OpenAI Codex.

## Claude Code

Claude Code uses `CLAUDE.md` plus project skills under `.claude/skills/<skill-name>/SKILL.md`.

Install locally from the official Claude Code installer for your OS, then run:

```bash
cd Matchy
claude
```

Verify project memory and skills:

```text
/memory
/skills
```

Expected result: Claude loads `CLAUDE.md`, imports `AGENTS.md`, and lists the project skills under `.claude/skills`.

## OpenAI Codex

Codex uses `AGENTS.md` for repository instructions and project skills under `.agents/skills/<skill-name>/SKILL.md`.

Run from the repository root:

```bash
codex --ask-for-approval never "Summarize the current project instructions."
```

Expected result: Codex summarizes guidance from `AGENTS.md` and can discover the skills under `.agents/skills`.

## Operating rule

Do not treat agent setup as enforcement by itself. These files guide agents. Real enforcement still requires tests, code review, branch protection, secret scanning, audit logs, and runtime permission checks.
