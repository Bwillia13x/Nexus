'use client';

import { useEffect, useState } from 'react';

interface LoadingBarProps {
  isLoading: boolean;
  duration?: number;
}

export function LoadingBar({ isLoading, duration = 2000 }: LoadingBarProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setVisible(true);
      setProgress(0);

      // Animate to 90% over duration
      const interval = 50;
      const step = (90 / duration) * interval;
      const timer = setInterval(() => {
        setProgress(prev => {
          const next = prev + step;
          return next >= 90 ? 90 : next;
        });
      }, interval);

      return () => clearInterval(timer);
    } else {
      // Complete to 100% then hide
      setProgress(100);
      const hideTimer = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 300);
      return () => clearTimeout(hideTimer);
    }
  }, [isLoading, duration]);

  if (!visible) return null;

  const progressValue = Math.round(progress);

  return (
    <div
      className="loading-bar-container"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progressValue}
      aria-label="Loading"
    >
      <div className="loading-bar" style={{ width: `${progress}%` }} />
    </div>
  );
}
