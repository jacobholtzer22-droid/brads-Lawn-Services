import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site.config";
import { images } from "../../../content/images";
import { services, getService } from "../../../content/services";
import { JsonLd } from "@/components/JsonLd";
import { FAQ } from "@/components/FAQ";
import { Reveal } from "@/components/Reveal";
import {
  Breadcrumbs,
  PageHero,
  CTASection,
  RelatedServices,
} from "@/components/PageSections";
import { CheckIcon, PhoneIcon } from "@/components/Icons";

/** Only the five real service slugs are built. Anything else 404s. */
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

type Props = { params: Promise<{ service: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    // Rendered length is checked in Phase 5. Template adds " | Brad's Lawn Services".
    title: `${service.name} in ${siteConfig.location.city}, MI`,
    description: service.intro.slice(0, 158),
    alternates: { canonical: `/${service.slug}` },
    openGraph: {
      title: `${service.name} in ${siteConfig.location.city}, MI`,
      description: service.intro.slice(0, 158),
      url: `/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const heroSlot = service.imageSlots[0] as keyof typeof images;
  const bodyImages = service.imageSlots
    .slice(1)
    .map((s) => images[s as keyof typeof images])
    .filter(Boolean);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.intro,
    url: `${siteConfig.siteUrl}/${service.slug}`,
    provider: { "@id": `${siteConfig.siteUrl}/#business` },
    areaServed: [
      {
        "@type": "City",
        name: siteConfig.location.city,
        containedInPlace: {
          "@type": "State",
          name: siteConfig.location.stateFull,
        },
      },
      ...siteConfig.serviceArea.zips.map((zip) => ({
        "@type": "PostalCodeRangeSpecification" as const,
        postalCodeBegin: zip,
        postalCodeEnd: zip,
      })),
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: service.name,
        item: `${siteConfig.siteUrl}/${service.slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <PageHero
        eyebrow={siteConfig.motto}
        title={service.h1}
        intro={service.intro}
        imageSlot={heroSlot}
      />

      <Breadcrumbs
        trail={[
          { name: "Home", href: "/" },
          { name: service.name, href: `/${service.slug}` },
        ]}
      />

      {/* ---------- INTRO + WHAT'S INCLUDED ---------- */}
      <section className="py-16 sm:py-20">
        <div className="section">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              {service.intro2 && (
                <p className="text-lg leading-relaxed text-slate-700">
                  {service.intro2}
                </p>
              )}

              <h2 className="mt-10 text-2xl font-bold text-slate-900 sm:text-3xl">
                {service.includedHeading}
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-50">
                      <CheckIcon className="h-4 w-4 text-brand-700" />
                    </span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar CTA */}
            <aside className="lg:col-span-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-lg font-bold text-slate-900">
                  Get a quote for {service.name.toLowerCase()}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Tell us about your property and we will give you a real price.
                  We answer the phone {siteConfig.availability.toLowerCase()}.
                </p>
                <a
                  href={siteConfig.phone.tel}
                  data-tel-cta
                  className="btn-primary mt-5 w-full"
                >
                  <PhoneIcon className="mr-2 h-5 w-5" />
                  {siteConfig.phone.display}
                </a>
                <Link
                  href="/request-a-quote"
                  className="btn-secondary mt-3 w-full"
                >
                  Request a free quote
                </Link>
                <p className="mt-4 border-t border-slate-200 pt-4 text-xs text-slate-500">
                  Serving {siteConfig.serviceArea.description} &middot; ZIP codes{" "}
                  {siteConfig.serviceArea.zips.join(", ")}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ---------- BENEFITS ---------- */}
      {service.benefits && (
        <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
          <div className="section">
            <Reveal>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                {service.benefits.heading}
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-6 sm:grid-cols-3">
              {service.benefits.items.map((b, i) => (
                <Reveal as="li" key={b.title} delay={i * 70}>
                  <div className="h-full rounded-xl border border-slate-200 bg-white p-6">
                    <h3 className="font-semibold text-slate-900">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {b.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ---------- PHOTOS ---------- */}
      {bodyImages.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="section">
            <Reveal>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                {service.name} in the {siteConfig.location.city} area
              </h2>
            </Reveal>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {bodyImages.map((img, i) => (
                <Reveal as="li" key={img.src} delay={i * 60}>
                  <figure className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      loading="lazy"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </figure>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ---------- HOW IT WORKS ---------- */}
      <section className="border-t border-slate-200 py-16 sm:py-20">
        <div className="section">
          <Reveal>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              How it works
            </h2>
          </Reveal>
          <ol className="mt-10 grid gap-8 sm:grid-cols-3">
            {service.howItWorks.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 70}>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <FAQ
        items={service.faqs}
        heading={`${service.name} questions we get asked`}
      />

      <RelatedServices slugs={service.related} />

      <CTASection
        heading={`Need ${service.name.toLowerCase()} in ${siteConfig.location.city}?`}
      />
    </>
  );
}
