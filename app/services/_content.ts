// Centralized content for Services page
export interface ServiceData {
  id: 'assistant' | 'automation' | 'analytics';
  title: string;
  blurb: string;
  intro: string;
  metrics: string[];
  includes: string[];
  deliverables: string[];
  inputs: string[];
  outOfScope: string[];
  risks: string[];
  timeline: string;
  price: string;
  ctaHref: string;
}

export interface CompareRow {
  label: string;
  values: string[];
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Integration {
  name: string;
  category: string;
}

// Hero content
export const heroContent = {
  title: 'Calgary AI Services for SMBs',
  subtitle:
    'Fast, practical integrations—AI Assistant Setup, Automation Audit + Pilot, and Analytics Quickstart. Fixed-scope, measurable outcomes, Calgary-ready privacy.',
  badges: ['Founder-led', 'PIPEDA/PIPA aligned', 'Fixed-scope pilots'],
  primaryCta: { text: 'Book a call', href: '/contact' },
  secondaryCta: { text: 'See pilot scope →', href: '/services#services' },
};

// Process steps content
export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Discovery',
    description: 'Free, 30 min → goals, systems, constraints',
  },
  {
    number: 2,
    title: 'Scope',
    description: '2–3 days → SOW with success metrics & acceptance criteria',
  },
  {
    number: 3,
    title: 'Build',
    description: 'Timeboxed → weekly check-ins',
  },
  {
    number: 4,
    title: 'Pilot & Measurement',
    description: 'Track KPIs; adjust guardrails',
  },
  {
    number: 5,
    title: 'Handoff or Care Plan',
    description: "Owner's manual + optional Care Plan",
  },
];

// Services data
export const servicesData: ServiceData[] = [
  {
    id: 'assistant',
    title: 'AI Assistant Setup',
    blurb:
      'Deploy a branded assistant for customers or staff with safe access to your knowledge and tools. Guardrails first; measurable impact next.',
    intro:
      'We integrate AI assistants into your website, CRM, and internal tools. Expect trained responses on your data, handoffs to humans, and analytics on outcomes. Designed for Calgary SMBs with sensible safeguards and fast iteration.',
    metrics: [
      'Reduce repetitive tickets (baseline: last 4 weeks; track deflection %)',
      'Faster response times across web/SMS/email (median/95th percentile)',
      'Satisfaction (CSAT for assistant interactions)',
    ],
    includes: [
      'Assistant persona, tone, and guardrails',
      'Knowledge ingestion (docs/site/FAQs)',
      'Escalation rules & human-in-the-loop',
      'Channel integration (web widget, SMS, optionally email)',
    ],
    deliverables: [
      'Assistant config & prompts',
      'Integration docs & API keys',
      'Analytics dashboard (volume, outcomes)',
      'Runbook for updates & retraining',
    ],
    inputs: [
      'Access to knowledge base & brand guidelines',
      'Sample transcripts/FAQs',
      'Approval for escalation paths',
    ],
    outOfScope: [
      'Custom model training from scratch',
      'Full CRM migration or re-platforming',
    ],
    risks: [
      "Data gaps → run 'unknown intent' capture week 1",
      'Hallucinations → retrieval-first design + fallbacks',
      'Change adoption → short training video + cheatsheet',
    ],
    timeline: '2–4 weeks',
    price: '$5k–$9k',
    ctaHref: '/contact?pilot=assistant',
  },
  {
    id: 'automation',
    title: 'Automation Audit + Pilot',
    blurb:
      'Map bottlenecks across your processes and ship a low-risk pilot that saves hours each week—then decide what to scale.',
    intro:
      "I'll audit your tools and workflows (email, spreadsheets, CRM, finance) to identify high‑leverage automation. Then we ship a pilot focused on one measurable result (e.g., weekly reporting, invoicing, or approvals).",
    metrics: [
      'Hours saved per week (time study on 2–3 reps)',
      'Error rate reduction on the targeted workflow',
      'Cycle time (before/after for one measurable step)',
    ],
    includes: [
      'Workflow mapping & opportunity scoring',
      'Pilot automation build with guardrails',
      'Change management & team training',
      'Monitoring and fallback procedures',
    ],
    deliverables: [
      'Automation plan with ROI model',
      'Pilot implementation (1 targeted process)',
      'Training materials (video + quick guide)',
      'Ops runbook + incident playbook',
    ],
    inputs: [
      'Tool access (spreadsheets/CRM/finance)',
      '2–3 SMEs for interviews & testing',
      'Approval on acceptance criteria',
    ],
    outOfScope: [
      'Multi-system enterprise re-architecture',
      'Ongoing ops beyond pilot (unless Care Plan)',
    ],
    risks: [
      'Tool limits/API quotas → pre-flight checks week 1',
      'Hidden dependencies → process dry-runs with SMEs',
      'Change resistance → involve the process owner early',
    ],
    timeline: '3–6 weeks',
    price: '$7k–$14k',
    ctaHref: '/contact?pilot=automation',
  },
  {
    id: 'analytics',
    title: 'Analytics Quickstart',
    blurb:
      'Connect your data and ship dashboards that answer the questions Calgary operators actually ask—fast.',
    intro:
      'We centralize your data and build dashboards focused on decisions: revenue, pipeline, utilization, and churn risk. Pragmatic setup over heavy platforms—start simple, iterate quickly.',
    metrics: [
      'Decision latency (time to answer top 5 questions)',
      'Adoption (weekly active viewers)',
      'Data trust (fewer ad-hoc extracts; one source of truth)',
    ],
    includes: [
      'Source connections (SaaS, spreadsheets, DBs)',
      'Data model + definitions',
      'KPI dashboards and alerts',
      'Access controls & governance notes',
    ],
    deliverables: [
      'Data model & connectors',
      'Dashboard pack (6–8 KPIs)',
      'Alerting + SLA docs',
      'Admin & usage guide',
    ],
    inputs: [
      'Read access to systems',
      'KPI definitions & thresholds',
      'Champion user for feedback',
    ],
    outOfScope: [
      'Enterprise data warehouse build',
      'Company-wide BI governance program',
    ],
    risks: [
      'Dirty/fragmented data → light transforms + data dictionary',
      'Scope creep → cap to 6–8 KPIs in the pilot',
      'Tool sprawl → prefer existing stack before adding new BI',
    ],
    timeline: '2–3 weeks',
    price: '$6k–$10k',
    ctaHref: '/contact?pilot=analytics',
  },
];

// Comparison table data
export const compareTableData = {
  caption: 'Compare Services',
  columns: [
    'AI Assistant Setup',
    'Automation Audit + Pilot',
    'Analytics Quickstart',
  ],
  rows: [
    {
      label: 'Primary outcome',
      values: [
        'Faster replies & fewer repetitive tickets',
        'Hours saved + fewer errors in a targeted process',
        'Answers to top operator questions',
      ],
    },
    { label: 'Typical timeline', values: ['2–4 wks', '3–6 wks', '2–3 wks'] },
    { label: 'Typical budget', values: ['$5k–$9k', '$7k–$14k', '$6k–$10k'] },
    {
      label: 'Users affected',
      values: [
        'Customers / internal teams',
        'Ops / Finance / Admin',
        'Leadership / Ops',
      ],
    },
    {
      label: 'Core deliverables',
      values: [
        'Assistant + analytics + runbook',
        'Pilot automation + ROI model + runbook',
        'KPIs + alerts + admin guide',
      ],
    },
    {
      label: 'Good first step if…',
      values: [
        'You field many repeat questions',
        'A weekly task is manual & error-prone',
        'You spend time hunting numbers',
      ],
    },
  ],
};

// FAQ content
export const faqContent: FAQItem[] = [
  {
    question: 'Will my data train AI?',
    answer:
      "No. We don't train models on your private data. All processing is done with privacy-first guardrails.",
  },
  {
    question: 'On-prem/VPC available?',
    answer:
      'Available on request for enterprise clients. We can work within your security constraints.',
  },
  {
    question: 'Which models/tools do you use?',
    answer:
      'Chosen per use case with cost/latency trade-offs documented in SOW. We optimize for your specific needs.',
  },
  {
    question: 'How is ROI measured?',
    answer:
      'Time saved, error rate reduction, ticket deflection, response times, adoption rates, and user satisfaction.',
  },
  {
    question: 'What happens post-pilot?',
    answer:
      "Owner's manual + optional Care Plan for ongoing support, updates, and optimization.",
  },
  {
    question: 'Security & privacy details?',
    answer:
      'Least-privilege access, audit logs, secret management, secure data handling, and clean off-boarding procedures.',
  },
];

// Integrations content
export const integrations: Integration[] = [
  { name: 'Google', category: 'Suite' },
  { name: 'Microsoft', category: 'Suite' },
  { name: 'QuickBooks', category: 'Finance' },
  { name: 'Shopify', category: 'E-commerce' },
  { name: 'Stripe', category: 'Payments' },
  { name: 'Square', category: 'Payments' },
  { name: 'Slack', category: 'Communication' },
  { name: 'Teams', category: 'Communication' },
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Zapier', category: 'Automation' },
  { name: 'Make', category: 'Automation' },
];

// Privacy section content
export const privacyContent = {
  title: 'Privacy & Data Protection',
  leftColumn: {
    title: 'Canada-First Compliance',
    content:
      "We follow PIPEDA and Alberta's PIPA norms. NDA on request. No training on your private data. Least-privilege access with off-boarding plan.",
  },
  rightColumn: {
    title: 'Service Area & Contracts',
    content:
      'Service Area: Calgary • Airdrie • Cochrane • Okotoks (remote available)\n\nContracts: SOW with acceptance criteria; change orders for expanded scope.',
  },
};
