# kevinhatchou.com

Personal portfolio and blog for Kevin Hatchoua. Built with Astro, Tailwind CSS 4, and git-based markdown content.

## Stack

- [Astro](https://astro.build) (static-first)
- Tailwind CSS 4 via `@tailwindcss/vite`
- Content collections: `src/content/blog`, `src/content/work`
- Contact: [Formspree](https://formspree.io) free tier, Basic HTML POST (`PUBLIC_FORMSPREE_FORM_ID`)
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
3. Add environment variable `PUBLIC_FORMSPREE_FORM_ID` (Formspree form ID only, not the full URL). Set for Production and Preview.
4. In Formspree → form **Settings**, allow redirect to `https://kevinhatchou.com/contact/thanks` (used after submit).
5. Optional: `GITHUB_TOKEN` (fine-grained or classic PAT with no scopes needed for public events) to avoid API rate limits on the home page. Optional `GITHUB_USERNAME` (defaults to `kevinhatchoua`).
6. Add custom domain `kevinhatchou.com` in Vercel → Domains.
7. In GoDaddy DNS, point to Vercel per [their DNS docs](https://vercel.com/docs/projects/domains/add-a-domain) (typically `A` record to Vercel IP or `CNAME` for `www`).

The home page (`/`) is server-rendered on Vercel so **Latest contributions** stays in sync with your public GitHub activity. All other routes remain static.

**GoDaddy cutover checklist:** [docs/godaddy-migration.md](docs/godaddy-migration.md)

## Security

- Response headers: `src/middleware.ts` + `vercel.json` (HSTS, frame denial, MIME sniffing protection, referrer policy).
- Secrets only in Vercel env (no `PUBLIC_` prefix for `GITHUB_TOKEN`).
- `@astrojs/sitemap` generates `sitemap-index.xml` for crawlers; `public/robots.txt` points to it.

## Privacy

No email, phone, or resume file is rendered on the site. Contact is form-only.

## Design tokens

Warm canvas, Open Sans with Helvetica Neue fallback, terracotta accent. See `src/styles/tokens.css`.
