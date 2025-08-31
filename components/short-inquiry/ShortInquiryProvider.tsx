'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';

type Prefill = Partial<{
  fullName: string;
  email: string;
  company: string;
}>;

interface ShortInquiryContextValue {
  isOpen: boolean;
  open: (prefill?: Prefill) => void;
  close: () => void;
  prefill: Prefill;
}

const ShortInquiryContext = createContext<ShortInquiryContextValue | null>(
  null
);

export function ShortInquiryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefill, setPrefill] = useState<Prefill>({});
  const openTimeRef = useRef<number | null>(null);

  const open = useCallback((p?: Prefill) => {
    setPrefill(p || {});
    setIsOpen(true);
    openTimeRef.current = Date.now();
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({ isOpen, open, close, prefill }),
    [isOpen, open, close, prefill]
  );

  return (
    <ShortInquiryContext.Provider value={value}>
      {children}
    </ShortInquiryContext.Provider>
  );
}

export function useShortInquiry() {
  const ctx = useContext(ShortInquiryContext);
  if (!ctx) {
    throw new Error('useShortInquiry must be used within ShortInquiryProvider');
  }
  return ctx;
}
