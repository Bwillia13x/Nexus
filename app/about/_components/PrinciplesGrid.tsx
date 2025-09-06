import { Card } from './Card';
import { MaybeIcon } from '@/components/ui/MaybeIcon';
import SpriteIcon from '@/components/ui/SpriteIcon';

interface Principle {
  icon: string;
  title: string;
  body: string;
}

interface PrinciplesGridProps {
  items: Principle[];
}

function getSpriteIdForTitle(title: string): string | undefined {
  switch (title) {
    case 'Start Small, No‑Code First':
      return 'ps--about--principles--start-small_rocket-tile';
    case 'Human-in-the-Loop':
      return 'ps--about--principles--human-in-loop_chat-heart';
    case 'Privacy‑Minded':
      return 'ps--about--security--data-guard_shield-database';
    case 'Vendor-Neutral':
      return 'ps--about--principles--vendor-neutral_network-triangle-shield';
    case 'Ship Weekly':
      return 'ps--about--principles--ship-weekly_calendar-rocket';
    case 'Teach Your Team':
      return 'ps--about--principles--teach-your-team_calendar-check';
    case 'Check Results':
      return 'ps--about--principles--check-results_chart-loupe-check';
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
                {getSpriteIdForTitle(principle.title) ? (
                  <SpriteIcon
                    name={getSpriteIdForTitle(principle.title)!}
                    size={48}
                    className="text-primary"
                    title={principle.title}
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
