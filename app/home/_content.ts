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
  title: 'Practical AI for Calgary small businesses—fast, safe, no heavy IT.',
  subtitle:
    'We design small, high-ROI automations using the tools you already use. Fixed-scope pilots, plain-English docs, and PIPEDA/PIPA-aware setup.',
  primaryCta: {
    label: 'Book a discovery call',
    href: '/contact?intent=discovery',
  },
  secondaryCta: {
    label: 'Get the AI Readiness Checklist',
    href: '/#readiness',
  },
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
    },
  ] as PilotItem[],
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
    { icon: '🔒', label: 'Privacy‑minded' },
    { icon: '⚡', label: 'Fast setup' },
    { icon: '✓', label: 'Works with your tools' },
    { icon: '👥', label: 'Friendly support' },
  ],
};
