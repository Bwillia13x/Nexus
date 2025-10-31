interface SkeletonCardProps {
  lines?: number;
  className?: string;
}

export function SkeletonCard({ lines = 3, className = '' }: SkeletonCardProps) {
  return (
    <div className={`card-glass animate-pulse ${className}`}>
      <div className="space-y-4">
        <div className="skeleton-text h-6 bg-gray-200/60 rounded" />
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="skeleton-text h-4 bg-gray-200/40 rounded"
            style={{ width: i === lines - 1 ? '80%' : '100%' }}
          />
        ))}
      </div>
    </div>
  );
}

export function SkeletonGrid({ count = 3 }: { count?: number }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
