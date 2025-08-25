import { Card } from './Card';

interface SpeakingItem {
  title: string;
  venue: string;
  meta: string[];
  copy: string;
}

interface SpeakingProps {
  talks: SpeakingItem;
}

export function Speaking({ talks }: SpeakingProps) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Community & Speaking
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Sharing insights on AI implementation for Calgary businesses
        </p>
      </div>

      <Card className="p-8 max-w-4xl mx-auto" variant="glass">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
            🎤
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-foreground mb-1">
              {talks.title}
            </h3>
            <p className="text-muted-foreground">{talks.venue}</p>
          </div>
        </div>

        <p className="text-muted-foreground mb-6 leading-7">{talks.copy}</p>

        <div className="text-sm text-muted-foreground/70 space-y-1">
          {talks.meta.map((meta, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-lg" aria-hidden="true">
                {index === 0 ? '📅' : '📍'}
              </span>
              <span>{meta}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
