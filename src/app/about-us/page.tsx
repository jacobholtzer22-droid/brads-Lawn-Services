import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site.config";
import { images } from "../../../content/images";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import {
  Breadcrumbs,
  PageHero,
  CTASection,
  TrustBadges,
} from "@/components/PageSections";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: `About Our ${siteConfig.location.city} Lawn Care Team`,
  description: `Brad's Lawn Services has been a family business in ${siteConfig.location.city}, MI since ${siteConfig.sinceYear}. Learn what "Service With An Edge" means and how we care for lawns here.`,
  alternates: { canonical: "/about-us" },
};

const pillars = [
  {
    title: "Service",
    body: siteConfig.about.mottoMeaning.service,
  },
  {
    title: "A sharp edge on the equipment",
    body: siteConfig.about.mottoMeaning.edge,
  },
  {
    title: "A sharp edge on the lawn",
    body: siteConfig.about.mottoMeaning.lines,
  },
];

export default function AboutPage() {
  const yearsServing = new Date().getFullYear() - siteConfig.sinceYear;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: `${siteConfig.siteUrl}/about-us`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <PageHero
        eyebrow={siteConfig.tagline}
        title="About Brad's Lawn Services"
        intro={`We are a family business serving ${siteConfig.location.city}, MI and the surrounding areas since ${siteConfig.sinceYear}. Today we are a ${siteConfig.positioning.toLowerCase()} working on homes, offices, and commercial properties.`}
        imageSlot="equipLeafVacTrailer"
      />

      <Breadcrumbs
        trail={[
          { name: "Home", href: "/" },
          { name: "About Us", href: "/about-us" },
        ]}
      />

      {/* ---------- OUR BEGINNING ---------- */}
      <section className="band">
        <div className="section">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <h2 className="display-2 text-ink">
                Our beginning
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-muted">
                {siteConfig.about.origin}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                That has meant {yearsServing} years of showing up in {siteConfig.location.city}
                {" "}and the surrounding areas, on lawns of every size and shape.
                Every property is different, so we build the work around what
                yours actually needs rather than a one-size package.
              </p>
            </Reveal>

            <Reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-50">
              <Image
                src={images.heroLawn.src}
                alt={images.heroLawn.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- THE MOTTO ---------- */}
      <section className="band border-y border-line bg-surface-tint">
        <div className="section">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
              Our motto
            </p>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              What &ldquo;{siteConfig.motto}&rdquo; actually means
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              It is not just a tagline. It breaks down into three things we hold
              ourselves to on every property.
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-6 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 70}>
                <div className="card h-full p-7">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600">
                    <CheckIcon className="h-5 w-5 text-white" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-ink-muted">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- WHO WE WORK FOR ---------- */}
      <section className="band">
        <div className="section">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-50 lg:order-2">
              <Image
                src={images.brushHogging2.src}
                alt={images.brushHogging2.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </Reveal>

            <Reveal className="lg:order-1">
              <h2 className="display-2 text-ink">
                Homes and businesses alike
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-muted">
                We serve both residential and commercial properties. That ranges
                from a weekly cut on a single-family lawn to commercial grounds
                maintenance, brush hogging on overgrown lots, and winter snow and
                ice work for retail, light industrial, and multi-family sites.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                Our listed hours are {siteConfig.hours.toLowerCase()}, so you can
                reach us when it works for you.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- BADGES ---------- */}
      <section className="band-tight border-t border-line">
        <div className="section text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
            Screened, approved, and rated
          </h2>
          <div className="mt-7 flex justify-center">
            <TrustBadges />
          </div>
        </div>
      </section>

      <CTASection heading="Want us to take a look at your property?" />
    </>
  );
}
