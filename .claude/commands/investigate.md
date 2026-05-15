# /investigate

Debug an issue with cloudsmith.cloud — build failures, broken content, CI errors.

## Usage

```
/investigate <issue>
```

## Examples

```
/investigate build failing on GitHub Pages deploy
/investigate nav links broken after adding new page
/investigate CSS not loading in production
```

## What happens

Invokes `workstream-investigate`: read-only diagnosis → structured findings → your decision on next steps.

$ARGUMENTS describe the issue.
