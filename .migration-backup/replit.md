# Точка детейлинга

A detailing business website with a React frontend and Express API backend.

## Stack

- **Frontend**: React + Vite + Tailwind CSS (`artifacts/detailinga`)
- **Backend**: Express API server (`artifacts/api-server`)
- **Database**: PostgreSQL via Drizzle ORM (`lib/db`)
- **Package manager**: pnpm monorepo

## Running the project

Two workflows must be running:

| Workflow | Command | Port |
|---|---|---|
| Frontend | `PORT=5173 BASE_PATH=/ pnpm --filter @workspace/detailinga run dev` | 5173 |
| API Server | `PORT=8080 pnpm --filter @workspace/api-server run dev` | 8080 |

The frontend is the primary preview. The API is reachable at `/api`.

## Database

Replit's built-in PostgreSQL is used. `DATABASE_URL` is injected automatically — no manual secret needed. To push schema changes:

```bash
pnpm --filter @workspace/db run push
```

## Project structure

```
artifacts/
  detailinga/       # React + Vite frontend
  api-server/       # Express API backend
lib/
  db/               # Drizzle ORM schema + client
  api-spec/         # OpenAPI spec
  api-zod/          # Zod schemas (generated)
  api-client-react/ # React Query hooks (generated)
```

## User preferences

- Keep the existing monorepo structure and stack.
