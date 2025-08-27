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
    'Solo artificial intelligence (AI) integration consultancy for Calgary small and mid-sized businesses (SMBs). I help teams ship useful assistants, automations, and decision dashboards—fast, safe, and measurable.',
  badges: ['Calgary, AB', 'SMB-focused', 'Founder-led builds'],
};

// Intro Sections
export const intro = {
  whoIAm:
    "I'm Drew—finance-trained, hands-on builder. I help Calgary businesses automate support, streamline operations, and surface the numbers that matter. My bias: small, measurable pilots that your team can own after handoff.",
  howIWork:
    'Start small. Define success. Ship a pilot in ~30 days. Measure ticket deflection, time saved, and adoption. Keep humans in the loop with clear safety rules. Document everything so you can run it without me.',
};

// Background Content
export const background = {
  main: 'Calgary-based, solo consultancy focused on high-impact, fixed-scope AI integrations for small and mid-sized businesses (SMBs)—assistants, automations, and analytics. Vendor-neutral, privacy-aware, and optimized for fast time to value and measured outcomes.',
  bullets: [
    'Finance first: quantify return on investment (ROI) — hours saved, error rates, and cycle times.',
    'Builder mindset: configure, integrate, and ship — not just presentations.',
    "Plain English docs and an owner's manual at handoff.",
  ],
};

// Measurement Card
export const measurementCard = {
  title: 'What We Measure in Pilots (Targets)',
  items: [
    'Ticket deflection (percentage)',
    'Response time: median (P50) and 95th percentile (P95)',
    'Hours saved per week and error rate (automation)',
    'Time to answer and adoption (analytics)',
  ],
  footnote:
    'Targets are planning baselines for new pilots—not prior client results.',
};

// Principles
export const principles: Principle[] = [
  {
    title: 'Start Small, Ship Fast',
    text: 'Prove value with a focused 30-day pilot, then scale.',
    icon: '🚀',
  },
  {
    title: 'Human-in-the-Loop',
    text: 'Approvals, escalation, and auditability by default.',
    icon: '🤝',
  },
  {
    title: 'Privacy-First (PIPEDA/PIPA)',
    text: 'Least-privilege access, non-disclosure agreement (NDA) on request, no training on your private data.',
    icon: '🔒',
  },
  {
    title: 'Measure Outcomes',
    text: 'Agree metrics upfront; instrument before build.',
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
  'Background in alternatives/private equity (PE) analysis; rigor around return on investment (ROI) and risk.',
  'Builds: AI-assisted analytics, operations automations, return on investment (ROI) dashboards.',
  'Focus: Calgary SMBs; fixed-scope pilots; measurable outcomes.',
];

// Engagement Model
export const engagementSteps: EngagementStep[] = [
  {
    step: 1,
    title: 'Discover',
    description: 'Free, 30 minutes — goals, constraints, tools.',
  },
  {
    step: 2,
    title: 'Scope',
    description:
      '2–3 days — statement of work (SOW) with metrics and acceptance criteria.',
  },
  {
    step: 3,
    title: 'Build',
    description: 'Fixed time frame, weekly check-ins; sandbox link.',
  },
  {
    step: 4,
    title: 'Pilot & Measure',
    description:
      'Track key performance indicators (KPIs); adjust safety rules.',
  },
  {
    step: 5,
    title: 'Handoff or Care Plan',
    description: 'Documentation, roles, off-boarding.',
  },
];

// Data & Security
export const trust = {
  privacy:
    'Aligned with Canadian privacy laws (PIPEDA and PIPA). Non-disclosure agreement (NDA) on request.',
  dataUse: 'No training on your private data.',
  access: 'Least-privilege access, audit logs, and an off-boarding plan.',
  hosting:
    'Cloud by default; virtual private cloud (VPC) or on-premises available.',
};

// FAQ
export const faq: FAQ[] = [
  {
    q: 'Will our data train AI?',
    a: 'No—private data stays private.',
  },
  {
    q: 'What tools/models do you use?',
    a: 'Chosen per use case with cost and speed trade-offs; documented in the statement of work (SOW).',
  },
  {
    q: 'Do you do long-term support?',
    a: 'Optional Care Plan after pilot; clean handoff otherwise.',
  },
  {
    q: 'Is pricing fixed?',
    a: 'Yes for pilots. Larger builds are re-scoped after pilot results.',
  },
];

// Bottom CTA
export const cta = {
  title: 'Calgary SMBs: Ready to Pilot AI?',
  text: "Book a 30-minute intro. We'll identify a small, high-impact pilot we can ship in ~30 days.",
  primary: { label: 'Book discovery call', href: '/contact' },
  secondary: { label: 'See services', href: '/services' },
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
