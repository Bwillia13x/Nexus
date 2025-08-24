import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LoadingSpinner({
  size = 'md',
  className,
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div
      className={cn(
        'animate-spin rounded-full border-2 border-primary border-t-transparent',
        sizeClasses[size],
        className
      )}
    />
  );
}

interface LoadingButtonProps {
  loading: boolean;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export function LoadingButton({
  loading,
  children,
  className,
  disabled,
  onClick,
  type = 'button',
}: LoadingButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        'relative flex items-center justify-center gap-2 px-6 py-3 rounded-full transition-all duration-200',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        loading && 'cursor-wait',
        className
      )}
    >
      {loading && <LoadingSpinner size="sm" />}
      {children}
    </button>
  );
}

interface LoadingSkeletonProps {
  className?: string;
  lines?: number;
}

export function LoadingSkeleton({
  className,
  lines = 1,
}: LoadingSkeletonProps) {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded"
          style={{
            width: lines === 1 ? '100%' : `${Math.random() * 40 + 60}%`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
}

export function ContactFormSkeleton() {
  return (
    <div className="mx-auto max-w-xl p-8 rounded-3xl border border-glass-border bg-glass backdrop-blur-md space-y-6">
      <LoadingSkeleton lines={2} className="mb-8" />
      <div className="space-y-6">
        <div>
          <LoadingSkeleton lines={1} className="mb-2 w-16" />
          <div className="h-12 bg-gray-200/50 rounded-lg animate-pulse" />
        </div>
        <div>
          <LoadingSkeleton lines={1} className="mb-2 w-20" />
          <div className="h-12 bg-gray-200/50 rounded-lg animate-pulse" />
        </div>
        <div>
          <LoadingSkeleton lines={1} className="mb-2 w-24" />
          <div className="h-12 bg-gray-200/50 rounded-lg animate-pulse" />
        </div>
        <div>
          <LoadingSkeleton lines={1} className="mb-2 w-16" />
          <div className="h-24 bg-gray-200/50 rounded-lg animate-pulse" />
        </div>
        <div className="h-12 bg-gray-200/50 rounded-full animate-pulse" />
      </div>
    </div>
  );
}

export function ServicesOverviewSkeleton() {
  return (
    <section className="py-24 px-4">
      <div className="text-center mb-16">
        <LoadingSkeleton lines={1} className="mb-4 w-96 mx-auto" />
        <LoadingSkeleton lines={1} className="w-80 mx-auto" />
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="p-8 rounded-3xl border border-glass-border bg-glass backdrop-blur-lg"
          >
            <div className="w-12 h-12 mb-4 bg-gray-200/50 rounded-xl animate-pulse" />
            <LoadingSkeleton lines={1} className="mb-3 w-32" />
            <LoadingSkeleton lines={3} />
          </div>
        ))}
      </div>
    </section>
  );
}

export function PageSkeleton() {
  return (
    <div className="space-y-24">
      {/* Hero section skeleton */}
      <section className="py-24 px-4">
        <div className="text-center">
          <LoadingSkeleton lines={1} className="mb-4 w-96 mx-auto" />
          <LoadingSkeleton lines={2} className="mb-8 w-80 mx-auto" />
          <div className="flex justify-center gap-4">
            <div className="h-12 w-32 bg-gray-200/50 rounded-full animate-pulse" />
            <div className="h-12 w-32 bg-gray-200/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Content sections skeleton */}
      <ServicesOverviewSkeleton />
      <ContactFormSkeleton />
    </div>
  );
}
