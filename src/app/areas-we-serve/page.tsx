import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site.config";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs, PageHero, CTASection } from "@/components/PageSections";
import { MapPinIcon, PhoneIcon, ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: `Areas We Serve in ${siteConfig.location.city}, MI`,
  description: `Brad's Lawn Services covers ${siteConfig.location.city}, MI and surrounding areas, including ZIP codes ${siteConfig.serviceArea.zips.join(", ")}. Not sure we reach you? Just call.`,
  alternates: { canonical: "/areas-we-serve" },
};

export default function AreasWeServePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Areas We Serve",
        item: `${siteConfig.siteUrl}/areas-we-serve`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <PageHero
        eyebrow="Service area"
        title={`Lawn care across ${siteConfig.location.city}, MI`}
        intro={`Brad's Lawn Services works throughout ${siteConfig.location.city}, MI and the surrounding areas. We cover ZIP codes ${siteConfig.serviceArea.zips.join(", ")}, on both residential and commercial properties.`}
        imageSlot="lawnTudorSpring"
      />

      <Breadcrumbs
        trail={[
          { name: "Home", href: "/" },
          { name: "Areas We Serve", href: "/areas-we-serve" },
        ]}
      />

      {/* ---------- CRAWLABLE SERVICE AREA TEXT ---------- */}
      <section className="band">
        <div className="section">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              <h2 className="display-2 text-ink">
                Where we work
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-muted">
                Our home base is {siteConfig.location.city}, Michigan, and that is
                where the bulk of our work is. We also serve the surrounding
                communities around {siteConfig.location.city} for mowing, brush
                hogging, core aeration, leaf cleanup, and commercial snow and ice
                management.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                If your property sits just outside the ZIP codes below, that does
                not automatically mean no. Give us a call with your address and we
                will tell you straight whether we can get to you.
              </p>

              <h3 className="mt-10 text-lg font-semibold text-ink">
                ZIP codes we serve
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {siteConfig.serviceArea.zips.map((zip) => (
                  <li
                    key={zip}
                    className="flex items-center gap-3 rounded-xl border border-line bg-surface-card px-4 py-3"
                  >
                    <MapPinIcon className="h-5 w-5 flex-shrink-0 text-brand-600" />
                    <span className="font-medium text-ink">{zip}</span>
                    <span className="text-sm text-ink-muted">
                      {siteConfig.location.city}, {siteConfig.location.state}
                    </span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-10 text-lg font-semibold text-ink">
                What we do in the area
              </h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {siteConfig.services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/${s.slug}`}
                      className="inline-flex items-center font-medium text-brand-700 hover:text-brand-800 hover:underline"
                    >
                      {s.name} in {siteConfig.location.city}
                      <ArrowRightIcon className="ml-1.5 h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="lg:col-span-2">
              <div className="rounded-2xl border border-line bg-surface-tint p-6">
                <h2 className="text-lg font-bold text-ink">
                  Not sure if we reach you?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  Call with your address. Our listed hours are{" "}
                  {siteConfig.hours.toLowerCase()}, so reach out whenever works.
                </p>
                <a
                  href={siteConfig.phone.tel}
                  data-tel-cta
                  className="btn-primary mt-5 w-full"
                >
                  <PhoneIcon className="mr-2 h-5 w-5" />
                  {siteConfig.phone.display}
                </a>
                <Link href="/request-a-quote" className="btn-secondary mt-3 w-full">
                  Request a free quote
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ---------- MAP (secondary content) ---------- */}
      <section className="band border-t border-line bg-surface-tint">
        <div className="section">
          <Reveal>
            <h2 className="text-2xl font-bold text-ink">
              {siteConfig.location.city} on the map
            </h2>
            <p className="mt-3 text-ink-muted">
              A rough view of our home base. The text above is the authoritative
              description of our service area.
            </p>
          </Reveal>
          <div className="mt-7 overflow-hidden rounded-2xl border border-line">
            <iframe
              title={`Map of ${siteConfig.location.city}, ${siteConfig.location.stateFull}`}
              src="https://www.google.com/maps?q=Battle+Creek,+MI&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[380px] w-full border-0"
            />
          </div>
        </div>
      </section>

      <CTASection heading={`Serving ${siteConfig.location.city} since ${siteConfig.sinceYear}`} />
    </>
  );
}
