# GoDaddy → Vercel migration (kevinhatchou.com)

Use this when replacing the GoDaddy **Website Builder** (or legacy hosting) with this Astro site on Vercel. DNS stays at GoDaddy unless you move nameservers.

## Content parity (studio art)

Sketchbook and illustration scans from the GoDaddy builder live under **`/studio`** and **`/work/{slug}`** with hero images in `public/images/work/`. Future bulk photo updates can follow the mapping in `scripts/ingest-art-uploads.json` (copy assets into `public/images/work/`, then add or update matching files under `src/content/work/`).

After adding art entries, run `npm run build` and spot-check `/studio` filter chips plus a few detail pages.

## Before cutover

1. **Inventory the old site**
   - Export or list every public URL (home, blog posts, PDFs, resume links).
   - Note which URLs must **301 redirect** to new paths. Add them to `vercel.json` → `redirects` (see commented examples in repo).
2. **Lower DNS TTL** at GoDaddy to **600 seconds** (10 minutes) 24–48 hours before switch.
3. **Production check on Vercel**
   - `PUBLIC_FORMSPREE_FORM_ID` set for Production.
   - Formspree allows redirect to `https://kevinhatchou.com/contact/thanks`.
   - Optional: `GITHUB_TOKEN` (server-only, never `PUBLIC_`) for home page GitHub activity.
4. **Smoke test** the latest Vercel production deployment (contact form, `/studio`, `/work`, `/blog`).

## Vercel domain setup

1. Vercel project → **Settings → Domains**.
2. Add **kevinhatchou.com** (apex) and **www.kevinhatchou.com**.
3. `vercel.json` already redirects `www` → apex. Prefer apex as canonical (`astro.config.mjs` `site`).

If you also own **kevinhatchoua.com**, add it in Vercel and either redirect it to `kevinhatchou.com` or set `site` + canonicals to match your primary domain.

## GoDaddy DNS (typical)

In GoDaddy → Domain → **DNS**, remove or replace records that point to old GoDaddy hosting.

| Type | Name | Value | Notes |
|------|------|--------|--------|
| `A` | `@` | `76.76.21.21` | Vercel apex (confirm in Vercel domain UI) |
| `CNAME` | `www` | `cname.vercel-dns.com` | Or use Vercel’s exact target from the Domains panel |

Delete conflicting **A/CNAME** records for `@` or `www` that still point at GoDaddy Website Builder.

**Do not** cancel the domain registration; only change DNS and turn off the old website product.

## After DNS propagates

1. Confirm HTTPS certificate is **Valid** in Vercel.
2. Submit `https://kevinhatchou.com/sitemap-index.xml` in Google Search Console.
3. Use Search Console **Change of address** if the hostname stays the same but content structure changed heavily.
4. Cancel or downgrade GoDaddy **Website** hosting (keep domain + DNS).

## Security (already in repo)

- Security headers via `src/middleware.ts` and `vercel.json`.
- Contact form: honeypot field, Formspree server-side spam handling, field length limits.
- No secrets in the client bundle; use `GITHUB_TOKEN` without `PUBLIC_` prefix.

## Rollback

Point GoDaddy `@` / `www` back to the previous hosting targets (screenshot DNS before cutover).
