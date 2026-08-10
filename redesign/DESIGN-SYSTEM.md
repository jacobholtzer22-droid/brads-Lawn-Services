# Design system — Brad's Lawn Services

Generated with `ui-ux-pro-max`, then corrected against the project brief. Read
the "What I rejected" section first — the skill's raw output failed the brief in
four ways and I regenerated rather than shipping it.

---

## 0. What the skill proposed, and what I rejected

`search.py "landscaping lawn care home service local trades confident outdoor" --design-system`
returned a system I am **not** using as-is:

| Skill proposed | Verdict | Why |
|---|---|---|
| Primary `#EA580C` (orange) | **Rejected** | Brad's logo is green. Primary must be the brand, not an orange that overrides it. |
| Accent `#2563EB` (blue), "Event orange + map blue" | **Rejected** | An events-industry palette. Blue fights the green identity. |
| Style: "Flat Design — no gradients/shadows" | **Rejected** | Directly contradicts the reference level: 16px card radius, soft brand-tinted shadows, depth. Flat is what the current site already is, and why it reads generic. |
| Type: Clash Display / Satoshi, mood "startup, bold, innovative" | **Rejected** | The brief bans startup typography by name. Also no serif, and the returned Google Fonts link (Outfit/Rubik) didn't even match the named faces. |

**Kept from the skill:** the *pattern* — "Conversion-Optimized + Trust", CTA
above the fold, Hero → Features → CTA — plus its anti-patterns (never hide
contact info) and the accessibility/animation rule sets, which drive §5 and §6
below. The `--domain color` search for "green nature landscaping" independently
returned **nature green + amber** (`#15803D` / `#D97706`), which confirms the
direction; I anchored on Brad's actual sampled logo green instead of the
generic one.

---

## 1. Palette

Anchored on the logo greens already sampled in `assets-raw/manifest.md`
(`#397c36` primary, `#2b7328` dark edge). Amber accent chosen for warmth and
because green+amber is the natural outdoor-trades pairing — and because it is
as far from the banned purple/indigo as the wheel allows.

### Brand green

| Token | Hex | Use |
|---|---|---|
| `brand-50` | `#F2F8F1` | tinted section backgrounds |
| `brand-100` | `#E4F1E3` | icon tiles, soft fills |
| `brand-200` | `#C6E3C3` | borders on tinted ground |
| `brand-300` | `#97CA93` | body text on dark green |
| `brand-400` | `#6AB365` | — |
| `brand-500` | `#4A9E46` | — |
| **`brand-600`** | **`#397c36`** | **primary CTA, logo green** |
| `brand-700` | `#2B7328` | CTA hover, links on white |
| `brand-800` | `#1D4423` | — |
| `brand-900` | `#14301A` | dark bands |
| `brand-950` | `#0F2410` | hero ground, footer |

### Accent — harvest amber

| Token | Hex | Use |
|---|---|---|
| `accent-300` | `#F5C97A` | — |
| `accent-400` | `#F0B646` | accent phrase in headings on dark |
| **`accent-500`** | **`#E8A33D`** | **eyebrow labels on dark, stat values** |
| `accent-600` | `#C27C15` | — |
| `accent-700` | `#9A6110` | — |
| `accent-800` | `#8A5A0B` | accent text on white |

### Neutrals — warmed, not blue-grey

Deliberately warm-shifted off Tailwind slate so nothing reads cold/startup.

| Token | Hex | Use |
|---|---|---|
| `ink` | `#1C2A1C` | body text |
| `ink-muted` | `#4A5A48` | secondary text |
| `surface` | `#FFFFFF` | default section |
| `surface-tint` | `#F4F7F2` | alternating section |
| `line` | `#E3E9E0` | hairline borders |

### Contrast — all verified, WCAG AA

Computed, not assumed:

```
PASS  15.03:1  body text on white          #1C2A1C on #FFFFFF
PASS  13.91:1  body text on tint           #1C2A1C on #F4F7F2
PASS   7.38:1  muted text on white         #4A5A48 on #FFFFFF
PASS   5.11:1  white on brand-600 (CTA)    #FFFFFF on #397c36
PASS   5.86:1  white on brand-700 (hover)  #FFFFFF on #2B7328
PASS   7.61:1  dark green on amber button  #0F2410 on #E8A33D
PASS   8.97:1  accent-400 on brand-950     #F0B646 on #0F2410
PASS  16.40:1  white on brand-950 (hero)   #FFFFFF on #0F2410
PASS  12.66:1  brand-300 body on brand-950 #D8E6D6 on #0F2410
PASS   5.86:1  brand-700 link on white     #2B7328 on #FFFFFF
PASS   5.92:1  accent-800 text on white    #8A5A0B on #FFFFFF
```

No purple, indigo, or violet anywhere in the system.

---

## 2. Typography

**Display: Fraunces. Body: Source Sans 3.**

Fraunces is a variable serif with `SOFT`, `WONK`, `opsz` and `wght` axes —
warm and characterful with real weight at 600–700. It reads *crafted local
business*, not luxury-spa (which is why I passed on Playfair Display) and not
startup (why I passed on Clash Display). Source Sans 3 is already in the repo,
so body text stays familiar and no extra font loads. **Lexend is dropped.**

The weight contrast — Fraunces 700 headings against Source Sans 3 400 body — is
the single biggest visual upgrade in this pass.

### Scale

| Role | Size / weight | Face |
|---|---|---|
| Display XL (hero H1) | `clamp(2.5rem, 6vw, 4.5rem)` / 700, tracking −0.02em, leading 1.02 | Fraunces |
| Display L (section H2) | `clamp(2rem, 4vw, 3rem)` / 700, leading 1.1 | Fraunces |
| Display M (H3) | `1.5rem` / 600 | Fraunces |
| Card title | `1.125rem` / 600 | Source Sans 3 |
| Eyebrow | `0.75rem` / 700, uppercase, tracking 0.14em | Source Sans 3 |
| Body L (hero, intros) | `1.125rem` / 400, leading 1.7 | Source Sans 3 |
| Body | `1rem` / 400, leading 1.7 | Source Sans 3 |
| Small / meta | `0.875rem` / 400 | Source Sans 3 |

**Accent phrase rule:** every display heading may set its final clause in
`accent-400` (on dark) or `brand-700` (on light). Used once per section, never
twice.

---

## 3. Spacing and rhythm

- Section padding: **96px desktop / 64px mobile** (`py-24 lg:py-32` equivalent),
  matching the reference rhythm. Utility strips get 64/40.
- Spacing scale: 4px base — 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Content max-width 72rem, gutters 16px mobile / 24px tablet / 32px desktop.
- Backgrounds alternate `surface → surface-tint → surface`, with saturated
  colour reserved for exactly two moments per page: the service-area band and
  the closing CTA.

---

## 4. Components

**Buttons** — pill (`rounded-full`), min-height 48px, 150ms colour transition.
- *Primary:* `brand-600` fill, white text, hover `brand-700`, slight lift.
- *Accent:* `accent-500` fill, `brand-950` text — hero primary only.
- *Secondary on dark:* 1.5px white/70 border, transparent, hover white fill.
- *Secondary on light:* 1.5px `brand-600` border, `brand-700` text.

**Cards** — `rounded-2xl` (16px), 1px `line` border, soft brand-tinted shadow
`0 1px 2px rgba(28,42,28,.05), 0 8px 24px -12px rgba(28,42,28,.12)`.
Hover: lift 4px + shadow deepen + inner image `scale(1.04)`, 250ms.
Icon sits in a 40px `rounded-xl` `brand-100` tile with a `brand-700` glyph.

**Eyebrow** — uppercase, tracked, `accent-500` on dark / `brand-700` on light.

**Pills** (ZIP codes, service-area chips) — `rounded-full`, 1px border, check
icon, subtle fill.

**Photo cards** — `rounded-2xl`, `overflow-hidden`, `object-cover`. This is how
the frozen photo set gets recomposed without touching the files: crop and
placement change, the image and its alt text do not.

**Header** — sticky, transparent over the hero, transitioning on scroll to
`rgba(255,255,255,0.85)` + `backdrop-blur(12px)` + hairline bottom border.

---

## 5. Animation plan

One approach throughout: **CSS transitions + IntersectionObserver**, no Framer
Motion. It keeps the bundle small, and the existing `Reveal`/`CountUp`
primitives already work this way.

| Element | Motion | Duration / easing |
|---|---|---|
| Section entrance | fade + 14px rise | 500ms ease-out, once |
| Card grids | same, staggered | 60ms per item (skill guidance: 30–50ms; 60 suits 3-up) |
| Card hover | lift 4px, shadow deepen | 250ms ease-out |
| Card image hover | `scale(1.04)` inside overflow-hidden | 400ms ease-out |
| Hero entrance | eyebrow → H1 → body → CTAs → stats, staggered | 80ms steps, 600ms each |
| Hero photo card | fade + `scale(0.98)→1` | 700ms ease-out |
| Floating review card | fade + rise, delayed after photo | 250ms delay |
| "Since 2010" stat | count-up on first view | 900ms ease-out cubic |
| Header on scroll | background/blur/border fade in | 200ms |
| Mobile menu | height + fade | 220ms ease-out |
| Buttons | colour + 1px lift | 150ms |

**Rules enforced on every one of the above** (from the skill's §7):

1. **Content is in the initial HTML.** The hidden state is gated behind a `js`
   class set by an inline script, so with JS disabled everything renders
   visible. Already the pattern in this repo; it is preserved.
2. **Transform and opacity only.** Never width, height, top, left, margin.
3. **Zero layout shift.** Nothing animates layout; images keep explicit
   dimensions/aspect ratios.
4. **LCP is never delayed.** The hero photo and H1 render immediately; the hero
   "entrance" animates only opacity/transform on already-painted content.
5. **`prefers-reduced-motion: reduce` short-circuits everything** to the final
   state — no fade, no rise, no count-up.
6. **150–300ms for micro-interactions**, ≤700ms for entrances.
7. Exits (mobile menu close) run at ~70% of enter duration.

---

## 6. Accessibility commitments

- All contrast pairs verified above; nothing ships below AA.
- Touch targets ≥44×44px; the mobile CTA bar uses 48px.
- Focus rings visible on every interactive element (2px `brand-600`, 2px
  offset) — never removed.
- SVG icons only, from the existing single icon set. No emoji.
- One `<h1>` per page (frozen), sequential heading order.
- Colour never the sole carrier of meaning.

---

## 7. Homepage — section-by-section outline

Content and facts are unchanged throughout; only presentation moves.

| # | Section | Change |
|---|---|---|
| 1 | **Header** | Transparent over hero → blurred white on scroll. Logo left, nav centre, phone + pill CTA right. |
| 2 | **Hero** | **Biggest change.** Split: left = location pill, H1 *(verbatim)* with accent phrase, intro, amber primary + outlined phone CTA, three-stat row. Right = large `rounded-2xl` photo card with a **floating review card** overlapping its lower-left, quoting a real review. Ground is a `brand-950` → `brand-900` gradient. |
| 3 | **Trust strip** | Slim band under the hero: since 2010 · 24/7 · family owned · residential & commercial, with icons, then the real HomeAdvisor/Thumbtack badges still linked to the live profile. |
| 4 | **Services** | Eyebrow + serif H2. Three-up cards with photo top, icon tile, title, description, `Learn more →`. Hover lift + image zoom, staggered entrance. |
| 5 | **Service With An Edge** | Two columns on `brand-950`: photo left in a rounded card; right = eyebrow, serif H2 with accent phrase, origin paragraph, and the three motto pillars as a 2×2-style icon list. |
| 6 | **Reviews** | Eyebrow + serif H2, three review cards (amber stars, quote, `— Name`) on tint, outlined pill "Read all reviews" below. Carousel kept for mobile with the `contain:layout paint` fix retained. |
| 7 | **Service area** | Saturated `brand-600` band: eyebrow with pin, serif H2, the four ZIPs as check-pills, white pill CTA. |
| 8 | **FAQ** | Same six Q&As **verbatim**. Restyled accordion: wider rows, serif question, amber plus-icon that rotates. |
| 9 | **Closing CTA** | `brand-950` band with faint photo wash: eyebrow, serif H2, paragraph, amber + outlined CTAs. |
| 10 | **Footer** | `brand-950`, four columns, logo + description + contact left. Keeps all three profile links. |

## 8. Service page (`/core-aeration`) — outline

The live ad campaign lands here, so it gets the same care as the homepage.

| # | Section | Change |
|---|---|---|
| 1 | **Hero** | Split like the homepage but shorter: eyebrow (motto), H1 *(verbatim)*, the frozen direct-answer opening paragraph *(kept intact — it is the SEO asset)*, phone + quote CTAs; photo card right. |
| 2 | **Breadcrumbs** | Slim tinted bar, unchanged links. |
| 3 | **What it does** | Two columns: check-list of benefits left, sticky quote card right (phone, CTA, service area). |
| 4 | **Signs you need it** | Three cards on tint, icon tiles, staggered. |
| 5 | **Photos** | Rounded photo cards, same images and alt text, hover zoom. |
| 6 | **How it works** | Three numbered steps with an amber connecting rule on desktop. |
| 7 | **FAQ** | Five Q&As **verbatim**, restyled accordion. |
| 8 | **Related services** | Three linked cards. |
| 9 | **Closing CTA** | Same band as homepage. |

---

## 9. What stays frozen

Restated so it is checkable at Phase D: every page title, meta description,
canonical, OG/Twitter tag, JSON-LD block, robots/sitemap/llms.txt, redirect and
slug; the form payload, field names, validation and submit logic; every fact in
`seo/FACTS.md`; every H1 and every FAQ question and answer verbatim; and the
photo set with its existing alt text.
