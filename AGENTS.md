# Repository Guidelines

## Project Structure & Module Organization

- Next.js 15 App Router drives route trees in `app/`; colocate layouts, server components, and client companions per segment.
- Shared UI primitives stay in `components/`, reusable logic in `lib/`, and contract definitions in `types/` to keep imports shallow.
- Tailwind layers, design tokens, and marketing copy live in `styles/` and `content/`; static assets belong in `public/`.
- Source SVGs sit in `icons/svg`; generated React icons and sprite maps land in `components/icons/` after running icon scripts in `scripts/`.

## Build, Test, and Development Commands

- `npm run dev` starts the local dev server with hot reload.
- `npm run build` compiles a production bundle; follow with `npm run start` to smoke the output.
- `npm run lint`, `npm run format:check`, and `npm run type-check` gate CI-quality hygiene locally.
- `npm run smoke` executes the Puppeteer + axe-core regression (requires a fresh `npm run build`).
- Asset workflows lean on `npm run icons:build`; prefer that aggregate script over individual icon tasks.

## Coding Style & Naming Conventions

- Prettier enforces 2-space indentation, 80-character width, semicolons, and single quotes; ESLint surfaces deviations as errors.
- Use PascalCase filenames for components (`HeroSection.tsx`), camelCase for hooks/utilities (`useContactForm.ts`), and SCREAMING_SNAKE_CASE for config constants.
- Favor server components by default; switch to client components only when interactivity or browser APIs are required.
- Reference icons through the generated sprite or React wrappers instead of inlining SVG markup.

## Testing Guidelines

- Today the automated coverage is the smoke suite in `scripts/smoke.mjs`; run `npm run build && npm run smoke` before every PR.
- Expand coverage alongside new features with colocated `*.test.ts` or `*.smoke.mjs` files and keep accessibility assertions intact.

## Commit & Pull Request Guidelines

- Follow the repository pattern: concise, Title Case subjects with optional scope prefixes (`Perf:`, `UI:`) and semicolons when bundling related tweaks.
- Squash noisy WIP commits locally; PRs should describe the user impact, list the scripts you ran, and link tracking issues.
- Attach before/after screenshots or short clips for UI shifts, and call out any new env vars referencing `.env.example`.

## Environment & Configuration Notes

- Copy `.env.example` to `.env.local`; never commit populated env files. Vercel-specific overrides live in `vercel.json` and `next.config.js`.
- When introducing icons or marketing assets, vectorize sources with `npm run icons:vectorize` before placing them in `icons/svg`.
