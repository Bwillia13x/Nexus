interface SkeletonProps {
  className?: string;
  lines?: number;
  height?: string;
}

export function Skeleton({
  className = '',
  lines = 1,
  height = 'h-4',
}: SkeletonProps) {
  if (lines === 1) {
    return (
      <div
        className={`animate-pulse bg-gray-200 rounded ${height} ${className}`}
      />
    );
  }

  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`animate-pulse bg-gray-200 rounded ${height}`}
        />
      ))}
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="card-glass animate-pulse">
      <div className="w-12 h-12 mb-4 rounded-xl bg-gray-200" />
      <Skeleton className="mb-3" height="h-6" />
      <Skeleton lines={3} />
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <section className="relative flex min-h-screen items-center justify-center section">
      <div className="container-wide max-w-3xl text-center">
        <Skeleton className="mb-6" height="h-16" />
        <Skeleton className="mb-8" height="h-6" />
        <div className="flex flex-wrap justify-center gap-4">
          <Skeleton className="w-48" height="h-12" />
          <Skeleton className="w-32" height="h-12" />
        </div>
      </div>
    </section>
  );
}
