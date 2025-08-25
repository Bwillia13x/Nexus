import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  footnote?: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  title,
  subtitle,
  footnote,
  children,
  className = 'section',
}: SectionProps) {
  return (
    <section id={id} className={className}>
      <div className="container-wide text-center mb-16 md:mb-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 gradient-title-animated leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted leading-relaxed px-4">
            {subtitle}
          </p>
        )}
      </div>
      {children}
      {footnote && (
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-sm text-muted max-w-3xl mx-auto italic px-4">
            {footnote}
          </p>
        </div>
      )}
    </section>
  );
}
