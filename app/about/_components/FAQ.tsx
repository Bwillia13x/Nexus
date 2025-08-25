'use client';

import { useState } from 'react';
import { Card } from './Card';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items: FAQItem[];
}

function AccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <Card className="p-6 shadow-sm" variant="default">
      <button
        onClick={onToggle}
        className="w-full text-left flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-lg p-2 -m-2"
        aria-expanded={isOpen}
        aria-controls={`faq-content-${index}`}
        id={`faq-trigger-${index}`}
      >
        <h3 className="text-lg font-semibold pr-4 group-hover:text-primary transition-colors">
          {item.q}
        </h3>
        <div
          className={`flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      <div
        id={`faq-content-${index}`}
        role="region"
        aria-labelledby={`faq-trigger-${index}`}
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-muted-foreground leading-7">{item.a}</p>
      </div>
    </Card>
  );
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Frequently Asked Questions
        </h2>
      </div>

      <div
        className="space-y-4"
        role="region"
        aria-label="Frequently Asked Questions"
      >
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            index={index}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
}
