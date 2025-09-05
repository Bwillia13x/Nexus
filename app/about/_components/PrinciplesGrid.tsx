import { Card } from './Card';
import { MaybeIcon } from '@/components/ui/MaybeIcon';
import Image from 'next/image';

interface Principle {
  icon: string;
  title: string;
  body: string;
}

interface PrinciplesGridProps {
  items: Principle[];
}

function getIconForTitle(title: string): string | undefined {
  switch (title) {
    case 'Start Small, No‑Code First':
      return '/icons-svg/about/principles/start-small_rocket-tile.svg';
    case 'Human-in-the-Loop':
      return '/icons-svg/about/principles/human-in-loop_chat-heart.svg';
    case 'Privacy‑Minded':
      return '/icons-svg/about/security/privacy_lock-badge.svg';
    case 'Vendor-Neutral':
      return '/icons-svg/about/principles/vendor-neutral_network-triangle-shield.svg';
    case 'Ship Weekly':
      return '/icons-svg/about/principles/ship-weekly_calendar-rocket.svg';
    case 'Teach Your Team':
      return '/icons-svg/about/principles/teach-your-team_calendar-check.svg';
    case 'Check Results':
      return '/icons-svg/about/principles/check-results_chart-loupe-check.svg';
    default:
      return undefined;
  }
}

export function PrinciplesGrid({ items }: PrinciplesGridProps) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2
          id="principles-heading"
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Principles
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A few beliefs that guide every project
        </p>
      </div>

      <ul
        role="list"
        aria-labelledby="principles-heading"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {items.map((principle, index) => (
          <li key={index} className="list-none">
            <Card className="p-6 text-center" variant="glass">
              <div className="mb-4 flex justify-center">
                {getIconForTitle(principle.title) ? (
                  <Image
                    src={getIconForTitle(principle.title)!}
                    alt={principle.title}
                    width={48}
                    height={48}
                  />
                ) : (
                  <MaybeIcon
                    emoji={principle.icon}
                    title={principle.title}
                    className="text-4xl"
                  />
                )}
              </div>
              <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
              <p className="text-muted-foreground text-sm leading-6">
                {principle.body}
              </p>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
