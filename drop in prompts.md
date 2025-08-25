Copy-Paste Master Prompt — Cursor “sonicmax” IDE Agent

Target: Polish and productionize the Home page after the initial drop-in edits. Stack: Next.js 14 (App Router) + TS + Tailwind + shadcn/ui + Framer Motion (optional). Keep the current visual style.

⸻

ROLE

You are a senior full-stack engineer. Deliver a clean, accessible, performant home page with correct IA, deep links, analytics hooks, and schema. Prefer composition over monoliths. Keep language truthful (targets, not past claims).

⸻

REPO DISCOVERY (run first) 1. Confirm App Router (/app/page.tsx). 2. Find or create:
• /app/(marketing)/home or /app/page.tsx
• /app/(marketing)/components/\* (new components listed below)
• /app/(marketing)/\_content/home.ts (central content object)
• /lib/seo.ts, /lib/schema.ts, /lib/utils/format.ts
• Existing Pilots, FAQ, Timeline, ROI Calculator components—reuse if already built.

⸻

P0 — MUST SHIP POLISH

A) Section IDs + Nav Targets

Add stable anchors used site-wide:
• #services, #pilots, #how-it-works, #cta, #faq, #roi, #integrations, #readiness, #contact
Wire the “See 30-day pilot menu” → /pilots#menu. Primary hero CTA → /contact?intent=discovery.

B) H1 / H2 Semantics + Copy (exact text)
• H1 (hero): Practical AI for Calgary SMBs—Pilot in 30 Days
• Hero sub: Solo AI-integration consultancy helping Calgary businesses automate workflows, deploy assistants, and ship dashboards—safely and measurably.
• Hero CTAs: Book a 30-min discovery call (primary) · See 30-day pilot menu (secondary)
• H2 #services: What I Do for Calgary SMBs
Subtitle: Practical, measurable AI integrations—built around your team and customers.
• H2 #pilots: Example Pilots You Can Run in 30 Days
Footnote (tiny, muted): _Outcomes are targets for pilot planning; we don’t claim prior results._
• H2 #how-it-works: How It Works
Subtitle: A proven process to get you from idea to measurable AI results in 30 days.
• H2 #cta: Ready to Get Started?
Copy: Book your free 30-minute discovery call to map your goals and see if we’re a fit.
• H2 #faq: Frequently Asked Questions
• H2 #roi: ROI Calculator
Footnote (tiny): _Payback depends on your processes and implementation; this is an estimate, not a promise._
• H2 #integrations: We Speak Your Stack
• H2 #readiness: AI Pilot Readiness Checklist

C) Pilot Cards (no past-results stats)

Convert the three gradient cards to PlaybookCard with fields:

type Playbook = {
id: "assistant" | "ops" | "analytics";
title: string;
what: string; // 1 sentence
target: string[]; // 2–3 bullets describing measurable targets
scope: string[]; // 3–5 bullets
cta: { label: string; href: string }; // -> /contact?pilot=...
};

Content (exact):
• Retail FAQ + Order Lookup Assistant
what: A branded assistant that answers FAQs, sizing, and basic order lookups using policy-safe snippets and your knowledge base.
target: ["Faster replies, fewer repetitive tickets", "Measure deflection rate and CSAT"]
scope: ["Knowledge connection (docs/website)", "Guardrails & escalation", "Web widget, SMS option", "Analytics"]
• Ops Reporting & Invoicing Automation
what: A weekly reporting pipeline that pulls data from your tools and emails a clean PDF/dashboard to stakeholders.
target: ["8–12 hrs/week saved (time study)", "Lower error rate via validations"]
scope: ["Connectors", "Data checks", "Scheduled delivery", "Owner’s manual"]
• Analytics Quickstart
what: A small set of dashboards wired to the data you already have (revenue, orders, tickets).
target: ["Answers in <5 minutes for management’s questions", "Adoption of a single source of truth"]
scope: ["Data model", "6–8 KPIs", "Drill-through views", "Governance notes"]

D) “How It Works” timeline (5 steps)

Use current layout; ensure each step has an icon, 1-line body, and 3 acceptance bullets: 1. Discover (Free, 30 min) — audit goals, systems, constraints.
bullets: ["Review current tools & processes","Identify quick wins","Assess technical constraints"] 2. Scope (2–3 days) — fixed pilot plan with metrics and price.
bullets: ["Detailed plan","Success metrics defined","Fixed-price proposal"] 3. Pilot (30 days) — build, test, and ship a small but valuable win.
bullets: ["Incremental releases","User testing & feedback","Production deployment"] 4. Train & Handoff (1 week) — owner’s manual, roles, guardrails.
bullets: ["Docs & training","Access & governance","Support procedures"] 5. Care Plan (optional) — updates, monitoring, KPI reviews.
bullets: ["Monthly check-ins","Performance monitoring","Feature updates"]

E) FAQ items (exact one-liners)
• Will my data be used to train AI? — No—private data stays private; usage limited to your project.
• Cloud vs on-prem? — Default cloud; on VPC or on-prem by request.
• Which models/tools do you use? — Per use case (OpenAI/Groq/Anthropic/etc.) with clear cost + latency trade-offs.
• How do we measure ROI? — Time saved, error rate, ticket deflection, response time, SLA—agreed up front.
• Security & access? — Least-privilege, audit trails, secrets management, off-boarding plan.
• What happens after the pilot? — Handoff or Care Plan; your choice.
• Contracting? — SOW with acceptance criteria; change-orders if scope expands.

F) ROI Calculator (correct math + CTA)
• Inputs: hoursPerWeek, loadedRate, weeksPerYear, pilotPrice (default 7500).
• Derived: weekly, monthly (_ 4.33), yearly (_ weeksPerYear), payback months (pilotPrice / monthlySavings).
• Persist inputs in querystring; update URL on change.
• Add button: “Use these numbers in my inquiry” → /contact?hours=x&rate=y&pilotPrice=z&calcMonthly=a.
• Guard against zero/NaN; format currency via util.

G) Accessibility + Motion
• All cards/toggles focusable with visible outlines.
• Reduce motion if prefers-reduced-motion; otherwise subtle fade/slide for hero and pilot cards using Framer Motion.

H) Performance / LCP
• Ensure hero icon/logo uses next/image with priority.
• Preload CTA route (prefetch) and critical font if you control it.
• Minimize gradient images; use CSS gradients where possible.

I) Schema.org + Meta
• Inject JSON-LD:
• LocalBusiness (name, areaServed: Calgary, sameAs social links)
• Service (3 entries for Assistant, Automation, Analytics)
• FAQPage (from the listed Q/A)
Add helpers in /lib/schema.ts and call from the home page.

J) Analytics hooks

On click of hero CTA and “See pilot scope & pricing” push:

window.dataLayer?.push({ event: "cta_click", cta: "hero_primary", page: "home" });

Likewise for each pilot card start button (cta: "pilot_card_start", pilotId).

⸻

P1 — NICE WINS 1. Content object home.ts exporting all copy used by the page; components accept content props. 2. Sticky “Book a call” on mobile after 50% scroll; hide when contact form in view. 3. Footnote component for standardized tiny legal/clarity text.

⸻

P2 — FUTURE
• A/B hook for hero headline variants (feature-flagged).
• Micro-schema for BreadcrumbList (Home › Pilots etc.).
• Canvas animation perf audit: avoid heavy box-shadows on mobile.

⸻

COMPONENTS TO (CREATE|UPDATE)
• components/PlaybookCard.tsx (server)
• components/Timeline.tsx (server)
• components/FAQ.tsx (server)
• components/RoiCalculator.tsx (client)
• components/Section.tsx (server; shared section wrapper with id, title, subtitle, footnote props)

Each component: typed props, minimal Tailwind classes, aria labels, tests where easy.

⸻

ACCEPTANCE CRITERIA (checklist)
• All sections have correct IDs; nav buttons scroll to anchors / pages.
• Only one H1; remaining headings are H2+.
• Pilot cards show targets & scope, no past-result stats.
• ROI math correct; payback shown; inputs persist in URL; contact CTA passes params.
• FAQ renders as accordion with keyboard + screen reader support.
• JSON-LD for LocalBusiness, Service, FAQ emitted without console warnings.
• LCP < 2.5s on desktop & mobile in dev Lighthouse; a11y ≥ 95.
• All CTAs fire dataLayer events.
• Copy matches exactly the strings above.

⸻

CODE SKETCHES

/app/(marketing)/\_content/home.ts

export const homeContent = {
hero: {
title: "Practical AI for Calgary SMBs—Pilot in 30 Days",
subtitle:
"Solo AI-integration consultancy helping Calgary businesses automate workflows, deploy assistants, and ship dashboards—safely and measurably.",
primaryCta: { label: "Book a 30-min discovery call", href: "/contact?intent=discovery" },
secondaryCta: { label: "See 30-day pilot menu", href: "/pilots#menu" }
},
services: {
title: "What I Do for Calgary SMBs",
subtitle: "Practical, measurable AI integrations—built around your team and customers.",
items: [
{ title: "Deploy an Assistant", text: "Branded assistant with safe access to your knowledge and tools; guardrails first." },
{ title: "Automate Reporting", text: "Identify high-leverage bottlenecks and ship a fixed-scope pilot that saves hours." },
{ title: "Ship Dashboards", text: "Connect your data and ship a small set of dashboards that answer operators’ questions." }
]
},
pilots: { /_ three playbooks as specified above _/ },
faq: [ /* QAs as specified above */ ],
};

/components/RoiCalculator.tsx (formula sketch)

"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useMemo, useState, useEffect } from "react";
import { currency } from "@/lib/utils/format";

export default function RoiCalculator(){
const sp = useSearchParams(); const router = useRouter();
const [hours, setHours] = useState(Number(sp.get("h") ?? 10));
const [rate, setRate] = useState(Number(sp.get("r") ?? 75));
const [weeks, setWeeks] = useState(Number(sp.get("w") ?? 52));
const [price, setPrice] = useState(Number(sp.get("p") ?? 7500));
const weekly = useMemo(()=> Math.max(0, hours*rate), [hours,rate]);
const monthly = useMemo(()=> weekly*4.33, [weekly]);
const yearly = useMemo(()=> weekly\*weeks, [weekly,weeks]);
const paybackMonths = useMemo(()=> monthly>0 ? price/monthly : Infinity, [price,monthly]);

useEffect(()=>{
const q = new URLSearchParams({ h:String(hours), r:String(rate), w:String(weeks), p:String(price) });
router.replace(`?${q.toString()}`, { scroll: false });
}, [hours,rate,weeks,price,router]);

return (
/_ inputs + four KPIs + CTA to /contact with numbers baked in _/
);
}

/lib/schema.ts (helper sketch)

export const ldLocalBusiness = (opts:{name:string,url:string,area:string,email?:string,telephone?:string,sameAs?:string[]}) => ({
"@context":"https://schema.org",
"@type":"LocalBusiness",
name: opts.name, url: opts.url,
areaServed: opts.area,
email: opts.email, telephone: opts.telephone,
sameAs: opts.sameAs ?? []
});

⸻

FINAL STEP

After implementation, run Lighthouse (mobile & desktop). If a11y < 95 or contrast warnings appear on gradient cards, slightly increase text opacity or background overlay.

Proceed.
