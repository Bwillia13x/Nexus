'use client';

import { MaybeIcon } from '@/components/ui/MaybeIcon';

interface ListProps {
  title: string;
  items: string[];
  icon?: string;
  className?: string;
}

export function List({ title, items, icon = '✓', className = '' }: ListProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="text-xl font-semibold">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 text-muted">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mt-0.5 flex-shrink-0">
              <MaybeIcon
                emoji={icon}
                className="text-white text-xs leading-none"
              />
            </div>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface CardProps {
  title: string;
  value: string;
  helper?: string;
  icon?: string;
  className?: string;
}

export function Card({
  title,
  value,
  helper,
  icon = '📄',
  className = '',
}: CardProps) {
  return (
    <div
      className={`p-4 rounded-lg bg-gradient-to-r from-primary/6 to-transparent border border-primary/10 ${className}`}
    >
      <div className="flex items-center gap-3 mb-2">
        <MaybeIcon emoji={icon} className="text-2xl" />
        <span className="font-semibold">{title}</span>
      </div>
      <p className="text-ink font-medium">{value}</p>
      {helper && <p className="text-xs text-muted-foreground mt-2">{helper}</p>}
    </div>
  );
}
