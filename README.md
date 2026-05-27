# jnutterdev.com

Personal portfolio and developer site for John Nutter — full stack developer based in Decatur, GA. Built with Astro and Tina CMS, deployed to Cloudflare Workers via GitHub Actions.

The design uses a signage-inspired editorial aesthetic: muted sage green, large cream letterform, near-black type, and a wayfinding-style data grid in the hero. Reference mockup is in `mockup-sage/`.

---

## Tech Stack

- **Framework:** [Astro](https://astro.build)
- **CMS:** [Tina CMS](https://tina.io) (Git-backed, Tina Cloud)
- **Styling:** CSS (scoped)
- **Hosting:** Cloudflare Workers
- **CI/CD:** GitHub Actions → Cloudflare Workers (via Wrangler)

---

## Getting Started

### Prerequisites

- Node.js 24.16.0 (LTS)
- npm 11

### Install

```bash
git clone https://github.com/jnutterdev/jnutterdev.com.git
cd jnutterdev.com
npm install
```

### Run locally

```bash
npm run dev
```

The site runs at `http://localhost:4321`.

### Run locally with Tina CMS editor

```bash
npm run tina:dev
```

The site runs at `http://localhost:4321` and the Tina editor is available at `http://localhost:4321/admin`. Requires `TINA_CLIENT_ID` and `TINA_TOKEN` in a `.env` file.

### Build

```bash
npm run build
```

Output is generated in `dist/`.

---

## Project Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml        # CI/CD pipeline
├── mockup-sage/              # HTML/CSS design mockup (reference only)
│   └── index.html
├── public/                   # Static assets (favicon, images)
├── src/
│   ├── components/           # Nav, Footer, CTAStrip
│   ├── content/
│   │   ├── blog/             # Blog post MDX files (managed by Tina)
│   │   └── projects/         # Project MDX files (managed by Tina)
│   ├── content.config.ts     # Content collection schemas (Astro 6)
│   ├── layouts/              # BaseLayout wrapper
│   ├── pages/                # Astro pages and dynamic routes
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── projects/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── blog/
│   │       ├── index.astro
│   │       └── [slug].astro
│   └── styles/
│       └── global.css        # Design tokens + all page styles
├── tina/
│   └── config.ts             # Tina CMS schema definition
├── wrangler.toml             # Cloudflare Workers config
├── astro.config.mjs
├── package.json
└── README.md
```

---

## Content Management

Content is managed via [Tina CMS](https://tina.io) and stored as Markdown/MDX files in `src/content/`. All edits made through the Tina editor are committed directly to the repository, which triggers an automatic deploy.

### Content types

- **Projects** — `src/content/projects/[slug].mdx`
- **Blog posts** — `src/content/blog/[slug].mdx`

To edit content locally, run `npm run tina:dev` and navigate to `/admin`.

---

## Deployment

Deployments are handled automatically via GitHub Actions on every push to `main`. The build runs in GitHub Actions (which handles the memory-intensive Tina build step), then deploys directly to Cloudflare Workers via Wrangler. Cloudflare has no build command configured — it only serves what GitHub Actions pushes.

### Pipeline steps

1. Checkout repo
2. Install dependencies (`npm ci`)
3. Build site (`npm run tina:build`)
4. Deploy `dist/` to Cloudflare Workers (`wrangler deploy`)

### Required GitHub secrets

| Secret | Description |
|---|---|
| `TINA_CLIENT_ID` | Client ID from Tina Cloud project settings |
| `TINA_TOKEN` | Read/write token from Tina Cloud project settings |
| `CLOUDFLARE_API_TOKEN` | API token with "Edit Cloudflare Workers" permissions |
| `CLOUDFLARE_ACCOUNT_ID` | Found in the Cloudflare Workers dashboard sidebar |

---

## Contact

- **Email:** hello@jnutterdev.com
- **GitHub:** [github.com/jnutterdev](https://github.com/jnutterdev)
- **LinkedIn:** [linkedin.com/in/jnutterdev](https://www.linkedin.com/in/jnutterdev)
- **Mastodon:** [@jnutterdev@mastodon.social](https://mastodon.social/@jnutterdev)
- **Bluesky:** [@jnutterdev.bsky.social](https://bsky.app/profile/jndev.bsky.social)

---

© 2018–2026 John Nutter
