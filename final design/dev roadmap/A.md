To assess the current build and plan the next steps, I’ll first scan key project files to understand the setup: package.json (scripts/deps), next.config.js (headers/CORS/CSP), scripts/smoke.mjs (smoke tests), env.example (required env vars), and any GitHub Actions workflow files. Running these reads in parallel speeds things up.

I’m going to open the key project files to assess the current build setup, required environment variables, security/CORS settings, smoke tests, and CI workflows. I’ll read them in parallel to speed this up.

I will open key project files in parallel to assess the build scripts, configuration, environment variables, smoke tests, and CI workflows. I’ll also search for ConsentBanner to confirm its location.

To quickly validate the current setup and provide precise recommendations, I'll review the key config files (build scripts, env handling, security/CORS, smoke tests, CI workflows) directly from your workspace. Then I’ll summarize findings and propose next actions.

I’m going to open the following files in parallel:

- package.json
- next.config.js
- scripts/smoke.mjs
- .github/workflows/ci.yml
- .github/workflows/smoke.yml
- lib/env.ts
- vercel.json
- README.md
- app/layout.tsx

To verify details about environment variables and the contact API behavior, I'll open the environment example files and the contact API route, and also search the codebase for uses of CONTACT_DISABLE_EMAIL and header checks in the smoke script.

I'll open [app/api/contact/route.ts](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/app/api/contact/Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/app/api/contact/route.ts:0:0-0:0) to confirm how the contact API handles email dispatch, honeypot, validation, rate limiting, and whether `CONTACT_DISABLE_EMAIL` is respected.

I'll open a few supporting files to complete the review: rate limiting, mail/Slack dispatch, potential duplicate next-sitemap config, SEO config, and branding. This verifies how env vars are used and if any cleanup is needed.

# Findings

- **Build scripts** ([package.json](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/package.json:0:0-0:0))
  - Build/dev/lint/format/type-check/smoke all present.
  - Icons pipeline scripts included.
  - Postbuild runs `next-sitemap` to generate sitemap/robots.

- **Environment handling** ([lib/env.ts](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/lib/env.ts:0:0-0:0), [env.example](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/env.example:0:0-0:0), [.env.example](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/.env.example:0:0-0:0))
  - Centralized env access in [lib/env.ts](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/lib/env.ts:0:0-0:0).
  - Email dispatch depends on `RESEND_API_KEY`, `TO_EMAIL`; Slack via `SLACK_WEBHOOK_URL`.
  - `CONTACT_DISABLE_EMAIL` is defined in env files and set by smoke runners, but is NOT used in the API route to suppress dispatches.

- **Contact API** ([app/api/contact/route.ts](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/app/api/contact/route.ts:0:0-0:0))
  - Anti-abuse: IP-based rate limit ([lib/rate-limit.ts](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/lib/rate-limit.ts:0:0-0:0)), honeypot, time-to-submit, simple content checks.
  - Validation via `inquirySchema`, with backward-compat mapping for minimal payloads.
  - Dispatch: email via Resend ([lib/mail.ts](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/lib/mail.ts:0:0-0:0)) and/or Slack ([lib/slack.ts](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/lib/slack.ts:0:0-0:0)) if configured.
  - If dispatch not configured, logs inquiry and still returns `{ ok: true }`.
  - Note: Ignores `CONTACT_DISABLE_EMAIL` flag today.

- **Security & CORS** ([next.config.js](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/next.config.js:0:0-0:0))
  - Security headers include CSP, CORP, Origin-Agent-Cluster, HSTS, X-Frame-Options, etc.
  - CSP allows GTM and Plausible; uses `'unsafe-inline'` for script/style (expedites adoption, but reduces strictness).
  - API CORS: `Access-Control-Allow-Origin` set to `NEXT_PUBLIC_SITE_URL` (fallback `http://localhost:3000`), not wildcard. Good.

- **Smoke tests** ([scripts/smoke.mjs](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/scripts/smoke.mjs:0:0-0:0))
  - Starts Next server on a free port, probes key routes and sitemap-discovered routes.
  - Submits `/api/contact` (honeypot + valid).
  - Optional a11y checks via Puppeteer + axe-core.
  - Sets `CONTACT_DISABLE_EMAIL=1` in spawned process env but the route doesn’t use it; real dispatch can still happen if keys exist.

- **CI/CD** ([.github/workflows/ci.yml](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/.github/workflows/ci.yml:0:0-0:0), [.github/workflows/smoke.yml](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/.github/workflows/smoke.yml:0:0-0:0))
  - CI matrix Node 18.x/20.x runs type-check, lint, format check, build, smoke.
  - Dedicated smoke workflow sets a minimal [.env.local](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/.env.local:0:0-0:0) (site URL, brand name/logo, CONTACT_DISABLE_EMAIL) then runs `npm run smoke`.
  - In CI (ci.yml), no [.env.local](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/.env.local:0:0-0:0) is created; smoke runs with defaults. That’s okay since route tolerates missing keys.

- **Sitemap config duplication**
  - Both [next-sitemap.config.js](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/next-sitemap.config.js:0:0-0:0) and [next-sitemap.js](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/next-sitemap.js:0:0-0:0) exist. CLI uses the [.config.js](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/next.config.js:0:0-0:0) by default, but the duplicate [next-sitemap.js](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/next-sitemap.js:0:0-0:0) is confusing and contradicts the “deleted duplicate” memory.

- **Branding & SEO**
  - Root metadata/JSON-LD assembled in [app/layout.tsx](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/app/layout.tsx:0:0-0:0).
  - [lib/brand.ts](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/lib/brand.ts:0:0-0:0) defaults logo to `/images/PRAIRIESIGNALLOGO.png` and builds absolute URLs.
  - [components/Analytics.tsx](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/components/Analytics.tsx:0:0-0:0) conditionally injects Plausible/GA.

# Gaps / Risks

- **CONTACT_DISABLE_EMAIL unused**: Smoke sets it, env files document it, but [app/api/contact/route.ts](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/app/api/contact/route.ts:0:0-0:0) doesn’t use it. If Slack/Resend creds exist locally, smoke tests could actually send notifications.
- **Missing header validations in smoke**: No checks for CSP/CORS headers, despite memories mentioning them. Easy to regress without tests.
- **Duplicate sitemap config**: [next-sitemap.js](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/next-sitemap.js:0:0-0:0) should be removed to avoid confusion, since [next-sitemap.config.js](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/next-sitemap.config.js:0:0-0:0) is the one used.
- **CORS origin vs local smoke port**: `Access-Control-Allow-Origin` uses `NEXT_PUBLIC_SITE_URL` (e.g., http://localhost:3000) which may not match the ephemeral smoke port; fine for same-origin requests, but any future header equality checks should account for this.

# Recommended Actions

- **Wire CONTACT_DISABLE_EMAIL** in [app/api/contact/route.ts](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/app/api/contact/route.ts:0:0-0:0):
  - Before dispatch, short-circuit if `env.CONTACT_DISABLE_EMAIL === '1' || 'true'`. This guarantees no outbound calls in smoke/CI/dev when enabled.
- **Add header checks to smoke** ([scripts/smoke.mjs](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/scripts/smoke.mjs:0:0-0:0)):
  - Validate presence of security headers (CSP contains "default-src 'self'"; HSTS, X-Frame-Options, etc.).
  - Validate API CORS header exists and is not `*`. Don’t require strict match to dynamic smoke port; just assert non-wildcard and presence.
- **Remove duplicate sitemap config**:
  - Delete [next-sitemap.js](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/next-sitemap.js:0:0-0:0) and keep [next-sitemap.config.js](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/next-sitemap.config.js:0:0-0:0) only.
- **Production envs on Vercel** (per memories and current files):
  - Set: `NEXT_PUBLIC_SITE_URL=https://prairiesignal.ca`, `RESEND_API_KEY`, `FROM_EMAIL`, `TO_EMAIL`, `NEXT_PUBLIC_SCHEDULER_URL`, `NEXT_PUBLIC_BUSINESS_LOGO=/images/PRAIRIESIGNALLOGO.png`, `NEXT_PUBLIC_BUSINESS_EMAIL` real value.
  - Do not set `CONTACT_DISABLE_EMAIL` in production.
- **Optional hardening**:
  - Consider reducing CSP `'unsafe-inline'` usage when practical (nonces/hashes), especially for script-src.
  - If you want CI smoke parity, mirror smoke.yml’s [.env.local](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/.env.local:0:0-0:0) creation in [ci.yml](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/.github/workflows/ci.yml:0:0-0:0) or call the smoke workflow from CI.

# Status

- Review complete. Config is largely solid: build, env, security headers, and CI all align with your goals.
- Notable items to change: use `CONTACT_DISABLE_EMAIL` in the contact route, add header checks to smoke tests, and remove the duplicate [next-sitemap.js](cci:7://file:///Users/benjaminwilliams/Desktop/TO%20ORGANIZE/Deep%20Research/nexus-ai/next-sitemap.js:0:0-0:0).
- Per memories, verify Vercel envs and redeploy to enable email delivery and scheduler embedding.
