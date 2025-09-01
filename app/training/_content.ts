// Centralized content for Training page
export interface TrainingHero {
  title: string;
  subtitle: string;
  badges?: string[];
}

export interface Offering {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  cta: {
    label: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline';
  };
}

export interface PlaybooksBlock {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}

export const trainingHero: TrainingHero = {
  title: 'Training & AI Literacy',
  subtitle:
    'Practical skills for everyday use — simple, safe, and tailored to your roles.',
  badges: ['Plain English', 'Safe by default', 'Role‑based'],
};

export const offerings: Offering[] = [
  {
    id: 'team-workshop',
    title: 'Team Literacy Workshop (½‑day)',
    description:
      'Role‑based use‑cases with hands‑on exercises. We cover safety do’s/don’ts and everyday prompting patterns.',
    bullets: [
      'Prompting Playbook for your roles',
      'Safety checklist and approved examples',
      'Post‑session quiz ≥ 80% acceptance',
    ],
    cta: {
      label: 'Book a workshop →',
      href: '/contact?training=workshop',
      variant: 'primary',
    },
  },
  {
    id: 'prompting-clinics',
    title: 'Prompting Clinics',
    description:
      'Short, focused coaching for teams to practice prompts on real tasks with a facilitator.',
    bullets: [
      '60–90 minute sessions',
      'Bring your tasks & policies',
      'Reusable patterns & templates',
    ],
    cta: {
      label: 'Request a clinic →',
      href: '/contact?training=clinic',
      variant: 'secondary',
    },
  },
];

export const playbooksBlock: PlaybooksBlock = {
  title: 'Role‑Specific Playbooks',
  description:
    'Simple templates and how‑tos you can adapt: support, operations, finance, and more.',
  primary: { label: 'Browse playbooks →', href: '/playbooks' },
  secondary: { label: 'Get the readiness checklist', href: '/#readiness' },
};
