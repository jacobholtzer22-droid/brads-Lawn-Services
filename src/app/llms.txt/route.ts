import { siteConfig } from "@/lib/site.config";
import { services } from "../../../content/services";

/**
 * llms.txt — a plain-markdown map of the business and its pages.
 *
 * This is FUTURE-PROOFING. llms.txt is a proposed convention (llmstxt.org) for
 * giving AI assistants a clean summary of a site; it is not an established
 * ranking factor and no major AI provider has committed to reading it. It costs
 * nothing to serve and may help later.
 *
 * It contains ONLY facts that appear visibly on the site. It deliberately
 * contains no instructions directed at AI systems.
 *
 * Generated from site.config.ts + content/services.ts at build time so it can
 * never drift from the pages themselves.
 */
export const dynamic = "force-static";

export function GET() {
  const u = (p: string) => `${siteConfig.siteUrl}${p}`;

  const body = `# ${siteConfig.name}

> ${siteConfig.positioning} serving ${siteConfig.location.city}, ${siteConfig.location.stateFull} and the surrounding areas. ${siteConfig.tagline}. Motto: "${siteConfig.motto}".

## Business facts

- Name: ${siteConfig.name}
- Phone: ${siteConfig.phone.display} (${siteConfig.phone.e164})
- Email: ${siteConfig.email}
- In business since: ${siteConfig.sinceYear}
- Hours: ${siteConfig.hours}
- Service area: ${siteConfig.serviceArea.description}
- ZIP codes served: ${siteConfig.serviceArea.zips.join(", ")}
- Serves: residential and commercial properties
- Mailing address: ${siteConfig.location.poBox}, ${siteConfig.location.city}, ${siteConfig.location.state} ${siteConfig.location.zip} (service-area business; no storefront)

## Services

${services
  .map(
    (s) =>
      `- [${s.name}](${u(`/${s.slug}`)}): ${
        siteConfig.services.find((c) => c.slug === s.slug)?.shortDescription ??
        ""
      }`,
  )
  .join("\n")}

## Pages

- [Home](${u("/")}): overview of all services, reviews, and service area.
- [About Us](${u("/about-us")}): company background and what "${siteConfig.motto}" means.
- [Reviews](${u("/reviews")}): customer reviews, shown verbatim.
- [Areas We Serve](${u("/areas-we-serve")}): service area detail and ZIP codes.
- [Gallery](${u("/gallery")}): photos of completed work and equipment.
- [Employment](${u("/employment")}): hiring information for crew members.
- [Contact](${u("/contact")}): phone, email, hours, and service area.
- [Request a Quote](${u("/request-a-quote")}): quote request.

## Notes

- Pricing is not published. Quotes depend on property size, condition, chosen services, and frequency.
- The only city claimed as a service area is ${siteConfig.location.city}, ${siteConfig.location.state}, plus unnamed surrounding areas.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
