import Link from 'next/link';
import { Card } from './Card';

interface Resource {
  title: string;
  href: string;
  note?: string;
}

interface ResourcesDownloadsProps {
  items: Resource[];
}

export function ResourcesDownloads({ items }: ResourcesDownloadsProps) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Resources & Downloads
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Free resources to help you evaluate AI opportunities for your business
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {items.map((resource, index) => (
          <Link
            key={index}
            href={resource.href}
            className="block group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="p-8 text-center h-full" variant="glass">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl" aria-hidden="true">
                  📄
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{resource.title}</h3>
              <p className="text-muted-foreground mb-6 leading-6">
                {resource.note}
              </p>
              <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                <span>Download PDF</span>
                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
