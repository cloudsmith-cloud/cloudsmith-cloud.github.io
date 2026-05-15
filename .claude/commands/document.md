# /document

Write or update website content for cloudsmith.cloud.

## Usage

```
/document <task>
```

## Examples

```
/document homepage hero copy — headline, subheadline, CTA
/document project overview page
/document getting started guide page content
/document blog post: CloudSmith project announcement
```

## What happens

Invokes `workstream-document` with `cloudsmith-web-content` to write the content, then your review before commit.

$ARGUMENTS are passed as the content task.
