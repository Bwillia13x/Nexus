'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { homeContent } from '@/app/_content/home';
import Link from 'next/link';

export default function ROICalculator() {
  const sp = useSearchParams();
  const router = useRouter();

  const [hours, setHours] = useState(Number(sp.get('h') ?? 10));
  const [rate, setRate] = useState(Number(sp.get('r') ?? 75));
  const [weeks, setWeeks] = useState(Number(sp.get('w') ?? 52));
  const [price, setPrice] = useState(Number(sp.get('p') ?? 7500));

  const weekly = Math.max(0, hours * rate);
  const monthly = weekly * 4.33;
  const yearly = weekly * weeks;
  const paybackMonths = monthly > 0 ? price / monthly : Infinity;

  useEffect(() => {
    const q = new URLSearchParams({
      h: String(hours),
      r: String(rate),
      w: String(weeks),
      p: String(price),
    });
    router.replace(`?${q.toString()}`, { scroll: false });
  }, [hours, rate, weeks, price, router]);

  return (
    <div className="p-8 rounded-2xl border border-glass-border bg-glass backdrop-blur-lg shadow-xl">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2 text-ink">
          {homeContent.roi.title}
        </h3>
        <p className="text-muted">
          Estimate your potential savings from an AI automation pilot
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-6">
          <div>
            <label
              htmlFor="hours"
              className="block text-sm font-medium text-ink mb-2"
            >
              Hours saved per week
            </label>
            <input
              id="hours"
              type="number"
              min="1"
              max="100"
              value={hours}
              onChange={e => setHours(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-xl border border-glass-border bg-glass backdrop-blur-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="e.g. 10"
            />
          </div>

          <div>
            <label
              htmlFor="rate"
              className="block text-sm font-medium text-ink mb-2"
            >
              Loaded hourly rate ($)
            </label>
            <input
              id="rate"
              type="number"
              min="25"
              max="300"
              value={rate}
              onChange={e => setRate(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-xl border border-glass-border bg-glass backdrop-blur-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="e.g. 75"
            />
          </div>

          <div>
            <label
              htmlFor="weeks"
              className="block text-sm font-medium text-ink mb-2"
            >
              Weeks per year
            </label>
            <input
              id="weeks"
              type="number"
              min="1"
              max="52"
              value={weeks}
              onChange={e => setWeeks(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-xl border border-glass-border bg-glass backdrop-blur-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="e.g. 52"
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-ink mb-2"
            >
              Pilot price ($)
            </label>
            <input
              id="price"
              type="number"
              min="1000"
              max="50000"
              value={price}
              onChange={e => setPrice(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-xl border border-glass-border bg-glass backdrop-blur-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="e.g. 7500"
            />
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">
                ${weekly.toLocaleString()}
              </div>
              <div className="text-sm text-muted">Weekly savings</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">
                ${monthly.toLocaleString()}
              </div>
              <div className="text-sm text-muted">Monthly savings</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">
                ${yearly.toLocaleString()}
              </div>
              <div className="text-sm text-muted">Yearly savings</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-1">
                {paybackMonths === Infinity ? 'N/A' : paybackMonths.toFixed(1)}{' '}
                months
              </div>
              <div className="text-sm text-muted">Payback period</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20">
          <p className="text-sm text-muted text-center">
            💡 <strong>Pro tip:</strong> Most clients see ROI within 2-4 months
            with proper automation targeting. Actual results depend on your
            specific processes and implementation.
          </p>
        </div>

        <div className="text-center">
          <Link
            href={`/contact?hours=${hours}&rate=${rate}&pilotPrice=${price}&calcMonthly=${monthly.toFixed(0)}`}
            className="btn-primary"
          >
            Use these numbers in my inquiry
          </Link>
        </div>

        <div className="text-center">
          <p className="text-xs text-muted">{homeContent.roi.footnote}</p>
        </div>
      </div>
    </div>
  );
}
