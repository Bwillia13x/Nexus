'use client';

import { useEffect, useState } from 'react';

interface ScrollNavProps {
  sections: Array<{
    id: string;
    label: string;
  }>;
  offset?: number;
}

export function ScrollNav({ sections, offset = 100 }: ScrollNavProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${offset}px 0px -66% 0px`,
        threshold: 0,
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections, offset]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="scroll-nav" aria-label="Page sections">
      <ul className="space-y-2" role="list">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <button
              onClick={() => scrollToSection(id)}
              className={`scroll-nav-link ${activeId === id ? 'active' : ''}`}
              aria-current={activeId === id ? 'location' : undefined}
            >
              <span className="scroll-nav-indicator" />
              <span className="scroll-nav-label">{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
