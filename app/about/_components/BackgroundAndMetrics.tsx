import { Card } from './Card';

interface BackgroundAndMetricsProps {
  background: string;
  metrics: string[];
}

export function BackgroundAndMetrics({
  background,
  metrics,
}: BackgroundAndMetricsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Background paragraph */}
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Background</h2>
          <p className="text-lg text-muted-foreground leading-7">
            {background}
          </p>
        </div>
      </div>

      {/* Metrics card */}
      <Card className="p-8" variant="elevated">
        <h3 className="text-2xl font-bold mb-6">
          What We Measure in Pilots (Targets)
        </h3>
        <div className="space-y-4">
          {metrics.map((metric, index) => (
            <div key={index} className="flex items-start gap-3">
              <div
                className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-sm"
                aria-hidden="true"
              >
                📊
              </div>
              <div>
                <div className="font-semibold">{metric}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground/70 mt-6 italic">
          Targets are planning baselines for new pilots—not prior client
          results.
        </p>
      </Card>
    </div>
  );
}
