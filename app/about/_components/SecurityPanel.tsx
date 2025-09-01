import Link from 'next/link';
import { Card } from './Card';
import { MaybeIcon } from '@/components/ui/MaybeIcon';

interface SecurityPanelProps {
  items: string[];
}

export function SecurityPanel({ items }: SecurityPanelProps) {
  return (
    <Card className="p-8 max-w-4xl mx-auto" variant="glass">
      <h2 id="security-heading" className="text-3xl font-bold mb-8 text-center">
        Data & Security
      </h2>

      <ul role="list" aria-labelledby="security-heading" className="space-y-6">
        {items.map((item, index) => {
          const icons = ['🔒', '🛡️', '☁️'];
          return (
            <li key={index} className="flex items-start gap-4">
              <div
                className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-sm"
                aria-hidden="true"
              >
                <MaybeIcon emoji={icons[index] || '🔒'} className="text-base" />
              </div>
              <div className="flex-1">
                <p className="text-muted-foreground leading-7">{item}</p>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Optional security/privacy links */}
      <div className="mt-8 pt-6 border-t border-border/50">
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/security"
            className="text-sm text-primary hover:text-primary/80 transition-colors"
          >
            Security Details →
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-primary hover:text-primary/80 transition-colors"
          >
            Privacy Policy →
          </Link>
        </div>
      </div>
    </Card>
  );
}
