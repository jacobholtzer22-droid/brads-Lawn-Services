import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site.config";
import { images } from "../../content/images";
import { PhoneIcon, ArrowRightIcon, ChevronRightIcon } from "@/components/Icons";

/* ------------------------------------------------------------------ */
/* Breadcrumbs — visible nav. BreadcrumbList JSON-LD is added per page. */
/* ------------------------------------------------------------------ */

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-slate-200 bg-slate-50">
      <div className="section">
        <ol className="flex flex-wrap items-center gap-1.5 py-3 text-sm text-slate-600">
          {trail.map((crumb, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={crumb.href} className="flex items-center gap-1.5">
                {i > 0 && (
                  <ChevronRightIcon
                    className="h-4 w-4 flex-shrink-0 text-slate-400"
                  />
                )}
                {last ? (
                  <span aria-current="page" className="font-medium text-slate-900">
                    {crumb.name}
                  </span>
                ) : (
                  <Link href={crumb.href} className="hover:text-brand-700">
                    {crumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/* Inner-page hero                                                     */
/* ------------------------------------------------------------------ */

export function PageHero({
  title,
  intro,
  imageSlot,
  eyebrow,
}: {
  title: string;
  intro?: string;
  imageSlot?: keyof typeof images;
  eyebrow?: string;
}) {
  const img = imageSlot ? images[imageSlot] : null;

  return (
    <section className="relative isolate overflow-hidden bg-slate-900">
      {img && (
        <Image
          src={img.src}
          alt={img.alt}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
        />
      )}
      <div className="section py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-300">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 text-display-sm font-bold text-white sm:text-display-md">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 text-lg leading-relaxed text-slate-200">{intro}</p>
          )}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Closing CTA                                                         */
/* ------------------------------------------------------------------ */

export function CTASection({
  heading = "Ready for a lawn you don't have to think about?",
  body = "Tell us what your property needs and we will get you a quote. Call anytime, day or night.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="bg-brand-600 py-16 sm:py-20">
      <div className="section text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{heading}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-50">{body}</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={siteConfig.phone.tel}
            data-tel-cta
            className="inline-flex min-h-[44px] cursor-pointer items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-700 transition-colors hover:bg-brand-50"
          >
            <PhoneIcon className="mr-2 h-5 w-5" />
            {siteConfig.phone.display}
          </a>
          <Link
            href="/request-a-quote"
            className="inline-flex min-h-[44px] cursor-pointer items-center justify-center rounded-lg border-2 border-white px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Request a free quote
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Trust badges — linked to the live HomeAdvisor profile                */
/* ------------------------------------------------------------------ */

const haBadges = [
  images.badgeHaScreened,
  images.badgeHaToprated,
  images.badgeHaElite,
];

export function TrustBadges({ compact = false }: { compact?: boolean }) {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-5">
      {haBadges.map((badge) => (
        <li key={badge.src}>
          <a
            href={siteConfig.social.homeAdvisor}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded transition-opacity hover:opacity-80"
          >
            <Image
              src={badge.src}
              alt={badge.alt}
              width={140}
              height={84}
              sizes="140px"
              className={compact ? "h-14 w-auto object-contain" : "h-[72px] w-auto object-contain"}
            />
          </a>
        </li>
      ))}
      <li>
        <Image
          src={images.badgeTtToppro.src}
          alt={images.badgeTtToppro.alt}
          width={140}
          height={84}
          sizes="140px"
          className={compact ? "h-14 w-auto object-contain" : "h-[72px] w-auto object-contain"}
        />
      </li>
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/* Related services                                                    */
/* ------------------------------------------------------------------ */

export function RelatedServices({ slugs }: { slugs: string[] }) {
  const related = siteConfig.services.filter((s) => slugs.includes(s.slug));
  if (!related.length) return null;

  return (
    <section className="border-t border-slate-200 py-16">
      <div className="section">
        <h2 className="text-2xl font-bold text-slate-900">
          Other services we offer
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {related.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/${s.slug}`}
                className="group flex h-full flex-col rounded-xl border border-slate-200 p-5 transition-colors hover:border-brand-600"
              >
                <h3 className="font-semibold text-slate-900">{s.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {s.shortDescription}
                </p>
                <span className="mt-3 inline-flex items-center text-sm font-semibold text-brand-700">
                  Learn more
                  <ArrowRightIcon className="ml-1.5 h-4 w-4" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
