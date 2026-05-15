# Workstream: Build

## Purpose

Implement new pages, features, or components for cloudsmith.cloud.

## Invoked by

`/build <task>` — e.g., `/build coming soon landing page`, `/build install docs page`

## Pipeline

### Stage 1 — Plan (cloudsmith-planner, if task > 3 files or > 1 hour)

Invoke `cloudsmith-planner` with `task`: "{{$ARGUMENTS}}"

Show the plan to the human. Ask: "Does this plan look right? Any scope changes?" Incorporate feedback before continuing.

Skip this stage for trivial tasks (1–2 files, under 30 minutes).

### Stage 2 — Implement (cloudsmith-coder)

Invoke `cloudsmith-coder` with `task`: "{{$ARGUMENTS}}" and `plan`: Stage 1 output (if present).

### Stage 3 — Review (cloudsmith-reviewer)

Invoke `cloudsmith-reviewer` with `task`: "{{$ARGUMENTS}}" and `coder_output`: Stage 2 output.

If `verdict: request_changes`: invoke `cloudsmith-coder` again with the specific issues (max 2 cycles; after 2, escalate to human).

If `verdict: block`: stop, present issues to human. Do not commit.

### Stage 4 — Human approval (pause)

Show changes to human. Ask: "Ready to commit?"

On approval:
```
git add <changed files>
git commit -m "feat(<scope>): <description>"
git push
```

## Failure handling

- If coder hits `status: blocked`: surface to human immediately — do not attempt workarounds
- If reviewer blocks 2× on the same issue: escalate to human for direct intervention
