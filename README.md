# Yusuf Adekola Portfolio

Engineering portfolio using Vinext, React, TypeScript and Tailwind CSS. Read [PROJECT_BRIEF.md](PROJECT_BRIEF.md) before making product or content decisions.

## Development
Use Node.js 22.13 or later and the pnpm version declared in package.json.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm exec tsc --noEmit
pnpm lint
pnpm build
```

Dependencies are already installed in the managed checkout. Runtime-specific guidance is preserved in [docs/STARTER.md](docs/STARTER.md). Preserve the lockfile and package manager.

## Structure
- `app/`: route components and shared layout.
- `components/`: reusable presentation and installed UI primitives.
- `content/`: planned typed project and experience records.
- `/projects/[slug]`: planned shared case-study route.
- `.openai/hosting.json`: existing private Site identity. Never create a duplicate.

No application database or admin dashboard. Unused database helpers remain from the starter; D1 and R2 bindings are null.

## Content workflow
Read the current master Google Doc linked in the brief before importing content. It does not automatically sync. Preserve dates, separate personal contributions from team outcomes, and omit unconfirmed claims and unavailable media. Homepage selection remains provisional until media is provided.

## Delivery
GitHub stores source history. A GitHub push does not publish the Site. Preserve the registered Site for later publication. Never commit credentials, environment files, dependencies, local runtime state or build output.

## Phase status
Baseline contains the original starter, this README and the brief. Typed records and reusable routes follow. Final cinematic styling, media, complete evidence and publication remain future work.
