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
            {trustBarContent.items.map((item, i) => {
              if (item.type === 'logo') {
                return (
                  <li
                    key={i}
                    className="inline-flex flex-col items-start justify-center rounded-xl border border-glass-border bg-white/80 px-4 py-3 text-left shadow-sm"
                  >
                    <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-ink">
                      {item.label}
                    </span>
                    {item.caption && (
                      <span className="text-[11px] font-medium text-muted-foreground">
                        {item.caption}
                      </span>
                    )}
                  </li>
                );
              }

              return (
                <li
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm font-medium text-primary"
                >
                  {item.icon ? (
                    <MaybeIcon
                      emoji={item.icon}
                      size={18}
                      className="text-[13px]"
                    />
                  ) : null}
                  <span>{item.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
