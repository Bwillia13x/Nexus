export const homeContent = {
  hero: {
    title: 'We help you integrate the latest AI to grow your business',
    subtitle:
      'We set up practical AI tools that work with what you already use—fast, safe, and in plain English. No jargon. No big IT projects.',
    primaryCta: {
      label: 'Book a discovery call',
      href: '/contact?intent=discovery',
    },
    secondaryCta: {
      label: 'Get the AI Readiness Checklist',
      href: '/#readiness',
    },
  },
  services: {
    title: 'What We Do',
    subtitle: 'Simple, practical AI help—no heavy tech.',
    items: [
      {
        title: 'Set Up an AI Helper',
        text: 'Add a friendly chat assistant for customers or staff.',
      },
      {
        title: 'Automate Repetitive Work',
        text: 'Save time on routine tasks like reports, follow‑ups, and data entry.',
      },
      {
        title: 'Clear, Simple Dashboards',
        text: 'See your key numbers in one place so you can act quickly.',
      },
    ],
  },
  pilots: {
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
          'Website chat, optional texting',
          'Simple usage report',
        ],
        cta: {
          label: 'Start Assistant Pilot',
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
        cta: { label: 'Start Ops Pilot', href: '/contact?pilot=ops' },
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
          'Simple access rules',
        ],
        cta: {
          label: 'Start Analytics Pilot',
          href: '/contact?pilot=analytics',
        },
      },
    ],
  },
  howItWorks: {
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
        bullets: [
          'What we’ll set up',
          'What success looks like',
          'Fixed price',
        ],
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
    ],
  },
  cta: {
    title: 'Ready to try AI in your business?',
    description: 'Book a free call. We’ll suggest a simple first step.',
    cta: { label: 'Book Discovery Call', href: '/contact?intent=discovery' },
  },
  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'Do you train models on our data?',
        answer:
          'No—private data stays private; processing is usage-bound with clear retention rules.',
      },
      {
        question: 'Cloud vs on‑prem?',
        answer: 'Default cloud; VPC or on‑prem by request.',
      },
      {
        question: 'Which tools do you recommend?',
        answer:
          'Vendor‑neutral selection based on your stack. We document cost/speed/limits in a Tool Selection Matrix.',
      },
      {
        question: 'How do we know it’s working?',
        answer:
          'Simple signs: time saved, fewer mistakes, faster replies, and adoption.',
      },
      {
        question: 'Security & access?',
        answer:
          'Least‑privilege, audit trails, secrets management, off‑boarding plan.',
      },
      {
        question: 'What happens after the pilot?',
        answer: 'Handoff or Care Plan; your choice.',
      },
      {
        question: 'What’s included?',
        answer:
          'Set up and connect existing tools. We avoid long, custom builds unless you ask for them.',
      },
    ],
  },
  roi: {
    title: 'Savings Calculator',
    footnote: '*Estimates only — real results vary.*',
  },
  integrations: { title: 'Works with Your Tools' },
  readiness: {
    title: 'AI Pilot Readiness Checklist',
  },
};

export type Playbook = (typeof homeContent.pilots.items)[0];
