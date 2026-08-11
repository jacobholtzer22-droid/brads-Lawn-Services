import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site.config";
import { PhoneIcon, ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="band">
      <div className="section text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
          404
        </p>
        <h1 className="mt-3 text-display-sm font-bold text-ink sm:text-display-md">
          We couldn&rsquo;t find that page
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
          The page may have moved or the link may be out of date. You can still
          reach us the fastest way there is — pick up the phone.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={siteConfig.phone.tel}
            data-tel-cta
            className="btn-primary"
          >
            <PhoneIcon className="mr-2 h-5 w-5" />
            {siteConfig.phone.display}
          </a>
          <Link href="/request-a-quote" className="btn-secondary">
            Request a free quote
          </Link>
        </div>

        <div className="mx-auto mt-14 max-w-2xl border-t border-line pt-10">
          <h2 className="text-lg font-semibold text-ink">
            Looking for one of these?
          </h2>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {siteConfig.services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}`}
                  className="inline-flex items-center font-medium text-brand-700 hover:text-brand-800 hover:underline"
                >
                  {s.name}
                  <ArrowRightIcon className="ml-1.5 h-4 w-4" />
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/"
                className="inline-flex items-center font-medium text-brand-700 hover:text-brand-800 hover:underline"
              >
                Home
                <ArrowRightIcon className="ml-1.5 h-4 w-4" />
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="inline-flex items-center font-medium text-brand-700 hover:text-brand-800 hover:underline"
              >
                Contact
                <ArrowRightIcon className="ml-1.5 h-4 w-4" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
