import Link from 'next/link';
import { PlaybookCard } from './PlaybookCard';
import { homeContent } from '@/app/_content/home';
import { Section } from './Section';

export function CaseStudiesOverview() {
  return (
    <Section
      id="pilots"
      title={homeContent.pilots.title}
      subtitle="Example no‑code pilots with clear acceptance criteria"
      footnote={homeContent.pilots.footnote}
    >
      <div className="container-wide">
        <div className="grid gap-6 md:gap-8 lg:gap-10 md:grid-cols-3">
          {homeContent.pilots.items.map((playbook, index) => (
            <PlaybookCard key={playbook.id} playbook={playbook} index={index} />
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <Link href="/playbooks" className="btn-primary text-lg px-8 py-4">
            Get playbooks & templates <span>→</span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
