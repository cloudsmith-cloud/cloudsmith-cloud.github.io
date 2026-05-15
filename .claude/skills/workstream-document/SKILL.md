# Workstream: Document

## Purpose

Write or update website content for cloudsmith.cloud — marketing copy, documentation pages, blog posts.

## Invoked by

`/document <task>` — e.g., `/document coming soon page copy`, `/document getting started guide`

## Pipeline

### Stage 1 — Write (cloudsmith-web-content)

Invoke `cloudsmith-web-content` with `task`: "{{$ARGUMENTS}}"

The agent writes or edits the target Markdown content.

### Stage 2 — Human review (pause)

Show the content to the human. Ask: "Ready to commit?"

On approval:
```
git add <file>
git commit -m "docs(<scope>): <description>"
git push
```

## Failure handling

- If content references an undecided ADR, flag it before committing — content should describe behavior, not specific technology choices that haven't been made yet
