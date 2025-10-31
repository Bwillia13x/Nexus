import { ReactNode } from 'react';

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="py-16 px-4 text-center">
      <div className="max-w-md mx-auto space-y-4">
        {icon && (
          <div className="flex justify-center opacity-20 text-muted text-6xl">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-semibold text-ink">{title}</h3>
        {description && <p className="text-muted-foreground">{description}</p>}
        {action && <div className="pt-4">{action}</div>}
      </div>
    </div>
  );
}
