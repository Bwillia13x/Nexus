// Centralized content for Home page
export interface ServiceItem {
  title: string;
  text: string;
}

export interface PilotItem {
  id: 'assistant' | 'ops' | 'analytics';
  title: string;
  what: string;
  target: string[];
  scope: string[];
  cta: {
    label: string;
    href: string;
  };
}

export interface HowItWorksStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CTAData {
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
}

// Hero content
export const heroContent = {
  title: 'Practical AI for Calgary SMBs—Pilot in 30 Days',
  subtitle:
    'Solo AI-integration consultancy helping Calgary businesses automate workflows, deploy assistants, and ship dashboards—safely and measurably.',
  primaryCta: {
    label: 'Book a 30-min discovery call',
    href: '/contact?intent=discovery',
  },
  secondaryCta: {
    label: 'See 30-day pilot menu',
    href: '/services#services',
  },
};

// Services content
export const servicesContent = {
  title: 'What I Do for Calgary SMBs',
  subtitle:
    'Practical, measurable AI integrations—built around your team and customers.',
  items: [
    {
      title: 'Deploy an Assistant',
      text: 'Branded assistant with safe access to your knowledge and tools; guardrails first.',
    },
    {
      title: 'Automate Reporting',
      text: 'Identify high-leverage bottlenecks and ship a fixed-scope pilot that saves hours.',
    },
    {
      title: 'Ship Dashboards',
      text: "Connect your data and ship a small set of dashboards that answer operators' questions.",
    },
  ] as ServiceItem[],
};

// Pilots content
export const pilotsContent = {
  title: 'Example Pilots You Can Run in 30 Days',
  footnote:
    "*Outcomes are targets for pilot planning; we don't claim prior results.*",
  items: [
    {
      id: 'assistant' as const,
      title: 'Retail FAQ + Order Lookup Assistant',
      what: 'A branded assistant that answers FAQs, sizing, and basic order lookups using policy-safe snippets and your knowledge base.',
      target: [
        'Faster replies, fewer repetitive tickets',
        'Measure deflection rate and CSAT',
      ],
      scope: [
        'Knowledge connection (docs/website)',
        'Guardrails & escalation',
        'Web widget, SMS option',
        'Analytics',
      ],
      cta: {
        label: 'Start Assistant Pilot',
        href: '/contact?pilot=assistant',
      },
    },
    {
      id: 'ops' as const,
      title: 'Ops Reporting & Invoicing Automation',
      what: 'A weekly reporting pipeline that pulls data from your tools and emails a clean PDF/dashboard to stakeholders.',
      target: [
        '8–12 hrs/week saved (time study)',
        'Lower error rate via validations',
      ],
      scope: [
        'Connectors',
        'Data checks',
        'Scheduled delivery',
        "Owner's manual",
      ],
      cta: {
        label: 'Start Ops Pilot',
        href: '/contact?pilot=ops',
      },
    },
    {
      id: 'analytics' as const,
      title: 'Analytics Quickstart',
      what: 'A small set of dashboards wired to the data you already have (revenue, orders, tickets).',
      target: [
        "Answers in <5 minutes for management's questions",
        'Adoption of a single source of truth',
      ],
      scope: [
        'Data model',
        '6–8 KPIs',
        'Drill-through views',
        'Governance notes',
      ],
      cta: {
        label: 'Start Analytics Pilot',
        href: '/contact?pilot=analytics',
      },
    },
  ] as PilotItem[],
};

// How It Works content
export const howItWorksContent = {
  title: 'How It Works',
  subtitle:
    'A proven process to get you from idea to measurable AI results in 30 days.',
  steps: [
    {
      step: 1,
      title: 'Discover',
      subtitle: 'Free, 30 min',
      description: 'audit goals, systems, constraints.',
      bullets: [
        'Review current tools & processes',
        'Identify quick wins',
        'Assess technical constraints',
      ],
    },
    {
      step: 2,
      title: 'Scope',
      subtitle: '2–3 days',
      description: 'fixed pilot plan with metrics and price.',
      bullets: [
        'Detailed plan',
        'Success metrics defined',
        'Fixed-price proposal',
      ],
    },
    {
      step: 3,
      title: 'Pilot',
      subtitle: '30 days',
      description: 'build, test, and ship a small but valuable win.',
      bullets: [
        'Incremental releases',
        'User testing & feedback',
        'Production deployment',
      ],
    },
    {
      step: 4,
      title: 'Train & Handoff',
      subtitle: '1 week',
      description: "owner's manual, roles, guardrails.",
      bullets: ['Docs & training', 'Access & governance', 'Support procedures'],
    },
    {
      step: 5,
      title: 'Care Plan',
      subtitle: 'Optional',
      description: 'updates, monitoring, KPI reviews.',
      bullets: [
        'Monthly check-ins',
        'Performance monitoring',
        'Feature updates',
      ],
    },
  ] as HowItWorksStep[],
};

// CTA content
export const ctaContent: CTAData = {
  title: 'Ready to Get Started?',
  description:
    "Book your free 30-minute discovery call to map your goals and see if we're a fit.",
  cta: {
    label: 'Book Discovery Call',
    href: '/contact?intent=discovery',
  },
};

// FAQ content
export const faqContent: FAQItem[] = [
  {
    question: 'Will my data be used to train AI?',
    answer: 'No—private data stays private; usage limited to your project.',
  },
  {
    question: 'Cloud vs on-prem?',
    answer: 'Default cloud; on VPC or on-prem by request.',
  },
  {
    question: 'Which models/tools do you use?',
    answer:
      'Per use case (OpenAI/Groq/Anthropic/etc.) with clear cost + latency trade-offs.',
  },
  {
    question: 'How do we measure ROI?',
    answer:
      'Time saved, error rate, ticket deflection, response time, SLA—agreed up front.',
  },
  {
    question: 'Security & access?',
    answer:
      'Least-privilege, audit trails, secrets management, off-boarding plan.',
  },
  {
    question: 'What happens after the pilot?',
    answer: 'Handoff or Care Plan; your choice.',
  },
  {
    question: 'Contracting?',
    answer: 'SOW with acceptance criteria; change-orders if scope expands.',
  },
];

// Section metadata
export const sectionContent = {
  roi: {
    title: 'ROI Calculator',
    footnote:
      '*Payback depends on your processes and implementation; this is an estimate, not a promise.*',
  },
  integrations: {
    title: 'We Speak Your Stack',
  },
  readiness: {
    title: 'AI Pilot Readiness Checklist',
  },
};
