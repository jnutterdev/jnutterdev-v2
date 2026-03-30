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

- Node.js 20+
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
├── content/
│   ├── projects/             # Project MDX files (managed by Tina)
│   └── blog/                 # Blog post MDX files (managed by Tina)
├── mockup-sage/              # HTML/CSS design mockup (reference only)
│   ├── index.html
│   ├── about.html
│   ├── projects.html
│   ├── blog.html
│   └── contact.html
├── public/                   # Static assets (images, fonts, favicon)
├── src/
│   ├── components/           # Reusable Astro/React components
│   ├── layouts/              # Page layout wrappers
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
│   └── styles/               # Global CSS
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

- **Projects** — `content/projects/[slug].mdx`
- **Blog posts** — `content/blog/[slug].mdx`

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

See `.github/workflows/deploy.yml` for the full workflow configuration.

---

## Local Development Notes

- Tina CMS runs in local mode during development — no cloud auth required
- Content changes made via the local editor write directly to the `content/` directory
- PHP contact form handler (if used) requires a server with PHP support — not available in the static build output

---

## Contact

- **Email:** hello@jnutterdev.com
- **GitHub:** [github.com/jnutterdev](https://github.com/jnutterdev)
- **LinkedIn:** [linkedin.com/in/jnutterdev](https://www.linkedin.com/in/jnutterdev)
- **Mastodon:** [@jnutterdev@mastodon.social](https://mastodon.social/@jnutterdev)

---

© 2018–2025 John Nutter
