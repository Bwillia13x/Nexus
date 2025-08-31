import {
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
} from './content';

export type AboutContent = {
  hero: { title: string; subtitle: string; badges: string[] };
  whoIAm: { title: string; body: string };
  howIWork: { title: string; body: string };
  background: string;
  metrics: string[]; // "What We Measure..." bullets
  principles: { icon: string; title: string; body: string }[];
  founderSnapshot: string[]; // short bullets
  process: { step: number; title: string; blurb: string; bullets: string[] }[];
  security: { items: string[] };
  faq: { q: string; a: string }[];
  resources: { title: string; href: string; note?: string }[];
  media: { title: string; note: string };
  speaking: { title: string; venue: string; meta: string[]; copy: string };
};

// Transform existing content to match new structure
export const aboutContent: AboutContent = {
  hero: {
    title: hero.title,
    subtitle: hero.subtitle,
    badges: hero.badges,
  },
  whoIAm: {
    title: 'Who I Am',
    body: intro.whoIAm,
  },
  howIWork: {
    title: 'How I Work',
    body: intro.howIWork,
  },
  background: background.main,
  metrics: measurementCard.items,
  principles: principles.map(p => ({
    icon: p.icon || '',
    title: p.title,
    body: p.text,
  })),
  founderSnapshot: founderSnapshot,
  process: engagementSteps.map(step => ({
    step: step.step,
    title: step.title,
    blurb: step.description,
    bullets: [], // Will be populated if needed
  })),
  security: {
    items: [trust.privacy, trust.access, trust.hosting],
  },
  faq: faq,
  resources: [
    {
      title: 'Professional Background',
      href: '/downloads/drew-resume.pdf',
      note: '1-page overview of experience in finance, analytics, and AI implementation',
    },
    {
      title: 'AI Pilot Readiness Checklist',
      href: '/downloads/ai-pilot-readiness-checklist.pdf',
      note: '10-point assessment to determine if your business is ready for AI automation',
    },
  ],
  media: {
    title: 'Media Kit',
    note: 'For journalists, partners, and industry connections',
  },
  speaking: {
    title: 'Upcoming: AI in Bridgeland',
    venue: 'Bridgeland Community Association',
    meta: ['Date TBD', 'Bridgeland Community Association'],
    copy: 'Discussion on practical AI adoption for Calgary small businesses, covering pilot strategies, how to check results, and local implementation considerations.',
  },
};
