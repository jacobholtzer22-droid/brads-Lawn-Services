import { siteConfig } from "@/lib/site.config";

/**
 * Google Ads conversion tracking.
 *
 * Every function here is a NO-OP when the env IDs are empty, which is the
 * default. No IDs are invented anywhere in this repo — Jacob pastes the real
 * ones into Vercel env vars (see HANDOFF.md).
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const conversionId = siteConfig.tracking.awConversionId;
export const trackingEnabled = Boolean(conversionId);

function send(label: string, params: Record<string, unknown> = {}) {
  if (!trackingEnabled || !label) return;
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", "conversion", {
    send_to: `${conversionId}/${label}`,
    ...params,
  });
}

/** Fired after a lead is accepted by the CRM endpoint. */
export function trackFormConversion() {
  send(siteConfig.tracking.awFormLabel);
}

/** Fired when any tel: link is clicked. */
export function trackCallConversion() {
  send(siteConfig.tracking.awCallLabel);
}
