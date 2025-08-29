import { Resend } from 'resend';
import { env } from './env';
import { InquiryPayload } from './validation/contact';

export async function sendLeadEmail(
  inquiry: InquiryPayload & {
    ip: string;
    ua: string;
    timestamp: Date;
    hasRoiParams?: boolean;
    utmCount?: number;
  }
): Promise<void> {
  if (!env.RESEND_API_KEY || !env.TO_EMAIL) {
    throw new Error('Email not configured');
  }

  const resend = new Resend(env.RESEND_API_KEY);

  const subject = `New Prairie Signal inquiry — ${inquiry.fullName} (${inquiry.company || 'N/A'}) — ${inquiry.industry}`;
  const body = `
NEW INQUIRY RECEIVED
===================

Contact Details:
- Name: ${inquiry.fullName}
- Email: ${inquiry.email}
- Company: ${inquiry.company || '—'}
- Industry: ${inquiry.industry}

Business Info:
- Team Size: ${inquiry.teamSize}
- Current Tools: ${inquiry.currentTools?.join(', ') || 'None selected'}
- Data Sensitivity: ${inquiry.dataSensitivity}
- Budget Range: ${inquiry.budgetRange}
- Project Urgency: ${inquiry.projectUrgency}

${
  inquiry.hasRoiParams
    ? `ROI Calculator Data:
- Hourly Rate: ${inquiry.roi?.h || '—'}
- Revenue Impact: ${inquiry.roi?.r || '—'}
- Weekly Hours: ${inquiry.roi?.w || '—'}
- Productivity: ${inquiry.roi?.p || '—'}`
    : ''
}

Tracking & Analytics:
- UTM Parameters: ${inquiry.utmCount || 0} found${inquiry.utm ? ` (${Object.keys(inquiry.utm).join(', ')})` : ''}
- Referrer: ${inquiry.referrerUrl || '—'}
- Page: ${inquiry.pagePath}
- Time-to-Submit: ${inquiry.tts}s

Technical Details:
- IP: ${inquiry.ip}
- User Agent: ${inquiry.ua}
- Timestamp: ${inquiry.timestamp.toISOString()}

Project Vision:
${inquiry.vision}

---
This inquiry was processed with enhanced anti-spam measures and analytics tracking.
  `.trim();

  await resend.emails.send({
    from: env.FROM_EMAIL || 'noreply@noreply.invalid',
    to: env.TO_EMAIL,
    subject,
    text: body,
  });
}
