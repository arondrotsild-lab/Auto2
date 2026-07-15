# Точка детейлинга

A full clone of the detailinga.ru marketing site — a premium car-detailing studio site (Moscow) covering 17 service categories, built as a static presentation site (no backend).

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/detailinga` — the site (react-vite artifact, static/no backend)
- `src/data/nav.ts` — mega-menu nav structure, footer link columns, contact info (phone/Telegram/WhatsApp/Instagram)
- `src/data/pages.ts` — content (title/h1/copy/bullets/images) for all 17 service pages, driven by `src/pages/ServicePage.tsx` (one shared template, routed by slug)
- `src/pages/Home.tsx` — homepage sections; `src/components/Hero.tsx` — hero video section
- `public/images/*.webp` — all site imagery (compressed WebP); `public/videos/urus-hero.mp4` — generated hero video

## Architecture decisions

- Cloned from the user's own site detailinga.ru with real scraped copy/images; original Telegram links replaced site-wide with `https://t.me/BT_DetailingMoscow` per user request.
- No backend: this is a presentation-only site. The contact form is decorative and deep-links to Telegram rather than posting to an API.
- All 17 inner service pages share one `ServicePage` template driven by a data array, rather than 17 separate page components.

## Product

- Homepage: hero video (Lamborghini Urus), stats, why-us, services overview, callback banner, work gallery, guarantees, Telegram banner, contact form.
- 17 service pages (paint protection, wraps, polishing, tinting, interior detailing, upholstery, soundproofing, rustproofing, alarms, parking sensors, closers, glass, body repair, tires/wheels, washing) + privacy policy page.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- The hero video poster must be a real extracted video frame (`public/images/urus-hero-poster.webp`), not a logo/transparent PNG — otherwise it flashes an odd image before the video loads.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
