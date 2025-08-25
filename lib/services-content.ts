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
  title: 'Calgary AI Services for SMBs',
  subtitle:
    'Fast, practical integrations—AI Assistant Setup, Automation Audit + Pilot, and Analytics Quickstart. Fixed-scope, measurable outcomes, Calgary-ready privacy.',
  pills: [
    { text: 'Founder-led', type: 'primary' as const },
    { text: 'PIPEDA/PIPA aligned', type: 'secondary' as const },
    { text: 'Fixed-scope pilots', type: 'primary' as const },
  ],
};

// How We Work Process Steps
export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Discovery',
    description: 'Free, 30 min → goals, systems, constraints',
  },
  {
    step: 2,
    title: 'Scope',
    description: '2–3 days → SOW with success metrics & acceptance criteria',
  },
  {
    step: 3,
    title: 'Build',
    description: 'Timeboxed → weekly check-ins',
  },
  {
    step: 4,
    title: 'Pilot & Measurement',
    description: 'Track KPIs; adjust guardrails',
  },
  {
    step: 5,
    title: 'Handoff or Care Plan',
    description: "Owner's manual + optional Care Plan",
  },
];

// Services Data
export const services: Service[] = [
  {
    id: 'ai-assistant-setup',
    icon: '🤖',
    title: 'AI Assistant Setup',
    summary:
      'Deploy a branded assistant for customers or staff with safe access to your knowledge and tools. Guardrails first; measurable impact next.',
    detailedDescription:
      'We integrate AI assistants into your website, CRM, and internal tools. Expect trained responses on your data, handoffs to humans, and analytics on outcomes. Designed for Calgary SMBs with sensible safeguards and fast iteration.',
    successMetrics: [
      'Reduce repetitive tickets (baseline: last 4 weeks; track deflection %)',
      'Faster response times across web/SMS/email (median/95th percentile)',
      'Satisfaction (CSAT for assistant interactions)',
    ],
    bullets: [
      'Assistant persona, tone, and guardrails',
      'Knowledge ingestion (docs/site/FAQs)',
      'Escalation rules & human-in-the-loop',
      'Channel integration (web widget, SMS, optionally email)',
    ],
    artifacts: [
      'Assistant config & prompts',
      'Integration docs & API keys',
      'Analytics dashboard (volume, outcomes)',
      'Runbook for updates & retraining',
    ],
    timeline: '2–4 weeks',
    pricing: '$5k–$9k',
    clientInputs: [
      'Access to knowledge base & brand guidelines',
      'Sample transcripts/FAQs',
      'Approval for escalation paths',
    ],
    outOfScope: [
      'Custom model training from scratch',
      'Full CRM migration or re-platforming',
    ],
    risksMitigations: [
      'Data gaps → run "unknown intent" capture week 1',
      'Hallucinations → retrieval-first design + fallbacks',
      'Change adoption → short training video + cheatsheet',
    ],
  },
  {
    id: 'automation-audit-pilot',
    icon: '⚙️',
    title: 'Automation Audit + Pilot',
    summary:
      'Map bottlenecks across your processes and ship a low-risk pilot that saves hours each week—then decide what to scale.',
    detailedDescription:
      "We'll audit your tools and workflows (email, spreadsheets, CRM, finance) to identify high‑leverage automation. Then we ship a pilot focused on one measurable result (e.g., weekly reporting, invoicing, or approvals).",
    successMetrics: [
      'Hours saved per week (time study on 2–3 reps)',
      'Error rate reduction on the targeted workflow',
      'Cycle time (before/after for one measurable step)',
    ],
    bullets: [
      'Workflow mapping & opportunity scoring',
      'Pilot automation build with guardrails',
      'Change management & team training',
      'Monitoring and fallback procedures',
    ],
    artifacts: [
      'Automation plan with ROI model',
      'Pilot implementation (1 targeted process)',
      'Training materials (video + quick guide)',
      'Ops runbook + incident playbook',
    ],
    timeline: '3–6 weeks',
    pricing: '$7k–$14k',
    clientInputs: [
      'Tool access (spreadsheets/CRM/finance)',
      '2–3 SMEs for interviews & testing',
      'Approval on acceptance criteria',
    ],
    outOfScope: [
      'Multi-system enterprise re-architecture',
      'Ongoing ops beyond pilot (unless Care Plan)',
    ],
    risksMitigations: [
      'Tool limits/API quotas → pre-flight checks week 1',
      'Hidden dependencies → process dry-runs with SMEs',
      'Change resistance → involve the process owner early',
    ],
  },
  {
    id: 'analytics-quickstart',
    icon: '📊',
    title: 'Analytics Quickstart',
    summary:
      'Connect your data and ship dashboards that answer the questions Calgary operators actually ask—fast.',
    detailedDescription:
      'We centralize your data and build dashboards focused on decisions: revenue, pipeline, utilization, and churn risk. Pragmatic setup over heavy platforms—start simple, iterate quickly.',
    successMetrics: [
      'Decision latency (time to answer top 5 questions)',
      'Adoption (weekly active viewers)',
      'Data trust (fewer ad-hoc extracts; one source of truth)',
    ],
    bullets: [
      'Source connections (SaaS, spreadsheets, DBs)',
      'Data model + definitions',
      'KPI dashboards and alerts',
      'Access controls & governance notes',
    ],
    artifacts: [
      'Data model & connectors',
      'Dashboard pack (6–8 KPIs)',
      'Alerting + SLA docs',
      'Admin & usage guide',
    ],
    timeline: '2–3 weeks',
    pricing: '$6k–$10k',
    clientInputs: [
      'Read access to systems',
      'KPI definitions & thresholds',
      'Champion user for feedback',
    ],
    outOfScope: [
      'Enterprise data warehouse build',
      'Company-wide BI governance program',
    ],
    risksMitigations: [
      'Dirty/fragmented data → light transforms + data dictionary',
      'Scope creep → cap to 6–8 KPIs in the pilot',
      'Tool sprawl → prefer existing stack before adding new BI',
    ],
  },
];

// Compare Services Data
export const serviceComparison: ServiceComparison[] = [
  {
    feature: 'Primary outcome',
    aiAssistantSetup: 'Faster replies & fewer repetitive tickets',
    automationAuditPilot: 'Hours saved + fewer errors in a targeted process',
    analyticsQuickstart: 'Answers to top operator questions',
  },
  {
    feature: 'Typical timeline',
    aiAssistantSetup: '2–4 wks',
    automationAuditPilot: '3–6 wks',
    analyticsQuickstart: '2–3 wks',
  },
  {
    feature: 'Typical budget',
    aiAssistantSetup: '$5k–$9k',
    automationAuditPilot: '$7k–$14k',
    analyticsQuickstart: '$6k–$10k',
  },
  {
    feature: 'Users affected',
    aiAssistantSetup: 'Customers / internal teams',
    automationAuditPilot: 'Ops / Finance / Admin',
    analyticsQuickstart: 'Leadership / Ops',
  },
  {
    feature: 'Core deliverables',
    aiAssistantSetup: 'Assistant + analytics + runbook',
    automationAuditPilot: 'Pilot automation + ROI model + runbook',
    analyticsQuickstart: 'KPIs + alerts + admin guide',
  },
  {
    feature: 'Good first step if…',
    aiAssistantSetup: 'You field many repeat questions',
    automationAuditPilot: 'A weekly task is manual & error-prone',
    analyticsQuickstart: 'You spend time hunting numbers',
  },
];

// FAQ Data
export const faqs: FAQ[] = [
  {
    question: 'Will my data train AI?',
    answer:
      "No. We don't train models on your private data. All processing is done with privacy-first guardrails.",
  },
  {
    question: 'On-prem/VPC available?',
    answer:
      'Available on request for enterprise clients. We can work within your security constraints.',
  },
  {
    question: 'Which models/tools do you use?',
    answer:
      'Chosen per use case with cost/latency trade-offs documented in SOW. We optimize for your specific needs.',
  },
  {
    question: 'How is ROI measured?',
    answer:
      'Time saved, error rate reduction, ticket deflection, response times, adoption rates, and user satisfaction.',
  },
  {
    question: 'What happens post-pilot?',
    answer:
      "Owner's manual + optional Care Plan for ongoing support, updates, and optimization.",
  },
  {
    question: 'Security & privacy details?',
    answer:
      'Least-privilege access, audit logs, secret management, secure data handling, and clean off-boarding procedures.',
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
  'Make',
];

// Privacy & Compliance Content
export const privacyContent = {
  title: 'Privacy & Data Protection',
  sections: [
    {
      title: 'Canada-First Compliance',
      content:
        "We follow PIPEDA and Alberta's PIPA norms. NDA on request. No training on your private data. Least-privilege access with off-boarding plan.",
    },
    {
      title: 'Service Area & Contracts',
      content:
        'Service Area: Calgary • Airdrie • Cochrane • Okotoks (remote available) Contracts: SOW with acceptance criteria; change orders for expanded scope.',
    },
  ],
};

// Schema.org structured data templates
export const schemaOrgData = {
  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Nexus AI',
    description:
      'Calgary AI services for SMBs including AI Assistant Setup, Automation Audit + Pilot, and Analytics Quickstart.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Calgary',
      addressRegion: 'AB',
      addressCountry: 'CA',
    },
    areaServed: ['Calgary', 'Airdrie', 'Cochrane', 'Okotoks'],
    serviceType: [
      'AI Assistant Setup',
      'Automation Audit + Pilot',
      'Analytics Quickstart',
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
  title: 'ROI Calculator',
  description: 'Estimate your potential savings with AI automation',
  inputs: [
    {
      label: 'Hours saved per week',
      placeholder: 'e.g. 10',
      min: 1,
      max: 100,
    },
    {
      label: 'Loaded hourly rate ($)',
      placeholder: 'e.g. 75',
      min: 25,
      max: 300,
    },
    {
      label: 'Weeks per year',
      placeholder: 'e.g. 52',
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
  title: 'AI Pilot Readiness Checklist',
  subtitle: 'Calgary SMBs',
  description:
    'Get your free 10-point checklist to assess if your business is ready for AI automation.',
  benefits: [
    'Identify quick wins for AI implementation',
    'Understand data readiness requirements',
    'Learn about Calgary-specific considerations',
    'Get implementation timeline estimates',
  ],
  emailPlaceholder: 'Enter your email address',
  buttonText: 'Get Free Checklist',
  privacyText: 'We respect your privacy. Unsubscribe at any time.',
};

// Footer Content
export const footerContent = {
  serviceArea: 'Calgary • Airdrie • Cochrane • Okotoks (remote available)',
  privacy:
    "We follow PIPEDA/PIPA norms. NDA on request. We don't train models on your private data.",
  contracts: 'SOW with acceptance criteria; change orders for expanded scope.',
};
