import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site.config";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, PageHero } from "@/components/PageSections";
import { QuoteForm } from "@/components/QuoteForm";
import {
  PhoneIcon,
  MailIcon,
  ClockIcon,
  MapPinIcon,
  ArrowRightIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.location.city}, MI`,
  description: `Call Brad's Lawn Services at ${siteConfig.phone.display} for lawn care in ${siteConfig.location.city}, MI. Open 24 hours, seven days a week. Serving ZIP codes ${siteConfig.serviceArea.zips.join(", ")}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: `${siteConfig.siteUrl}/contact`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <PageHero
        eyebrow="Get in touch"
        title="Contact Brad's Lawn Services"
        intro={`The fastest way to reach us is the phone. Call ${siteConfig.phone.display} — our listed hours are ${siteConfig.hours.toLowerCase()}, so call whenever works for you.`}
        imageSlot="heroLawn"
      />

      <Breadcrumbs
        trail={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />

      <section className="band">
        <div className="section">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="card p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                <PhoneIcon className="h-5 w-5 text-brand-700" />
              </span>
              <h2 className="mt-5 text-lg font-bold text-ink">Call or text</h2>
              <a
                href={siteConfig.phone.tel}
                data-tel-cta
                className="mt-2 block text-xl font-bold text-brand-700 hover:text-brand-800"
              >
                {siteConfig.phone.display}
              </a>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Quickest way to get a quote. Tell us your address and what the
                property needs.
              </p>
            </div>

            <div className="card p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                <MailIcon className="h-5 w-5 text-brand-700" />
              </span>
              <h2 className="mt-5 text-lg font-bold text-ink">Email</h2>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 block break-all font-semibold text-brand-700 hover:text-brand-800"
              >
                {siteConfig.email}
              </a>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Good for details, photos of the property, or anything that is not
                urgent.
              </p>
            </div>

            <div className="card p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                <ClockIcon className="h-5 w-5 text-brand-700" />
              </span>
              <h2 className="mt-5 text-lg font-bold text-ink">Hours</h2>
              <p className="mt-2 font-semibold text-ink">
                {siteConfig.hours}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {siteConfig.availability}.
              </p>
            </div>
          </div>

          {/* ---------- SERVICE AREA + MAILING ---------- */}
          <div className="mt-12 grid gap-10 rounded-2xl border border-line bg-surface-tint p-8 lg:grid-cols-2">
            <div>
              <h2 className="flex items-center gap-2 text-lg font-bold text-ink">
                <MapPinIcon className="h-5 w-5 text-brand-700" />
                Service area
              </h2>
              <p className="mt-3 leading-relaxed text-ink-muted">
                {siteConfig.serviceArea.description}, covering ZIP codes{" "}
                {siteConfig.serviceArea.zips.join(", ")}. If you are not sure
                whether we reach your street, call and ask.
              </p>
              <Link
                href="/areas-we-serve"
                className="mt-4 inline-flex items-center font-semibold text-brand-700 hover:text-brand-800"
              >
                See the full service area
                <ArrowRightIcon className="ml-1.5 h-4 w-4" />
              </Link>
            </div>

            <div>
              <h2 className="text-lg font-bold text-ink">Mailing address</h2>
              <p className="mt-3 leading-relaxed text-ink-muted">
                {siteConfig.location.poBox}
                <br />
                {siteConfig.location.city}, {siteConfig.location.state}{" "}
                {siteConfig.location.zip}
              </p>
              <p className="mt-3 text-sm text-ink-muted">
                We are a service-area business — we come to your property rather
                than working from a storefront.
              </p>
            </div>
          </div>

          {/* ---------- QUOTE FORM ---------- */}
          <div className="mt-12 grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <QuoteForm />
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-brand-600 p-7">
                <h2 className="text-xl font-bold text-white">
                  Rather just call?
                </h2>
                <p className="mt-3 text-brand-50">
                  The phone is the fastest way to reach us, and someone is there{" "}
                  {siteConfig.availability.toLowerCase()}.
                </p>
                <a
                  href={siteConfig.phone.tel}
                  data-tel-cta
                  className="btn mt-6 w-full bg-white text-brand-700 hover:-translate-y-px hover:bg-brand-50"
                >
                  <PhoneIcon className="mr-2 h-5 w-5" />
                  {siteConfig.phone.display}
                </a>
                <Link
                  href="/request-a-quote"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-white hover:text-brand-50"
                >
                  See what we&rsquo;ll ask you
                  <ArrowRightIcon className="ml-1.5 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
