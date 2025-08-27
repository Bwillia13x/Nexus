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
  title: 'Calgary AI Services for small and mid-sized businesses (SMBs)',
  subtitle:
    "Fast, practical artificial intelligence (AI) integrations—AI Assistant Setup, Automation Audit + Pilot, and Analytics Quickstart. Fixed scope, clear results, and privacy aligned with the Personal Information Protection and Electronic Documents Act (PIPEDA) and Alberta's Personal Information Protection Act (PIPA).",
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
    description:
      '2–3 days to create a Statement of Work (SOW) with clear success metrics and acceptance criteria',
  },
  {
    number: 3,
    title: 'Build',
    description: 'Fixed timeline with weekly check-ins to ensure progress',
  },
  {
    number: 4,
    title: 'Pilot & Measurement',
    description:
      'Track key performance indicators (KPIs) and adjust safety rules as needed',
  },
  {
    number: 5,
    title: 'Handoff or Care Plan',
    description: "Owner's manual and optional Care Plan for ongoing support",
  },
];

// Services data
export const servicesData: ServiceData[] = [
  {
    id: 'assistant',
    title: 'AI Assistant Setup',
    blurb:
      'Deploy a branded assistant for customers or staff with safe access to your knowledge and tools. Safety rules first; measurable impact next.',
    intro:
      'We integrate AI assistants into your website, customer relationship management (CRM), and internal tools. Expect trained responses on your data, handoffs to humans, and analytics on outcomes. Designed for Calgary SMBs with sensible safeguards and fast iteration.',
    metrics: [
      'Reduce repetitive tickets (baseline: last 4 weeks; track deflection rate (%))',
      'Faster response times across web, text messaging (SMS), and email (typical and 95th percentile)',
      'Customer satisfaction (CSAT) for assistant interactions',
    ],
    includes: [
      'Assistant persona, tone, and safety rules',
      'Knowledge ingestion (documents, website, Frequently Asked Questions (FAQs))',
      'Escalation rules with a human review step',
      'Channel integration (web widget, text messaging (SMS), optionally email)',
    ],
    deliverables: [
      'Assistant config & prompts',
      'Integration docs & API keys',
      'Analytics dashboard (volume, outcomes)',
      'Operations runbook for updates & retraining',
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
      'Data gaps → capture unknown questions in week 1',
      'Incorrect model outputs (hallucinations) → retrieval-first design plus fallbacks',
      'Change adoption → short training video plus quick reference guide',
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
      "I'll audit your tools and workflows (email, spreadsheets, customer relationship management (CRM), finance) to identify high‑leverage automation. Then we ship a pilot focused on one measurable result (for example, weekly reporting, invoicing, or approvals).",
    metrics: [
      'Hours saved per week (time study on 2–3 team members)',
      'Error rate reduction on the targeted workflow',
      'Cycle time (before/after for one measurable step)',
    ],
    includes: [
      'Workflow mapping & opportunity scoring',
      'Pilot automation build with safety rules',
      'Change management & team training',
      'Monitoring and fallback procedures',
    ],
    deliverables: [
      'Automation plan with ROI model',
      'Pilot implementation (1 targeted process)',
      'Training materials (video + quick guide)',
      'Operations runbook + incident playbook',
    ],
    inputs: [
      'Tool access (spreadsheets/CRM/finance)',
      '2–3 subject-matter experts (SMEs) for interviews & testing',
      'Approval on acceptance criteria',
    ],
    outOfScope: [
      'Multi-system enterprise re-architecture',
      'Ongoing ops beyond pilot (unless Care Plan)',
    ],
    risks: [
      'Tool limits and API quotas → pre-checks in week 1',
      'Hidden dependencies → process dry-runs with subject-matter experts (SMEs)',
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
      'Source connections (software-as-a-service (SaaS), spreadsheets, databases (DBs))',
      'Data model + definitions',
      'Key performance indicator (KPI) dashboards and alerts',
      'Access and data rules',
    ],
    deliverables: [
      'Data model & connectors',
      'Dashboard pack (6–8 key performance indicators (KPIs))',
      'Alerting + service level agreement (SLA) docs',
      'Admin & usage guide',
    ],
    inputs: [
      'Read access to systems',
      'Key performance indicator (KPI) definitions & thresholds',
      'Champion user for feedback',
    ],
    outOfScope: [
      'Enterprise data warehouse build',
      'Company-wide BI access and data rules program',
    ],
    risks: [
      'Dirty/fragmented data → light transforms + data dictionary',
      'Scope creep → cap to 6–8 KPIs in the pilot',
      'Tool sprawl → prefer existing stack before adding new business intelligence (BI)',
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
    {
      label: 'Typical timeline',
      values: ['2–4 weeks', '3–6 weeks', '2–3 weeks'],
    },
    { label: 'Typical budget', values: ['$5k–$9k', '$7k–$14k', '$6k–$10k'] },
    {
      label: 'Users affected',
      values: [
        'Customers / internal teams',
        'Operations (Ops) / Finance / Admin',
        'Leadership / Operations (Ops)',
      ],
    },
    {
      label: 'Core deliverables',
      values: [
        'Assistant + analytics + runbook',
        'Pilot automation + return on investment (ROI) model + runbook',
        'Key performance indicators (KPIs) + alerts + admin guide',
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
      "No. We don't train models on your private data. All processing is done with clear privacy rules.",
  },
  {
    question: 'On-premises or VPC available?',
    answer:
      'Yes—available on request for enterprise clients. We can work within your security constraints. VPC stands for virtual private cloud.',
  },
  {
    question: 'Which models and tools do you use?',
    answer:
      'Chosen per use case with costs and speed trade-offs documented in the Statement of Work (SOW). We optimize for your specific needs.',
  },
  {
    question: 'How is ROI measured?',
    answer:
      'Return on investment (ROI) is measured by time saved, error rate reduction, ticket deflection, response times, adoption rates, and user satisfaction.',
  },
  {
    question: 'What happens post-pilot?',
    answer:
      "Owner's manual + optional Care Plan for ongoing support, updates, and optimization.",
  },
  {
    question: 'Security and privacy details?',
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
  { name: 'Make.com', category: 'Automation' },
];

// Privacy section content
export const privacyContent = {
  title: 'Privacy & Data Protection',
  leftColumn: {
    title: 'Canada-First Compliance',
    content:
      "We follow the Personal Information Protection and Electronic Documents Act (PIPEDA) and Alberta's Personal Information Protection Act (PIPA). Nondisclosure agreements (NDAs) on request. No training on your private data. Least-privilege access with an off-boarding plan.",
  },
  rightColumn: {
    title: 'Service Area & Contracts',
    content:
      'Service Area: Calgary • Airdrie • Cochrane • Okotoks (remote available)\n\nContracts: SOW with acceptance criteria; change orders for expanded scope.',
  },
};
