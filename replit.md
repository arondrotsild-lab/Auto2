# BT Detailing — Детейлинг

Car detailing center website (btdetailing.ru) — a Russian-language marketing site for BT Detailing with service pages, gallery, reviews, and a Telegram-connected lead form.

## Run & Operate

- `pnpm --filter @workspace/detailinga run dev` — run the frontend (Vite, port from env)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS (artifact: `artifacts/detailinga`)
- API: Express 5 (artifact: `artifacts/api-server`)
- Routing: wouter
- UI: shadcn/ui + Radix UI
- Animations: Framer Motion

## Where things live

- `artifacts/detailinga/src/pages/` — page components (Home, ServicePage, Personal, Reviews)
- `artifacts/detailinga/src/components/` — shared components including ReviewForm
- `artifacts/detailinga/public/images/` — all site images (webp)
- `artifacts/api-server/src/routes/lead.ts` — POST /api/lead — Telegram lead submission (formidable, file upload)
- `artifacts/api-server/src/routes/review.ts` — POST /api/review — Telegram review submission
- `.migration-backup/` — original Vercel project snapshot (do not modify)

## Architecture decisions

- Converted from Vercel (serverless) to Replit pnpm workspace: Express API server + Vite frontend as separate artifacts.
- Telegram integration: lead forms and reviews post to a Telegram bot via `TELEGRAM_BOT_TOKEN` + `TELEGRAM_CHAT_ID` secrets.
- Images are served as static assets from `artifacts/detailinga/public/images/` — hundreds of webp files.
- Review route uses `formidable` (temp file approach); lead route uses `multer` (in-memory buffer) — both support optional photo uploads.

## Product

- Russian-language marketing site for a Moscow car detailing center
- Service catalog (body wrap, interior, upgrades, glass, body repair, tire/wheels, detailing/wash)
- Photo gallery per service
- Customer reviews section with star ratings
- Lead capture form → Telegram bot notification
- Review submission form → Telegram bot notification

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- **Telegram secrets required**: `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` must be set as Replit secrets for lead and review forms to work.
- Images are large (hundreds of webp files in `public/images/`) — do not move or rename them, components reference them by path.
- `.migration-backup/` workflows are registered but not needed — only `artifacts/detailinga: web` and `artifacts/api-server: API Server` matter.
- Do not run `pnpm dev` at workspace root — use workflow names with `WorkflowsRestart`.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
