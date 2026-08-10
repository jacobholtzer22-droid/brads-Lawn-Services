# Reference patterns — extracted design language

**Sources analysed**

| # | URL | Status |
|---|---|---|
| 1 | https://www.rodaspremierlandscaping.com | Analysed — full-page render + computed-style extraction |
| 2 | `[ADD ANOTHER A&A-BUILT SITE URL]` | **Not supplied** — placeholder left unfilled in the brief |
| 3 | `[OPTIONAL THIRD]` | **Not supplied** — optional |

Everything below is extracted from source 1. Give me the other URLs and I'll
widen the sample; one strong reference is enough to set the level, but two would
let me separate house style from one-off choices.

What follows is **design language, not identity**. No colour, logo, or line of
copy is carried over. Rodas is navy + gold; Brad's is green + a warm accent.

---

## 1. Section rhythm and spacing

- **96px top and bottom padding** on nearly every content section, measured
  consistently (`pad=96px/96px`). Tighter bands (64px, 80px) are used only for
  narrow utility strips like the trust bar and the service-area band.
- Sections alternate **white → very light tint (`#f7fbfc`) → white**, with
  saturated colour reserved for two moments only: the service-area band and the
  final CTA. Colour is punctuation, not wallpaper.
- Section heights land in the **600–730px** range on desktop. Nothing is
  cramped; nothing runs on forever.
- Content is centred in a max-width column with generous side gutters.

**For Brad's:** adopt a 96px desktop / 64px mobile section rhythm and the
white → tint → white alternation. The current build uses a flatter, more uniform
`py-20` everywhere, which is part of why it reads as a template.

## 2. Typography — the single biggest differentiator

- **Serif display + sans body.** Headings are EB Garamond (a real serif) at
  60px/600 for H1 and 36px/600 for H2. Body and UI are Inter, mostly 14–16px.
- **An accent-coloured phrase inside the heading.** "A premier lawn, *year-
  round.*" — the second half in gold. Repeated on H2s ("Local crew. Real care.
  *Premier results.*"). Cheap to do, and it's most of the "designed" feeling.
- **Eyebrow labels** above every section heading: ~12px, uppercase, wide letter
  spacing, accent colour. `WHAT WE DO`, `WHY RODAS PREMIER`, `SEE US IN ACTION`,
  `REVIEWS`, `PROUDLY LOCAL`, `READY WHEN YOU ARE`.
- Body copy is a **real grey-blue at comfortable size**, not thin light-grey
  startup text.

**For Brad's:** this is the biggest single upgrade available. Current headings
are all Lexend — one family, no contrast. Pairing a serif display with the
existing sans, plus eyebrows and an accent phrase, changes the whole register.

## 3. Hero — split, not overlay

The most important structural difference from Brad's current build.

- **Two columns**, not text-over-photo. Left: content on a deep navy gradient.
  Right: a large photo in a **16px-radius rounded card**, inset from the edges.
- A **floating testimonial card** overlaps the photo's bottom-left corner —
  white, rounded, small stars, one short quote, attribution. This overlap is
  what makes it read as designed rather than assembled.
- Above the H1: a **location pill** — rounded-full, translucent, map-pin icon,
  "Serving Grand Rapids & West Michigan".
- Below the paragraph: **two pill CTAs** — solid accent primary with an arrow,
  translucent/outlined secondary carrying the phone number.
- Below the CTAs: an **inline stat row** — 3 items, accent-coloured value, tiny
  grey label underneath.
- Hero is roughly **900px tall** on desktop.

**For Brad's:** the current hero is a dark overlay on a photo at 40% opacity —
exactly the generic pattern. Moving to a split hero with a rounded photo card
and an overlapping review card is the headline change of this redesign.

## 4. Header

- `position: sticky`, `rgba(255,255,255,0.85)` with `backdrop-filter: blur(12px)`,
  **81px tall**.
- Logo left (mark + wordmark with a small tracked-out descriptor), nav centre,
  phone link + solid pill CTA right.
- Translucent-on-scroll is the intended behaviour, not a static solid bar.

## 5. Cards

- **16px radius**, hairline border, soft shadow (`rgba(25,72,98,0.05–0.1)`),
  white on tinted sections.
- Each card opens with an **icon in a rounded-square accent tile** (~40px,
  filled accent, white glyph) — not a bare icon floating on the card.
- Then title (~20px/600), body (~14px), and a `Learn more →` accent link.
- Three-up on desktop.

## 6. Feature / why-us section

- Two columns: **large rounded photo left**, content right.
- Content is an eyebrow + serif H2 with accent phrase + intro paragraph, then a
  **2×2 grid of icon + title + short body** items.

## 7. Gallery

- Grouped into **labelled category columns** (accent uppercase label above each
  pair), each image a **tall portrait card with rounded corners**.
- Mixed stills and video tiles.

## 8. Reviews

- Eyebrow + serif H2, then **three white cards**: five gold stars, the quote in
  grey, `— Name` in bold beneath.
- A single outlined pill CTA centred below ("Read more reviews").
- Notably: no rating schema, no aggregate score claimed. Same policy as Brad's.

## 9. Service-area band

- **Solid saturated band** (teal), centred.
- Eyebrow with pin icon, serif H2, then a row of **rounded-full pills each with
  a check icon** naming an area, and a white pill CTA below.

**For Brad's:** the four ZIP codes map directly onto this pill treatment.

## 10. Final CTA band

- **Dark gradient** with a faint photographic wash.
- Accent eyebrow, serif H2 question, one paragraph, two pill CTAs (solid accent
  + outlined with phone).

## 11. Footer

- **Dark navy**, four-ish columns: logo + description + contact detail on the
  left, then link columns.
- Denser and taller than the body sections; quiet, not decorative.

## 12. Radii, shadow, motion

- Radii cluster hard at **9999px (pills)** and **16px (cards)**. Almost nothing
  square-cornered except full-bleed bands.
- Shadows are **soft, low-opacity, tinted with the brand hue** — never neutral
  black, never heavy.
- Feel is calm and considered: reveals and hover lifts, nothing bouncy.

---

## What I am deliberately NOT copying

- **Colours.** Navy/teal/gold is their identity. Brad's stays green-led.
- **The serif face itself.** Same *strategy* (serif display + sans body), chosen
  independently.
- **Copy and section headings.** Every word on Brad's site stays Brad's.
- **"Licensed & Insured" and "5.0-Star Rated" trust items.** Rodas can claim
  those. Brad has not confirmed licensing or insurance, and star-rating claims
  are banned by the project brief. Brad's trust strip uses only what
  `seo/FACTS.md` supports: since 2010, 24/7, family owned, residential and
  commercial, and the real HomeAdvisor/Thumbtack badges.
- **Their photo of a named crew member.** Brad's uses Brad's existing photo set,
  unchanged, with the existing alt text.
