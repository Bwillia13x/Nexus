'use client';

import { useEffect, useState } from 'react';

interface PageTocProps {
  sections: string[];
}

export function PageToc({ sections }: PageTocProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Account for fixed navbar
      const elementPosition = element.offsetTop;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
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
                : 'text-muted-foreground hover:text-foreground hover:bg-white/50'
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
      <div className="bg-white/95 backdrop-blur-lg border border-border rounded-full px-4 py-2 shadow-lg">
        <div className="flex items-center gap-1 overflow-x-auto max-w-[calc(100vw-2rem)]">
          {sections.slice(0, 6).map(section => (
            <button
              key={section}
              onClick={() => scrollToSection(section.toLowerCase())}
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
      </div>
    </div>
  );

  return (
    <>
      <DesktopToc />
      <MobileToc />
    </>
  );
}
