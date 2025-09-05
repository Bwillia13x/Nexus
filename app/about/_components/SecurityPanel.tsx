import Link from 'next/link';
import { Card } from './Card';
import Image from 'next/image';
import SpriteIcon from '@/components/ui/SpriteIcon';

interface SecurityPanelProps {
  items: string[];
}

export function SecurityPanel({ items }: SecurityPanelProps) {
  const icons: string[] = [
    '/icons-svg/about/security/privacy_lock-badge.svg',
    '/icons-svg/about/security/least-privilege_shield-check.svg',
    '/icons-svg/about/security/data-guard_shield-database.svg',
  ];
  return (
    <Card className="p-8 max-w-4xl mx-auto" variant="glass">
      <h2 id="security-heading" className="text-3xl font-bold mb-8 text-center">
        Data & Security
      </h2>

      <ul role="list" aria-labelledby="security-heading" className="space-y-6">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-4">
            <div
              className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-sm overflow-hidden"
              aria-hidden="true"
            >
              <SpriteIcon
                name={`ps--${(icons[index] || icons[0])
                  .replace(/^\/icons-svg\//, '')
                  .replace(/\.svg$/, '')
                  .split('/')
                  .join('--')}`}
                size={20}
              />
            </div>
            <div className="flex-1">
              <p className="text-muted-foreground leading-7">{item}</p>
            </div>
          </li>
        ))}
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
