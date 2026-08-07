import Link from "next/link";
import { siteConfig } from "@/lib/site.config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {siteConfig.services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="text-sm hover:text-white"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-sm hover:text-white">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Service Area
            </h3>
            <p className="mt-4 text-sm">
              {siteConfig.serviceArea.description}
            </p>
            <p className="mt-2 text-sm text-slate-400">
              ZIP codes: {siteConfig.serviceArea.zips.join(", ")}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={siteConfig.phone.tel}
                  className="text-sm font-semibold text-brand-300 hover:text-white"
                >
                  {siteConfig.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-sm">{siteConfig.hours}</li>
              <li className="text-sm">
                {siteConfig.location.poBox}
                <br />
                {siteConfig.location.city}, {siteConfig.location.state}{" "}
                {siteConfig.location.zip}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 border-t border-slate-700 pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-slate-400">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {siteConfig.social.facebook && (
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
