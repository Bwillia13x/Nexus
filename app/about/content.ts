// About Page Content Configuration
// All content for the About page organized for easy maintenance

export interface Principle {
  title: string;
  text: string;
  icon?: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface EngagementStep {
  step: number;
  title: string;
  description: string;
}

// Page Hero Content
export const hero = {
  title: 'About Drew — Calgary AI Consultant',
  subtitle:
    'Plain‑English AI help for Calgary businesses — set up so your team can own it.',
  badges: ['Calgary, AB', 'Small-business-focused', 'Vendor‑neutral'],
};

// Intro Sections
export const intro = {
  whoIAm:
    "I'm Drew—finance-trained builder. I help Calgary businesses automate support, streamline operations, and surface the numbers that matter. Bias: small, measurable pilots your team can own after handoff.",
  howIWork:
    'Start small. Define success in simple terms. Set up quick wins with safe defaults. Keep humans in the loop. Leave easy instructions so you can run it without me.',
};

// Background Content
export const background = {
  main: 'Calgary-based solo consultancy focused on small, practical AI projects your team can own. Privacy‑minded and optimized for fast time‑to‑value.',
  bullets: [
    'Practical first: hours saved, fewer mistakes, faster replies.',
    'Builder mindset: configure, enable, ship—not just presentations.',
    'Plain English how‑to at handoff.',
  ],
};

// Measurement Card
export const measurementCard = {
  title: 'How We Check Progress',
  items: [
    'Fewer repeat questions',
    'Faster replies',
    'Hours saved each week',
    'People actually use it',
  ],
  footnote:
    'Targets are planning baselines for new pilots—not prior client results.',
};

// Principles
export const principles: Principle[] = [
  {
    title: 'Start Small, No‑Code First',
    text: 'Prove value with a focused, no‑code pilot; then decide what to scale.',
    icon: '🚀',
  },
  {
    title: 'Human-in-the-Loop',
    text: 'Approvals, escalation, and auditability by default.',
    icon: '🤝',
  },
  {
    title: 'Privacy‑Minded',
    text: 'Only the access we need, NDA available, no training on your private data.',
    icon: '🔒',
  },
  {
    title: 'Check Results',
    text: 'Agree simple signs up front; keep it honest and clear.',
    icon: '⚡',
  },
  {
    title: 'Vendor-Neutral',
    text: 'Choose tools based on your constraints and cost and speed trade-offs.',
    icon: '🛡️',
  },
  {
    title: 'Ship Weekly',
    text: 'Frequent releases reduce risk and build trust.',
    icon: '🎨',
  },
  {
    title: 'Teach Your Team',
    text: 'Documentation and runbooks so you can run it without me.',
    icon: '🤝',
  },
];

// Founder Snapshot
export const founderSnapshot = [
  'B.Comm (Finance, Distinction; GPA 3.9–4.0 — last 90 units).',
  'Background in alternatives/private equity (PE) analysis; strong focus on outcomes and risk.',
  'Builds: AI‑assisted analytics, operations automations, simple dashboards.',
  'Focus: Calgary small businesses; fixed‑scope pilots; practical results.',
];

// Engagement Model
export const engagementSteps: EngagementStep[] = [
  {
    step: 1,
    title: 'Brief & Discover',
    description:
      'Free 30 minutes — goals, constraints, tools, and privacy posture.',
  },
  {
    step: 2,
    title: 'Simple Plan',
    description:
      '2–3 days — short plan with price, timeline, and what “done” means.',
  },
  {
    step: 3,
    title: 'Configure',
    description:
      'No‑code setup, weekly check‑ins; safe defaults and fallbacks.',
  },
  {
    step: 4,
    title: 'Make Sure It Works',
    description: 'Check results; adjust safety rules; prepare rollback.',
  },
  {
    step: 5,
    title: 'Handoff or Care Plan',
    description: 'Documentation, roles, off-boarding.',
  },
];

// Data & Security
export const trust = {
  privacy: 'Privacy‑minded. NDA on request.',
  dataUse: 'No training on your private data.',
  access: 'Least-privilege access, audit logs, off-boarding plan.',
  hosting: 'Cloud by default; VPC or on-premises available.',
};

// FAQ
export const faq: FAQ[] = [
  {
    q: 'Will our data train AI?',
    a: 'No—private data stays private.',
  },
  {
    q: 'What tools/models do you use?',
    a: 'We choose tools that fit your needs and budget. We are not tied to any one vendor.',
  },
  {
    q: 'Do you do long-term support?',
    a: 'Optional Care Plan after pilot; clean handoff otherwise.',
  },
  {
    q: 'Is pricing fixed?',
    a: 'Yes for pilots. Larger builds are re‑scoped after pilot results.',
  },
];

// Bottom CTA
export const cta = {
  title: 'Calgary small businesses: Ready to get started?',
  text: 'Book a discovery call. Tell us what you want to improve and we’ll suggest a simple first step.',
  primary: { label: 'Book discovery call', href: '/contact' },
  secondary: { label: 'See advisory', href: '/services' },
  note: 'Based in Calgary. Remote-friendly.',
};

// Complete aboutPage object for reference
export const aboutPage = {
  hero,
  intro,
  background,
  measurementCard,
  principles,
  founderSnapshot,
  engagementSteps,
  trust,
  faq,
  cta,
};
