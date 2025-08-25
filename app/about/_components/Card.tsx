import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'elevated';
  hover?: boolean;
  focus?: boolean;
}

export function Card({
  children,
  className,
  variant = 'default',
  hover = true,
  focus = true,
}: CardProps) {
  const baseClasses = 'rounded-2xl border transition-all duration-300';

  const variantClasses = {
    default: 'bg-white/90 backdrop-blur shadow-md border-border',
    glass: 'bg-glass backdrop-blur-lg border-glass-border',
    elevated: 'bg-white/95 backdrop-blur shadow-lg border-border/50',
  };

  const interactionClasses = hover
    ? 'hover:shadow-lg hover:-translate-y-1 hover:ring-2 hover:ring-brand-500/25'
    : '';

  const focusClasses = focus
    ? 'focus:outline-none focus:ring-2 focus:ring-brand-500/40'
    : '';

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        interactionClasses,
        focusClasses,
        className
      )}
    >
      {children}
    </div>
  );
}
