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
    <section id="contact" className="section">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-title-animated">
            Begin Your AI Transformation
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto mb-8">
            Let’s craft your intelligent future together. Share your vision and
            we'll help bring it to life with cutting-edge AI solutions.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
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
                    Full Name *
                  </label>
                  <input
                    {...register('name')}
                    id="name"
                    type="text"
                    autoComplete="name"
                    className={`w-full px-4 py-4 rounded-xl border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 ${
                      errors.name
                        ? 'border-red-300 focus:ring-red-500 bg-red-50/50'
                        : 'border-glass-border hover:border-primary/30'
                    }`}
                    placeholder="Enter your full name"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    {...(errors.name ? { 'aria-invalid': true } : {})}
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      className="mt-2 text-sm text-red-600 flex items-center gap-1"
                      role="alert"
                    >
                      <span className="text-lg">⚠️</span> {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-ink"
                  >
                    Email Address *
                  </label>
                  <input
                    {...register('email')}
                    id="email"
                    type="email"
                    autoComplete="email"
                    className={`w-full px-4 py-4 rounded-xl border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 ${
                      errors.email
                        ? 'border-red-300 focus:ring-red-500 bg-red-50/50'
                        : 'border-glass-border hover:border-primary/30'
                    }`}
                    placeholder="your.email@company.com"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    {...(errors.email ? { 'aria-invalid': true } : {})}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="mt-2 text-sm text-red-600 flex items-center gap-1"
                      role="alert"
                    >
                      <span className="text-lg">⚠️</span> {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-2 text-ink"
                  >
                    Company
                  </label>
                  <input
                    {...register('company')}
                    id="company"
                    type="text"
                    autoComplete="organization"
                    className="w-full px-4 py-4 rounded-xl border border-glass-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary hover:border-primary/30 transition-all duration-200"
                    placeholder="Your company name"
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-ink"
                  >
                    Your Vision *
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-4 rounded-xl border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 resize-none ${
                      errors.message
                        ? 'border-red-300 focus:ring-red-500 bg-red-50/50'
                        : 'border-glass-border hover:border-primary/30'
                    }`}
                    placeholder="Tell us about your project, challenges, or how you'd like AI to transform your business..."
                    aria-describedby={
                      errors.message ? 'message-error' : 'message-help'
                    }
                    {...(errors.message ? { 'aria-invalid': true } : {})}
                  />
                  <p id="message-help" className="mt-1 text-xs text-muted">
                    Be as specific as possible about your goals and challenges
                  </p>
                  {errors.message && (
                    <p
                      id="message-error"
                      className="mt-2 text-sm text-red-600 flex items-center gap-1"
                      role="alert"
                    >
                      <span className="text-lg">⚠️</span>{' '}
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="pt-4">
                <LoadingButton
                  type="submit"
                  loading={isSubmitting}
                  disabled={!isFormValid || isSubmitting}
                  className="btn-primary w-full text-lg font-semibold disabled:hover:translate-y-0 disabled:hover:shadow-lg"
                  aria-describedby="submit-button-help"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin">⚡</span> Sending Your
                      Message...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      🚀 Send Message
                    </span>
                  )}
                </LoadingButton>
                <p
                  id="submit-button-help"
                  className="mt-2 text-xs text-center text-muted"
                >
                  We'll respond within 2 hours during business days
                </p>
              </div>
            </div>
          </form>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card-glass">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">💡</span>
                Why Choose Us?
              </h3>
              <ul className="space-y-3 text-sm text-muted">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>
                    Custom AI solutions tailored to your business needs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Expert team with 15+ years of AI experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Enterprise-grade security and compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>24/7 support and ongoing optimization</span>
                </li>
              </ul>
            </div>

            <div className="card-glass">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">⏱️</span>
                Response Time
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 rounded-xl bg-primary/10">
                  <span className="font-medium">Email</span>
                  <span className="text-sm text-primary font-semibold">
                    2 hours
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-secondary/10">
                  <span className="font-medium">Phone</span>
                  <span className="text-sm text-secondary font-semibold">
                    Immediate
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-primary/10">
                  <span className="font-medium">Consultation</span>
                  <span className="text-sm text-primary font-semibold">
                    24 hours
                  </span>
                </div>
              </div>
            </div>

            <div className="card-glass">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">🔐</span>
                Your Data is Safe
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                All communications are encrypted and secure. We comply with
                GDPR, HIPAA, and other industry standards. Your information is
                never shared without consent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
