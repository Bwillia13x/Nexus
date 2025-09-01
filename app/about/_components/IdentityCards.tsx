import { Card } from './Card';

interface IdentityCardsProps {
  who: {
    title: string;
    body: string;
  };
  how: {
    title: string;
    body: string;
  };
}

export function IdentityCards({ who, how }: IdentityCardsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <h2 id="overview-heading" className="sr-only">
        Overview
      </h2>
      {/* Who I Am Card */}
      <Card className="p-8" variant="glass">
        <div className="flex items-start gap-4">
          <div className="text-4xl" aria-hidden="true">
            🎯
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">{who.title}</h2>
            <p className="text-muted-foreground leading-7">{who.body}</p>
          </div>
        </div>
      </Card>

      {/* How I Work Card */}
      <Card className="p-8" variant="glass">
        <div className="flex items-start gap-4">
          <div className="text-4xl" aria-hidden="true">
            🔭
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">{how.title}</h2>
            <p className="text-muted-foreground leading-7">{how.body}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
