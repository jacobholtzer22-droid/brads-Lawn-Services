# Reference patterns — extracted design language

**Sources analysed**

| # | URL | Status |
|---|---|---|
| 1 | https://www.rodaspremierlandscaping.com | Analysed — full-page render + computed-style extraction |
| 2 | https://www.fraazaenterprises.com | Analysed — full-page render + computed-style extraction |
| 3 | `[THIRD URL]` | **Still not supplied** — placeholder unfilled |

Two references is enough to separate house style from one-off choices, and doing
so **changed a conclusion** — see §3.

## Where the two references AGREE (house style — safe to adopt)

| Pattern | Rodas | Fraaza |
|---|---|---|
| Serif display + sans body | EB Garamond + Inter | Playfair Display + DM Sans |
| Eyebrow labels above section H2s | `WHAT WE DO`, `REVIEWS` | `WHAT WE DO`, `OUR WORK`, `WHY CHOOSE US` |
| Pill CTAs (`border-radius: 9999px`) | yes | yes |
| 16px card radius | yes | yes |
| Sticky/fixed translucent header + `blur(12px)` | white 85% | near-black 90% |
| Warm accent against a cool/dark ground | gold `#F0B524` | tan/bronze `#C8956C` |
| Inline stat row in the hero | 5.0 / 9+ / Year-Round | 23+ Years / 5.0 Rating |
| Location/credential pill above the H1 | "Serving Grand Rapids…" | "Owner-operated since 2004" |
| One solid + one lighter CTA (not two heavy buttons) | solid gold + outlined | solid tan + text link with arrow |

That agreement is the real house style. Everything in that table is adopted.

## Where they DIVERGE (one-off choices — do not treat as law)

| Dimension | Rodas | Fraaza |
|---|---|---|
| **Hero construction** | **Split** — content left on gradient, rounded photo card right, floating review card overlapping | **Full-bleed photo** with directional dark scrim, content left-aligned |
| Overall ground | Light, white-led | Dark, near-black led |
| Card construction | Photo above text, white card | Photo *is* the card, text overlaid on a scrim |
| Section padding | 96px | 120px on hero, variable elsewhere |

Because these disagree, neither is "the A&A way". The brief breaks the tie.

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

## 3. Hero — CORRECTED after the second reference

**My first proposal (split hero) was wrong, and this section is where it broke.**

With only Rodas in the sample I read "split hero" as the house pattern and
proposed deviating from the brief's full-bleed instruction on that basis. Fraaza
uses a **full-bleed photo hero with a dark overlay** — the same construction the
brief specifies. One-for-one, so the references do not support the deviation.
**Reverting to full-bleed.**

The useful finding is that split-vs-full-bleed was never the real variable.
Brad's current hero *is* already full-bleed-with-overlay and still looks
generic. Comparing it against Fraaza's, which looks good, the differences are:

| | Brad's current | Fraaza |
|---|---|---|
| Photo strength | `opacity-40` over near-black — muddy, washed out, the photo reads as texture | Near-full strength; it reads as a photograph of a real property |
| Scrim | Flat wash across the entire image | **Directional gradient**, dark at left and bottom, clear at upper right |
| H1 | Lexend sans, moderate size | **Serif display, large, tight leading**, 3 short lines |
| Above H1 | Solid green pill | Translucent pill with a small dot — quieter, more premium |
| CTAs | Two heavy competing buttons | **One solid pill + one text link with arrow** — clear hierarchy |
| Below CTAs | Three inline meta items | **Stat row under a hairline rule** |
| Header | Solid white bar | Translucent + `blur(12px)` over the photo |

So the hero fix is: stronger photo, directional scrim instead of a flat wash,
serif display H1, quieter eyebrow, one-primary CTA hierarchy, and a stat row on
a hairline. All of that is achievable **inside** a full-bleed hero, with no
structural deviation from the brief.

Also adopted from Rodas, since it does not conflict: the **floating review
card** can still overlap the bottom of the hero photo area as a single
lower-right element, without splitting the layout.

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
