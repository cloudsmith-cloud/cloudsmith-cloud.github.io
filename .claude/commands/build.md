# /build

Build a new page, feature, or component for cloudsmith.cloud.

## Usage

```
/build <task>
```

## Examples

```
/build coming soon landing page with email capture
/build getting started installation guide
/build module overview page for the Planning module
/build navigation header component
```

## What happens

Invokes `workstream-build`: planner (if needed) → coder → reviewer → your approval → commit.

$ARGUMENTS are passed as the task description.
