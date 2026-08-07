# FACTS.md — Brad's Lawn Services

Single source of truth for all copy and schema. Every claim on the new site must trace to a line in this file. Source URLs reference the old site crawled 2026-08-07.

---

## Business identity

| Fact | Value | Source |
|---|---|---|
| Legal/display name | Brad's Lawn Services | All pages, JSON-LD |
| Phone (display) | (269) 589-9458 | All pages, header + footer |
| Phone (E.164) | +12695899458 | Derived |
| Email | callbrad269@gmail.com | JSON-LD on old site |
| Motto | "Service With An Edge" | `/about-us` |
| Motto meaning | 1) Service = commitment to customers, providing solutions to lawn care needs. 2) Edge = high level of equipment maintenance and sharp blades providing optimum performance and cut quality. 3) Edge = sharp defined lines in edging and trimming that set them apart | `/about-us` |
| Founded | 2010 ("A Family Business Since 2010" on every page) | All pages, header |
| Business type | Family business | All pages |
| Availability | 24/7, "Call Anytime" | All pages, header |
| Hours | Mon - Sun, Open 24 Hours | All pages, footer |
| Positioning | "Full service grounds maintenance and landscape provider" | `/about-us` "Our Beginning" section |
| Origin story | "Brad's Lawn Services started with an entrepreneurial passion driven to stand out and be a leader in the industry. From our humble beginning we have grown and expanded to a full service grounds maintenance and landscape provider." | `/about-us` |
| Serves | Homes AND offices/businesses (residential + commercial) | `/` and service pages |

## Location and service area

| Fact | Value | Source |
|---|---|---|
| City | Battle Creek, MI | All pages |
| P.O. Box | P.O. Box 1395, Battle Creek, MI 49016 | `/contact` page, JSON-LD |
| Street address | **NONE PUBLISHED** — service-area business | Verified: no street address on any page |
| Zip codes serviced | 49014, 49015, 49017, 49037 | All pages, footer |
| Service area description | "Battle Creek, MI and surrounding areas" / "Battle Creek, MI area" | Service pages |
| Geo coordinates (old schema) | 42.32003, -85.18763 | JSON-LD (Duda-generated, likely approximate) |
| Named cities beyond Battle Creek | **NONE CLAIMED** — Kalamazoo appears ONLY in Karina B.'s review quote, NOT as a service-area claim | `/reviews` (Karina B. review) |

**TODO (ask Brad):** Specific cities/townships beyond Battle Creek to list as service areas? Does he serve Kalamazoo or was Karina B.'s review from a one-off?

## Services (5 main, with exact old slugs)

### 1. Lawn Mowing (`/lawn-mowing`)

| Detail | Value | Source |
|---|---|---|
| Page H1 | "Lawn Mowing" | `/lawn-mowing` |
| Services included | Weekly lawn mowing, edging, weed eating, aerating, seeding, hedge and shrub trimming, walkway/patio blowing, overgrowth clearing, seasonal gutter cleaning | `/lawn-mowing` |
| Key copy | "Take the Hassle Out of a Great Lawn" | `/lawn-mowing` |
| Serves | Residential + commercial | `/lawn-mowing` |

### 2. Brush Hogging (`/brush-hogging`)

| Detail | Value | Source |
|---|---|---|
| Page H1 | "Brush Hogging" | `/brush-hogging` |
| What they do | Bring brush hog equipment to property, cut down overgrown trees/brush/grass, clean up and haul away debris | `/brush-hogging` |
| Additional | Stump grinding also available | `/brush-hogging` |
| Key copy | "Hire us for brush hogging services in the Battle Creek, MI area" / "Are You Dealing With an Overgrown Property?" | `/brush-hogging` |

### 3. Core Aeration (`/core-aeration`)

| Detail | Value | Source |
|---|---|---|
| Page H1 | "Give your Battle Creek, MI lawn the TLC it needs with core aeration" | `/core-aeration` |
| Technical detail | Removes soil plugs approximately ¾" in diameter and 2-3" long | `/core-aeration` |
| Benefits | Promotes healthier grass, decreases weed growth, reduces water runoff, minimizes soil compaction, enhances drought tolerance | `/core-aeration` |
| Definition | "Aeration means to supply with air. Lawn Core Aeration is the process of opening the ground from cores removed exposing the root system allowing air deeper into the root base." | `/core-aeration` |

### 4. Leaf Cleanup (`/leaf-cleanup`)

| Detail | Value | Source |
|---|---|---|
| Page H1 | "Leaf Cleanup" | `/leaf-cleanup` |
| Service types | Spring cleanup (tree limbs, leaves, gutter cleaning, walkway/patio clearing), fall cleanup (leaf removal and curbside pickup), storm cleanup (debris removal and damage restoration) | `/leaf-cleanup` |
| Equipment | Professional-grade leaf blowers and vacuums | `/leaf-cleanup` |
| Key copy | "Get fast and reliable leaf cleanup in Battle Creek, MI & the surrounding areas" | `/leaf-cleanup` |

### 5. Snow Plowing (`/snow-plowing`)

| Detail | Value | Source |
|---|---|---|
| Page H1 | "Snow Plowing" | `/snow-plowing` |
| Experience claim | "Combined 30 years experience in the snow and ice management industry" | `/snow-plowing` |
| Services | Commercial snow removal and salting, sidewalk and entrance clearing, lot and drive area plowing and salting | `/snow-plowing` |
| Property types | Commercial sites, light industrial, retail, multi-family properties, private roads, parking areas | `/snow-plowing` |

### Additional service phrases (used in copy, not standalone pages)

Source: various pages, especially `/lawn-mowing` and `/request-a-quote` form checkboxes.

- Weekly lawn maintenance
- Field mowing
- Overgrowth clearing
- Hedge trimming and grooming
- Seasonal yard cleanup
- As-needed lawn care
- Weekly maintenance contracts
- Vacation lawn care
- Trimming
- Edging
- Spring clean up
- Fall leaf clean up
- Curbside leaf pickup
- Hauling
- Overseeding
- Tree trimming
- Bush trimming
- Irrigation
- Mulch
- Grading
- Stump grinding

## Credentials and profiles

| Credential | Detail | Source |
|---|---|---|
| HomeAdvisor | Screened & Approved, Top Rated, Elite Service, 3 Years, 20 Reviews, 2018 badge | Badge images on all pages |
| HomeAdvisor profile URL | `http://www.homeadvisor.com/rated.BradsLawnServices.57689174.html` | Badge link |
| Thumbtack | Pro 2016, Top Pro 2018 | Badge images on all pages |
| Thumbtack profile URL | **NONE PUBLISHED** on old site | No link found |
| Google Business Profile | Review link: `https://search.google.com/local/writereview?placeid=ChIJf09neXrwF4gRaRwX5eKnmEU` | Review badge |
| Facebook | `https://facebook.com/Brads-Lawn-Services-1764061037194337` | Footer link |

**TODO (verify):** Does the HomeAdvisor profile still exist and load? Is the Facebook page still active?

## Reviews (16 verified)

All 16 reviews are five-star reviews displayed on `/reviews`. Full verbatim text captured in `content/reviews.ts`.

Reviewers: Kimberly M., Michael M., Julie Y., Kimberly L., Kara G., Jeff B., Dave K., Matt C., Robert E., Tina K., Don A., Shawn D., Jori W., Lynne B., Karina B., Laurie C.

**CAUTION:** Karina B.'s review mentions properties "in Kalamazoo" — this is a review quote and is NOT a service-area claim. Do not add Kalamazoo to service areas based on this.

## Employment

| Fact | Value | Source |
|---|---|---|
| Hiring stance | "Always looking for skilled and qualified crew members" | `/employment` |
| Requirements | Valid driver's license, reliable transportation, commercial driver medical examiner's certificate | `/employment` form |
| Application method | Online form (extensive) on old site | `/employment` |

## Things NOT published anywhere (banned from new site without Brad's confirmation)

- Street address (service-area business — P.O. Box only)
- Pricing for any service
- Licensing details
- Insurance details
- Crew size
- Exact founding story details beyond "since 2010" and the "Our Beginning" paragraph
- Named cities/townships beyond Battle Creek
- Any review star rating number or count in schema (visible reviews yes, rating schema no)

## Tracking IDs found on old site

| Service | ID | Carry forward? |
|---|---|---|
| Google Analytics 4 | G-4TFHPKLBS6 | **NO** — belongs to previous vendor (Duda). Jacob sets up new GA4 property |
| Townsquare Interactive | Pixel ID 2445640 | **NO** — previous vendor tracking |
| Duda analytics | Snowplow + livesite.js | **NO** — platform-specific |
| Google Ads (AW-) | Not found | New IDs go in env vars |
| Meta/Facebook pixel | Not found | N/A |
