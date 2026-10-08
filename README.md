# kevinhatchou.com

Personal portfolio and blog for Kevin Hatchoua. Built with Astro, Tailwind CSS 4, and git-based markdown content.

## Stack

- [Astro](https://astro.build) (static-first)
- Tailwind CSS 4 via `@tailwindcss/vite`
- Content collections: `src/content/blog`, `src/content/work`
- Contact: [Formspree](https://formspree.io) (`PUBLIC_FORMSPREE_FORM_ID`)
- Home page: GitHub public events for **Latest contributions** (optional `GITHUB_TOKEN`, `GITHUB_USERNAME`)

## Local development

```bash
npm install
cp .env.example .env   # add your Formspree form id
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Content

| Type | Path | Notes |
|------|------|--------|
| Blog posts | `src/content/blog/*.md` | Set `draft: true` to hide |
| Case studies | `src/content/work/*.md` | `order` controls sort on `/work` |

## Deploy (Vercel)

1. Import this repo in Vercel.
2. Framework preset: **Astro** (default build: `npm run build`, output: `dist`).
3. Add environment variable `PUBLIC_FORMSPREE_FORM_ID`.
4. Optional: `GITHUB_TOKEN` (fine-grained or classic PAT with no scopes needed for public events) to avoid API rate limits on the home page. Optional `GITHUB_USERNAME` (defaults to `kevinhatchoua`).
5. Add custom domain `kevinhatchou.com` in Vercel → Domains.
6. In GoDaddy DNS, point to Vercel per [their DNS docs](https://vercel.com/docs/projects/domains/add-a-domain) (typically `A` record to Vercel IP or `CNAME` for `www`).

The home page (`/`) is server-rendered on Vercel so **Latest contributions** stays in sync with your public GitHub activity. All other routes remain static.

## Privacy

No email, phone, or resume file is rendered on the site. Contact is form-only.

## Design tokens

Warm canvas, Open Sans with Helvetica Neue fallback, terracotta accent. See `src/styles/tokens.css`.
