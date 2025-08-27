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
  title: 'Calgary AI Services for small and mid-sized businesses (SMBs)',
  subtitle:
    "Fast, practical artificial intelligence (AI) integrations—AI Assistant Setup, Automation Audit + Pilot, and Analytics Quickstart. Fixed scope, clear results, and privacy aligned with the Personal Information Protection and Electronic Documents Act (PIPEDA) and Alberta's Personal Information Protection Act (PIPA).",
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
    description:
      '2–3 days → Statement of Work (SOW) with success metrics and acceptance criteria',
  },
  {
    step: 3,
    title: 'Build',
    description: 'Fixed timeline with weekly check-ins',
  },
  {
    step: 4,
    title: 'Pilot & Measurement',
    description: 'Track key performance indicators (KPIs); adjust safety rules',
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
      'Deploy a branded assistant for customers or staff with safe access to your knowledge and tools. Safety rules first; measurable impact next.',
    detailedDescription:
      'We integrate AI assistants into your website, customer relationship management (CRM), and internal tools. Expect trained responses on your data, handoffs to humans, and analytics on outcomes. Designed for Calgary SMBs with sensible safeguards and fast iteration.',
    successMetrics: [
      'Reduce repetitive tickets (baseline: last 4 weeks; track deflection rate (%))',
      'Faster response times across web, text messaging (SMS), and email (typical and 95th percentile)',
      'Customer satisfaction score (CSAT) for assistant interactions',
    ],
    bullets: [
      'Assistant persona, tone, and safety rules',
      'Knowledge ingestion (documents, website, Frequently Asked Questions (FAQs))',
      'Escalation rules with a human review step',
      'Channel integration (web widget, text messaging (SMS), optionally email)',
    ],
    artifacts: [
      'Assistant config & prompts',
      'Integration docs & API keys',
      'Analytics dashboard (volume, outcomes)',
      'Operations runbook for updates & retraining',
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
      'Data gaps → capture unknown questions in week 1',
      'Incorrect model outputs (hallucinations) → retrieval-first design plus fallbacks',
      'Change adoption → short training video plus quick reference guide',
    ],
  },
  {
    id: 'automation-audit-pilot',
    icon: '⚙️',
    title: 'Automation Audit + Pilot',
    summary:
      'Map bottlenecks across your processes and ship a low-risk pilot that saves hours each week—then decide what to scale.',
    detailedDescription:
      "We'll audit your tools and workflows (email, spreadsheets, customer relationship management (CRM), finance) to identify high‑leverage automation. Then we ship a pilot focused on one measurable result (for example, weekly reporting, invoicing, or approvals).",
    successMetrics: [
      'Hours saved per week (time study on 2–3 team members)',
      'Error rate reduction on the targeted workflow',
      'Cycle time (before/after for one measurable step)',
    ],
    bullets: [
      'Workflow mapping & opportunity scoring',
      'Pilot automation build with safety rules',
      'Change management & team training',
      'Monitoring and fallback procedures',
    ],
    artifacts: [
      'Automation plan with ROI model',
      'Pilot implementation (1 targeted process)',
      'Training materials (video + quick guide)',
      'Operations runbook + incident playbook',
    ],
    timeline: '3–6 weeks',
    pricing: '$7k–$14k',
    clientInputs: [
      'Tool access (spreadsheets/CRM/finance)',
      '2–3 subject-matter experts (SMEs) for interviews & testing',
      'Approval on acceptance criteria',
    ],
    outOfScope: [
      'Multi-system enterprise re-architecture',
      'Ongoing ops beyond pilot (unless Care Plan)',
    ],
    risksMitigations: [
      'Tool limits and API quotas → pre-checks in week 1',
      'Hidden dependencies → process dry-runs with subject-matter experts (SMEs)',
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
      'Source connections (software-as-a-service (SaaS), spreadsheets, databases (DBs))',
      'Data model + definitions',
      'Key performance indicator (KPI) dashboards and alerts',
      'Access and data rules',
    ],
    artifacts: [
      'Data model & connectors',
      'Dashboard pack (6–8 key performance indicators (KPIs))',
      'Alerting plus service level agreement (SLA) docs',
      'Admin & usage guide',
    ],
    timeline: '2–3 weeks',
    pricing: '$6k–$10k',
    clientInputs: [
      'Read access to systems',
      'Key performance indicator (KPI) definitions & thresholds',
      'Champion user for feedback',
    ],
    outOfScope: [
      'Enterprise data warehouse build',
      'Company-wide business intelligence (BI) access and data rules program',
    ],
    risksMitigations: [
      'Dirty/fragmented data → light transforms + data dictionary',
      'Scope creep → cap to 6–8 key performance indicators (KPIs) in the pilot',
      'Tool sprawl → prefer existing stack before adding new business intelligence (BI)',
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
    aiAssistantSetup: '2–4 weeks',
    automationAuditPilot: '3–6 weeks',
    analyticsQuickstart: '2–3 weeks',
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
    automationAuditPilot: 'Operations (Ops) / Finance / Admin',
    analyticsQuickstart: 'Leadership / Operations (Ops)',
  },
  {
    feature: 'Core deliverables',
    aiAssistantSetup: 'Assistant + analytics + runbook',
    automationAuditPilot:
      'Pilot automation + return on investment (ROI) model + runbook',
    analyticsQuickstart:
      'Key performance indicators (KPIs) + alerts + admin guide',
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
      "No. We don't train models on your private data. All processing is done with clear privacy rules.",
  },
  {
    question: 'On-premises or VPC available?',
    answer:
      'Yes—available on request for enterprise clients. We can work within your security constraints. VPC stands for virtual private cloud.',
  },
  {
    question: 'Which models and tools do you use?',
    answer:
      'Chosen per use case with costs and speed trade-offs documented in the Statement of Work (SOW). We optimize for your specific needs.',
  },
  {
    question: 'How is ROI measured?',
    answer:
      'Return on investment (ROI) is measured by time saved, error rate reduction, ticket deflection, response times, adoption rates, and user satisfaction.',
  },
  {
    question: 'What happens post-pilot?',
    answer:
      "Owner's manual + optional Care Plan for ongoing support, updates, and optimization.",
  },
  {
    question: 'Security and privacy details?',
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
  'Make.com',
];

// Privacy & Compliance Content
export const privacyContent = {
  title: 'Privacy & Data Protection',
  sections: [
    {
      title: 'Canada-First Compliance',
      content:
        "We follow the Personal Information Protection and Electronic Documents Act (PIPEDA) and Alberta's Personal Information Protection Act (PIPA). Nondisclosure agreements (NDAs) on request. No training on your private data. Least-privilege access with an off-boarding plan.",
    },
    {
      title: 'Service Area & Contracts',
      content:
        'Service Area: Calgary • Airdrie • Cochrane • Okotoks (remote available) Contracts: Statement of Work (SOW) with acceptance criteria; change orders for expanded scope.',
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
      'Calgary AI services for small and mid-sized businesses (SMBs) including AI Assistant Setup, Automation Audit + Pilot, and Analytics Quickstart.',
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
  title: 'AI Pilot Readiness Checklist',
  subtitle: 'Calgary small and mid-sized businesses (SMBs)',
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
    "We follow the Personal Information Protection and Electronic Documents Act (PIPEDA) and Alberta's Personal Information Protection Act (PIPA). Nondisclosure agreements (NDAs) available. We don't train models on your private data.",
  contracts: 'SOW with acceptance criteria; change orders for expanded scope.',
};
