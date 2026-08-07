"use client";

import Script from "next/script";
import { useEffect } from "react";
import { conversionId, trackingEnabled, trackCallConversion } from "@/lib/tracking";

/**
 * Google Ads gtag base snippet plus a delegated tel: click listener.
 *
 * Renders NOTHING when NEXT_PUBLIC_AW_CONVERSION_ID is empty (the default),
 * so no third-party script is loaded and no network request is made until
 * Jacob supplies a real ID.
 */
export function Analytics() {
  useEffect(() => {
    if (!trackingEnabled) return;

    // Delegated so it covers every tel: link on every page, including ones
    // rendered after mount.
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.('a[href^="tel:"]');
      if (link) trackCallConversion();
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!trackingEnabled) return null;

  return (
    <>
      <Script
        id="gtag-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${conversionId}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${conversionId}');
        `}
      </Script>
    </>
  );
}
