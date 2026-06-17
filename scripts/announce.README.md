# announce.mjs

Announces new content to Bluesky and Mastodon when `.mdx` files are pushed to `main`. After posting, it writes the social post URLs back into the file's frontmatter and commits them.

## Files to copy

```
scripts/announce.mjs
scripts/announce.config.json
.github/workflows/announce.yml
```

---

## Setup

### 1. GitHub Secrets

Add these in your repo under **Settings → Secrets and variables → Actions**:

| Secret | Description |
|---|---|
| `BLUESKY_HANDLE` | Your full handle (e.g. `you.bsky.social`) |
| `BLUESKY_APP_PASSWORD` | App password from bsky.app → Settings → App Passwords |
| `MASTODON_INSTANCE` | Your instance domain only, no protocol (e.g. `mastodon.social`) |
| `MASTODON_ACCESS_TOKEN` | OAuth token from your Mastodon instance → Settings → Development |

Both platforms are optional. If a secret pair is missing, that platform is silently skipped.

### 2. Configure content types

Edit `scripts/announce.config.json` to match your project's content structure:

```json
{
  "contentTypes": [
    {
      "dir": "src/content/blog/",
      "urlPath": "blog",
      "excerptField": "excerpt",
      "imageField": "cover_image"
    }
  ]
}
```

| Field | Description |
|---|---|
| `dir` | Path to the content directory, relative to repo root |
| `urlPath` | URL segment used to build the post link (e.g. `blog` → `https://site.com/blog/slug`) |
| `excerptField` | Frontmatter field used as the post body text |
| `imageField` | Frontmatter field for the post image (optional — omit the field from frontmatter to skip) |

### 3. Set SITE_URL

In `.github/workflows/announce.yml`, set `SITE_URL` in the env block to match your site:

```yaml
env:
  SITE_URL: https://yoursite.com
```

### 4. Match your deploy workflow name

The workflow triggers `on: workflow_run` after a workflow named `Deploy` completes. Update the `workflows:` key if yours has a different name:

```yaml
on:
  workflow_run:
    workflows: [Deploy]   # change this to match your deploy workflow
```

---

## Required TinaCMS fields

For each content collection being announced, ensure these fields exist in `tina/config.ts`.

### Required

| Field name | Tina type | Purpose |
|---|---|---|
| `title` | `string` | Used as the opening line of the post |
| `draft` | `boolean` | When `true`, the file is skipped entirely |
| `<excerptField>` | `string` | Body text of the social post — matches whatever you set as `excerptField` in the config |

### Optional but recommended

| Field name | Tina type | Purpose |
|---|---|---|
| `<imageField>` | `image` | Attached as media to the post — matches whatever you set as `imageField` in the config |
| `blueskyUrl` | `string` | Written back by the script after a successful Bluesky post |
| `mastodonUrl` | `string` | Written back by the script after a successful Mastodon post |

### Example Tina field definitions

```ts
{ type: 'boolean', name: 'draft', label: 'Draft' },
{ type: 'string', name: 'excerpt', label: 'Excerpt', ui: { component: 'textarea' } },
{ type: 'image', name: 'cover_image', label: 'Cover Image' },
{ type: 'string', name: 'blueskyUrl', label: 'Bluesky URL' },
{ type: 'string', name: 'mastodonUrl', label: 'Mastodon URL' },
```

The `blueskyUrl` and `mastodonUrl` fields are written automatically — you don't fill them in manually. They're useful for linking to discussions or knowing whether a post was already announced.

---

## Caveats

**Only detects new files.**
The script diffs `HEAD~1..HEAD` looking for added files (`--diff-filter=A`). Editing an existing file does not trigger a re-announcement. This is intentional.

**Deploy must complete before announce runs.**
Images are fetched directly from `SITE_URL` at announce time. The workflow is triggered `on: workflow_run` after a successful deploy — if your deploy workflow has a different name, update `announce.yml` accordingly.

**Bluesky image limit is 2MB.**
Images over 2MB are skipped and the post goes out without an image. A warning is printed in the action log.

**Only `.mdx` files are detected.**
If your content uses plain `.md` files, change the `f.endsWith('.mdx')` filter in `announce.mjs` to `f.endsWith('.md')` or add both.

**Frontmatter parser is minimal.**
The built-in parser handles simple `key: value` pairs only. Multi-line values, YAML arrays, and nested objects will not parse correctly. Keep `title`, `excerpt`, and similar fields as single-line strings in frontmatter.

**The script commits back to main.**
After writing `blueskyUrl` and `mastodonUrl` into frontmatter, it commits and pushes. The workflow requires `permissions: contents: write`. The bot commit is excluded from re-triggering the announce workflow via an actor check — no infinite loop.

**`draft: true` must be in frontmatter to suppress a post.**
If a file has no `draft` field at all, it will be announced. Set `draft: true` explicitly to hold a post back.
