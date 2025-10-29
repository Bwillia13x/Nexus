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
  previewSteps?: PlaybookPreviewStep[];
  demo?: PlaybookDemo;
  roiPreset?: PilotRoiPreset;
}

export interface PlaybookPreviewStep {
  id: string;
  title: string;
  description: string;
  media?: {
    type: 'image' | 'video' | 'chat';
    src: string;
    alt?: string;
    poster?: string;
  };
  outcomeHighlight?: string;
}

export interface PlaybookDemoTranscriptEntry {
  speaker: 'customer' | 'assistant' | 'ops';
  message: string;
  delayMs?: number;
}

export interface PlaybookDemo {
  title: string;
  helper: string;
  transcript: PlaybookDemoTranscriptEntry[];
}

export interface PilotRoiPreset {
  hours: number;
  rate: number;
  weeks: number;
  price: number;
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
      previewSteps: [
        {
          id: 'scope',
          title: 'Scope & safety workshop',
          description:
            'Start with 60 minutes to collect approved content, refusal rules, and escalation paths. We map data sources and guardrails before we write a prompt.',
          outcomeHighlight: 'Agree on "can / cannot answer" in plain English.',
        },
        {
          id: 'build',
          title: 'Assistant build & retrieval wiring',
          description:
            'We connect knowledge sources, craft system prompts, and configure human handoff in a staging environment your team can poke at.',
          outcomeHighlight:
            'Pilot-ready assistant in a secure sandbox with logging.',
        },
        {
          id: 'launch',
          title: 'Launch with transcripts + metrics',
          description:
            'Flip on the web widget and optional SMS channel. Weekly Slack digests capture deflection, CSAT, and flagged chats so you never lose context.',
          outcomeHighlight:
            'Increase in self‑serve resolution shortly after launch.',
        },
      ],
      demo: {
        title: 'Transcript from the staging assistant',
        helper:
          'Redacted but representative sample — shows refusal, lookup, and escalation.',
        transcript: [
          {
            speaker: 'customer',
            message:
              'Morning! Can I track order 4821? I just want to know if it shipped.',
            delayMs: 400,
          },
          {
            speaker: 'assistant',
            message:
              'Let me check approved order records… order 4821 shipped yesterday via Purolator. You’ll get it Tuesday. Anything else?',
            delayMs: 1100,
          },
          {
            speaker: 'customer',
            message: 'Nice. Can you discount my next order like before?',
            delayMs: 600,
          },
          {
            speaker: 'assistant',
            message:
              'I can’t issue discounts directly, but I can flag the request for a rep. I sent all context to your account manager — expect a reply within a business day.',
            delayMs: 1400,
          },
          {
            speaker: 'customer',
            message: 'Cool, thanks!',
            delayMs: 300,
          },
          {
            speaker: 'assistant',
            message:
              'Happy to help! I’ll stay on the conversation in case you need anything else. Type “human” if you want a person to jump in now.',
            delayMs: 900,
          },
        ],
      },
      roiPreset: {
        hours: 12,
        rate: 38,
        weeks: 48,
        price: 6200,
      },
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
      previewSteps: [
        {
          id: 'audit',
          title: 'Map the manual workflow',
          description:
            'Document your source sheets, accounting system, and approval rules. We translate that into a swimlane so nothing is missed.',
          outcomeHighlight: 'Shared checklist with roles + failure points.',
        },
        {
          id: 'automation',
          title: 'Wire automations + validations',
          description:
            'Build the Zapier/Make pipeline, add guardrails for totals and tax, and send proofs for sign-off before anything gets delivered.',
          outcomeHighlight:
            'Automation catches missing purchase orders before invoices go out.',
        },
        {
          id: 'handoff',
          title: 'Launch & operator playbook',
          description:
            'Provide a short Loom walkthrough, runbook, and one-click rerun controls so your team owns the workflow on day one.',
          outcomeHighlight: 'Meaningful time back for the operations lead.',
        },
      ],
      roiPreset: {
        hours: 8,
        rate: 65,
        weeks: 48,
        price: 7800,
      },
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
      previewSteps: [
        {
          id: 'questions',
          title: 'Question-first workshop',
          description:
            'Facilitated session to list the top questions you ask every week. We turn that into a shortlist of KPIs and required data sources.',
          outcomeHighlight: 'Shared glossary that keeps everyone aligned.',
        },
        {
          id: 'model',
          title: 'Data model & dashboard build',
          description:
            'Model the metrics, configure Looker/Looker Studio, and craft tiles with story-driven annotations so insights are clear.',
          outcomeHighlight:
            'One trusted dashboard across finance + operations.',
        },
        {
          id: 'adoption',
          title: 'Enablement & alerting',
          description:
            'Train teams on the new dashboard, enable scheduled emails/Slack alerts, and capture adoption metrics to keep accountability high.',
          outcomeHighlight: 'Team adoption increased shortly after launch.',
        },
      ],
      roiPreset: {
        hours: 5,
        rate: 85,
        weeks: 50,
        price: 9500,
      },
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
      previewSteps: [
        {
          id: 'playbook',
          title: 'Qualification scoring + routes',
          description:
            'Define the rules that separate tire-kickers from ready buyers. We codify scoring, required fields, and calendar availability.',
          outcomeHighlight: 'Lead scoring rubric everyone agrees on.',
        },
        {
          id: 'build',
          title: 'Assistant + CRM sync',
          description:
            'Embed the assistant in your forms, sync notes into the CRM, and create instant “next best step” tasks for the right rep.',
          outcomeHighlight:
            'First response time drops to minutes with no extra headcount.',
        },
        {
          id: 'optimize',
          title: 'A/B prompts + calendar tweaks',
          description:
            'Review transcripts, tune prompts, and tighten scheduling logic so the assistant books clean meetings around your team’s guardrails.',
          outcomeHighlight: 'Booking conversion up 24% versus the legacy form.',
        },
      ],
      roiPreset: {
        hours: 6,
        rate: 52,
        weeks: 48,
        price: 6800,
      },
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
