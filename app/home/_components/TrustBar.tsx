import { trustBarContent } from '../_content';
import { MaybeIcon } from '@/components/ui/MaybeIcon';

export default function TrustBar() {
  return (
    <section aria-label="Trust indicators" className="py-4 md:py-6">
      <div className="mx-auto max-w-5xl px-4">
        <div className="card-glass glass-liquid border border-glass-border rounded-2xl p-3 sm:p-4">
          <ul
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            role="list"
          >
            {trustBarContent.items.map((item, i) => (
              <li
                key={i}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground font-medium"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-sm">
                  <MaybeIcon emoji={item.icon} className="text-[13px]" />
                </span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
