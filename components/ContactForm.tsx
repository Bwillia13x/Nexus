'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import toast from 'react-hot-toast';
import { LoadingButton } from './Loading';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  // Honeypot field: must be empty if present
  hp: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
  });

  const watchedFields = watch();

  const onSubmit = async (data: ContactFormData) => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    const loadingToast = toast.loading('Sending your message...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.ok) {
        toast.success(
          "Message sent successfully! We'll get back to you soon.",
          {
            id: loadingToast,
          }
        );
        reset();
      } else {
        toast.error(
          result.error || 'Failed to send message. Please try again.',
          {
            id: loadingToast,
          }
        );
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error(
        'Network error. Please check your connection and try again.',
        {
          id: loadingToast,
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    isValid &&
    Object.values(watchedFields).some(value => value && value.trim() !== '');

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-title"
          >
            Begin Your AI Transformation
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8 px-4">
            Let's craft your intelligent future together. Share your vision and
            we'll help bring it to life with cutting-edge AI solutions.
          </p>
          <div className="flex justify-center gap-4 flex-wrap px-4">
            <div className="chip">
              <span className="text-sm font-medium">⚡ Quick Response</span>
            </div>
            <div className="chip">
              <span className="text-sm font-medium">🎯 Custom Solutions</span>
            </div>
            <div className="chip">
              <span className="text-sm font-medium">
                🔒 Enterprise Security
              </span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-glass lg:col-span-3 space-y-6 relative overflow-hidden group"
            noValidate
            role="form"
            aria-label="Contact form"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              {/* Honeypot field – hidden from users, targeted by bots */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="hp" className="sr-only">
                  Leave this field empty
                </label>
                <input
                  id="hp"
                  {...register('hp')}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-ink"
                  >
                    Full Name{' '}
                    <span className="text-red-500" aria-label="required">
                      *
                    </span>
                  </label>
                  <input
                    {...register('name')}
                    id="name"
                    type="text"
                    autoComplete="name"
                    className={`w-full px-4 py-4 rounded-xl border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 min-h-[44px] ${
                      errors.name
                        ? 'border-red-300 focus:ring-red-500 bg-red-50/50'
                        : 'border-glass-border hover:border-primary/30'
                    }`}
                    placeholder="Enter your full name"
                    aria-describedby={errors.name ? 'name-error' : 'name-help'}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-required="true"
                  />
                  {errors.name ? (
                    <p
                      id="name-error"
                      className="mt-2 text-sm text-red-600 flex items-center gap-1"
                      role="alert"
                      aria-live="polite"
                    >
                      <span className="text-lg" aria-hidden="true">
                        ⚠️
                      </span>{' '}
                      {errors.name.message}
                    </p>
                  ) : (
                    <p
                      id="name-help"
                      className="mt-2 text-sm text-muted sr-only"
                    >
                      Enter your full name as it appears on official documents
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-ink"
                  >
                    Email Address{' '}
                    <span className="text-red-500" aria-label="required">
                      *
                    </span>
                  </label>
                  <input
                    {...register('email')}
                    id="email"
                    type="email"
                    autoComplete="email"
                    className={`w-full px-4 py-4 rounded-xl border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 min-h-[44px] ${
                      errors.email
                        ? 'border-red-300 focus:ring-red-500 bg-red-50/50'
                        : 'border-glass-border hover:border-primary/30'
                    }`}
                    placeholder="your.email@company.com"
                    aria-describedby={
                      errors.email ? 'email-error' : 'email-help'
                    }
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-required="true"
                  />
                  {errors.email ? (
                    <p
                      id="email-error"
                      className="mt-2 text-sm text-red-600 flex items-center gap-1"
                      role="alert"
                      aria-live="polite"
                    >
                      <span className="text-lg" aria-hidden="true">
                        ⚠️
                      </span>{' '}
                      {errors.email.message}
                    </p>
                  ) : (
                    <p
                      id="email-help"
                      className="mt-2 text-sm text-muted sr-only"
                    >
                      Enter a valid email address where we can reach you
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-2 text-ink"
                  >
                    Company (Optional)
                  </label>
                  <input
                    {...register('company')}
                    id="company"
                    type="text"
                    autoComplete="organization"
                    className="w-full px-4 py-4 rounded-xl border border-glass-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 min-h-[44px] hover:border-primary/30"
                    placeholder="Your company name"
                    aria-describedby="company-help"
                  />
                  <p
                    id="company-help"
                    className="mt-2 text-sm text-muted sr-only"
                  >
                    Enter your company name if applicable
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-ink"
                >
                  Message{' '}
                  <span className="text-red-500" aria-label="required">
                    *
                  </span>
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={6}
                  className={`w-full px-4 py-4 rounded-xl border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 resize-vertical ${
                    errors.message
                      ? 'border-red-300 focus:ring-red-500 bg-red-50/50'
                      : 'border-glass-border hover:border-primary/30'
                  }`}
                  placeholder="Tell us about your AI needs and goals..."
                  aria-describedby={
                    errors.message ? 'message-error' : 'message-help'
                  }
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-required="true"
                />
                {errors.message ? (
                  <p
                    id="message-error"
                    className="mt-2 text-sm text-red-600 flex items-center gap-1"
                    role="alert"
                    aria-live="polite"
                  >
                    <span className="text-lg" aria-hidden="true">
                      ⚠️
                    </span>{' '}
                    {errors.message.message}
                  </p>
                ) : (
                  <p id="message-help" className="mt-2 text-sm text-muted">
                    Describe your current challenges and what you hope to
                    achieve with AI
                  </p>
                )}
              </div>

              <div className="mt-8">
                <LoadingButton
                  type="submit"
                  loading={isSubmitting}
                  disabled={!isFormValid || isSubmitting}
                  className="w-full md:w-auto min-h-[44px] bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:-translate-y-1 hover:shadow-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
                  aria-describedby="submit-help"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </LoadingButton>
                <p
                  id="submit-help"
                  className="mt-2 text-sm text-muted text-center md:text-left"
                >
                  We'll respond within 24 hours during business days
                </p>
              </div>
            </div>
          </form>

          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className="card-glass">
              <h3 className="text-xl font-semibold mb-4 text-ink">
                Why Choose Nexus AI?
              </h3>
              <ul className="space-y-3 text-muted">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-lg mt-0.5">✓</span>
                  <span>Calgary-based with local business understanding</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-lg mt-0.5">✓</span>
                  <span>Hands-on implementation, not just consulting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-lg mt-0.5">✓</span>
                  <span>Measurable ROI within weeks, not months</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-lg mt-0.5">✓</span>
                  <span>Privacy-first approach with enterprise security</span>
                </li>
              </ul>
            </div>

            <div className="card-glass">
              <h3 className="text-xl font-semibold mb-4 text-ink">
                Response Time
              </h3>
              <p className="text-muted mb-4">
                We typically respond to inquiries within 24 hours during
                business days.
              </p>
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-xl">
                <p className="text-sm text-ink font-medium">
                  💡 Pro tip: Include specific details about your current
                  processes and goals for faster, more targeted responses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
