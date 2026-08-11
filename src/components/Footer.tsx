import Link from "next/link";
import { siteConfig } from "@/lib/site.config";
import { PhoneIcon, MailIcon, ClockIcon, MapPinIcon } from "@/components/Icons";

const companyLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Reviews", href: "/reviews" },
  { label: "Gallery", href: "/gallery" },
  { label: "Areas We Serve", href: "/areas-we-serve" },
  { label: "Employment", href: "/employment" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-brand-200">
      <div className="section py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="eyebrow text-accent-500">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className="inline-block py-1 text-sm transition-colors hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow text-accent-500">
              Company
            </h2>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-block py-1 text-sm transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow text-accent-500">
              Service Area
            </h2>
            <p className="mt-4 flex items-start gap-2 text-sm">
              <MapPinIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-500" />
              <span>
                {siteConfig.serviceArea.description}
                <br />
                <span className="text-brand-300">
                  ZIP codes {siteConfig.serviceArea.zips.join(", ")}
                </span>
              </span>
            </p>
            <p className="mt-4 flex items-start gap-2 text-sm">
              <ClockIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-500" />
              <span>{siteConfig.hours}</span>
            </p>
          </div>

          <div>
            <h2 className="eyebrow text-accent-500">
              Contact
            </h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={siteConfig.phone.tel}
                  data-tel-cta
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent-400 transition-colors hover:text-white"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {siteConfig.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
                >
                  <MailIcon className="h-4 w-4" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="pt-1 text-sm text-brand-300">
                {siteConfig.location.poBox}
                <br />
                {siteConfig.location.city}, {siteConfig.location.state}{" "}
                {siteConfig.location.zip}
              </li>
            </ul>

            <ul className="mt-5 space-y-2">
              <li>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-1 text-sm text-brand-300 transition-colors hover:text-white"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.homeAdvisor}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-1 text-sm text-brand-300 transition-colors hover:text-white"
                >
                  HomeAdvisor profile
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.googleReview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-1 text-sm text-brand-300 transition-colors hover:text-white"
                >
                  Leave a Google review
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-white/15 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-brand-300">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-brand-300">
            {siteConfig.tagline} &middot; {siteConfig.motto}
          </p>
        </div>
      </div>
    </footer>
  );
}
