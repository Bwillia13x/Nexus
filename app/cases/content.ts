// Case Studies Page Content Configuration
// All content for the Case Studies page organized for easy maintenance

export interface Playbook {
  id: string;
  name: string;
  what: string;
  measure: string[];
  deliverables: string[];
  timeline: string;
  price: string;
  cta: {
    label: string;
    href: string;
  };
}

export interface FAQ {
  q: string;
  a: string;
}

export interface Artifact {
  label: string;
  href: string;
}

export const caseStudiesPage = {
  hero: {
    title: 'Pilot Playbooks & Example Outcomes',
    subtitle:
      "Fixed-scope pilots you can run in 30 days—what we build, how we measure, and the artifacts you'll receive.",
    footnote: 'Planning baselines—not prior results.',
    badges: ['Founder-led', 'PIPEDA/PIPA aligned', 'No training on your data'],
    ctas: [
      { label: 'Book 30-min discovery', href: '/contact', primary: true },
      { label: 'See pilot scope & pricing', href: '#playbooks' },
    ],
  },
  playbooks: [
    {
      id: 'assistant',
      name: 'AI Assistant Setup',
      what: 'Branded assistant connected to your knowledge and tools with guardrails and escalation.',
      measure: [
        'Ticket deflection %',
        'Median response time (P50/P95)',
        'CSAT on assistant interactions',
      ],
      deliverables: [
        'Assistant config & prompts',
        'Retrieval setup',
        'Web widget / SMS option',
        'Analytics + runbook',
      ],
      timeline: '2–4 weeks',
      price: '$5k–$9k',
      cta: { label: 'Start this pilot →', href: '/contact?pilot=assistant' },
    },
    {
      id: 'ops',
      name: 'Ops Reporting & Invoicing Automation',
      what: 'Time-boxed automation that assembles weekly reports/invoices and delivers on schedule.',
      measure: [
        'Hours saved/week (time study)',
        'Error rate (before/after)',
        'On-time delivery %',
      ],
      deliverables: [
        'Connectors & validations',
        'Templated PDF/email',
        'Scheduler',
        'Ops runbook',
      ],
      timeline: '3–6 weeks',
      price: '$7k–$14k',
      cta: { label: 'Start this pilot →', href: '/contact?pilot=ops' },
    },
    {
      id: 'analytics',
      name: 'Analytics Quickstart',
      what: 'Focused dashboard pack (6–8 KPIs) answering the questions operators actually ask.',
      measure: [
        'Time-to-answer (top 5 questions)',
        'Adoption (weekly active viewers)',
        'Single source of truth adherence',
      ],
      deliverables: [
        'Data model & definitions',
        'KPI tiles + drill-through',
        'Alerting',
        'Admin guide',
      ],
      timeline: '2–3 weeks',
      price: '$6k–$10k',
      cta: { label: 'Start this pilot →', href: '/contact?pilot=analytics' },
    },
    {
      id: 'leads',
      name: 'Lead-Qual Sales Assistant',
      what: 'Forms + chat that qualify inbound leads and schedule calls with CRM notes.',
      measure: [
        'Qualified leads/week',
        'Booking conversion %',
        'Median time-to-first-touch',
      ],
      deliverables: [
        'Form + assistant',
        'Routing rules',
        'CRM notes template',
        'Analytics',
      ],
      timeline: '2–3 weeks',
      price: '$5k–$8k',
      cta: { label: 'Start this pilot →', href: '/contact?pilot=leads' },
    },
  ],
  methods: {
    title: 'How We Measure Outcomes',
    bullets: [
      'Baseline window: last 4–6 weeks.',
      'Instrumentation: track deflection, response times, adoption.',
      'Acceptance criteria: agreed in SOW; pilot completes when met.',
      'Data handling: least-privilege access, NDA on request, no model training on your private data.',
    ],
  },
  artifacts: {
    title: 'Sample Artifacts (Anonymized)',
    items: [
      {
        label: "Assistant Owner's Manual (PDF)",
        href: '/samples/assistant-owners-manual.pdf',
      },
      {
        label: 'Ops Runbook & Incident Playbook (PDF)',
        href: '/samples/ops-runbook.pdf',
      },
      {
        label: 'KPI Dashboard Screens (PNG)',
        href: '/samples/analytics-pack.png',
      },
    ],
  },
  faq: [
    {
      q: 'Do you have references?',
      a: 'References are provided after scoping. Early pilots are NDA-covered until clients opt-in to public sharing.',
    },
    {
      q: 'Can we co-brand a public case study later?',
      a: 'Yes—mutual approval after the pilot.',
    },
    {
      q: 'Can we see a demo?',
      a: 'Yes—book a discovery call for a sandbox walk-through.',
    },
  ],
  cohort: {
    title: 'Founding Cohort (Limited)',
    text: '3 pilot slots/month for Calgary SMBs. Fixed scope, fixed price, priority support.',
    cta: { label: 'Book a 30-min discovery call', href: '/contact' },
  },
};

// Export individual pieces for backward compatibility
export const hero = caseStudiesPage.hero;
export const playbooks = caseStudiesPage.playbooks;
export const methods = caseStudiesPage.methods;
export const artifacts = caseStudiesPage.artifacts;
export const faq = caseStudiesPage.faq;
export const cohort = caseStudiesPage.cohort;

// Method Definitions (chips)
export const methodDefinitions = [
  {
    term: 'Ticket Deflection',
    definition:
      'Percentage of customer inquiries handled by AI without human intervention',
  },
  {
    term: 'Time-to-Answer',
    definition:
      'Average time from customer question to AI response (P50/P95 percentiles)',
  },
  {
    term: 'Adoption',
    definition:
      'Weekly active users viewing dashboards or engaging with AI tools',
  },
  {
    term: 'Cycle Time',
    definition:
      'Time from process start to completion (before/after automation)',
  },
  {
    term: 'Error Rate',
    definition:
      'Percentage of manual errors reduced through automation validation',
  },
];

// Method Cards Title
export const methodCardsTitle = 'Method Cards: Definitions';
