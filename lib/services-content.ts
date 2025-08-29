// Services Page Content Configuration
// All content for the Services page organized for easy maintenance

export interface Service {
  id: string;
  icon: string;
  title: string;
  summary: string;
  detailedDescription: string;
  successMetrics: string[];
  bullets: string[];
  artifacts: string[];
  timeline: string;
  pricing: string;
  clientInputs: string[];
  outOfScope: string[];
  risksMitigations: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceComparison {
  feature: string;
  aiAssistantSetup: string;
  automationAuditPilot: string;
  analyticsQuickstart: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface PillItem {
  text: string;
  type: 'primary' | 'secondary';
}

// Page Hero Content
export const heroContent = {
  title: 'AI that helps your business, without the jargon',
  subtitle:
    'We help you integrate the latest AI tools with what you already use—fast, safe, and in plain English.',
  pills: [
    { text: 'Plain English', type: 'primary' as const },
    { text: 'Use your tools', type: 'secondary' as const },
    { text: 'Fast setup', type: 'primary' as const },
  ],
};

// How We Work Process Steps
export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Quick Chat',
    description: 'Free, 30 min → goals, tools, what to improve',
  },
  {
    step: 2,
    title: 'Simple Plan',
    description:
      '2–3 days → short plan with price, timeline, and what “done” means',
  },
  {
    step: 3,
    title: 'Set Up',
    description: 'Fixed timeline with quick updates',
  },
  {
    step: 4,
    title: 'Make Sure It Works',
    description: 'Check results and adjust if needed',
  },
  {
    step: 5,
    title: 'Teach & Handoff',
    description: 'Easy instructions + optional light support',
  },
];

// Services Data
export const services: Service[] = [
  {
    id: 'executive-briefing',
    icon: '🧭',
    title: 'AI Overview for Leaders (2 hrs)',
    summary:
      'Plain‑English overview: what AI can do for your business and the top three ideas to try.',
    detailedDescription:
      'Leaders get aligned on where AI can help safely. We cover basics, risks, and agree on simple next steps.',
    successMetrics: [
      'Leader identifies top 3 opportunities',
      'Shared understanding of risks & guardrails',
      'Agreed next steps and owners',
    ],
    bullets: [
      'Simple slides & examples',
      'Safety basics',
      '30‑day action sketch',
    ],
    artifacts: ['Slides (PDF)', 'One‑page action sketch'],
    timeline: '2 hours',
    pricing: 'Fixed fee',
    clientInputs: [
      'Business goals',
      'Current tools & constraints',
      'Roles attending',
    ],
    outOfScope: ['Custom builds', 'Data migration'],
    risksMitigations: [
      'Misaligned expectations → pre‑read & success criteria',
      'Over‑scoping → prioritize 3 opportunities',
    ],
  },
  {
    id: 'readiness-audit',
    icon: '🗺️',
    title: 'AI Readiness Check (1–2 wks)',
    summary: 'Map your tools and pick quick wins.',
    detailedDescription:
      'We interview a few team members and review tools to find small, low‑risk pilots.',
    successMetrics: [
      'Feasible pilots ranked by ROI/risk',
      'Tool fit & constraints documented',
      'Sponsor review completed',
    ],
    bullets: [
      'Short interviews',
      'Tools & process map',
      'Quick‑wins list',
      'Simple comparison',
    ],
    artifacts: [
      'Audit report (PDF)',
      'Tool Selection Matrix (CSV/PDF)',
      'Pilot shortlist with acceptance criteria',
    ],
    timeline: '1–2 weeks',
    pricing: 'Fixed scope',
    clientInputs: [
      'Tool access (read‑only)',
      'Team interviews',
      'Existing SOPs if any',
    ],
    outOfScope: ['Enterprise re‑architecture', 'MLOps/model training'],
    risksMitigations: [
      'Hidden dependencies → dry‑run key workflows',
      'Tool limits → document quotas/limits up front',
    ],
  },
  {
    id: 'tool-selection',
    icon: '🧰',
    title: 'Pick the Right Tools',
    summary: 'Clear comparison of tools that fit your needs and budget.',
    detailedDescription:
      'We compare a few good options side‑by‑side and recommend a shortlist with trade‑offs.',
    successMetrics: [
      'Clear shortlist with rationale',
      'TCO estimated',
      'Alignment with security & privacy requirements',
    ],
    bullets: [
      'Requirements capture',
      'Vendor‑neutral matrix (cost/speed/limits)',
      'Recommendation & rollout sketch',
    ],
    artifacts: [
      'Tool Selection Matrix',
      'Recommendation memo',
      'Rollout outline',
    ],
    timeline: '3–7 days',
    pricing: 'Fixed scope',
    clientInputs: [
      'Budget & constraints',
      'Existing stack',
      'Privacy/security needs',
    ],
    outOfScope: ['Procurement & contracting', 'Deep custom integrations'],
    risksMitigations: [
      'Vendor lock‑in → prefer existing stack first',
      'Rapid tool changes → time‑box decisions',
    ],
  },
  {
    id: 'no-code-pilot',
    icon: '⚙️',
    title: 'Set Up a Small Pilot (~2 wks)',
    summary: 'We set up one or two helpful workflows you can own.',
    detailedDescription:
      'We configure a safe, small pilot using simple tools and show your team how to run it.',
    successMetrics: [
      'Pre‑agreed metric met (for example, hours saved or response time)',
      'Owner trained and playbook delivered',
      'Rollback plan verified',
    ],
    bullets: [
      'Setup',
      'Safety rules & fallbacks',
      'Basic tracking',
      'Short training',
    ],
    artifacts: [
      'Configured workflow/assistant',
      'How‑to guide',
      'Rollback plan',
      'Handoff checklist',
    ],
    timeline: '~2 weeks',
    pricing: 'Fixed scope',
    clientInputs: ['Tool access', 'Sample data', 'Sponsor for acceptance'],
    outOfScope: ['Custom builds', 'Deep integrations', 'MLOps/model training'],
    risksMitigations: [
      'Adoption risk → training + SOP + rollback',
      'Tool limits → choose alternatives early',
    ],
  },
];

// Compare Services Data
export const serviceComparison: ServiceComparison[] = [
  {
    feature: 'Primary outcome',
    aiAssistantSetup: 'Leaders aligned on top 3 ideas',
    automationAuditPilot: 'Quick‑wins + pilot shortlist',
    analyticsQuickstart: 'Shortlist + recommendation',
  },
  {
    feature: 'Typical timeline',
    aiAssistantSetup: '2 hours',
    automationAuditPilot: '1–2 weeks',
    analyticsQuickstart: '3–7 days',
  },
  {
    feature: 'Pricing',
    aiAssistantSetup: 'Fixed fee',
    automationAuditPilot: 'Fixed scope',
    analyticsQuickstart: 'Fixed scope',
  },
  {
    feature: 'Core deliverables',
    aiAssistantSetup: 'Slides + 30‑day action sketch',
    automationAuditPilot: 'Short report + comparison',
    analyticsQuickstart: 'Comparison + recommendation note',
  },
  {
    feature: 'Good first step if…',
    aiAssistantSetup: 'Leadership alignment needed',
    automationAuditPilot: 'Unclear pilot options or risks',
    analyticsQuickstart: 'Choosing tools for your use‑case',
  },
];

// FAQ Data
export const faqs: FAQ[] = [
  {
    question: 'Will you use our data to train AI?',
    answer: 'No. Your private data stays private.',
  },
  {
    question: 'Can this work with our tools?',
    answer: 'Yes. We work with what you already use.',
  },
  {
    question: 'Which tools do you use?',
    answer:
      'We choose tools that fit your needs and budget. We are not tied to any one vendor.',
  },
  {
    question: 'How do we know it’s working?',
    answer:
      'We agree on simple signs: time saved, fewer mistakes, faster replies, and adoption.',
  },
  {
    question: 'What happens after the pilot?',
    answer: 'Easy instructions for your team + optional light support.',
  },
  {
    question: 'What about privacy and security?',
    answer:
      'We only use the access we need and remove it when we’re done. NDA available.',
  },
];

// Integrations Data
export const integrations = [
  'Google Workspace',
  'Microsoft 365',
  'QuickBooks',
  'Shopify',
  'Stripe',
  'Square',
  'Slack',
  'Teams',
  'HubSpot',
  'Zapier',
  'Make.com',
];

// Privacy & Compliance Content
export const privacyContent = {
  title: 'Privacy & Data Protection',
  sections: [
    {
      title: 'Privacy & Data',
      content:
        'We keep your private data private. We only access what we need and remove access when we’re done. NDA available.',
    },
    {
      title: 'Service Area & Agreements',
      content:
        'Service Area: Calgary • Airdrie • Cochrane • Okotoks (remote available)\n\nAgreements: Simple written plan with what we’ll deliver; changes agreed in writing.',
    },
  ],
};

// Schema.org structured data templates
export const schemaOrgData = {
  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Prairie Signal',
    description:
      'Practical AI help for Calgary small businesses. Plain English, fast setup, and privacy‑minded.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Calgary',
      addressRegion: 'AB',
      addressCountry: 'CA',
    },
    areaServed: ['Calgary', 'Airdrie', 'Cochrane', 'Okotoks'],
    serviceType: [
      'AI Advisory',
      'Training & Literacy',
      'No‑Code Configuration',
    ],
  },
  faqPage: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [] as any[], // Will be populated with FAQ data
  },
  products: [] as any[], // Will be populated with service data
};

// ROI Calculator Configuration
export const roiCalculatorConfig = {
  title: 'Savings Calculator',
  description: 'Estimate your potential savings with simple automation',
  inputs: [
    {
      label: 'Hours saved per week',
      placeholder: 'for example, 10',
      min: 1,
      max: 100,
    },
    {
      label: 'Loaded hourly rate ($)',
      placeholder: 'for example, 75',
      min: 25,
      max: 300,
    },
    {
      label: 'Weeks per year',
      placeholder: 'for example, 52',
      min: 1,
      max: 52,
      defaultValue: 52,
    },
  ],
  calculations: {
    weeklySavings: 'hoursSaved * hourlyRate',
    monthlySavings: 'weeklySavings * 4.33',
    yearlySavings: 'weeklySavings * weeksPerYear',
    paybackMonths: '(serviceCost / monthlySavings).toFixed(1)',
  },
};

// Lead Magnet Configuration
export const leadMagnetConfig = {
  title: 'AI Readiness Checklist (10‑point)',
  subtitle: 'For Calgary small and mid-sized businesses (SMBs)',
  description:
    'Free checklist to assess if your team is ready for a safe, useful pilot.',
  benefits: [
    'Identify quick wins for AI implementation',
    'Understand data readiness requirements',
    'Learn about Calgary-specific considerations',
    'Get implementation timeline estimates',
  ],
  emailPlaceholder: 'Enter your email address',
  buttonText: 'Get the Checklist',
  privacyText: 'We respect your privacy. Unsubscribe at any time.',
};

// Footer Content
export const footerContent = {
  serviceArea: 'Calgary • Airdrie • Cochrane • Okotoks (remote available)',
  privacy:
    "We keep your private data private and only access what we need. NDA available. We don't use your private data to train AI.",
  contracts: 'Simple plan with what we’ll deliver; changes agreed in writing.',
};
