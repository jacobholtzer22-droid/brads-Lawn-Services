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
    <nav aria-label="Breadcrumb" className="border-b border-line bg-surface-tint">
      <div className="section">
        <ol className="flex flex-wrap items-center gap-1.5 py-3.5 text-sm text-ink-muted">
          {trail.map((crumb, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={crumb.href} className="flex items-center gap-1.5">
                {i > 0 && (
                  <ChevronRightIcon
                    className="h-4 w-4 flex-shrink-0 text-brand-300"
                  />
                )}
                {last ? (
                  <span aria-current="page" className="font-semibold text-ink">
                    {crumb.name}
                  </span>
                ) : (
                  <Link href={crumb.href} className="inline-block py-1 transition-colors hover:text-brand-700">
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

/**
 * Inner-page hero. Same construction as the homepage hero — full-bleed photo
 * with a directional scrim — just shorter. The photo runs at full strength
 * rather than the old opacity-35 wash, so it reads as a photograph.
 */
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
    <section className="relative isolate overflow-hidden bg-brand-950">
      {img && (
        <>
          <Image
            src={img.src}
            alt={img.alt}
            fill
            priority
            quality={58}
            sizes="100vw"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-[60%_center]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-950 via-brand-950/85 to-brand-950/30"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-950/90 via-transparent to-brand-950/50"
          />
        </>
      )}
      <div className="section pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-36">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="pill-light hero-in">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-accent-400"
              />
              {eyebrow}
            </p>
          )}
          <h1
            className="display-1 hero-in mt-6 text-white"
            style={{ animationDelay: "80ms" }}
          >
            {title}
          </h1>
          {intro && (
            <p
              className="hero-in mt-6 text-lg leading-relaxed text-brand-100"
              style={{ animationDelay: "160ms" }}
            >
              {intro}
            </p>
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
    <section className="relative isolate overflow-hidden bg-brand-950">
      {/* Faint photographic wash, per the reference CTA-band pattern. */}
      <Image
        src={images.heroLawn.src}
        alt=""
        aria-hidden="true"
        fill
        loading="lazy"
        sizes="100vw"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-15"
      />
      <div className="section band text-center">
        <p className="eyebrow text-accent-500">Ready when you are</p>
        <h2 className="display-2 mx-auto mt-3 max-w-3xl text-white">{heading}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-brand-200">
          {body}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/request-a-quote" className="btn-accent w-full sm:w-auto">
            Request a free quote
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
          <a
            href={siteConfig.phone.tel}
            data-tel-cta
            className="btn-ghost-light w-full sm:w-auto"
          >
            <PhoneIcon className="mr-2 h-5 w-5" />
            {siteConfig.phone.display}
          </a>
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
    <section className="band border-t border-line">
      <div className="section">
        <h2 className="display-2 text-ink">Other services we offer</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {related.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/${s.slug}`}
                className="group card-interactive flex h-full flex-col p-6"
              >
                <h3 className="font-semibold text-ink">{s.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                  {s.shortDescription}
                </p>
                <span className="mt-3 inline-flex items-center text-sm font-semibold text-brand-700">
                  Learn more
                  <ArrowRightIcon className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
