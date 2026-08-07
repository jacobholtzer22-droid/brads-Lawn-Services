import type { Metadata } from "next";
import { siteConfig } from "@/lib/site.config";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, PageHero } from "@/components/PageSections";
import { PhoneIcon, ClockIcon, MapPinIcon, CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: `Request a Free Quote | ${siteConfig.location.city}`,
  description: `Get a free lawn care quote from Brad's Lawn Services in ${siteConfig.location.city}, MI. Mowing, brush hogging, aeration, leaf cleanup, snow. Call ${siteConfig.phone.display}.`,
  alternates: { canonical: "/request-a-quote" },
};

export default function RequestAQuotePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Request a Quote",
        item: `${siteConfig.siteUrl}/request-a-quote`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <PageHero
        eyebrow="Free quote"
        title="Request a free quote"
        intro={`Tell us about your property and what you need done, and we will get back to you with a price. Prefer to talk it through? Call ${siteConfig.phone.display} — we answer ${siteConfig.availability.toLowerCase()}.`}
        imageSlot="heroLawn"
      />

      <Breadcrumbs
        trail={[
          { name: "Home", href: "/" },
          { name: "Request a Quote", href: "/request-a-quote" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <div className="section">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              {/* QuoteForm is wired up in Phase 4 (lead capture + tracking). */}
              <div
                id="quote-form"
                className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center"
              >
                <h2 className="text-lg font-semibold text-slate-900">
                  Quote form
                </h2>
                <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
                  The quote form is wired up in the lead-capture phase. Until
                  then, call or text{" "}
                  <a
                    href={siteConfig.phone.tel}
                    data-tel-cta
                    className="font-semibold text-brand-700 underline"
                  >
                    {siteConfig.phone.display}
                  </a>
                  .
                </p>
              </div>

              <h2 className="mt-14 text-2xl font-bold text-slate-900">
                What we will ask you
              </h2>
              <ul className="mt-6 space-y-3">
                {[
                  "The property address, so we know the size and what we are working with",
                  "Which services you are after — mowing, brush hogging, aeration, leaf cleanup, or snow",
                  "Whether you want regular service or a one-time visit",
                  "The best number to reach you at",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-50">
                      <CheckIcon className="h-4 w-4 text-brand-700" />
                    </span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="lg:col-span-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-lg font-bold text-slate-900">
                  Rather just call?
                </h2>
                <a
                  href={siteConfig.phone.tel}
                  data-tel-cta
                  className="btn-primary mt-5 w-full"
                >
                  <PhoneIcon className="mr-2 h-5 w-5" />
                  {siteConfig.phone.display}
                </a>

                <ul className="mt-6 space-y-4 border-t border-slate-200 pt-6 text-sm">
                  <li className="flex items-start gap-3">
                    <ClockIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-700" />
                    <span className="text-slate-700">{siteConfig.hours}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPinIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-700" />
                    <span className="text-slate-700">
                      {siteConfig.serviceArea.description}
                      <br />
                      <span className="text-slate-500">
                        ZIP codes {siteConfig.serviceArea.zips.join(", ")}
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
