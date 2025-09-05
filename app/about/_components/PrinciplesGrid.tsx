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

export function PrinciplesGrid({ items }: PrinciplesGridProps) {
  const iconMap: Record<string, string> = {
    'Start Small, No‑Code First':
      '/icons/about/principles/start-small_rocket-tile.png',
    'Human-in-the-Loop': '/icons/about/principles/human-in-loop_chat-heart.png',
    'Privacy‑Minded': '/icons/about/security/privacy_lock-badge.png',
    'Vendor-Neutral':
      '/icons/about/principles/vendor-neutral_network-triangle-shield.png',
    'Ship Weekly': '/icons/about/principles/ship-weekly_calendar-rocket.png',
    'Teach Your Team':
      '/icons/about/principles/teach-your-team_calendar-check.png',
    'Check Results':
      '/icons/about/principles/check-results_chart-loupe-check.png',
  };
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
                {iconMap[principle.title] ? (
                  <Image
                    src={iconMap[principle.title]}
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
