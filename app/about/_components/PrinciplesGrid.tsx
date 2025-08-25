import { Card } from './Card';

interface Principle {
  icon: string;
  title: string;
  body: string;
}

interface PrinciplesGridProps {
  items: Principle[];
}

export function PrinciplesGrid({ items }: PrinciplesGridProps) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Principles</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A few beliefs that guide every project
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((principle, index) => (
          <Card key={index} className="p-6 text-center" variant="glass">
            <div className="text-4xl mb-4" aria-hidden="true">
              {principle.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
            <p className="text-muted-foreground text-sm leading-6">
              {principle.body}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
