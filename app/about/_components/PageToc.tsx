'use client';

import { useEffect, useRef, useState } from 'react';

interface PageTocProps {
  sections: string[];
}

export function PageToc({ sections }: PageTocProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [focusIndex, setFocusIndex] = useState(0);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const observerOptions = {
      rootMargin: '-80px 0px -80px 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => {
      const element = document.getElementById(section.toLowerCase());
      if (element) {
        observer.observe(element);
      }
    });

    // Handle scroll visibility for mobile pill bar
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  // Respect reduced motion preference (used for scroll behavior and subtle animations)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPrefersReducedMotion(!!mq.matches);
    update();
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Account for fixed navbar
      const elementPosition = element.offsetTop;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    }
  };

  // Keep roving focus index aligned with the currently active section (for mobile pill bar)
  useEffect(() => {
    const ids = sections.slice(0, 6).map(s => s.toLowerCase());
    const idx = ids.indexOf(activeSection);
    if (idx >= 0) setFocusIndex(idx);
  }, [activeSection, sections]);

  // Keyboard navigation handler for the mobile pill bar (roving tabindex)
  const handleKeyNav = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    i: number
  ) => {
    let next = i;
    switch (e.key) {
      case 'ArrowRight':
        next = Math.min(i + 1, Math.max(0, sections.slice(0, 6).length - 1));
        break;
      case 'ArrowLeft':
        next = Math.max(i - 1, 0);
        break;
      case 'Home':
        next = 0;
        break;
      case 'End':
        next = Math.max(0, sections.slice(0, 6).length - 1);
        break;
      default:
        return; // Let other keys pass through
    }
    e.preventDefault();
    setFocusIndex(next);
    const btn = buttonRefs.current[next];
    if (btn) {
      btn.focus();
      btn.scrollIntoView({
        block: 'nearest',
        inline: 'center',
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    }
  };

  // Desktop sticky sidebar
  const DesktopToc = () => (
    <div className="hidden lg:block sticky top-24 w-full">
      <nav aria-label="Page sections" className="space-y-2">
        {sections.map(section => (
          <button
            key={section}
            onClick={() => scrollToSection(section.toLowerCase())}
            className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
              activeSection === section.toLowerCase()
                ? 'bg-primary/10 text-primary font-semibold'
                : 'text-muted-foreground hover:text-foreground hover:bg-glass'
            }`}
            aria-current={
              activeSection === section.toLowerCase() ? 'true' : undefined
            }
          >
            {section}
          </button>
        ))}
      </nav>
    </div>
  );

  // Mobile pill bar
  const MobileToc = () => (
    <div
      className={`lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <nav
        aria-label="Page sections"
        className="bg-glass-2 backdrop-blur-lg border border-glass-border rounded-full px-4 py-2 shadow-lg"
      >
        <div className="flex items-center gap-1 overflow-x-auto max-w-[calc(100vw-2rem)]">
          {sections.slice(0, 6).map((section, i) => (
            <button
              key={section}
              ref={el => {
                buttonRefs.current[i] = el;
              }}
              onClick={() => scrollToSection(section.toLowerCase())}
              onKeyDown={e => handleKeyNav(e, i)}
              onFocus={() => setFocusIndex(i)}
              tabIndex={focusIndex === i ? 0 : -1}
              className={`whitespace-nowrap px-3 py-1 rounded-full text-sm transition-all duration-200 ${
                activeSection === section.toLowerCase()
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              aria-current={
                activeSection === section.toLowerCase() ? 'true' : undefined
              }
            >
              {section}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );

  return (
    <>
      <DesktopToc />
      <MobileToc />
    </>
  );
}
