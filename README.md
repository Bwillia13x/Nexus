# Nexus AI Frontend

This repository contains a Next.js 14 application implementing the Nexus AI website with an eggshell palette and liquid‑glass aesthetic. The project is structured around the Next.js App Router and TypeScript with Tailwind CSS for styling. Components are modular and data‑driven, making it easy to expand pages and sections.

## Running locally

```bash
pnpm install   # or npm install
pnpm dev       # or npm run dev
```

Then open `http://localhost:3000` in your browser. The home page includes a hero section, services overview, case studies, and contact form. Additional routes exist for `/services`, `/about`, and `/contact`.

## Project structure

- `app/` – Contains the App Router pages and API routes.
  - `page.tsx` – Home page.
  - `services/page.tsx` – Full services page (pulls from `content/services.json`).
  - `about/page.tsx` – About section with mission, vision, values, team and timeline.
  - `contact/page.tsx` – Standalone contact page using the shared form component.
  - `api/contact/route.ts` – A simple API endpoint for handling contact form submissions. Currently logs the submission to the server console.
- `components/` – Reusable React components like `Nav`, `Hero`, `ServicesOverview`, `CaseStudiesOverview`, `ContactForm`, and `Footer`.
- `content/` – JSON and MDX content that feeds data‑driven pages. Currently includes `services.json` with detail for each service.
- `styles/` – Global CSS and design tokens. `tokens.css` defines CSS variables for the eggshell palette and glass surfaces. `globals.css` applies Tailwind layers and base styles.
- `next.config.js` – Enables the experimental App Router.
- `tailwind.config.js` – Configures Tailwind with custom colors and content paths.
- `postcss.config.js` – Configures PostCSS for Tailwind and autoprefixer.
- `next-seo.config.ts` – Default SEO configuration for `next-seo`.
- `next-sitemap.js` – Generates sitemap and robots.txt for search engines.

## Notes

- Design tokens are defined via CSS variables in `styles/tokens.css` and referenced in Tailwind config using the `var(--token)` syntax.
- The `ContactForm` component includes a client-side handler that posts to `/api/contact`. You can replace the logging logic in `app/api/contact/route.ts` with real email or CRM integration.
- The layout file `app/layout.tsx` applies global styles and metadata. Additional SEO tags can be configured using `next-seo`.

Feel free to build further on this foundation by adding more pages, refining the design, or integrating a CMS for content management.