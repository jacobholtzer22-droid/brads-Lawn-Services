import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site.config";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, PageHero } from "@/components/PageSections";
import {
  PhoneIcon,
  MailIcon,
  ClockIcon,
  MapPinIcon,
  ArrowRightIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: `Contact Us | Lawn Care in ${siteConfig.location.city}, MI`,
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

      <section className="py-16 sm:py-20">
        <div className="section">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50">
                <PhoneIcon className="h-5 w-5 text-brand-700" />
              </span>
              <h2 className="mt-5 text-lg font-bold text-slate-900">Call or text</h2>
              <a
                href={siteConfig.phone.tel}
                data-tel-cta
                className="mt-2 block text-xl font-bold text-brand-700 hover:text-brand-800"
              >
                {siteConfig.phone.display}
              </a>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Quickest way to get a quote. Tell us your address and what the
                property needs.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50">
                <MailIcon className="h-5 w-5 text-brand-700" />
              </span>
              <h2 className="mt-5 text-lg font-bold text-slate-900">Email</h2>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 block break-all font-semibold text-brand-700 hover:text-brand-800"
              >
                {siteConfig.email}
              </a>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Good for details, photos of the property, or anything that is not
                urgent.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50">
                <ClockIcon className="h-5 w-5 text-brand-700" />
              </span>
              <h2 className="mt-5 text-lg font-bold text-slate-900">Hours</h2>
              <p className="mt-2 font-semibold text-slate-900">
                {siteConfig.hours}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {siteConfig.availability}.
              </p>
            </div>
          </div>

          {/* ---------- SERVICE AREA + MAILING ---------- */}
          <div className="mt-12 grid gap-10 rounded-xl border border-slate-200 bg-slate-50 p-8 lg:grid-cols-2">
            <div>
              <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                <MapPinIcon className="h-5 w-5 text-brand-700" />
                Service area
              </h2>
              <p className="mt-3 leading-relaxed text-slate-700">
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
              <h2 className="text-lg font-bold text-slate-900">Mailing address</h2>
              <p className="mt-3 leading-relaxed text-slate-700">
                {siteConfig.location.poBox}
                <br />
                {siteConfig.location.city}, {siteConfig.location.state}{" "}
                {siteConfig.location.zip}
              </p>
              <p className="mt-3 text-sm text-slate-500">
                We are a service-area business — we come to your property rather
                than working from a storefront.
              </p>
            </div>
          </div>

          {/* ---------- QUOTE CTA ---------- */}
          <div className="mt-12 rounded-xl bg-brand-600 p-8 text-center sm:p-10">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Rather have us come to you?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-brand-50">
              Send us the details on your property and we will get back to you
              with a quote.
            </p>
            <Link
              href="/request-a-quote"
              className="mt-7 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-700 transition-colors hover:bg-brand-50"
            >
              Request a free quote
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
