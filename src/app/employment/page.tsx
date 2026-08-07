import type { Metadata } from "next";
import { siteConfig } from "@/lib/site.config";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, PageHero } from "@/components/PageSections";
import { CheckIcon, PhoneIcon, MailIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: `Employment | Lawn Care Jobs in ${siteConfig.location.city}, MI`,
  description: `Brad's Lawn Services is always looking for skilled, qualified crew members in ${siteConfig.location.city}, MI. See what we look for and call ${siteConfig.phone.display} to apply.`,
  alternates: { canonical: "/employment" },
};

/** Requirements below come verbatim from the old /employment form. */
const requirements = [
  "A valid driver's license",
  "Reliable transportation",
  "A commercial driver medical examiner's certificate",
];

export default function EmploymentPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Employment",
        item: `${siteConfig.siteUrl}/employment`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <PageHero
        eyebrow="Join the crew"
        title="Work at Brad's Lawn Services"
        intro="We are always looking for skilled and qualified crew members around Battle Creek, MI. If you take pride in doing the job right, we would like to hear from you."
        imageSlot="equipmentLineup"
      />

      <Breadcrumbs
        trail={[
          { name: "Home", href: "/" },
          { name: "Employment", href: "/employment" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <div className="section">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                What we look for
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-700">
                We are a family business that has been working in Battle Creek
                since {siteConfig.sinceYear}. The work is outdoors and hands-on:
                mowing and trimming through the season, brush hogging and
                cleanups, and snow and ice work through the winter.
              </p>

              <h3 className="mt-10 text-lg font-semibold text-slate-900">
                Requirements
              </h3>
              <ul className="mt-4 space-y-3">
                {requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-50">
                      <CheckIcon className="h-4 w-4 text-brand-700" />
                    </span>
                    <span className="text-slate-700">{r}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-10 text-lg font-semibold text-slate-900">
                How to apply
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">
                Call or text us at{" "}
                <a
                  href={siteConfig.phone.tel}
                  data-tel-cta
                  className="font-semibold text-brand-700 underline hover:text-brand-800"
                >
                  {siteConfig.phone.display}
                </a>
                , or email{" "}
                <a
                  href={`mailto:${siteConfig.email}?subject=Employment%20inquiry`}
                  className="font-semibold text-brand-700 underline hover:text-brand-800"
                >
                  {siteConfig.email}
                </a>
                . Tell us a bit about your experience and we will go from there.
              </p>
            </div>

            <aside className="lg:col-span-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-lg font-bold text-slate-900">
                  Get in touch
                </h2>
                <a
                  href={siteConfig.phone.tel}
                  data-tel-cta
                  className="btn-primary mt-5 w-full"
                >
                  <PhoneIcon className="mr-2 h-5 w-5" />
                  {siteConfig.phone.display}
                </a>
                <a
                  href={`mailto:${siteConfig.email}?subject=Employment%20inquiry`}
                  className="btn-secondary mt-3 w-full"
                >
                  <MailIcon className="mr-2 h-5 w-5" />
                  Email us
                </a>
                <p className="mt-4 border-t border-slate-200 pt-4 text-xs text-slate-500">
                  {siteConfig.hours}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
