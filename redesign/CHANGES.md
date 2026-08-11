# Visual redesign — what changed

Plain language, one screenful. Nothing about the content, facts, SEO, or form
logic changed. This was presentation only, and that claim is proven below
rather than asserted.

---

## The design system

- **Typography is the biggest change.** Headings moved from Lexend (a sans) to
  **Fraunces**, a warm serif with real weight, over the existing Source Sans 3
  body text. That weight contrast is most of why the site now reads as designed
  rather than assembled. Section headings gained small uppercase "eyebrow"
  labels and an accent-coloured final clause.
- **Palette** anchored on Brad's actual logo green (`#397C36`), with a harvest
  amber accent and warm neutrals deliberately shifted off cold blue-grey. All 13
  colour pairs verified WCAG AA.
- **Rhythm**: consistent 96px desktop / 64px mobile sections, alternating white
  and a soft green tint, with saturated colour reserved for two moments per page.
- **Components**: pill buttons, 16px-radius cards with brand-tinted shadows,
  hover lift, and image zoom-on-hover.

## Per page

| Page | What changed |
|---|---|
| **Home** | Hero photo now runs at full strength with a directional shadow instead of a flat 40%-opacity wash, so it reads as a photograph. Serif headline, quieter eyebrow pill, one solid amber button plus a phone link instead of two competing buttons, a stat row on a hairline, and a floating customer-review card over the photo. New trust strip, card-based services grid, dark motto section, review carousel, green service-area band with the four ZIPs as pills, restyled FAQ, photo-washed closing CTA. |
| **5 service pages** | Same hero treatment, restyled benefit and step cards, restyled FAQ and related-services links. |
| **Gallery** | Rebuilt. Filter pills, card grid with hover zoom, and a **new lightbox** — click any photo to view it large, navigate with arrow keys, close with Escape. |
| **Reviews** | All 16 reviews as cards with amber stars. |
| **About / Areas We Serve / Employment / Contact / Request a Quote / 404** | Rolled onto the same system: serif headings, cards, pills, new section rhythm. |
| **Header** | Now transparent over the hero and fades to a blurred white bar as you scroll. Logo knocks out to white over the photo. |
| **Footer** | Deep green, same links and information. |
| **Quote form** | Restyled only — card shell, rounded inputs, brand focus ring, nicer success and error states. |

## What was proven frozen

| Check | Result |
|---|---|
| Page titles, descriptions, canonicals, OG/Twitter tags, all 66 JSON-LD blocks | `diff` against the pre-redesign baseline is **empty** |
| Contact form payload | Live submission diffed against the pre-redesign capture — **identical**. Same 7 keys, same honeypot, same field names. |
| Every H1 | Unchanged, verbatim |
| Every FAQ question and answer | Unchanged, verbatim |
| Photos and alt text | Same files, same alt text. Only CSS cropping and placement changed. |
| Redirects and URLs | All 8 old URLs still 308 to the right place |

## Speed and quality

| | Before | After |
|---|---|---|
| Performance (mobile) | 94 | **95** (home) / **96** (core aeration) |
| Accessibility | 100 | **100** |
| Best Practices | 100 | **100** |
| SEO | 100 | **100** |
| Layout shift | 0 | **0** |
| Largest paint | 3.0s | **2.9s / 2.8s** |

One regression was caught and fixed on the way: loading Fraunces as a variable
font shipped a 118 KB file and pushed performance down to 87. Switching to two
static weights fixed it and left the site faster than before the redesign.

Animations are all progressive enhancement — every word is in the HTML even
with JavaScript off, nothing animates layout, and everything switches off under
"reduce motion".

---

## Before you merge — please eyeball on a real phone

The automated checks cover a lot, but these want human eyes:

1. **The hero on your actual phone.** Check the photo is not too dark behind
   the headline in daylight, and that the stat row reads cleanly.
2. **Scroll the homepage top to bottom.** The header should fade from clear to
   white smoothly, with no flicker at the moment it switches.
3. **Open the gallery and tap a photo.** The lightbox should open, swipe/arrow
   between images, and close on Escape or the X.
4. **Tap the sticky Call Now bar** and confirm the dialer opens with
   (269) 589-9458.
5. **Open the mobile menu**, check every link, and confirm it closes cleanly.
6. **Submit a real test lead** and confirm it lands in the platform admin —
   this is still the only real proof the business slug is right, and it is
   still `REPLACE_ME_SLUG`.

## Still open, unchanged by this pass

- **`NEXT_PUBLIC_BUSINESS_SLUG` is still the placeholder.** A wrong slug returns
  HTTP 200 and silently drops the lead.
- **The CRM rejects any lead without SMS consent** (400 before any database
  write), which conflicts with the unchecked-by-default consent box. See
  `HANDOFF.md` §3. Needs a decision before the domain cuts over.
- **Google Ads conversion tracking is not wired.** The tag ID and both
  conversion labels are absent from the repo; tracking is a no-op until the
  three `NEXT_PUBLIC_AW_*` env vars are set.
- **Brad's outstanding answers**: service-area towns beyond Battle Creek
  (including whether Kalamazoo counts), whether a street address should be
  published, and any licensing/insurance wording.
