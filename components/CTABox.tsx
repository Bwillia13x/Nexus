import Link from 'next/link';
import SpriteIcon from '@/components/ui/SpriteIcon';

export function CTABox({
  title = 'Still have questions?',
  subtitle = 'Book a free 30‑minute call to discuss your situation. No pressure — just honest advice about what might work for your business.',
  cta = { href: '/contact', label: 'Book a discovery call' },
  note = 'Typically respond within 4 hours during business days',
  icon = 'ps--cta--book-call_alt-calendar-check',
}: {
  title?: string;
  subtitle?: string;
  cta?: { href: string; label: string };
  note?: string;
  icon?: string;
}) {
  return (
    <aside
      className="card-glass glass-liquid p-8 text-center"
      aria-labelledby="cta-box-title"
    >
      <div className="flex justify-center mb-4">
        <span className="icon-tile" aria-hidden>
          <SpriteIcon name={icon} size={20} className="text-white" />
        </span>
      </div>
      <h3 id="cta-box-title" className="text-2xl md:text-3xl font-bold mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground max-w-2xl mx-auto mb-6 text-pretty">
        {subtitle}
      </p>
      <div className="flex justify-center">
        <Link href={cta.href} className="btn-primary" aria-label={cta.label}>
          {cta.label}
        </Link>
      </div>
      {note ? (
        <p className="mt-3 text-caption text-muted-foreground">{note}</p>
      ) : null}
    </aside>
  );
}

export default CTABox;
