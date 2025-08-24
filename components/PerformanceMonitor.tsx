'use client';

import { useEffect } from 'react';

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: Element;
}

export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Monitor Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver(list => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          console.log('LCP:', lastEntry.startTime);
          // Send to analytics service here
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Monitor First Input Delay (FID)
      const fidObserver = new PerformanceObserver(list => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          const fidEntry = entry as FirstInputEntry;
          console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
          // Send to analytics service here
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Monitor Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver(list => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            console.log('CLS:', clsValue);
            // Send to analytics service here
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Cleanup
      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  return null; // This component doesn't render anything
}
