import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site.config";
import { images } from "../../content/images";
import { reviews } from "../../content/reviews";
import { homeFaqs } from "../../content/faqs";
import { JsonLd } from "@/components/JsonLd";
import { FAQ } from "@/components/FAQ";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { CTASection, TrustBadges } from "@/components/PageSections";
import { BeforeAfter } from "@/components/BeforeAfter";
import {
  MowerIcon,
  TractorIcon,
  AerationIcon,
  LeafIcon,
  SnowIcon,
  PhoneIcon,
  ClockIcon,
  MapPinIcon,
  HomeIcon,
  CheckIcon,
  ArrowRightIcon,
  StarIcon,
} from "@/components/Icons";

/* METADATA IS FROZEN — do not edit. See redesign/BASELINE-SEO.txt. */
export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} | Lawn Care in ${siteConfig.location.city}, ${siteConfig.location.state}`,
  },
  description: `Lawn mowing, brush hogging, core aeration, leaf cleanup, and snow plowing in ${siteConfig.location.city}, ${siteConfig.location.state}. ${siteConfig.tagline}. Call ${siteConfig.phone.display} anytime.`,
  alternates: { canonical: "./" },
};

const serviceMeta = {
  "lawn-mowing": { Icon: MowerIcon, image: images.lawnSummerShrubs },
  "brush-hogging": { Icon: TractorIcon, image: images.brushTractor },
  "core-aeration": { Icon: AerationIcon, image: images.aerationPlugs },
  "leaf-cleanup": { Icon: LeafIcon, image: images.leafTruckBrandedCrew },
  "snow-plowing": { Icon: SnowIcon, image: images.snowPlowTrucks },
} as const;

/** Six reviews for the carousel. All verbatim from content/reviews.ts. */
const featuredReviews = [
  reviews[1],
  reviews[4],
  reviews[2],
  reviews[7],
  reviews[0],
  reviews[10],
] as const;

/** Short enough to sit in the hero's floating card without truncation. */
const heroReview = reviews[11];

const edgePillars = [
  { title: "Service", body: siteConfig.about.mottoMeaning.service },
  { title: "A Sharp Edge", body: siteConfig.about.mottoMeaning.edge },
  { title: "Clean Lines", body: siteConfig.about.mottoMeaning.lines },
];

export default function HomePage() {
  const yearsServing = new Date().getFullYear() - siteConfig.sinceYear;

  /* JSON-LD IS FROZEN — do not edit. */
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Services offered by ${siteConfig.name}`,
    itemListElement: siteConfig.services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.name,
        description: s.shortDescription,
        url: `${siteConfig.siteUrl}/${s.slug}`,
        provider: { "@id": `${siteConfig.siteUrl}/#business` },
        areaServed: { "@type": "City", name: siteConfig.location.city },
      },
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* ================= HERO =================
          Full-bleed photo with a DIRECTIONAL scrim (dark lower-left, clearing
          toward upper right) rather than a flat wash, so the photograph still
          reads as a photograph. See redesign/REFERENCE-PATTERNS.md §3. */}
      <section className="relative isolate min-h-[640px] overflow-hidden bg-brand-950 lg:min-h-[760px]">
        <Image
          src={images.lawnSummerLush.src}
          alt={images.lawnSummerLush.alt}
          fill
          priority
          quality={58}
          sizes="100vw"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[60%_center]"
        />
        {/* Directional scrim: solid enough at the text for AA, clear at right. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-950 via-brand-950/85 to-brand-950/25"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-950 via-transparent to-brand-950/40"
        />

        <div className="section flex min-h-[640px] flex-col justify-center pb-14 pt-28 sm:pt-32 lg:min-h-[760px] lg:pb-20">
          <div className="max-w-2xl">
            <p className="pill-light hero-in" style={{ animationDelay: "0ms" }}>
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-accent-400"
              />
              {siteConfig.tagline}
            </p>

            {/* H1 TEXT IS FROZEN — renders exactly:
                "Lawn care in Battle Creek done with an edge" */}
            <h1
              className="display-1 hero-in mt-6 text-white"
              style={{ animationDelay: "80ms" }}
            >
              Lawn care in {siteConfig.location.city} done with{" "}
              <span className="text-accent-400">an edge</span>
            </h1>

            <p
              className="hero-in mt-6 max-w-xl text-lg leading-relaxed text-brand-100"
              style={{ animationDelay: "160ms" }}
            >
              Mowing, brush hogging, aeration, leaf cleanup, and snow plowing for
              homes and businesses across {siteConfig.location.city} and the
              surrounding area. {siteConfig.availability}.
            </p>

            {/* One solid primary + one text link — not two competing buttons. */}
            <div
              className="hero-in mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6"
              style={{ animationDelay: "240ms" }}
            >
              <Link href="/request-a-quote" className="btn-accent w-full sm:w-auto">
                Request a free quote
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <a
                href={siteConfig.phone.tel}
                data-tel-cta
                className="inline-flex min-h-[48px] items-center gap-2 text-base font-semibold text-white transition-colors hover:text-accent-400"
              >
                <PhoneIcon className="h-5 w-5" />
                {siteConfig.phone.display}
              </a>
            </div>

            {/* Stat row on a hairline rule. */}
            {/* Deliberate 2x2 on mobile — free-wrapping put "Family" alone on
                a second row, which read as a mistake. Flex row from sm up. */}
            <dl
              className="hero-in mt-10 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-white/20 pt-6 sm:flex sm:flex-wrap sm:gap-x-10"
              style={{ animationDelay: "320ms" }}
            >
              <div>
                <dt className="sr-only">Years serving Battle Creek</dt>
                <dd>
                  <span className="font-heading text-3xl font-bold text-accent-400">
                    <CountUp value={yearsServing} suffix="+" />
                  </span>
                  <span className="mt-0.5 block text-sm text-brand-200">
                    Years serving {siteConfig.location.city}
                  </span>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Availability</dt>
                <dd>
                  <span className="font-heading text-3xl font-bold text-accent-400">
                    24/7
                  </span>
                  <span className="mt-0.5 block text-sm text-brand-200">
                    Call anytime
                  </span>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Ownership</dt>
                <dd>
                  <span className="font-heading text-3xl font-bold text-accent-400">
                    Family
                  </span>
                  <span className="mt-0.5 block text-sm text-brand-200">
                    Owned and operated
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Floating review card — real review, verbatim. Desktop only; on
            mobile the hero column already fills the frame. */}
        <figure className="hero-in absolute bottom-10 right-8 hidden w-[300px] rounded-2xl bg-white/95 p-5 shadow-float backdrop-blur-sm xl:block">
          <div className="flex gap-0.5 text-accent-600" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-4 w-4" />
            ))}
          </div>
          <span className="sr-only">Five out of five stars</span>
          <blockquote className="mt-3">
            <p className="text-sm leading-relaxed text-ink">
              &ldquo;{heroReview.text}&rdquo;
            </p>
          </blockquote>
          <figcaption className="mt-3 text-sm font-semibold text-ink-muted">
            &mdash; {heroReview.name}
          </figcaption>
        </figure>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="border-b border-line bg-surface-tint">
        <div className="section py-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-ink-muted">
            <li className="inline-flex items-center gap-2">
              <ClockIcon className="h-5 w-5 text-brand-600" />
              Open 24 hours, 7 days a week
            </li>
            <li className="inline-flex items-center gap-2">
              <HomeIcon className="h-5 w-5 text-brand-600" />
              Residential &amp; commercial
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPinIcon className="h-5 w-5 text-brand-600" />
              {siteConfig.serviceArea.description}
            </li>
          </ul>

          <div className="mt-8 flex flex-col items-center gap-5 border-t border-line pt-8">
            <p className="eyebrow text-brand-700">
              Screened, approved, and rated
            </p>
            <TrustBadges compact />
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="band" id="services">
        <div className="section">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-brand-700">What we do</p>
            <h2 className="display-2 mt-3 text-ink">
              Everything your property needs,{" "}
              <span className="text-brand-700">all year</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              {siteConfig.positioning} serving {siteConfig.location.city} and the
              surrounding areas since {siteConfig.sinceYear}.
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((service, i) => {
              const meta = serviceMeta[service.slug];
              return (
                <Reveal as="li" key={service.slug} delay={i * 60}>
                  <Link
                    href={`/${service.slug}`}
                    className="group card-interactive flex h-full flex-col overflow-hidden"
                  >
                    <div className="card-media aspect-[16/10]">
                      <Image
                        src={meta.image.src}
                        alt={meta.image.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="card-zoom-img"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100">
                        <meta.Icon className="h-5 w-5 text-brand-700" />
                      </span>
                      <h3 className="mt-4 text-lg font-semibold text-ink">
                        {service.name}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                        {service.shortDescription}
                      </p>
                      <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-700">
                        Learn more
                        <ArrowRightIcon className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ================= SERVICE WITH AN EDGE ================= */}
      <section className="band bg-brand-950">
        <div className="section">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-900">
              <Image
                src={images.equipTractorLeaves.src}
                alt={images.equipTractorLeaves.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </Reveal>

            <div>
              <Reveal>
                <p className="eyebrow text-accent-500">Our motto</p>
                <h2 className="display-2 mt-3 text-white">
                  Service with{" "}
                  <span className="text-accent-400">an edge</span>
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-brand-200">
                  {siteConfig.about.origin}
                </p>
              </Reveal>

              <ul className="mt-8 space-y-5">
                {edgePillars.map((pillar, i) => (
                  <Reveal as="li" key={pillar.title} delay={i * 70}>
                    <div className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-accent-500">
                        <CheckIcon className="h-5 w-5 text-brand-950" />
                      </span>
                      <div>
                        <h3 className="font-semibold text-white">{pillar.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-brand-200">
                          {pillar.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={220}>
                <Link href="/about-us" className="btn-accent mt-9">
                  More about Brad&rsquo;s
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      <section className="band bg-surface-tint">
        <div className="section">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow text-brand-700">Reviews</p>
              <h2 className="display-2 mt-3 text-ink">
                What {siteConfig.location.city}{" "}
                <span className="text-brand-700">neighbors say</span>
              </h2>
            </div>
            <Link href="/reviews" className="btn-secondary">
              Read all reviews
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </Reveal>
        </div>

        {/*
          `contain:layout paint` is load-bearing. Without it this full-bleed
          scroller widens the mobile LAYOUT viewport (window.innerWidth hit 1560
          on a 390px screen) and the position:fixed CTA bar, which sizes to the
          viewport, rendered off-screen. Wrappers/max-width/scroll-snap toggles
          were all tested and do not fix it. Do not remove.
        */}
        <ul className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 [contain:layout_paint] sm:px-6 lg:px-8 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-brand-200">
          {featuredReviews.map((review) => (
            <li
              key={review.name}
              className="card flex w-[86%] flex-shrink-0 snap-start flex-col p-6 sm:w-[46%] lg:w-[31%]"
            >
              <div className="flex gap-0.5 text-accent-600" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5" />
                ))}
              </div>
              <span className="sr-only">Five out of five stars</span>
              <blockquote className="mt-4 flex-1 text-ink-muted">
                <p className="leading-relaxed">&ldquo;{review.text}&rdquo;</p>
              </blockquote>
              <p className="mt-5 border-t border-line pt-4 text-sm font-semibold text-ink">
                {review.name}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* ================= BEFORE / AFTER ================= */}
      <BeforeAfter
        limit={3}
        heading="See the difference for yourself"
        intro="Same property, same day. Three real jobs from around Battle Creek — the rest are in the gallery."
      />

      {/* ================= SERVICE AREA ================= */}
      <section className="bg-brand-600">
        <div className="section band-tight text-center">
          <Reveal>
            <p className="eyebrow inline-flex items-center gap-2 text-brand-100">
              <MapPinIcon className="h-4 w-4" />
              Proudly local
            </p>
            <h2 className="display-2 mx-auto mt-3 max-w-3xl text-white">
              Serving {siteConfig.location.city} and the surrounding areas
            </h2>

            <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
              {siteConfig.serviceArea.zips.map((zip) => (
                <li
                  key={zip}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white"
                >
                  <CheckIcon className="h-4 w-4" />
                  {zip}
                </li>
              ))}
            </ul>

            <Link
              href="/areas-we-serve"
              className="btn mt-8 bg-white text-brand-700 hover:-translate-y-px hover:bg-brand-50"
            >
              See your area
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <FAQ items={homeFaqs} />

      {/* ================= CLOSING CTA ================= */}
      <CTASection />
    </>
  );
}
