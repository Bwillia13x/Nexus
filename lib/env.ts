export const env = {
  // Email
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  FROM_EMAIL: process.env.FROM_EMAIL,
  // Prefer TO_EMAIL, fall back to legacy CONTACT_TO_EMAIL if present
  TO_EMAIL: process.env.TO_EMAIL || process.env.CONTACT_TO_EMAIL,

  // Integrations
  SLACK_WEBHOOK_URL: process.env.SLACK_WEBHOOK_URL,
  UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
  UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,

  // Public config
  NEXT_PUBLIC_SCHEDULER_URL: process.env.NEXT_PUBLIC_SCHEDULER_URL,
  NEXT_PUBLIC_HCAPTCHA_SITEKEY: process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY,

  // Private secrets
  HCAPTCHA_SECRET: process.env.HCAPTCHA_SECRET,

  // Testing
  CONTACT_DISABLE_EMAIL: process.env.CONTACT_DISABLE_EMAIL,
};
