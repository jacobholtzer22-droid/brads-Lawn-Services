import Link from "next/link";
import { siteConfig } from "@/lib/site.config";
import { PhoneIcon } from "@/components/Icons";

/**
 * Sticky bottom action bar, mobile only (hidden at md+).
 * Server component — pure HTML/CSS, works with JS disabled.
 * The <body> carries pb-16 md:pb-0 so this never covers page content.
 */
export function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-surface/95 backdrop-blur-md md:hidden">
      <div className="grid grid-cols-2 gap-2 px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        <a
          href={siteConfig.phone.tel}
          data-tel-cta
          className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border-[1.5px] border-brand-600 bg-surface-card px-3 text-base font-semibold text-brand-700"
        >
          <PhoneIcon className="h-5 w-5" />
          Call Now
        </a>
        <Link
          href="/request-a-quote"
          className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-brand-600 px-3 text-base font-semibold text-white"
        >
          Get a Quote
        </Link>
      </div>
    </div>
  );
}
