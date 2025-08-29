/**
 * Analytics tracking utility for PrairieSignal
 * Provides a safe wrapper around dataLayer for GA4/GTM events
 */

declare global {
  interface Window {
    dataLayer?: any[];
  }
}

export type AnalyticsEvent =
  | 'cta_click'
  | 'inquiry_submit_succeeded'
  | 'inquiry_submit_failed'
  | 'roi_params_attached'
  | 'download_click'
  | 'workshop_signup'
  | 'schedule_click';

export interface AnalyticsEventData {
  [key: string]: any;
}

/**
 * Track events to Google Analytics via dataLayer
 * Safely handles cases where GTM/dataLayer is not available
 */
export function track(event: AnalyticsEvent, props?: AnalyticsEventData): void {
  try {
    // Check if we're in browser environment and dataLayer exists
    if (typeof window === 'undefined' || !window.dataLayer) {
      console.log(`[Analytics] ${event}`, props);
      return;
    }

    const eventData = {
      event,
      timestamp: new Date().toISOString(),
      page_location: window.location.href,
      ...props,
    };

    window.dataLayer.push(eventData);
    console.log(`[Analytics] Tracked: ${event}`, eventData);
  } catch (error) {
    console.warn('[Analytics] Failed to track event:', error);
  }
}

/**
 * Track CTA button clicks with standardized properties
 */
export function trackCtaClick(
  ctaId: string,
  ctaText?: string,
  location?: string
): void {
  track('cta_click', {
    cta_id: ctaId,
    cta_text: ctaText,
    location: location || window.location.pathname,
  });
}

/**
 * Track a resource download click
 */
export function trackDownloadClick(resource: string, href: string): void {
  track('download_click', {
    resource,
    href,
    location: typeof window !== 'undefined' ? window.location.pathname : '',
  });
}

/**
 * Track workshop signup interest
 */
export function trackWorkshopSignup(kind: 'workshop' | 'clinic'): void {
  track('workshop_signup', {
    kind,
    location: typeof window !== 'undefined' ? window.location.pathname : '',
  });
}

/**
 * Track schedule/book a call clicks
 */
export function trackScheduleClick(source: string): void {
  track('schedule_click', {
    source,
    location: typeof window !== 'undefined' ? window.location.pathname : '',
  });
}

/**
 * Track form submission success with relevant metadata
 */
export function trackInquirySuccess(
  toolsCount: number,
  budgetRange?: string,
  industry?: string
): void {
  track('inquiry_submit_succeeded', {
    tools_count: toolsCount,
    budget_range: budgetRange,
    industry,
  });
}

/**
 * Track form submission failure with error context
 */
export function trackInquiryFailure(
  errorCode: number,
  errorMessage?: string
): void {
  track('inquiry_submit_failed', {
    error_code: errorCode,
    error_message: errorMessage,
  });
}

/**
 * Track when ROI parameters are detected and attached to form
 */
export function trackRoiParamsAttached(params: {
  h?: number;
  r?: number;
  w?: number;
  p?: number;
}): void {
  track('roi_params_attached', {
    has_hourly_rate: typeof params.h === 'number',
    has_revenue_impact: typeof params.r === 'number',
    has_weekly_hours: typeof params.w === 'number',
    has_productivity: typeof params.p === 'number',
    param_count: Object.values(params).filter(v => v !== undefined).length,
  });
}
