# CLAUDE.md — cloudsmith-cloud.github.io

Claude Code context for `cloudsmith-cloud.github.io` — the public-facing website for the CloudSmith project at cloudsmith.cloud.

## What cloudsmith-cloud.github.io is

This is the source for the public marketing and documentation website at `cloudsmith.cloud`. It will be the front door for the CloudSmith open-source project: project overview, documentation, getting-started guides, community links, blog, and release notes.

**Tech stack:** To be decided via ADR-021 (Hugo vs Docusaurus vs Astro). **DNS:** Cloudflare. **Hosting:** GitHub Pages or Azure Static Web Apps (also TBD). Current state: placeholder / coming-soon phase. First framework commit expected after ADR-021 resolves.

## Repo structure

Once built, the structure depends on ADR-021. For now:

```
cloudsmith-cloud.github.io/
├── README.md        — repo purpose
└── .claude/         — agents, skills, commands, hooks, logs
```

## Stack / conventions

- **Language / runtime:** TBD — pending ADR-021 (Hugo/Docusaurus/Astro)
- **Commit format:** `type(scope): short description` (conventional commits)
- **ADO reference:** `AB#<id>` in commit messages when applicable
- **Never:** commit secrets, tokens, connection strings, or API keys — this will be a public repo

## Subagents

| Agent | Model | Purpose |
|---|---|---|
| cloudsmith-web-content | sonnet | Writes and edits website content — marketing copy, docs pages, blog posts |
| cloudsmith-coder | opus | Implements web features and components once the framework is chosen |
| cloudsmith-planner | sonnet | Plans features and pages — read-only, produces plans before coding starts |
| cloudsmith-reviewer | sonnet | Reviews for correctness, accessibility, and platform standards |

## Slash commands

| Command | Skill | Purpose |
|---|---|---|
| `/build <task>` | workstream-build | New pages or features: planner → coder → reviewer → human approve → commit |
| `/document <task>` | workstream-document | Content writing: web-content agent → human approve → commit |
| `/investigate <issue>` | workstream-investigate | Debug issues: investigator → findings → human decides next action |

## Hard rules

- No secrets, API keys, tokens, or credentials committed — this repo will be public
- Reviewer model family ≠ coder model family
- Max 2 revision rounds before human escalation
- No silent new dependencies — flag in open_questions

## What Claude may do autonomously

- Read, search, and grep any file in this repo
- Write and edit files within this repo
- Run build, test, and lint commands (once framework is configured)
- `git add`, `git commit`, `git push`
- `gh issue` and `gh pr` commands

## Always confirm before

- Deploying to GitHub Pages or Azure SWA
- Making this repo public (currently private during coming-soon phase)
- Installing or upgrading framework packages
- Modifying any DNS or hosting configuration

## Runtime structure

```
.claude/
├── agents/     — cloudsmith-web-content, cloudsmith-coder, cloudsmith-planner, cloudsmith-reviewer
├── commands/   — build, document, investigate
├── skills/     — workstream-build, workstream-document, workstream-investigate
├── hooks/      — block-secrets, validate-path, log-tokens, summarize-session
├── logs/       — tokens.jsonl, sessions.jsonl (gitignored)
└── settings.json
```
