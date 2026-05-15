# Workstream: Investigate

## Purpose

Root cause analysis for issues in cloudsmith.cloud — build failures, broken links, rendering bugs, CI failures.

## Invoked by

`/investigate <issue>` — e.g., `/investigate build failing on deploy`, `/investigate broken nav link`

## Pipeline

### Stage 1 — Investigate (read-only)

Read all relevant files, run read-only diagnostic commands, check CI logs if available.

Produce a structured findings report:
```yaml
issue: <one sentence>
root_cause: <identified or suspected cause>
evidence: [<file:line or command output excerpt>]
affected_files: [...]
recommended_fix: <what to do>
confidence: <high|medium|low>
```

### Stage 2 — Human review (pause)

Present findings. Ask: "Does this match what you're seeing? Shall I proceed with the fix?"

If fix approved: route to `/build` with the specific fix task.
