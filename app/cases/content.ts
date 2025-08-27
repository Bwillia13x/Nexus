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
    title: 'Pilot Playbooks and Example Outcomes',
    subtitle:
      'Fixed-scope pilots you can run in 30 days — what we build, how we measure success, and what you get.',
    footnote: 'Planning baselines — not prior results.',
    badges: [
      'Founder-led',
      'Aligned with Canadian privacy laws (PIPEDA and PIPA)',
      'No training on your data',
    ],
    ctas: [
      {
        label: 'Book a 30-minute discovery call',
        href: '/contact',
        primary: true,
      },
      {
        label: 'See pilot scope and pricing',
        href: '#playbooks',
      },
    ],
  },
  playbooks: [
    {
      id: 'assistant',
      name: 'Artificial Intelligence (AI) Assistant Setup',
      what: 'A branded assistant connected to your knowledge and tools with safety rules and human handoff when needed.',
      measure: [
        'Tickets handled without a person (percentage)',
        'Response time at median (P50) and 95th percentile (P95)',
        'Customer satisfaction (CSAT) for assistant chats',
      ],
      deliverables: [
        'Assistant settings and prompts',
        'Retrieval setup',
        'Web widget and text messaging (SMS) option',
        'Analytics and owner’s manual',
      ],
      timeline: '2–4 weeks',
      price: '$5k–$9k',
      cta: { label: 'Start this pilot →', href: '/contact?pilot=assistant' },
    },
    {
      id: 'ops',
      name: 'Operations Reporting and Invoicing Automation',
      what: 'A fixed-scope automation that assembles weekly reports and invoices and delivers them on schedule.',
      measure: [
        'Hours saved per week (time study)',
        'Error rate (before and after)',
        'On-time delivery (percentage)',
      ],
      deliverables: [
        'Connections and checks',
        'PDF or email templates',
        'Scheduler',
        'Operations owner’s manual',
      ],
      timeline: '3–6 weeks',
      price: '$7k–$14k',
      cta: { label: 'Start this pilot →', href: '/contact?pilot=ops' },
    },
    {
      id: 'analytics',
      name: 'Analytics Quickstart',
      what: 'A focused dashboard pack with 6–8 key performance indicators (KPIs) that answer the questions your team actually asks.',
      measure: [
        'Time to answer (top 5 questions)',
        'Adoption (weekly active viewers)',
        'Use of one trusted source of truth',
      ],
      deliverables: [
        'Data model and definitions',
        'KPI tiles and drill-through',
        'Alerting',
        'Admin guide',
      ],
      timeline: '2–3 weeks',
      price: '$6k–$10k',
      cta: { label: 'Start this pilot →', href: '/contact?pilot=analytics' },
    },
    {
      id: 'leads',
      name: 'Lead Qualification Assistant',
      what: 'Forms and chat that qualify inbound leads and schedule calls with customer relationship management (CRM) notes.',
      measure: [
        'Qualified leads/week',
        'Booking conversion (percentage)',
        'Median time to first response',
      ],
      deliverables: [
        'Form and assistant',
        'Routing rules',
        'Customer relationship management (CRM) notes template',
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
      'Tracking: ticket deflection, response times, and adoption.',
      'Acceptance criteria: agreed in the Statement of Work (SOW); the pilot completes when criteria are met.',
      'Data handling: least-privilege access, non-disclosure agreement (NDA) on request, and no model training on your private data.',
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
        label: 'Operations Owner’s Manual and Incident Playbook (PDF)',
        href: '/samples/ops-runbook.pdf',
      },
      {
        label: 'Key Performance Indicator (KPI) Dashboard Screens (PNG)',
        href: '/samples/analytics-pack.png',
      },
    ],
  },
  faq: [
    {
      q: 'Do you have references?',
      a: 'References are provided after scoping. Early pilots are covered by a non-disclosure agreement (NDA) until clients opt in to public sharing.',
    },
    {
      q: 'Can we co-brand a public case study later?',
      a: 'Yes—mutual approval after the pilot.',
    },
    {
      q: 'Can we see a demo?',
      a: 'Yes—book a discovery call for a walk-through in a test environment.',
    },
  ],
  cohort: {
    title: 'Founding Cohort (Limited)',
    text: '3 pilot slots per month for Calgary small and mid-sized businesses. Fixed scope, fixed price, priority support.',
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
