import { env } from './env';
import { InquiryPayload } from './validation/contact';

export async function postSlack(
  inquiry: InquiryPayload & {
    ip: string;
    ua: string;
    timestamp: Date;
    hasRoiParams?: boolean;
    utmCount?: number;
  }
): Promise<void> {
  if (!env.SLACK_WEBHOOK_URL) {
    throw new Error('Slack not configured');
  }

  const blocks = [
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: `🚀 New Nexus AI Inquiry: ${inquiry.fullName}`,
      },
    },
    {
      type: 'section',
      fields: [
        {
          type: 'mrkdwn',
          text: `*Email:*\n<mailto:${inquiry.email}|${inquiry.email}>`,
        },
        { type: 'mrkdwn', text: `*Company:*\n${inquiry.company || 'N/A'}` },
        { type: 'mrkdwn', text: `*Industry:*\n${inquiry.industry}` },
        { type: 'mrkdwn', text: `*Team Size:*\n${inquiry.teamSize}` },
        { type: 'mrkdwn', text: `*Budget:*\n${inquiry.budgetRange}` },
        { type: 'mrkdwn', text: `*Urgency:*\n${inquiry.projectUrgency}` },
        {
          type: 'mrkdwn',
          text: `*Data Sensitivity:*\n${inquiry.dataSensitivity}`,
        },
        {
          type: 'mrkdwn',
          text: `*Tools:*\n${inquiry.currentTools?.join(', ') || 'None specified'}`,
        },
      ],
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*Vision:*\n${inquiry.vision}`,
      },
    },
    {
      type: 'context',
      elements: [
        { type: 'mrkdwn', text: `*IP:* ${inquiry.ip}` },
        { type: 'mrkdwn', text: `*Page:* ${inquiry.pagePath}` },
        {
          type: 'mrkdwn',
          text: `*Referrer:* ${inquiry.referrerUrl || 'Direct'}`,
        },
        {
          type: 'mrkdwn',
          text: `*Time:* ${inquiry.timestamp.toLocaleString()}`,
        },
      ],
    },
  ];

  await fetch(env.SLACK_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ blocks }),
  });
}
