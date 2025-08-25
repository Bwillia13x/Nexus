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
    'Solo AI-integration consultancy for Calgary SMBs. I help teams ship useful assistants, automations, and decision dashboards—fast, safe, and measurable.',
  badges: ['Calgary, AB', 'SMB-focused', 'Founder-led builds'],
};

// Intro Sections
export const intro = {
  whoIAm:
    "I'm Drew—finance-trained, hands-on builder. I help Calgary businesses automate support, streamline ops, and surface the numbers that matter. My bias: small, measurable pilots that your team can own after handoff.",
  howIWork:
    'Start small. Define success. Ship a pilot in ~30 days. Measure deflection/time saved/adoption. Keep humans in the loop with clear guardrails. Document everything so you can run it without me.',
};

// Background Content
export const background = {
  main: 'Calgary-based, solo consultancy focused on high-impact, fixed-scope AI integrations for SMBs—assistants, automations, and analytics. Vendor-neutral, privacy-aware, and optimized for time to value and measured outcomes.',
  bullets: [
    'Finance first: quantify ROI (hours saved, error rates, cycle times).',
    'Builder mindset: configure, integrate, and ship—not slideware.',
    "Plain-English docs + owner's manual at handoff.",
  ],
};

// Measurement Card
export const measurementCard = {
  title: 'What We Measure in Pilots (Targets)',
  items: [
    'Ticket deflection % (assistant)',
    'Median/P95 response time (assistant)',
    'Hours saved/week & error rate (automation)',
    'Time-to-answer & adoption (analytics)',
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
    text: 'Least-privilege access, NDA on request, no training on your private data.',
    icon: '🔒',
  },
  {
    title: 'Measure Outcomes',
    text: 'Agree metrics upfront; instrument before build.',
    icon: '⚡',
  },
  {
    title: 'Vendor-Neutral',
    text: 'Choose stack by constraints & cost/latency trade-offs.',
    icon: '🛡️',
  },
  {
    title: 'Ship Weekly',
    text: 'Frequent releases de-risk change and build trust.',
    icon: '🎨',
  },
  {
    title: 'Teach Your Team',
    text: 'Docs & runbooks so you can run it without me.',
    icon: '🤝',
  },
];

// Founder Snapshot
export const founderSnapshot = [
  'B.Comm (Finance, Distinction; GPA 3.9–4.0 — last 90 units).',
  'Background in alternatives/PE analysis; rigor around ROI and risk.',
  'Builds: AI-assisted analytics, ops automations, ROI dashboards.',
  'Focus: Calgary SMBs; fixed-scope pilots; measurable outcomes.',
];

// Engagement Model
export const engagementSteps: EngagementStep[] = [
  {
    step: 1,
    title: 'Discover',
    description: 'Free, 30 min → goals, constraints, tools.',
  },
  {
    step: 2,
    title: 'Scope',
    description: '2–3 days → SOW with metrics & acceptance criteria.',
  },
  {
    step: 3,
    title: 'Build',
    description: 'Timeboxed, weekly check-ins; sandbox link.',
  },
  {
    step: 4,
    title: 'Pilot & Measure',
    description: 'Track KPIs; tune guardrails.',
  },
  {
    step: 5,
    title: 'Handoff or Care Plan',
    description: 'Docs, roles, off-boarding.',
  },
];

// Data & Security
export const trust = {
  privacy: 'PIPEDA/PIPA aligned. NDA on request.',
  dataUse: 'No training on your private data.',
  access: 'Least-privilege, auditability, off-boarding plan.',
  hosting: 'Cloud by default; VPC/on-prem available.',
};

// FAQ
export const faq: FAQ[] = [
  {
    q: 'Will our data train AI?',
    a: 'No—private data stays private.',
  },
  {
    q: 'What tools/models do you use?',
    a: 'Chosen per use case with cost & latency trade-offs; documented in the SOW.',
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
