# jnutterdev.com

Personal portfolio and developer site for John Nutter — full stack developer based in Decatur, GA. Built with Astro and Tina CMS, self-hosted with GitHub Actions CI/CD.

The design uses a signage-inspired editorial aesthetic: muted sage green, large cream letterform, near-black type, and a wayfinding-style data grid in the hero. Reference mockup is in `mockup-sage/`.

---

## Tech Stack

- **Framework:** [Astro](https://astro.build)
- **CMS:** [Tina CMS](https://tina.io) (Git-backed, visual editor)
- **Styling:** CSS (scoped)
- **Hosting:** Self-hosted VPS
- **CI/CD:** GitHub Actions → SSH/rsync deploy

---

## Getting Started

### Prerequisites

- Node.js 24.16.0 (LTS)
- npm

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

The site runs at `http://localhost:4321`. Tina CMS editor is available at `http://localhost:4321/admin`.

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
├── astro.config.mjs
├── package.json
└── README.md
```

---

## Content Management

Content is managed via [Tina CMS](https://tina.io) and stored as Markdown/MDX files in the `content/` directory. All edits made through the Tina editor are committed directly to the repository, which triggers an automatic deploy.

### Content types

- **Projects** — `src/content/projects/[slug].mdx`
- **Blog posts** — `src/content/blog/[slug].mdx`

To edit content locally, run the dev server and navigate to `/admin`.

---

## Deployment

Deployments are handled automatically via GitHub Actions on every push to `main`.

### Pipeline steps

1. Checkout repo
2. Install dependencies (`npm ci`)
3. Build site (`npm run build`)
4. Rsync `dist/` to the production server over SSH

### Required GitHub secrets

| Secret | Description |
|---|---|
| `SSH_HOST` | Production server hostname or IP |
| `SSH_USER` | SSH username |
| `SSH_KEY` | Private SSH key for deploy access |
| `TINA_CLIENT_ID` | Client ID from Tina Cloud project settings |
| `TINA_TOKEN` | Read/write token from Tina Cloud project settings |

See `.github/workflows/deploy.yml` for the full workflow configuration.

---

## Local Development Notes

- Running `npm run tina:dev` requires `TINA_CLIENT_ID` and `TINA_TOKEN` set in a `.env` file — get these from your Tina Cloud project settings
- Content changes made via the Tina editor write directly to `src/content/` as MDX files and commit to the repo
- The contact form uses Formspree — replace `YOUR_FORM_ID` in `src/pages/contact.astro` with your real form ID

---

## Contact

- **Email:** hello@jnutterdev.com
- **GitHub:** [github.com/jnutterdev](https://github.com/jnutterdev)
- **LinkedIn:** [linkedin.com/in/jnutterdev](https://www.linkedin.com/in/jnutterdev)
- **Mastodon:** [@jnutterdev@mastodon.social](https://mastodon.social/@jnutterdev)
- **Bluesky:** [@jnutterdev.bsky.social](https://bsky.app/profile/jndev.bsky.social)

---

© 2018–2026 John Nutter
