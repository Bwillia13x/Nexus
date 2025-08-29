# Deployment Guide

This app is a Next.js (App Router) site. Recommended hosting is Vercel with a custom domain.

## Prerequisites

- Node 18+ locally (for testing)
- Resend account (for email)
- Your domain DNS access

## 1) Configure Environment Variables

Set these in your deployment provider (Vercel → Project Settings → Environment Variables):

- NEXT_PUBLIC_SITE_URL: https://yourdomain.com
- RESEND_API_KEY: (from Resend)
- FROM_EMAIL: noreply@yourdomain.com (verified sender on Resend)
- TO_EMAIL: contact@yourdomain.com (your receiving inbox)
- SLACK_WEBHOOK_URL: (optional, to receive inquiry notifications)
- UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN: (optional, production rate limiting)
- NEXT_PUBLIC_PLAUSIBLE_DOMAIN or NEXT_PUBLIC_GA_ID: (optional analytics)

Tip: copy `.env.example` values you use into Vercel. Keep `.env.local` for local dev only.

## 2) Deploy on Vercel

1. Push the repo to GitHub/GitLab/Bitbucket
2. Import the repo at https://vercel.com/new
3. Framework: Next.js (auto-detected); Build Command: `npm run build`; Output: auto
4. Add the environment variables above (Production + Preview)
5. Trigger a Production deploy

## 3) Add a Custom Domain

1. Vercel → Project → Settings → Domains → Add
2. If Vercel-managed DNS: assign the domain and confirm
3. If external DNS: create the suggested A/AAAA/CNAME records
4. Choose your canonical host (apex or www) and set a redirect for the other
5. Confirm the domain shows “Valid Configuration” and SSL is issued

## 4) Email Deliverability (Resend)

1. In Resend → Domains → Add your domain
2. Add the DKIM/SPF records to your DNS
3. Wait for verification, then use a `FROM_EMAIL` on that domain
4. Test the contact form in Production (look for 200 OK and an email delivery)

## 5) Production Checks

- `NEXT_PUBLIC_SITE_URL` matches your final domain
- Run locally: `npm run build && npm run smoke` (all ✅)
- Open `/sitemap.xml`; verify canonical URLs
- Share a page to confirm Open Graph image `/og.svg` appears
- Test the contact form and Slack notifications (if configured)

## 6) Optional Hardening

- Enable Upstash Redis for rate limiting in `lib/rate-limit.ts`
- Restrict API CORS if cross-origin isn’t needed (see `vercel.json`)
- Add analytics (Plausible or GA4)

## Self-Hosting (Alternative)

If not using Vercel:

1. `npm ci && npm run build`
2. Run behind a reverse proxy: `PORT=3000 NODE_ENV=production npm start`
3. Terminate TLS at the proxy (Nginx/Traefik/Caddy) and point DNS
4. Set the same environment variables for the process
