import SpriteIcon from '@/components/ui/SpriteIcon';

export type FeatureItem = {
  title: string;
  caption?: string;
  spriteName?: string; // optional explicit sprite id
};

function resolveSprite(title: string, explicit?: string): string {
  if (explicit) return explicit;
  const t = title.toLowerCase();
  // Keyword-based mapping to existing UI sprite symbols
  if (t.includes('week') || t.includes('timeline') || t.includes('calendar')) {
    return 'ps--about--principles--teach-your-team_calendar-check';
  }
  if (
    t.includes('piped') ||
    t.includes('pipa') ||
    t.includes('privacy') ||
    t.includes('compliant') ||
    t.includes('security')
  ) {
    return 'ps--about--security--data-guard_shield-database';
  }
  if (
    t.includes('plain english') ||
    t.includes('training') ||
    t.includes('simple') ||
    t.includes('team')
  ) {
    return 'ps--about--principles--human-in-loop_chat-heart';
  }
  if (t.includes('fixed') || t.includes('pricing') || t.includes('price')) {
    return 'ps--faq--q-pricing_calculator-tag';
  }
  // Fallback to a generic playbooks/download icon
  return 'ps--cta--roi-calculator';
}

export function FeatureStrip({
  items = [
    {
      title: '2–3 Week',
      caption: 'Implementation',
      spriteName: 'ps--about--principles--teach-your-team_calendar-check',
    },
    {
      title: 'PIPEDA/PIPA',
      caption: 'Compliant',
      spriteName: 'ps--about--security--data-guard_shield-database',
    },
    {
      title: 'Plain English',
      caption: 'Training',
      spriteName: 'ps--about--principles--human-in-loop_chat-heart',
    },
    {
      title: 'Fixed Scope',
      caption: 'Pricing',
      spriteName: 'ps--faq--q-pricing_calculator-tag',
    },
  ],
  ariaLabel = 'Key Highlights',
}: {
  items?: FeatureItem[];
  ariaLabel?: string;
}) {
  return (
    <nav aria-label={ariaLabel} className="mt-8">
      <ul
        role="list"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {items.map((it, i) => (
          <li key={i} role="listitem">
            <div className="card-elevated p-4 flex items-center gap-3">
              <span className="icon-tile" aria-hidden>
                <SpriteIcon
                  name={resolveSprite(it.title, it.spriteName)}
                  size={20}
                  className="text-white"
                />
              </span>
              <div>
                <div className="text-sm font-semibold leading-tight text-ink">
                  {it.title}
                </div>
                {it.caption ? (
                  <div className="text-caption text-muted-foreground">
                    {it.caption}
                  </div>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default FeatureStrip;
