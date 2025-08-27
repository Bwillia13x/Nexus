/**
 * Typed content and schema definitions for the Contact page
 */

export const CONTACT_CONTENT = {
  hero: {
    eyebrow: 'Calgary SMB?',
    title: 'Book a 30-minute discovery call',
    subtitle:
      "We'll identify a focused pilot we can ship in about 30 days — assistant, automation, or analytics — with clear safety rules.",
    badges: [
      { icon: '⚡', text: 'Quick Response' },
      { icon: '🎯', text: 'Custom Solutions' },
      { icon: '🔒', text: 'Strong Security' },
    ],
  },
  form: {
    title: 'Get Started',
    subtitle:
      "Tell us what you need. We'll recommend a small, practical AI project we can ship in about 30 days.",
    fields: {
      fullName: {
        label: 'Full Name',
        placeholder: 'Enter your full name',
        required: true,
      },
      email: {
        label: 'Email Address',
        placeholder: 'your.email@company.com',
        required: true,
      },
      company: {
        label: 'Company',
        placeholder: 'Your company name',
        required: false,
      },
    },
    industry: {
      label: 'Industry',
      placeholder: 'Select your industry',
      options: [
        'Retail',
        'Trades/Construction',
        'Clinics',
        'Restaurants',
        'Professional Services',
        'Other',
      ],
      required: true,
    },
    teamSize: {
      label: 'Team Size',
      placeholder: 'Select team size',
      options: ['1–5', '6–20', '21–50', '51–200', '200+'],
      required: true,
    },
    tools: {
      label: 'Current Tools (select all that apply)',
      options: [
        'Google Workspace',
        'Microsoft 365',
        'QuickBooks',
        'Shopify',
        'Stripe',
        'Square',
        'Slack',
        'Teams',
        'HubSpot',
        'Make.com',
      ],
      required: false,
    },
    sensitivity: {
      label: 'Data Sensitivity',
      placeholder: 'Select sensitivity level',
      options: ['Low', 'Moderate', 'High'],
      required: true,
    },
    budget: {
      label: 'Budget Range',
      placeholder: 'Select budget range',
      options: ['<$5k', '$5k–$9k', '$9k–$14k', '$14k+'],
      required: true,
    },
    urgency: {
      label: 'Project Urgency',
      placeholder: 'Select urgency',
      options: ['Exploring', 'This quarter', 'ASAP'],
      required: true,
    },
    vision: {
      label: 'Your Vision',
      placeholder:
        "Tell us about your project, challenges, or how you'd like AI to help your business...",
      help: 'Be as specific as possible about your goals and challenges',
      required: true,
    },
    submit: {
      label: 'Send Message',
      loading: 'Sending Your Message...',
      help: "We'll respond the same business day",
    },
  },
  sidebar: {
    whyChoose: {
      title: 'Why Choose Us?',
      items: [
        'Founder-led builds with clear accountability',
        'Calgary-first, privacy-aware approach (PIPEDA/PIPA)',
        'Fixed-scope pilots with measurable outcomes',
        'Plain-English docs and handoff',
      ],
    },
    responseTime: {
      title: 'Response Time',
      items: [
        { method: 'Email', time: 'Same business day' },
        { method: 'Phone', time: 'By appointment' },
        { method: 'Consultation', time: 'Within 48 hours' },
      ],
    },
    security: {
      title: 'Your Data is Safe',
      content:
        'We use least-privilege access, keep your private data private, and follow PIPEDA (federal) and PIPA (Alberta). Non-disclosure agreement (NDA) available on request. We do not train on your data.',
    },
  },
  success: {
    title: "Thanks! We'll get back to you the same business day.",
    buttons: {
      bookCall: {
        text: 'Schedule a call',
        href: '/book',
      },
      seePilots: {
        text: 'See pilot menu',
        href: '/services#services',
      },
    },
  },
  roi: {
    info: 'Using ROI inputs from calculator',
    clear: 'Clear',
  },
  privacy: {
    note: 'We follow PIPEDA (federal) and PIPA (Alberta). Non-disclosure agreement (NDA) available on request. We do not train models on your private data.',
  },
} as const;

// Type exports for use in components
export type IndustryOption =
  (typeof CONTACT_CONTENT.form.industry.options)[number];
export type TeamSizeOption =
  (typeof CONTACT_CONTENT.form.teamSize.options)[number];
export type ToolOption = (typeof CONTACT_CONTENT.form.tools.options)[number];
export type SensitivityOption =
  (typeof CONTACT_CONTENT.form.sensitivity.options)[number];
export type BudgetOption = (typeof CONTACT_CONTENT.form.budget.options)[number];
export type UrgencyOption =
  (typeof CONTACT_CONTENT.form.urgency.options)[number];
