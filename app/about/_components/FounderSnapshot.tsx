import { Card } from './Card';

interface FounderSnapshotProps {
  bullets: string[];
}

export function FounderSnapshot({ bullets }: FounderSnapshotProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Founder Snapshot
      </h2>

      <Card className="p-8 max-w-4xl mx-auto" variant="glass">
        <dl className="space-y-4">
          {bullets.map((bullet, index) => (
            <div key={index} className="flex items-start gap-4">
              <div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mt-0.5"
                aria-hidden="true"
              >
                <span className="text-white text-xs">✓</span>
              </div>
              <dd className="text-lg text-muted-foreground leading-7 flex-1">
                {bullet}
              </dd>
            </div>
          ))}
        </dl>
      </Card>
    </div>
  );
}
