import { getHeroProof, type HeroProof } from '@/lib/marketing';

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
  highlight?: PilotHighlight;
  roiPreset?: PilotRoiPreset;
}

export interface PilotHighlight {
  eyebrow: string;
  title: string;
  summary: string;
  metricSummary?: string;
  metrics: CaseHighlightMetric[];
  bulletPoints: string[];
  caseLink?: {
    label: string;
    href: string;
  };
}

export interface PilotRoiPreset {
  hours: number;
  rate: number;
  weeks: number;
  price: number;
}

export interface HeroHighlight {
  label: string;
  helper?: string;
}

export interface CaseHighlightMetric {
  label: string;
  value: string;
}

export interface CaseHighlight {
  eyebrow: string;
  title: string;
  summary: string;
  metricSummary: string;
  metrics: CaseHighlightMetric[];
  bulletPoints: string[];
  cta: {
    label: string;
    href: string;
  };
  caseLink: {
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
  title: 'Practical AI pilots for Calgary teams—fast, safe, zero jargon.',
  subtitle:
    'Launch small, measurable automations that plug into your existing stack. Fixed price, privacy-compliant, and shipped in weeks, not quarters.',
  primaryCta: {
    label: 'Book a discovery call',
    href: '/contact?intent=discovery',
  },
  secondaryCta: {
    label: 'Get the AI Readiness Checklist',
    href: '/#readiness',
  },
  highlights: [
    {
      label: 'Fast path to first result for most pilots',
      helper: 'Ops, support, and analytics workflows',
    },
    {
      label: 'Works with Google Workspace, Microsoft 365, and QuickBooks',
    },
    {
      label: 'PIPEDA & PIPA aware setup with optional vendor agreements',
    },
  ] as HeroHighlight[],
  proof: getHeroProof() as HeroProof | null,
};

// Services content
export const servicesContent = {
  title: 'What We Do',
  subtitle: 'Simple, practical AI—no heavy tech.',
  items: [
    {
      title: 'Launch a Customer/Staff AI Helper',
      text: 'Add a friendly chat assistant for customers or staff.',
    },
    {
      title: 'Automate Weekly Reports & Follow-ups',
      text: 'Save time on routine tasks like reports, follow‑ups, and data entry.',
    },
    {
      title: 'Get a One-Look KPI Dashboard',
      text: 'See your key numbers in one place so you can act quickly.',
    },
  ] as ServiceItem[],
};

// Pilots content
export const pilotsContent = {
  title: 'Example Projects',
  footnote: '*Examples of what we can set up.*',
  items: [
    {
      id: 'assistant' as const,
      title: 'Customer Help + Order Lookup',
      what: 'A helpful chat that answers common questions and looks up basic orders using approved info from your business.',
      target: ['Faster replies', 'Fewer repeat questions'],
      scope: [
        'Connect your docs and website',
        'Simple safety rules and handoff to a person when needed',
        'Website chat, optional text messaging',
        'See usage in a simple report',
      ],
      cta: {
        label: 'Start AI Helper Pilot (2–3 wks)',
        href: '/contact?pilot=assistant',
      },
      highlight: {
        eyebrow: 'Retail Ops • Calgary',
        title: 'Assistant handles common chats with branded answers',
        summary:
          'Ingested policies, product data, and past tickets to stand up a friendly web + SMS assistant with guardrails and clean human handoff.',
        metricSummary:
          'Quick win pilot with measurable ROI and an ops-ready handoff.',
        metrics: [],
        bulletPoints: [
          'Assistant tuned on approved knowledge with refusal boundaries.',
          'Slack + email alerts when a human needs to step in.',
          'Weekly report tracks deflection, CSAT, and handoff rate.',
        ],
        caseLink: {
          label: 'Read the pilot snapshot',
          href: '/cases/ai-assistant-calgary-retail',
        },
      },
      roiPreset: {
        hours: 12,
        rate: 38,
        weeks: 48,
        price: 6200,
      },
    },
    {
      id: 'ops' as const,
      title: 'Weekly Reports and Invoicing',
      what: 'Send clean, automated reports or invoices using the tools you already have.',
      target: ['Save a few hours each week', 'Fewer mistakes'],
      scope: [
        'Connect the tools you already use',
        'Basic checks for bad data',
        'Automatic delivery on a schedule',
        'Short how‑to guide',
      ],
      cta: {
        label: 'Start Operations Pilot (2–3 wks)',
        href: '/contact?pilot=ops',
      },
      highlight: {
        eyebrow: 'Construction Supplier • Calgary',
        title: 'Automated reporting trims manual prep each week',
        summary:
          'Google Sheets → QuickBooks pipeline that validates invoices, sends weekly digests, and flags issues before they ship.',
        metricSummary:
          'Owner time back, fewer missed invoices, clearer audit trail.',
        metrics: [],
        bulletPoints: [
          'Checks PO, tax, and totals before anything is sent.',
          'Slack digest hits every Monday at 8am with status + blockers.',
          'Ownership guide covers edits, re-runs, and escalation path.',
        ],
      },
      roiPreset: {
        hours: 8,
        rate: 65,
        weeks: 48,
        price: 7800,
      },
    },
    {
      id: 'analytics' as const,
      title: 'Simple Dashboards',
      what: 'Dashboards that show the numbers that matter to you (sales, orders, tickets) with the tools you already use.',
      target: [
        'Answers to common questions in minutes',
        'One place people trust',
      ],
      scope: [
        'Light setup',
        'Clear terms everyone understands',
        'Starter dashboards that are easy to edit',
      ],
      cta: {
        label: 'Start KPI Dashboard Pilot (2–3 wks)',
        href: '/contact?pilot=analytics',
      },
      highlight: {
        eyebrow: 'Food Service • Western Canada',
        title: 'Sales + ops dashboard unites multiple data sources in Looker',
        summary:
          'Pulled POS, inventory, and staffing data into a single view with alerting on stockouts and sales targets.',
        metricSummary:
          'One trusted source of truth so the GM team can act quickly.',
        metrics: [],
        bulletPoints: [
          'Plain-language tiles and glossary everyone understands.',
          'Email + Slack alerts when KPIs drift outside limits.',
          'Self-serve filters for location, manager, and product lines.',
        ],
      },
      roiPreset: {
        hours: 5,
        rate: 85,
        weeks: 50,
        price: 9500,
      },
    },
  ] as PilotItem[],
};

export const caseHighlight: CaseHighlight = {
  eyebrow: 'Retail Ops • Calgary',
  title:
    'Customer support assistant deflects common tickets with branded answers',
  summary:
    'We ingested policies, product data, and past tickets to launch a branded assistant across web chat and SMS with escalation rules and analytics the team trusts.',
  metricSummary:
    'Quick win pilot with measurable ROI and an operations-ready handoff.',
  metrics: [],
  bulletPoints: [
    'Assistant tuned on approved knowledge with refusal boundaries.',
    'Ops dashboard shows deflection, CSAT, and handoff rate each week.',
    'Escalations land in Slack with full transcript context for humans.',
  ],
  cta: {
    label: 'Book a 30-minute discovery call',
    href: '/contact?pilot=assistant',
  },
  caseLink: {
    label: 'Read the full case study',
    href: '/cases/ai-assistant-calgary-retail',
  },
};

// How It Works content
export const howItWorksContent = {
  title: 'How It Works',
  subtitle: 'A simple path from idea to results.',
  steps: [
    {
      step: 1,
      title: 'Quick Chat',
      subtitle: 'Free, 30 minutes',
      description:
        'Tell us what you want to improve. We listen and take notes.',
      bullets: ['Your tools', 'Your goals', 'Any limits or concerns'],
    },
    {
      step: 2,
      title: 'Simple Plan',
      subtitle: '2–3 days',
      description: 'We send a short plan with price and timeline.',
      bullets: ['What we’ll set up', 'What success looks like', 'Fixed price'],
    },
    {
      step: 3,
      title: 'Set Up',
      subtitle: 'Fast and safe',
      description: 'We set up one or two small things that help right away.',
      bullets: ['Short updates', 'Safe defaults', 'Ready to try'],
    },
    {
      step: 4,
      title: 'Teach & Handoff',
      subtitle: '1 week',
      description:
        'We show your team how it works and leave easy instructions.',
      bullets: [
        'Short training',
        'Plain English how‑to',
        'Who to call if stuck',
      ],
    },
    {
      step: 5,
      title: 'Light Support',
      subtitle: 'Optional',
      description: 'We can check in monthly to keep things running smoothly.',
      bullets: ['Quick check-ins', 'Small updates', 'No long contracts'],
    },
  ] as HowItWorksStep[],
};

// CTA content
export const ctaContent: CTAData = {
  title: 'Ready to try AI in your business?',
  description: 'Book a free call. We’ll suggest a simple first step.',
  cta: {
    label: 'Book Discovery Call',
    href: '/contact?intent=discovery',
  },
};

// FAQ content
export const faqContent: FAQItem[] = [
  {
    question: 'Will you use our data to train AI?',
    answer: 'No. Your private data stays private.',
  },
  {
    question: 'Can this work with our tools?',
    answer: 'Yes. We work with what you already use.',
  },
  {
    question: 'Which tools do you recommend?',
    answer:
      'We pick tools that fit your needs and budget. We are not tied to any one vendor.',
  },
  {
    question: 'What if we don’t have clean data?',
    answer:
      'We start with narrow, high-quality sources and add basic checks. Most pilots work with what you already have.',
  },
  {
    question: 'How do we know it’s working?',
    answer:
      'We agree on simple signs of progress, like time saved and faster replies.',
  },
  {
    question: 'Where does it run?',
    answer:
      'In the cloud by default. Running on your own systems is possible if needed.',
  },
  {
    question: 'What happens after the first setup?',
    answer:
      'We hand it off with easy instructions. Light ongoing help is optional.',
  },
  {
    question: 'What’s included?',
    answer:
      'We set up and connect existing tools. We avoid long, custom builds unless you ask for them.',
  },
];

// Section metadata
export const sectionContent = {
  roi: {
    title: 'Savings Calculator',
    footnote: '*Estimates only — real results vary.*',
  },
  integrations: {
    title: 'Works with Your Tools',
  },
  readiness: {
    title: 'AI Readiness Checklist',
  },
};

// Security & Trust content for Home
export const securityContent = {
  items: [
    'Your data stays private.',
    'Least-privilege access; we only access what we need.',
    'Clear off-boarding and access removal.',
    'Cloud by default; can run on your systems when needed.',
    'DPA & confidentiality on request.',
  ],
};

export const trustBarContent = {
  items: [
    {
      type: 'logo' as const,
      label: 'Chinook Rentals',
      caption: 'Calgary operations pilot',
    },
    {
      type: 'logo' as const,
      label: 'Prairie Clinics',
      caption: 'Healthcare intake workflow',
    },
    {
      type: 'badge' as const,
      label: 'PIPEDA & PIPA aware',
      icon: '🔒',
    },
    {
      type: 'badge' as const,
      label: 'Resend Partner',
      icon: '📧',
    },
  ],
};
