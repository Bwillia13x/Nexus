// Centralized content for Playbooks page
export interface PlaybooksHero {
  title: string;
  subtitle: string;
  badges?: string[];
}

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline';
  };
}

export interface ChecklistBlock {
  id: string; // anchor id
  title: string;
  description?: string;
}

export const hero: PlaybooksHero = {
  title: 'Playbooks & Templates',
  subtitle:
    'Simple downloads your team can use today: checklists, guides, and comparison sheets.',
  badges: ['Free downloads', 'Practical', 'No fluff'],
};

export const resources: ResourceItem[] = [
  {
    id: 'ai-readiness-checklist',
    title: 'AI Readiness Checklist (10‑point)',
    description:
      'Are we ready for a safe, useful pilot? Assess data, tools, and guardrails.',
    cta: { label: 'Get the checklist', href: '#checklist', variant: 'primary' },
  },
  {
    id: 'tool-comparison-sheet',
    title: 'Tool Comparison Sheet',
    description:
      'Side‑by‑side compare (cost/speed/limits) for your short‑listed tools.',
    cta: {
      label: 'Download CSV',
      href: '/downloads/tool-selection-matrix.csv',
      variant: 'primary',
    },
  },
  {
    id: 'prompting-guide',
    title: 'Prompting Guide',
    description: 'Helpful patterns and do’s/don’ts you can adapt.',
    cta: {
      label: 'Download PDF',
      href: '/downloads/prompting-playbook.pdf',
      variant: 'primary',
    },
  },
  {
    id: 'automation-howto-starter',
    title: 'Automation How‑To Starter',
    description: 'Template to document your setup with a simple rollback plan.',
    cta: {
      label: 'Download DOCX',
      href: '/downloads/no-code-sop-starter.docx',
      variant: 'primary',
    },
  },
  {
    id: 'savings-starter-sheet',
    title: 'Savings Starter Sheet',
    description: 'Baseline time saved and fewer mistakes to track progress.',
    cta: {
      label: 'Download CSV',
      href: '/downloads/metrics-roi-starter.csv',
      variant: 'primary',
    },
  },
];

export const checklist: ChecklistBlock = {
  id: 'checklist',
  title: 'AI Readiness Checklist',
};
