// Centralized content for Services page
export interface ServiceData {
  id: string;
  title: string;
  blurb: string;
  intro: string;
  metrics: string[];
  includes: string[];
  deliverables: string[];
  inputs: string[];
  outOfScope: string[];
  risks: string[];
  timeline: string;
  price: string;
  ctaHref: string;
}

export interface CompareRow {
  label: string;
  values: string[];
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Integration {
  name: string;
  category: string;
}

// Hero content
export const heroContent = {
  title: 'AI that helps your business, without the jargon',
  subtitle:
    'We help you integrate the latest AI tools with what you already use—fast, safe, and in plain English. No big IT projects.',
  badges: ['Plain English', 'No heavy IT', 'Use your tools'],
  primaryCta: { text: 'Book a discovery call', href: '/contact' },
  secondaryCta: { text: 'Get the checklist →', href: '/#readiness' },
};

// Process steps content
export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Quick Chat',
    description: 'Free 30‑min call: goals, tools, and what you want to improve',
  },
  {
    number: 2,
    title: 'Simple Plan',
    description:
      '2–3 days → short plan with price, timeline, and what “done” means',
  },
  {
    number: 3,
    title: 'Set Up',
    description: 'We set up one or two small wins using tools you already have',
  },
  {
    number: 4,
    title: 'Make Sure It Works',
    description: 'Check results, adjust if needed, keep it safe and simple',
  },
  {
    number: 5,
    title: 'Teach & Handoff',
    description: 'Short training and easy instructions so your team can run it',
  },
];

// Services data
export const servicesData: ServiceData[] = [
  {
    id: 'executive-briefing',
    title: 'AI Overview for Leaders (2 hrs)',
    blurb: 'A plain‑English walkthrough of what AI can do for your business.',
    intro:
      'We meet with leaders to explain what’s possible, what to watch out for, and agree on the top 3 simple ideas to try first.',
    metrics: [
      'Leaders agree on top 3 ideas',
      'Shared understanding of risks and safety',
      'Clear next steps and owners',
    ],
    includes: [
      'Simple slides and examples',
      'Privacy and safety basics',
      '30‑day action sketch',
    ],
    deliverables: ['Slides (PDF)', 'One‑page action sketch'],
    inputs: ['Your goals', 'Your current tools', 'Who will attend'],
    outOfScope: ['Custom builds', 'Big IT projects'],
    risks: [
      'Too much scope → we keep it simple',
      'Different expectations → we align up front',
    ],
    timeline: '2 hours',
    price: 'Fixed fee',
    ctaHref: '/contact?package=executive-briefing',
  },
  {
    id: 'readiness-audit',
    title: 'AI Readiness Check (1–2 wks)',
    blurb: 'Map your tools and pick quick wins.',
    intro:
      'We talk to a few team members and review your tools to find small, low‑risk projects that help right away.',
    metrics: [
      'List of small projects ranked by impact',
      'Tool limits and fit documented',
      'Sponsor review done',
    ],
    includes: [
      'Short interviews',
      'Map of tools and processes',
      'Quick‑wins list',
      'Simple tool comparison',
    ],
    deliverables: [
      'Short report',
      'Tool comparison',
      "Shortlist with what 'done' looks like",
    ],
    inputs: ['Read‑only tool access', 'Team interviews', 'Any existing guides'],
    outOfScope: ['Rebuilding systems', 'Training AI models'],
    risks: [
      'Hidden dependencies → dry runs for key workflows',
      'Tool limits → capture quotas/limits early',
    ],
    timeline: '1–2 weeks',
    price: 'Fixed scope',
    ctaHref: '/contact?package=readiness-audit',
  },
  {
    id: 'tool-selection',
    title: 'Pick the Right Tools',
    blurb: 'Clear comparison of tools that fit your needs and budget.',
    intro:
      'We compare a few good options side‑by‑side and recommend a shortlist. You get the trade‑offs and a go/no‑go call.',
    metrics: [
      'Shortlist with clear reasons',
      'Estimated costs',
      'Meets your privacy needs',
    ],
    includes: [
      'Requirements',
      'Simple comparison (cost, speed, limits)',
      'Recommendation and rollout sketch',
    ],
    deliverables: ['Tool comparison', 'Recommendation note', 'Rollout outline'],
    inputs: ['Budget and constraints', 'Existing tools', 'Privacy needs'],
    outOfScope: ['Buying/contracts', 'Deep custom builds'],
    risks: [
      'Vendor lock‑in → prefer your current stack first',
      'Tools change quickly → time‑box decisions',
    ],
    timeline: '3–7 days',
    price: 'Fixed scope',
    ctaHref: '/contact?package=tool-selection',
  },
  {
    id: 'no-code-pilot',
    title: 'Set Up a Small Pilot (~2 wks)',
    blurb: 'We set up one or two helpful workflows you can own.',
    intro:
      'We set up a safe, small pilot using simple tools and show your team how to run it.',
    metrics: [
      'Agreed goal met (for example, hours saved or faster replies)',
      'Owner trained with a simple guide',
      'Rollback plan tested',
    ],
    includes: ['Setup', 'Safety rules', 'Basic tracking', 'Short training'],
    deliverables: [
      'Configured workflow/assistant',
      'How‑to guide',
      'Rollback plan',
      'Handoff checklist',
    ],
    inputs: ['Tool access', 'Sample data', 'Sponsor to approve “done”'],
    outOfScope: ['Custom builds', 'Deep integrations', 'Training models'],
    risks: [
      'Adoption risk → training + simple guide + rollback',
      'Tool limits → choose alternatives early',
    ],
    timeline: '~2 weeks',
    price: 'Fixed scope',
    ctaHref: '/contact?package=no-code-pilot',
  },
];

// Comparison table data
export const compareTableData = {
  caption: 'Compare Packages',
  columns: ['AI Overview', 'Readiness Check', 'Tool Selection', 'Pilot Setup'],
  rows: [
    {
      label: 'Primary outcome',
      values: [
        'Leaders aligned on top 3 ideas',
        'Quick‑wins list + pilot shortlist',
        'Shortlist + recommendation',
        'Pilot set up and working',
      ],
    },
    {
      label: 'Typical timeline',
      values: ['2 hours', '1–2 weeks', '3–7 days', '~2 weeks'],
    },
    {
      label: 'Pricing',
      values: ['Fixed fee', 'Fixed scope', 'Fixed scope', 'Fixed scope'],
    },
    {
      label: 'Includes',
      values: [
        'Slides + 30‑day action sketch',
        'Interviews, mapping, quick‑wins, comparison',
        'Comparison + recommendation note',
        'Setup + how‑to guide + rollback',
      ],
    },
    {
      label: 'Success check',
      values: [
        'Leaders agree on top 3',
        'Reviewed with sponsor',
        'Sponsor approves choice',
        'Pilot works and is handed off',
      ],
    },
  ],
};

// FAQ content
export const faqContent: FAQItem[] = [
  {
    question: 'Do you build custom software or train AI models?',
    answer:
      'No. We set up and connect existing tools. We do not use your private data to train AI.',
  },
  {
    question: 'Are you tied to one vendor?',
    answer:
      'No. We choose what fits you best and prefer tools you already have.',
  },
  {
    question: 'How do you measure success?',
    answer:
      'We agree on simple signs up front: time saved, fewer mistakes, faster replies, and adoption.',
  },
  {
    question: 'What about privacy and security?',
    answer:
      'We keep your data private. We only use the access we need and remove it when we’re done. NDA available.',
  },
  {
    question: 'Who owns the pilot?',
    answer:
      'You do. We leave easy instructions so your team can run and update it.',
  },
];

// Integrations content
export const integrations: Integration[] = [
  { name: 'Google', category: 'Suite' },
  { name: 'Microsoft', category: 'Suite' },
  { name: 'QuickBooks', category: 'Finance' },
  { name: 'Shopify', category: 'E-commerce' },
  { name: 'Stripe', category: 'Payments' },
  { name: 'Square', category: 'Payments' },
  { name: 'Slack', category: 'Communication' },
  { name: 'Teams', category: 'Communication' },
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Zapier', category: 'Automation' },
  { name: 'Make.com', category: 'Automation' },
];

// Privacy section content
export const privacyContent = {
  title: 'Privacy & Data Protection',
  leftColumn: {
    title: 'Privacy & Data',
    content:
      'We keep your private data private. We only access what we need and remove access when we’re done. NDA available.',
  },
  rightColumn: {
    title: 'Service Area & Agreements',
    content:
      'Service Area: Calgary • Airdrie • Cochrane • Okotoks (remote available)\n\nAgreements: Simple written plan with what we’ll deliver; changes agreed in writing.',
  },
};
