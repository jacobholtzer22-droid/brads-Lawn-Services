import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site.config";
import { images } from "../../content/images";
import { reviews } from "../../content/reviews";
import { JsonLd } from "@/components/JsonLd";
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

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} | Lawn Care in ${siteConfig.location.city}, ${siteConfig.location.state}`,
  },
  description: `Lawn mowing, brush hogging, core aeration, leaf cleanup, and snow plowing in ${siteConfig.location.city}, ${siteConfig.location.state}. ${siteConfig.tagline}. Call ${siteConfig.phone.display} anytime.`,
  alternates: { canonical: "./" },
};

const serviceMeta = {
  "lawn-mowing": { Icon: MowerIcon, image: images.heroLawn },
  "brush-hogging": { Icon: TractorIcon, image: images.brushTractor },
  "core-aeration": { Icon: AerationIcon, image: images.aerationPlugs },
  "leaf-cleanup": { Icon: LeafIcon, image: images.leafPickupTruck },
  "snow-plowing": { Icon: SnowIcon, image: images.commercialSnowClearing },
} as const;

const featuredReviews = [
  reviews[1],
  reviews[4],
  reviews[2],
  reviews[7],
] as const;

const trustBadges = [
  images.badgeHaScreened,
  images.badgeHaToprated,
  images.badgeHaElite,
  images.badgeTtToppro,
];

const edgePillars = [
  {
    title: "Service",
    body: siteConfig.about.mottoMeaning.service,
  },
  {
    title: "A Sharp Edge",
    body: siteConfig.about.mottoMeaning.edge,
  },
  {
    title: "Clean Lines",
    body: siteConfig.about.mottoMeaning.lines,
  },
];

export default function HomePage() {
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
        provider: { "@id": `${siteConfig.siteUrl}/#business` },
        areaServed: {
          "@type": "City",
          name: siteConfig.location.city,
        },
      },
    })),
  };

  return (
    <>
      <JsonLd data={serviceSchema} />

      {/* ---------- HERO ---------- */}
      <section className="relative isolate overflow-hidden bg-slate-900">
        <Image
          src={images.heroLawn.src}
          alt={images.heroLawn.alt}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
        />
        <div className="section py-20 sm:py-28 lg:py-36">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-3 py-1 text-sm font-semibold text-white">
              {siteConfig.tagline}
            </p>
            <h1 className="mt-5 text-display-sm font-bold text-white sm:text-display-md lg:text-display-lg">
              Lawn care in {siteConfig.location.city} done with{" "}
              <span className="text-brand-300">an edge</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200">
              Mowing, brush hogging, aeration, leaf cleanup, and snow plowing for
              homes and businesses across {siteConfig.location.city} and the
              surrounding area. {siteConfig.availability}.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Request a free quote
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <a
                href={siteConfig.phone.tel}
                className="inline-flex min-h-[44px] cursor-pointer items-center justify-center rounded-lg border-2 border-white/70 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white hover:text-slate-900"
              >
                <PhoneIcon className="mr-2 h-5 w-5" />
                {siteConfig.phone.display}
              </a>
            </div>

            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-200">
              <li className="inline-flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-brand-300" />
                Open 24 hours, 7 days a week
              </li>
              <li className="inline-flex items-center gap-2">
                <HomeIcon className="h-5 w-5 text-brand-300" />
                Residential &amp; commercial
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 text-brand-300" />
                {siteConfig.serviceArea.description}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- TRUST STRIP ---------- */}
      <section className="border-b border-slate-200 bg-slate-50 py-8">
        <div className="section">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <p className="text-center text-sm font-semibold uppercase tracking-wide text-slate-600 sm:text-left">
              Screened, approved, and rated by the platforms
              <br className="hidden sm:block" /> homeowners already trust
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-5">
              {trustBadges.map((badge) => (
                <li key={badge.src}>
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    width={140}
                    height={84}
                    sizes="140px"
                    className="h-[72px] w-auto object-contain"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className="py-20 sm:py-24" id="services">
        <div className="section">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Everything your property needs, all year
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              {siteConfig.positioning} serving {siteConfig.location.city} and the
              surrounding areas since {siteConfig.sinceYear}.
            </p>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((service) => {
              const meta = serviceMeta[service.slug];
              return (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-colors hover:border-brand-600"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <Image
                        src={meta.image.src}
                        alt={meta.image.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-3">
                        <meta.Icon className="h-7 w-7 flex-shrink-0 text-brand-600" />
                        <h3 className="text-lg font-semibold text-slate-900">
                          {service.name}
                        </h3>
                      </div>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                        {service.shortDescription}
                      </p>
                      <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-700 group-hover:text-brand-800">
                        Learn more
                        <ArrowRightIcon className="ml-1.5 h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ---------- SERVICE WITH AN EDGE ---------- */}
      <section className="bg-slate-900 py-20 sm:py-24">
        <div className="section">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-300">
                Our motto
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                &ldquo;{siteConfig.motto}&rdquo;
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-300">
                {siteConfig.about.origin}
              </p>
              <Link href="/about" className="btn-primary mt-8">
                More about Brad&rsquo;s
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <ul className="space-y-6">
              {edgePillars.map((pillar) => (
                <li
                  key={pillar.title}
                  className="rounded-xl border border-slate-700 bg-slate-800 p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-600">
                      <CheckIcon className="h-5 w-5 text-white" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-white">{pillar.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                        {pillar.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- REVIEWS ---------- */}
      <section className="py-20 sm:py-24">
        <div className="section">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              What {siteConfig.location.city} neighbors say
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Real reviews from real customers across the area.
            </p>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {featuredReviews.map((review) => (
              <li
                key={review.name}
                className="flex flex-col rounded-xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex gap-0.5 text-amber-500" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5" />
                  ))}
                </div>
                <span className="sr-only">Five out of five stars</span>
                <blockquote className="mt-4 flex-1 text-slate-700">
                  <p className="leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                </blockquote>
                <p className="mt-4 text-sm font-semibold text-slate-900">
                  {review.name}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Link href="/reviews" className="btn-secondary">
              Read all reviews
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- SERVICE AREA ---------- */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <div className="section">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Serving {siteConfig.location.city} and the surrounding areas
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                We take care of homes, offices, and commercial properties
                throughout the {siteConfig.location.city} area. If you are not
                sure whether we reach your street, just call and ask.
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  ZIP codes we serve
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {siteConfig.serviceArea.zips.map((zip) => (
                    <li
                      key={zip}
                      className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700"
                    >
                      {zip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-200">
              <Image
                src={images.equipmentLineup.src}
                alt={images.equipmentLineup.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="bg-brand-600 py-16 sm:py-20">
        <div className="section text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready for a lawn you don&rsquo;t have to think about?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-50">
            Tell us what your property needs and we will get you a quote. Call
            anytime, day or night.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={siteConfig.phone.tel}
              className="inline-flex min-h-[44px] cursor-pointer items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-700 transition-colors hover:bg-brand-50"
            >
              <PhoneIcon className="mr-2 h-5 w-5" />
              {siteConfig.phone.display}
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] cursor-pointer items-center justify-center rounded-lg border-2 border-white px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Request a free quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
