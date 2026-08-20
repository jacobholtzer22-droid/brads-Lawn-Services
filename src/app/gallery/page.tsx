import type { Metadata } from "next";
import { siteConfig } from "@/lib/site.config";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, PageHero, CTASection } from "@/components/PageSections";
import { GalleryGrid } from "./GalleryGrid";
import { BeforeAfter } from "@/components/BeforeAfter";

export const metadata: Metadata = {
  title: `Photo Gallery | ${siteConfig.location.city}, MI`,
  description: `Photos of real Brad's Lawn Services work around ${siteConfig.location.city}, MI — mowing, brush hogging, core aeration, leaf cleanup, snow plowing, and our equipment.`,
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Gallery",
        item: `${siteConfig.siteUrl}/gallery`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <PageHero
        eyebrow="Our work"
        title="Photo gallery"
        intro={`Real jobs and real equipment from around ${siteConfig.location.city}, MI. Filter by the kind of work you are looking for.`}
        imageSlot="leafTruckMailbox"
      />

      <Breadcrumbs
        trail={[
          { name: "Home", href: "/" },
          { name: "Gallery", href: "/gallery" },
        ]}
      />

      <BeforeAfter
        limit={6}
        heading="Before and after"
        intro="Every pair below is the same property photographed before we started and after we finished."
      />

      <section className="band">
        <div className="section">
          <h2 className="display-2 text-ink">Every job, every season</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Filter by the kind of work you are looking for. Tap any photo to
            open it full size.
          </p>
          <div className="mt-8">
            <GalleryGrid />
          </div>
        </div>
      </section>

      <CTASection heading="Want your property to look like this?" />
    </>
  );
}
