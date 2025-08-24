import { NextResponse } from 'next/server';
import * as z from 'zod';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(req: Request) {
  try {
    const data: any = await req.json();

    // Honeypot: if hidden field is filled, pretend success
    if (typeof data?.hp === 'string' && data.hp.trim()) {
      return NextResponse.json({ ok: true });
    }

    const parsed = contactSchema.parse(data);

    // Basic cookie-based rate limiting (30s window)
    const cookieHeader = req.headers.get('cookie') || '';
    const lastMatch = cookieHeader.match(/(?:^|; )contact_last=(\d+)/);
    const lastTs = lastMatch ? Number(lastMatch[1]) : 0;
    const now = Date.now();
    const WINDOW_MS = 30_000;
    if (lastTs && now - lastTs < WINDOW_MS) {
      return NextResponse.json(
        { ok: false, error: 'Too many requests. Please wait a moment.' },
        { status: 429 }
      );
    }

    // Allow disabling email sending via env (useful for CI/smoke tests)
    const disableEmail =
      process.env.CONTACT_DISABLE_EMAIL === '1' ||
      process.env.CONTACT_DISABLE_EMAIL === 'true';

    // Initialize Resend client
    const apiKey = process.env.RESEND_API_KEY;
    const resend = apiKey ? new Resend(apiKey) : null;

    // Create email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">New Contact Form Submission</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${parsed.name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${parsed.email}" style="color: #007bff;">${parsed.email}</a></p>
          ${parsed.company ? `<p style=\"margin: 10px 0;\"><strong>Company:</strong> ${parsed.company}</p>` : ''}
          <p style="margin: 10px 0;"><strong>Message:</strong></p>
          <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff; margin-top: 10px;">
            ${(parsed.message || '').replace(/\n/g, '<br>')}
          </div>
        </div>
        <p style="color: #666; font-size: 12px; margin-top: 20px;">
          This email was sent from the contact form on your website.
        </p>
      </div>
    `;

    // Prepare response and set rate-limit cookie
    const makeOk = (payload?: Record<string, unknown>) => {
      const res = NextResponse.json({ ok: true, ...(payload || {}) });
      res.cookies.set('contact_last', String(now), {
        httpOnly: true,
        sameSite: 'lax',
        maxAge: 30,
        path: '/',
      });
      return res;
    };

    if (disableEmail) {
      console.warn('Email sending disabled via CONTACT_DISABLE_EMAIL; skipping send.');
      return makeOk({ skipped: 'email' });
    }

    if (!resend || !process.env.TO_EMAIL) {
      console.warn('Email not configured (RESEND_API_KEY or TO_EMAIL missing); skipping email send.');
      return makeOk();
    }

    // Send email via Resend
    const { data: emailData, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@yourdomain.com',
      to: process.env.TO_EMAIL || 'your-email@yourdomain.com',
      subject: 'New Contact Form Submission - Nexus AI',
      html: emailHtml,
    });

    if (error) {
      console.error('Email sending failed:', error);
      return NextResponse.json(
        { ok: false, error: 'Failed to send email' },
        { status: 500 }
      );
    }

    console.log('Contact form email sent successfully:', emailData);
    return makeOk({ emailId: emailData?.id });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}