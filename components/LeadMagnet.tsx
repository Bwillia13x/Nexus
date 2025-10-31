'use client';

import { useState } from 'react';
import { leadMagnetConfig } from '@/lib/services-content';

export default function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsLoading(false);
    setEmail('');
  };

  if (isSubmitted) {
    return (
      <div className="p-8 rounded-2xl border border-glass-border bg-glass backdrop-blur-lg shadow-e6 text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">✓</span>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-ink">Checklist Sent!</h3>
        <p className="text-muted mb-6">
          Check your email for the AI Pilot Readiness Checklist. We've also
          included some Calgary-specific AI implementation tips.
        </p>
        <button onClick={() => setIsSubmitted(false)} className="btn-primary">
          Send Another Email
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 rounded-2xl border border-glass-border bg-glass backdrop-blur-lg shadow-e6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2 text-ink">
          {leadMagnetConfig.title}
        </h3>
        <p className="text-lg text-secondary font-semibold mb-2">
          {leadMagnetConfig.subtitle}
        </p>
        <p className="text-muted">{leadMagnetConfig.description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h4 className="font-semibold mb-4 text-ink">You'll get:</h4>
          <ul className="space-y-3">
            {leadMagnetConfig.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3 text-muted">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-ink mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={leadMagnetConfig.emailPlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-glass-border bg-glass backdrop-blur-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || !email}
              className="w-full btn-primary rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : leadMagnetConfig.buttonText}
            </button>
          </form>
        </div>
      </div>

      <div className="text-center">
        <p className="text-xs text-muted/70">{leadMagnetConfig.privacyText}</p>
      </div>
    </div>
  );
}
