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
  title:
    'Practical artificial intelligence (AI) for Calgary small businesses — Pilot in 30 Days',
  subtitle:
    'I help Calgary small and mid-sized businesses automate work, add helpful assistants, and build clear dashboards — safely and with clear results.',
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
  title: 'What I Do for Calgary Businesses',
  subtitle:
    'Practical, measurable AI projects—built around your team and customers.',
  items: [
    {
      title: 'Deploy an Assistant',
      text: 'A branded assistant that safely uses your knowledge and tools. Safety rules first.',
    },
    {
      title: 'Automate Reporting',
      text: 'Find the biggest bottlenecks. Set up a small, fixed-scope pilot that saves hours.',
    },
    {
      title: 'Build Dashboards',
      text: 'Connect your data and build a small set of dashboards that answer your team’s key questions.',
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
      title: 'Retail Help + Order Lookup Assistant',
      what: 'A branded assistant that answers common questions, helps with sizing, and looks up basic orders using approved snippets from your knowledge base.',
      target: [
        'Faster replies and fewer repeat tickets',
        'Track deflection rate and customer satisfaction (CSAT)',
      ],
      scope: [
        'Knowledge connection (docs/website)',
        'Safety rules and escalation',
        'Web widget, text messaging (SMS) option',
        'Analytics on usage and results',
      ],
      cta: {
        label: 'Start Assistant Pilot',
        href: '/contact?pilot=assistant',
      },
    },
    {
      id: 'ops' as const,
      title: 'Operations Reporting and Invoicing Automation',
      what: 'A weekly reporting setup that pulls data from your tools and emails a clear PDF or dashboard to stakeholders.',
      target: [
        'Save about 8–12 hours per week (time study)',
        'Fewer errors with built-in checks',
      ],
      scope: [
        'Connections to your tools',
        'Data checks',
        'Scheduled delivery',
        "Owner's manual",
      ],
      cta: {
        label: 'Start Operations Pilot',
        href: '/contact?pilot=ops',
      },
    },
    {
      id: 'analytics' as const,
      title: 'Analytics Quickstart',
      what: 'A small set of dashboards connected to the data you already have (revenue, orders, tickets).',
      target: [
        'Answers to common management questions in under 5 minutes',
        'One trusted source of truth that people actually use',
      ],
      scope: [
        'Data model',
        '6–8 key performance indicators (KPIs)',
        'Drill-through views',
        'Access and data rules',
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
  subtitle: 'A simple plan to go from idea to clear results in 30 days.',
  steps: [
    {
      step: 1,
      title: 'Discover',
      subtitle: 'Free, 30 min',
      description: 'We review your goals, tools, and limits.',
      bullets: [
        'Review current tools and processes',
        'Identify quick wins',
        'Check technical limits',
      ],
    },
    {
      step: 2,
      title: 'Scope',
      subtitle: '2–3 days',
      description: 'A small, fixed plan with metrics and a clear price.',
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
      description: 'We build, test, and launch a small but valuable win.',
      bullets: [
        'Incremental releases',
        'User testing & feedback',
        'Production deployment',
      ],
    },
    {
      step: 4,
      title: 'Train and Handoff',
      subtitle: '1 week',
      description:
        'We provide an owner’s guide, responsibilities, and safety rules.',
      bullets: [
        'Docs & training',
        'Access and data rules',
        'Support procedures',
      ],
    },
    {
      step: 5,
      title: 'Care Plan',
      subtitle: 'Optional',
      description:
        'Updates, monitoring, and key performance indicator (KPI) reviews.',
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
    answer:
      'No. We do not use your private data to train AI. Your data stays within your project.',
  },
  {
    question: 'Cloud or on-premises?',
    answer:
      'Cloud by default; virtual private cloud (VPC) or on-premises (your own servers) on request.',
  },
  {
    question: 'Which models/tools do you use?',
    answer:
      'We choose the right model for your case (OpenAI, Groq, Anthropic). We explain costs and speed differences.',
  },
  {
    question: 'How do we measure ROI?',
    answer:
      'We agree on measures up front to calculate return on investment (ROI): time saved, error rate, ticket deflection, response time, and service level agreements (SLAs) if needed.',
  },
  {
    question: 'Security and access?',
    answer:
      'Least privilege access, audit logs, secret management, and a clear off-boarding plan.',
  },
  {
    question: 'What happens after the pilot?',
    answer:
      'We can hand it off to your team or provide an optional Care Plan. Your choice.',
  },
  {
    question: 'How do contracts work?',
    answer:
      'Statement of work (SOW) with acceptance criteria; change orders if scope expands.',
  },
];

// Section metadata
export const sectionContent = {
  roi: {
    title: 'Return on Investment (ROI) Calculator',
    footnote:
      '*Payback depends on your processes and implementation; this is an estimate, not a promise.*',
  },
  integrations: {
    title: 'Works with Your Tools',
  },
  readiness: {
    title: 'Pilot Readiness Checklist',
  },
};

// Security & Trust content for Home
export const securityContent = {
  items: [
    'Aligned with PIPEDA/PIPA. NDA on request.',
    'No training on your private data.',
    'Least-privilege access, audit logs, off-boarding plan.',
    'Cloud by default; VPC or on-premises available.',
  ],
};

export const trustBarContent = {
  items: [
    { icon: '🔒', label: 'PIPEDA/PIPA aligned' },
    { icon: '🛡️', label: 'No data training' },
    { icon: '✓', label: 'Fixed-scope pilots' },
    { icon: '👥', label: 'Founder-led builds' },
  ],
};
