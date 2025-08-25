import { env } from './env';

// In-memory rate limiting store (for development/serverless)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

export async function rateLimitOk(
  identifier: string,
  maxRequests = 5,
  windowMs = 60 * 60 * 1000
): Promise<boolean> {
  const now = Date.now();
  const windowStart = now - windowMs;

  // Try Upstash Redis first if configured
  if (env.UPSTASH_REDIS_REST_URL && env.UPSTASH_REDIS_REST_TOKEN) {
    try {
      const key = `contact_rate_limit:${identifier}`;
      const response = await fetch(`${env.UPSTASH_REDIS_REST_URL}/get/${key}`, {
        headers: {
          Authorization: `Bearer ${env.UPSTASH_REDIS_REST_TOKEN}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        const stored = data.result ? JSON.parse(data.result) : null;

        if (stored && stored.resetTime > now) {
          if (stored.count >= maxRequests) {
            return false;
          }
          // Increment count
          const newData = {
            count: stored.count + 1,
            resetTime: stored.resetTime,
          };
          await fetch(`${env.UPSTASH_REDIS_REST_URL}/set/${key}`, {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${env.UPSTASH_REDIS_REST_TOKEN}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              value: JSON.stringify(newData),
              ex: Math.ceil((stored.resetTime - now) / 1000),
            }),
          });
          return true;
        }
      }
    } catch (error) {
      console.warn(
        'Redis rate limit failed, falling back to in-memory:',
        error
      );
    }
  }

  // Fallback to in-memory rate limiting
  const stored = rateLimitStore.get(identifier);

  if (!stored || stored.resetTime <= windowStart) {
    // New window or expired
    rateLimitStore.set(identifier, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (stored.count >= maxRequests) {
    return false;
  }

  stored.count++;
  return true;
}
