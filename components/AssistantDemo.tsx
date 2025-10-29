'use client';

import { useEffect, useMemo, useState } from 'react';
import type { PlaybookDemoTranscriptEntry } from '@/app/cases/content';

interface AssistantDemoProps {
  title: string;
  helper: string;
  transcript: PlaybookDemoTranscriptEntry[];
}

const DEFAULT_DELAY = 900;

const SPEAKER_META: Record<
  PlaybookDemoTranscriptEntry['speaker'],
  {
    label: string;
    alignment: 'start' | 'end';
    bubbleClass: string;
  }
> = {
  customer: {
    label: 'Customer',
    alignment: 'start',
    bubbleClass: 'bg-white/95 text-ink',
  },
  assistant: {
    label: 'Assistant',
    alignment: 'end',
    bubbleClass: 'bg-gradient-to-r from-primary to-secondary text-white',
  },
  ops: {
    label: 'Ops Team',
    alignment: 'end',
    bubbleClass: 'bg-secondary/90 text-white',
  },
};

export default function AssistantDemo({
  title,
  helper,
  transcript,
}: AssistantDemoProps) {
  const [runKey, setRunKey] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);

  const sanitizedTranscript = useMemo(
    () => transcript.filter(entry => entry.message.trim().length > 0),
    [transcript]
  );

  useEffect(() => {
    if (sanitizedTranscript.length === 0) {
      return;
    }

    setVisibleCount(0);

    if (typeof window === 'undefined') {
      return;
    }

    const timers: number[] = [];
    let accumulated = 0;

    sanitizedTranscript.forEach((entry, index) => {
      const delay = Math.max(entry.delayMs ?? DEFAULT_DELAY, 200);
      accumulated += delay;
      const timer = window.setTimeout(() => {
        setVisibleCount(index + 1);
      }, accumulated);
      timers.push(timer);
    });

    return () => {
      timers.forEach(timer => window.clearTimeout(timer));
    };
  }, [sanitizedTranscript, runKey]);

  const clampedCount = Math.min(visibleCount, sanitizedTranscript.length);
  const messagesToShow = sanitizedTranscript.slice(0, clampedCount);
  const nextEntry = sanitizedTranscript[clampedCount];
  const showTypingIndicator = Boolean(
    nextEntry && nextEntry.speaker === 'assistant'
  );

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div className="space-y-1">
          <h4 className="text-lg font-semibold text-ink">{title}</h4>
          <p className="text-sm text-muted-foreground">{helper}</p>
        </div>
        <button
          type="button"
          onClick={() => setRunKey(prev => prev + 1)}
          className="inline-flex items-center gap-2 self-start rounded-full border border-primary/40 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary hover:bg-primary/10"
        >
          <span aria-hidden>⟲</span> Replay transcript
        </button>
      </div>

      <div
        className="space-y-4"
        role="log"
        aria-live="polite"
        aria-relevant="additions"
      >
        {messagesToShow.map((entry, index) => (
          <ChatBubble key={`${entry.speaker}-${index}`} entry={entry} />
        ))}
        {showTypingIndicator && (
          <div className="flex justify-end">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-2 text-xs font-semibold text-primary">
              Assistant typing…
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ChatBubble({ entry }: { entry: PlaybookDemoTranscriptEntry }) {
  const meta = SPEAKER_META[entry.speaker];
  const alignmentClass =
    meta.alignment === 'start' ? 'justify-start' : 'justify-end';

  return (
    <div className={`flex ${alignmentClass}`}>
      <div className="max-w-md space-y-1">
        <span className="block text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
          {meta.label}
        </span>
        <div
          className={`rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${meta.bubbleClass}`}
        >
          {entry.message}
        </div>
      </div>
    </div>
  );
}
