# Old Site Baseline — bradslawnservices.com

Crawled 2026-08-07. Host: Duda (irp.cdn-website.com). All pages served from www.bradslawnservices.com.

## Critical finding

The old site uses **one identical title tag on almost every page**: "Weekly Lawn Maintenance, Local Landscaper | Battle Creek, MI". Only four pages have unique titles. No page has a meta description. JSON-LD exists (WebSite + LocalBusiness) but is minimal — no Service, FAQ, or BreadcrumbList schemas. Zero alt text on images (all empty strings). Every page recycles the same footer/sidebar badge block.

## Per-page baseline

| Page | URL slug | Title tag (verbatim) | Meta description | H1 (verbatim) | Content summary |
|---|---|---|---|---|---|
| Home | `/` | Weekly Lawn Maintenance, Local Landscaper \| Battle Creek, MI | _(none)_ | Forget the Hassle of Yard Work | Hero image, service links, badge strip, phone CTA |
| Lawn Mowing | `/lawn-mowing` | Lawn Mowing Service, Lawn Maintenance \| Battle Creek, MI | _(none)_ | Lawn Mowing | Service description, list of services offered (mowing, edging, weed eating, aerating, seeding, hedge trimming, walkway blowing, overgrowth clearing, seasonal gutter cleaning), photos |
| Brush Hogging | `/brush-hogging` | Brush Hogging Services \| Battle Creek, MI | _(none)_ | Brush Hogging | Service description, what-we-do bullet list (equipment, cutting, debris cleanup, stump grinding available), 3 photos |
| Core Aeration | `/core-aeration` | Core Aeration Service \| Battle Creek, MI | _(none)_ | Give your Battle Creek, MI lawn the TLC it needs with core aeration | Technical description of aeration process (¾" cores, 2-3" deep), benefit list (healthier grass, less weeds, reduced runoff, less compaction, drought tolerance), 3 photos |
| Leaf Cleanup | `/leaf-cleanup` | Leaf & Yard Cleanup \| Battle Creek, MI | _(none)_ | Leaf Cleanup | Service types: spring cleanup, fall cleanup (leaf removal + curbside pickup), storm cleanup. Mentions professional-grade leaf blowers and vacuums |
| Snow Plowing | `/snow-plowing` | Snow Plowing & Snow Removal Service \| Battle Creek, MI | _(none)_ | Snow Plowing | Commercial snow removal and salting. "Combined 30 years experience in snow and ice management industry." Sidewalk/entrance clearing, lot/drive plowing and salting. Serves commercial, light industrial, retail, multi-family, private roads, parking areas. 2 photos |
| About Us | `/about-us` | Weekly Lawn Maintenance, Local Landscaper \| Battle Creek, MI | _(none)_ | About Us | "Service With An Edge" motto explanation, "Our Beginning" section. Motto meaning: service commitment + sharp equipment/blades + sharp edging lines |
| Reviews | `/reviews` | Weekly Lawn Maintenance, Local Landscaper \| Battle Creek, MI | _(none)_ | Reviews | 16 five-star reviews with names. Google review link button |
| Areas We Serve | `/areas-we-serve` | Weekly Lawn Maintenance, Local Landscaper \| Battle Creek, MI | _(none)_ | Areas We Serve | Zip codes: 49014, 49015, 49017, 49037. Minimal text content beyond the zip list and badges |
| Resources | `/resources` | Weekly Lawn Maintenance, Local Landscaper \| Battle Creek, MI | _(none)_ | Resources | Single blog post: "Spring is coming, is your lawn ready?" dated April 1, 2020. No other content |
| COVID-19 | `/covid-19` | Weekly Lawn Maintenance, Local Landscaper \| Battle Creek, MI | _(none)_ | COVID-19 | Pandemic safety statement from 2020. Mentions sanitizer in trucks, electronic transactions for social distancing |
| Employment | `/employment` | Weekly Lawn Maintenance, Local Landscaper \| Battle Creek, MI | _(none)_ | We are Always Looking for Skilled and Qualified Crew Members at Brad's Lawn Services | Employment application form (extensive: driver's license, work eligibility, criminal history, education, military, employment history, references, skills). Requires valid driver's license, reliable transportation, commercial driver medical examiner's certificate |
| Gallery | `/gallery` | Weekly Lawn Maintenance, Local Landscaper \| Battle Creek, MI | _(none)_ | Gallery | Hub page linking to sub-gallery categories: Lawn Care and Maintenance, Landscaping, Core Aeration, Leaf Cleanup, Snow Service, Equipment |
| Landscaping Gallery | `/landscaping-gallery` | Weekly Lawn Maintenance, Local Landscaper \| Battle Creek, MI | _(none)_ | Landscaping Gallery | Photo gallery (images appear to be lazily loaded, not captured in initial HTML) |
| Core Aeration Gallery | `/core-aeration-gallery` | Weekly Lawn Maintenance, Local Landscaper \| Battle Creek, MI | _(none)_ | Core Aeration Gallery | Photo gallery (same lazy-load pattern) |
| Leaf Cleanup Gallery | `/leaf-cleanup-gallery` | Weekly Lawn Maintenance, Local Landscaper \| Battle Creek, MI | _(none)_ | Leaf Cleanup Gallery | Photo gallery (same lazy-load pattern) |
| Snow Service Gallery | `/snow-service-gallery` | Weekly Lawn Maintenance, Local Landscaper \| Battle Creek, MI | _(none)_ | Snow Service Gallery | Photo gallery (same lazy-load pattern) |
| Our Equipment | `/our-equipment` | Weekly Lawn Maintenance, Local Landscaper \| Battle Creek, MI | _(none)_ | Our Equipment | Equipment photos gallery (same lazy-load pattern) |
| Lawn Care Gallery | `/lawn-care-and-maintenance-gallery` | Weekly Lawn Maintenance, Local Landscaper \| Battle Creek, MI | _(none)_ | _(assumed matching pattern)_ | Photo gallery (same lazy-load pattern) |
| Contact | `/contact` | Find a Local Landscaper in Battle Creek, MI | _(none)_ | Find Your Local Lawn Maintenance Professional in Battle Creek, MI | Contact form (first name, last name, email, phone, message). Displays P.O. Box 1395, Battle Creek, MI 49016 |
| Request A Quote | `/request-a-quote` | Weekly Lawn Maintenance, Local Landscaper \| Battle Creek, MI | _(none)_ | Request A Quote | Detailed quote form: name, date, email, phone, address, billing address, "how did you hear about us", previous provider, own/rent, lot details (corner lot, sqft, gate, sprinklers, cable, sidewalk, dog, invisible fence), service checkboxes (20 services listed), additional info |

## Existing structured data (JSON-LD)

Two blocks found on every page:

1. **WebSite**: `{ "@type": "WebSite", "name": "Brad's Lawn Services", "url": "https://www.bradslawnservices.com/" }`
2. **LocalBusiness**: name, P.O. Box address (1395, Battle Creek, MI 49016), geo (42.32003, -85.18763), phone, email `callbrad269@gmail.com`, logo, sameAs [Facebook], 5 images, 24/7 opening hours

No Service, FAQ, BreadcrumbList, or any other schema types.

## Third-party scripts found

| Script | Source | Details |
|---|---|---|
| Google Analytics 4 | gtag.js | Property ID: `G-4TFHPKLBS6` |
| Duda livesite.js | Platform | `WI-UT4OT9JSJJAIK1520ISP` |
| Duda runtime | Platform | `d-js-runtime-flex-package.min.js` |
| Snowplow analytics | Duda-bundled | Duda's own analytics tracker |
| Townsquare Interactive pixel | Tracking | 1x1 pixel: `engage.townsquareinteractive.com/tr_pics/i?p=2445640` |

**NOT found:** No Google Ads (AW-) conversion tags. No Meta/Facebook pixel. No other marketing pixels.

## Image audit

- **Zero alt text**: every `<img>` on the site has `alt=""` (empty string)
- **Logo**: `nwlg2.png` in multiple widths (336w, 367w, 1920w) — green/black circular design
- **Badges**: HomeAdvisor (3-year, 2018, elite, screened-and-approved, top-rated, 1-year, 20-reviews), Thumbtack Pro 2016, Top Pro 2018, Google review badge
- **Work photos**: found on service pages but gallery sub-pages lazy-load images (not in initial HTML source)
