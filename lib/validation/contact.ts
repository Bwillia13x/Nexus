import { z } from 'zod';
import type {
  IndustryOption,
  TeamSizeOption,
  ToolOption,
  SensitivityOption,
  BudgetOption,
  UrgencyOption,
} from '@/app/contact/_content';

// Enhanced inquiry schema with anti-spam, ROI, and UTM tracking
export const inquirySchema = z.object({
  // Core contact fields
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2).optional().or(z.literal('')),
  industry: z.enum(
    [
      'Retail',
      'Trades/Construction',
      'Clinics',
      'Restaurants',
      'Professional Services',
      'Other',
    ] as const,
    {
      errorMap: () => ({ message: 'Please select an industry' }),
    }
  ),
  teamSize: z.enum(['1–5', '6–20', '21–50', '51–200', '200+'] as const, {
    errorMap: () => ({ message: 'Please select team size' }),
  }),
  currentTools: z
    .array(
      z.enum([
        'Google Workspace',
        'Microsoft 365',
        'QuickBooks',
        'Shopify',
        'Stripe',
        'Square',
        'Slack',
        'Teams',
        'HubSpot',
        'Make.com',
      ] as const)
    )
    .optional()
    .default([]),
  dataSensitivity: z.enum(['Low', 'Moderate', 'High'] as const, {
    errorMap: () => ({ message: 'Please select data sensitivity level' }),
  }),
  budgetRange: z.enum(['<$5k', '$5k–$9k', '$9k–$14k', '$14k+'] as const, {
    errorMap: () => ({ message: 'Please select budget range' }),
  }),
  projectUrgency: z.enum(['Exploring', 'This quarter', 'ASAP'] as const, {
    errorMap: () => ({ message: 'Please select project urgency' }),
  }),
  vision: z
    .string()
    .min(20, 'Vision must be at least 20 characters')
    .max(1500, 'Vision must be less than 1500 characters'),

  // ROI calculator integration
  roi: z
    .object({
      h: z.number().optional(), // hourly rate
      r: z.number().optional(), // revenue impact
      w: z.number().optional(), // weekly hours
      p: z.number().optional(), // productivity multiplier
    })
    .partial()
    .optional(),

  // UTM and tracking parameters
  utm: z.record(z.string()).optional(),

  // Anti-spam measures
  hp: z.string().max(0, 'Spam detected').optional(), // honeypot
  tts: z.number().min(5, 'Form submitted too quickly'), // time-to-submit in seconds

  // Legacy fields for backward compatibility
  pilotInterest: z.string().optional(),
  referrerUrl: z.string().optional(),
  utmSource: z.string().optional(),
  utmCampaign: z.string().optional(),
  utmMedium: z.string().optional(),
  pagePath: z.string().optional(),
  honeypot: z.string().max(0, 'Spam detected').optional(),
});

// Legacy schema for backward compatibility
export const contactSchema = inquirySchema;

// Type exports
export type InquiryPayload = z.infer<typeof inquirySchema>;
export type ContactPayload = InquiryPayload; // Alias for backward compatibility
