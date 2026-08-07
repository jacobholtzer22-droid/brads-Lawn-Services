import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site.config";
import { images } from "../../../content/images";
import { reviews } from "../../../content/reviews";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs, PageHero, CTASection } from "@/components/PageSections";
import { StarIcon, ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: `Customer Reviews | ${siteConfig.location.city}, MI Lawn Care`,
  description: `Read what ${siteConfig.location.city}, MI customers say about Brad's Lawn Services — mowing, brush hogging, aeration, leaf cleanup, and snow plowing. Leave your own Google review.`,
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  /*
   * NOTE: No Review or AggregateRating JSON-LD on this page. That is a
   * deliberate policy decision from the project brief. The reviews below are
   * real and displayed verbatim, but self-serving rating markup is not added.
   */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Reviews",
        item: `${siteConfig.siteUrl}/reviews`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <PageHero
        eyebrow="In their words"
        title="Customer reviews"
        intro={`What homeowners, landlords, and property managers around ${siteConfig.location.city} have said about working with us.`}
        imageSlot="heroLawn"
      />

      <Breadcrumbs
        trail={[
          { name: "Home", href: "/" },
          { name: "Reviews", href: "/reviews" },
        ]}
      />

      {/* ---------- LEAVE A REVIEW ---------- */}
      <section className="border-b border-slate-200 bg-slate-50 py-10">
        <div className="section">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Worked with us? Tell people how it went.
              </h2>
              <p className="mt-1.5 text-slate-600">
                A review on Google helps your neighbors find us.
              </p>
            </div>
            <a
              href={siteConfig.social.googleReview}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-shrink-0"
            >
              Review us on Google
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ---------- ALL REVIEWS ---------- */}
      <section className="py-16 sm:py-20">
        <div className="section">
          <h2 className="sr-only">All customer reviews</h2>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, i) => (
              <Reveal as="li" key={review.name} delay={(i % 3) * 60}>
                <figure className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6">
                  <div className="flex gap-0.5 text-amber-500" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <StarIcon key={s} className="h-5 w-5" />
                    ))}
                  </div>
                  <span className="sr-only">Five out of five stars</span>
                  <blockquote className="mt-4 flex-1">
                    <p className="leading-relaxed text-slate-700">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </blockquote>
                  <figcaption className="mt-5 border-t border-slate-100 pt-4 text-sm font-semibold text-slate-900">
                    {review.name}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- GOOGLE BADGE ---------- */}
      <section className="border-t border-slate-200 py-14">
        <div className="section flex flex-col items-center gap-6 text-center">
          <a
            href={siteConfig.social.googleReview}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            <Image
              src={images.badgeGoogleReview.src}
              alt={images.badgeGoogleReview.alt}
              width={280}
              height={110}
              sizes="280px"
              className="h-auto w-[240px] object-contain"
            />
          </a>
          <p className="max-w-xl text-slate-600">
            You can also see our profile and ratings on{" "}
            <a
              href={siteConfig.social.homeAdvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-700 underline hover:text-brand-800"
            >
              HomeAdvisor
            </a>
            .
          </p>
        </div>
      </section>

      <CTASection heading="Ready to see the difference for yourself?" />
    </>
  );
}
