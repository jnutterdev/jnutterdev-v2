# jnutterdev.com — Site Brief
**v2 Redesign** | John Nutter | Full Stack Developer

---

## Goals

- **Showcase work** — Portfolio of projects with rich detail pages
- **Content updates** — Blog / devlog for writing and announcements
- **Editable CMS** — Non-code editing via Tina CMS UI

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Astro (static + SSR where needed) |
| CMS | Tina CMS (Git-backed, visual editor) |
| Styling | CSS (scoped) or Tailwind CSS |
| Hosting | Self-hosted server (VPS / Linux) |
| CI/CD | GitHub Actions → SSH deploy to server |
| Domain | jnutterdev.com |
| Contact forms | Static form or PHP endpoint |

> **Note:** Tina CMS works best with Astro in `output: static` mode. Content is stored as Markdown/MDX in the repo — no external database needed. PHP skills are still useful for any custom server-side form handlers.

---

## Site Sections & Routes

| Route | Type | Description |
|---|---|---|
| `/` | Page | Hero with intro, featured projects, and latest blog post teaser |
| `/about` | Page | Bio, skills breakdown, tools, background, links (GitHub, LinkedIn, Mastodon) |
| `/projects` | Page | Filterable grid of all projects with tech tags |
| `/projects/[slug]` | Dynamic | Individual project detail — overview, stack, screenshots, links, learnings |
| `/blog` | Page | Post index — devlogs, tutorials, updates, announcements |
| `/blog/[slug]` | Dynamic | Individual blog post with MDX content, tags, author date |
| `/contact` | Page | Contact form (PHP handler or Formspree fallback), social links |

---

## Content Types (Tina CMS Schema)

### Project
```
title        string
slug         string
description  string
tech[]       array of strings
status       "active" | "archived"
github_url   string (optional)
live_url     string (optional)
thumbnail    image
body         MDX
```

### Blog Post
```
title        string
slug         string
date         datetime
excerpt      string
tags[]       array of strings
cover_image  image (optional)
body         MDX
```

### Site Config
```
nav_links[]  array
social_links[] array
site_title   string
bio          string
profile_photo image
```

### Skills / Tools
```
name         string
category     string  (e.g. "Core dev", "Tools & platforms")
proficiency  string (optional)
```

---

## Design Direction

Retain the existing color palette and typography feel from jnutterdev.com — dark background, clean sans-serif, minimal decorative elements. Update the layout to feel more editorial and modern.

### Suggested Color Palette (carry over)

| Token | Hex | Usage |
|---|---|---|
| `bg-dark` | `#1a1a2e` | Page background |
| `bg-surface` | `#2a2a3e` | Cards, nav |
| `accent` | `#4a9eff` | Links, highlights |
| `text-primary` | `#e0e0e8` | Body text |
| `text-muted` | `#8888a0` | Secondary text, tags |

> Verify these against your actual stylesheet — values are approximations from visual inspection.

### Key Design Decisions

- Dark theme as primary
- Monospace font accents (for code snippets, tech tags)
- Card-based project grid
- Full-width hero section
- Subtle tag/chip system for tech stack filtering
- Minimal navigation

---

## Skill Tags

### Core Dev
`HTML` `CSS` `JavaScript` `React` `PHP` `Astro`

### Tools & Platforms
`Tina CMS` `Contentful` `GitHub` `GitHub Actions` `Jira` `Confluence` `AI Prompting`

---

## CI/CD Deployment Flow

```
1. Push to main branch
   └─ Triggers GitHub Actions workflow on push or merge to main

2. Build step
   └─ npm ci && npm run build
   └─ Astro compiles to dist/

3. Deploy via SSH / rsync
   └─ GitHub Action rsync's dist/ to server over SSH
   └─ Deploy key stored as GitHub secret

4. Tina CMS edits
   └─ Tina pushes a commit to repo on save
   └─ Triggers the same pipeline automatically
```

### GitHub Actions Workflow (outline)

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - name: Deploy via rsync
        uses: burnett01/rsync-deployments@7.0
        with:
          switches: -avzr --delete
          path: dist/
          remote_path: /var/www/jnutterdev.com/
          remote_host: ${{ secrets.SSH_HOST }}
          remote_user: ${{ secrets.SSH_USER }}
          remote_key: ${{ secrets.SSH_KEY }}
```

---

## Next Steps

| Step | Task | Command / Notes |
|---|---|---|
| A | Scaffold Astro project | `npm create astro@latest` — choose "empty" or "minimal" |
| B | Integrate Tina CMS | `npx @tinacms/cli@latest init` — define Project + Blog schemas |
| C | Build pages & components | Homepage hero, project grid, blog index, dynamic detail pages |
| D | Set up GitHub Actions workflow | Create `.github/workflows/deploy.yml`, add SSH key secrets |
| E | Configure server | Nginx/Apache pointing to deploy dir, SSL via Certbot |
| F | Migrate existing content | Port current projects + about info into Tina-managed Markdown files |

---

## Decisions to Make Before Building

1. **Tina CMS hosting** — Tina Cloud (free tier, easiest for live editing) vs. fully self-hosted local mode. Cloud tier is recommended for a live editorial experience.
2. **Astro output mode** — `output: 'static'` for the full site. Switch specific routes to `hybrid` later if server-rendered features are needed.
3. **Styling approach** — Astro scoped CSS (zero-config) or Tailwind via `@astrojs/tailwind`. Both work well.

---

*Brief prepared March 2026 — jnutterdev.com v2*
