'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState, type ChangeEvent } from 'react';
import { homeContent } from '@/app/_content/home';
import Link from 'next/link';
import SpriteIcon from '@/components/ui/SpriteIcon';

type FieldKey = 'hours' | 'rate' | 'weeks' | 'price';

const FIELD_CONFIG: Record<
  FieldKey,
  {
    label: string;
    min: number;
    max: number;
    placeholder: string;
    defaultValue: number;
    step: number;
  }
> = {
  hours: {
    label: 'Hours saved per week',
    min: 1,
    max: 80,
    placeholder: 'e.g. 10',
    defaultValue: 10,
    step: 1,
  },
  rate: {
    label: 'Loaded hourly rate ($)',
    min: 25,
    max: 300,
    placeholder: 'e.g. 75',
    defaultValue: 75,
    step: 5,
  },
  weeks: {
    label: 'Weeks per year',
    min: 1,
    max: 52,
    placeholder: 'e.g. 52',
    defaultValue: 52,
    step: 1,
  },
  price: {
    label: 'Pilot price ($)',
    min: 1000,
    max: 50000,
    placeholder: 'e.g. 7500',
    defaultValue: 7500,
    step: 500,
  },
};

const PARAM_KEY: Record<FieldKey, string> = {
  hours: 'h',
  rate: 'r',
  weeks: 'w',
  price: 'p',
};

interface ScenarioPreset {
  id: string;
  label: string;
  helper: string;
  values: Record<FieldKey, string>;
}

const SCENARIO_PRESETS: ScenarioPreset[] = [
  {
    id: 'support-team',
    label: 'Customer support',
    helper: 'Example preset — adjust to your reality',
    values: { hours: '12', rate: '38', weeks: '48', price: '6200' },
  },
  {
    id: 'ops-automation',
    label: 'Ops automation',
    helper: 'Example preset — adjust to your reality',
    values: { hours: '8', rate: '65', weeks: '48', price: '7800' },
  },
  {
    id: 'sales-dash',
    label: 'Sales dashboard',
    helper: 'Example preset — adjust to your reality',
    values: { hours: '5', rate: '85', weeks: '50', price: '9500' },
  },
];

const currencyFormatter = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
  maximumFractionDigits: 0,
});

const wholeNumberFormatter = new Intl.NumberFormat('en-CA', {
  maximumFractionDigits: 0,
});

const FIELD_KEYS: FieldKey[] = ['hours', 'rate', 'weeks', 'price'];

const DEFAULT_INPUTS: Record<FieldKey, string> = FIELD_KEYS.reduce(
  (acc, key) => {
    acc[key] = String(FIELD_CONFIG[key].defaultValue);
    return acc;
  },
  {} as Record<FieldKey, string>
);

export default function ROICalculator() {
  const searchParams = useSearchParams();
  const [inputs, setInputs] = useState<Record<FieldKey, string>>(() => {
    const initial: Record<FieldKey, string> = { ...DEFAULT_INPUTS };
    FIELD_KEYS.forEach(key => {
      const paramValue = searchParams.get(PARAM_KEY[key]);
      if (paramValue) {
        initial[key] = paramValue;
      }
    });
    return initial;
  });
  const [activeScenario, setActiveScenario] = useState<string | null>(null);
  const [shareStatus, setShareStatus] = useState<'idle' | 'copied' | 'error'>(
    'idle'
  );

  useEffect(() => {
    const presetMatch = SCENARIO_PRESETS.find(preset =>
      FIELD_KEYS.every(key => preset.values[key] === inputs[key].trim())
    );
    setActiveScenario(presetMatch ? presetMatch.id : null);
  }, [inputs]);

  const { values: numericValues, fieldErrors } = useMemo(() => {
    const errors: Partial<Record<FieldKey, string>> = {};
    const values: Record<FieldKey, number> = {
      hours: FIELD_CONFIG.hours.defaultValue,
      rate: FIELD_CONFIG.rate.defaultValue,
      weeks: FIELD_CONFIG.weeks.defaultValue,
      price: FIELD_CONFIG.price.defaultValue,
    };

    FIELD_KEYS.forEach(key => {
      const rawValue = inputs[key] ?? '';
      const trimmed = rawValue.replace(/,/g, '').trim();
      const config = FIELD_CONFIG[key];

      if (!trimmed) {
        errors[key] = 'Required';
        values[key] = config.defaultValue;
        return;
      }

      const parsed = Number(trimmed);
      if (!Number.isFinite(parsed)) {
        errors[key] = 'Enter a number';
        values[key] = config.defaultValue;
        return;
      }

      if (parsed < config.min || parsed > config.max) {
        errors[key] = `Use ${config.min}-${config.max}`;
      }

      const clamped = Math.min(Math.max(parsed, config.min), config.max);
      values[key] = clamped;
    });

    return { values, fieldErrors: errors };
  }, [inputs]);

  const metrics = useMemo(() => {
    const weekly = Math.max(0, numericValues.hours * numericValues.rate);
    const monthly = weekly * 4.33;
    const yearly = weekly * numericValues.weeks;
    const paybackMonths = monthly > 0 ? numericValues.price / monthly : null;
    const breakEvenWeeks = weekly > 0 ? numericValues.price / weekly : null;
    const annualNet = yearly - numericValues.price;
    const roiPercent = numericValues.price
      ? (yearly / numericValues.price - 1) * 100
      : null;

    return {
      weekly,
      monthly,
      yearly,
      paybackMonths,
      breakEvenWeeks,
      annualNet,
      roiPercent,
    };
  }, [numericValues]);

  const summaryPoints = useMemo(() => {
    const points: string[] = [];
    if (numericValues.hours > 0 && numericValues.rate > 0) {
      points.push(
        `${wholeNumberFormatter.format(numericValues.hours)} hrs/week saved at ${currencyFormatter.format(numericValues.rate)} fully loaded.`
      );
    }
    points.push(
      `${currencyFormatter.format(metrics.monthly)} freed up monthly, roughly ${currencyFormatter.format(metrics.yearly)} each year.`
    );

    if (metrics.paybackMonths && Number.isFinite(metrics.paybackMonths)) {
      const months = metrics.paybackMonths;
      if (months < 1) {
        const days = Math.max(1, Math.round(months * 30));
        points.push(
          `Pilot pays for itself in about ${days} day${days === 1 ? '' : 's'}.`
        );
      } else {
        points.push(
          `Pilot pays back in ~${months.toFixed(1)} month${
            months >= 2 ? 's' : ''
          }.`
        );
      }
    } else {
      points.push('Add realistic hours and rates above to see payback.');
    }

    if (metrics.roiPercent && Number.isFinite(metrics.roiPercent)) {
      points.push(
        `Estimated first-year ROI ≈ ${Math.round(metrics.roiPercent)}%.`
      );
    }

    return points;
  }, [metrics, numericValues.hours, numericValues.rate]);

  const hasErrors = Object.values(fieldErrors).some(Boolean);

  const handleInputChange =
    (key: FieldKey) => (event: ChangeEvent<HTMLInputElement>) => {
      setShareStatus('idle');
      setInputs(prev => ({ ...prev, [key]: event.target.value }));
    };

  const handlePreset = (preset: ScenarioPreset) => {
    setInputs(preset.values);
    setShareStatus('idle');
  };

  const handleReset = () => {
    setInputs({ ...DEFAULT_INPUTS });
    setShareStatus('idle');
  };

  const handleShare = async () => {
    if (hasErrors) {
      setShareStatus('error');
      return;
    }

    if (typeof window === 'undefined') return;

    const url = new URL(window.location.href);
    FIELD_KEYS.forEach(key => {
      url.searchParams.set(PARAM_KEY[key], String(numericValues[key]));
    });

    try {
      if (navigator.share) {
        await navigator.share({
          title: 'AI savings estimate',
          text: 'Here’s what we could save with Prairie Signal.',
          url: url.toString(),
        });
        setShareStatus('copied');
        window.history.replaceState(null, '', `${url.pathname}${url.search}`);
        return;
      }

      await navigator.clipboard.writeText(url.toString());
      window.history.replaceState(null, '', `${url.pathname}${url.search}`);
      setShareStatus('copied');
    } catch (error) {
      console.error('Share failed', error);
      setShareStatus('error');
    }
  };

  const contactHref = `/contact?hours=${numericValues.hours}&rate=${numericValues.rate}&pilotPrice=${numericValues.price}&calcMonthly=${Math.round(metrics.monthly)}`;

  return (
    <div className="p-8 rounded-2xl border border-glass-border bg-glass backdrop-blur-lg shadow-xl">
      <div className="text-center mb-8 space-y-4">
        <h3 className="text-2xl font-bold text-ink">{homeContent.roi.title}</h3>
        <p className="text-muted">
          Estimate the payoff from a focused AI pilot.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {SCENARIO_PRESETS.map(preset => (
            <button
              key={preset.id}
              type="button"
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 focus-ring ${
                activeScenario === preset.id
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-glass-border bg-white/50 hover:border-primary/40'
              }`}
              onClick={() => handlePreset(preset)}
            >
              {preset.label}
            </button>
          ))}
          <button
            type="button"
            className="rounded-full border px-4 py-2 text-sm font-medium border-dashed border-glass-border text-muted-foreground hover:border-primary/40 focus-ring"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
        {activeScenario && (
          <p className="text-xs text-muted-foreground">
            {
              SCENARIO_PRESETS.find(preset => preset.id === activeScenario)
                ?.helper
            }
          </p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {FIELD_KEYS.map(key => {
            const config = FIELD_CONFIG[key];
            const value = inputs[key] ?? '';
            const error = fieldErrors[key];
            return (
              <div key={key}>
                <label
                  htmlFor={`roi-${key}`}
                  className="block text-sm font-medium text-ink mb-2"
                >
                  {config.label}
                  <span className="text-muted-foreground text-xs ml-2">
                    ({config.min}–{config.max})
                  </span>
                </label>
                <input
                  id={`roi-${key}`}
                  inputMode="decimal"
                  type="text"
                  value={value}
                  onChange={handleInputChange(key)}
                  placeholder={config.placeholder}
                  className={`w-full px-4 py-3 rounded-xl border bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 transition-all ${
                    error
                      ? 'border-red-300 focus:ring-red-400'
                      : 'border-glass-border focus:ring-primary focus:border-transparent'
                  }`}
                />
                {error && (
                  <p className="mt-2 text-xs text-red-600" role="alert">
                    {error}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <MetricCard
              label="Weekly savings"
              value={currencyFormatter.format(metrics.weekly)}
            />
            <MetricCard
              label="Monthly savings"
              value={currencyFormatter.format(metrics.monthly)}
            />
            <MetricCard
              label="Yearly savings"
              value={currencyFormatter.format(metrics.yearly)}
            />
            <MetricCard
              label="Payback period"
              value={
                metrics.paybackMonths && Number.isFinite(metrics.paybackMonths)
                  ? `${metrics.paybackMonths.toFixed(1)} months`
                  : 'Add savings above'
              }
              intent="secondary"
            />
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 text-sm text-muted">
            This tool provides a rough estimate based on your inputs. Actual
            outcomes vary.
          </div>
        </div>
      </div>

      <div className="mt-10 grid lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-7 card-glass glass-liquid p-6 space-y-4">
          <h4 className="text-lg font-semibold text-ink flex items-center gap-2">
            <SpriteIcon
              name="ps--cta--roi-calculator"
              size={22}
              className="text-primary"
            />
            What this means
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {summaryPoints.map((point, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-primary" aria-hidden="true">
                  •
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <button
            type="button"
            onClick={handleShare}
            className="w-full btn-secondary flex items-center justify-center gap-2"
          >
            <span aria-hidden className="text-lg">
              🔗
            </span>
            Share or copy estimate
          </button>
          {shareStatus === 'copied' && (
            <p className="text-xs text-center text-primary">
              Link ready to send — we copied it to your clipboard.
            </p>
          )}
          {shareStatus === 'error' && (
            <p className="text-xs text-center text-red-600">
              Couldn’t share. Check the inputs above or copy the URL manually.
            </p>
          )}

          <Link
            href={contactHref}
            className="w-full btn-primary justify-center"
          >
            Use these numbers in my inquiry
          </Link>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-xs text-muted">{homeContent.roi.footnote}</p>
      </div>
    </div>
  );
}

interface MetricCardProps {
  label: string;
  value: string;
  intent?: 'primary' | 'secondary';
}

function MetricCard({ label, value, intent = 'primary' }: MetricCardProps) {
  const baseClasses =
    'p-4 rounded-xl border text-center transition-all duration-300';
  const intentClasses =
    intent === 'primary'
      ? 'bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 text-primary'
      : 'bg-gradient-to-r from-secondary/10 to-primary/10 border-secondary/20 text-secondary';

  return (
    <div className={`${baseClasses} ${intentClasses}`}>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-xs uppercase tracking-wide text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
