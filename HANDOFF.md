# HANDOFF — Brad's Lawn Services

Operational notes for Jacob. Everything here is a real gotcha hit during the
build, not boilerplate.

---

## 1. Vercel environment variables

Set these in **Project → Settings → Environment Variables**, for Production
(and Preview if you want previews behaving identically).

| Variable | Value | Notes |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://www.bradslawnservices.com` | www is canonical. Drives canonicals, sitemap, OG URLs, JSON-LD. |
| `NEXT_PUBLIC_CRM_URL` | `https://www.alignandacquire.com/api/contact` | **Must be the www host.** The bare apex 308s and the cross-origin POST preflight fails against a redirect → silent lead loss. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | *your token* | Use **your own** Search Console token. Do not reuse the old site's — it belongs to the previous vendor. |
| `NEXT_PUBLIC_AW_CONVERSION_ID` | `AW-XXXXXXXXXX` | Optional. Empty = no tracking loads at all. |
| `NEXT_PUBLIC_AW_FORM_LABEL` | conversion label | Fires on successful quote-form submit. |
| `NEXT_PUBLIC_AW_CALL_LABEL` | conversion label | Fires on any `tel:` click, site-wide. |
| `NEXT_PUBLIC_HONEYPOT_FIELD` | *leave unset* | Defaults to `website`, which is what the CRM expects. Only set to override. |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | *leave empty* | Empty = no widget, no script, no token. See §4. |

> **`NEXT_PUBLIC_` values are baked in at build time.** Changing one in the
> dashboard does nothing until you redeploy — and it must be a redeploy with
> **"Use existing Build Cache" unchecked**, or the old value survives.

---

## 2. Business slug verification runbook

**The slug is a literal in the code, not an environment variable.**

```
src/lib/site.config.ts
  businessSlug: "bls-1775740872941",
```

There is no `NEXT_PUBLIC_BUSINESS_SLUG` env var — setting one in Vercel does
nothing. To change the slug, edit that line and redeploy.

**Why verification matters:** a wrong slug returns **HTTP 200 with no database
write**. The form shows its success state, the customer believes they've reached
Brad, and the lead is gone. A 200 response proves nothing. The only proof is a
row in the database.

### Verify

1. Submit a real test lead through `/request-a-quote` on the deployed site.
   Tick the SMS consent box — see §3, the endpoint rejects submissions without
   it.
2. In the platform, confirm a **`WebsiteLead` row was created** and that its
   **`businessId` resolves to Brad's Lawn Services**. Matching on name or
   timestamp alone is not enough; the `businessId` is what proves the slug
   resolved to the right tenant.
3. If no row appears, the slug does not match any Business row — fix the
   literal in `site.config.ts` and redeploy.
4. If a row appears under the **wrong** business, the slug matched a different
   tenant. Same fix, and check that tenant for stray leads.
5. Delete the test lead.

No env inspection step exists, because there is no env var to inspect.

---

## 3. OPEN DECISION — the CRM rejects leads without SMS consent

**This will lose real leads if it isn't resolved before go-live.**

`app/api/contact/route.ts` in the platform, line 81:

```js
if (!name || !smsConsent) {
  return NextResponse.json({ error: 'Name and consent are required' }, { status: 400 })
}
```

That runs **before** any spam check or database write. Meanwhile Brad's quote
form — correctly, per TCPA practice — has the SMS consent box **unchecked by
default** and states that consent is not a condition of service.

So today: any customer who submits the form without ticking the box gets an
error, and the lead is thrown away. Most people don't tick the box.

Two ways out:

- **Recommended — relax the endpoint.** Change the guard to `if (!name)` and let
  `smsConsent` flow through as a stored flag. Brad's form stays TCPA-correct and
  no lead is ever lost. Requires a platform change + redeploy.
- **Alternative — make the checkbox required** on Brad's site. No platform
  change, but it forces every customer to opt into texts just to ask for a
  quote, and the "consent is not a condition" line has to come out. Weaker
  position and it will cost submissions.

Until one of these lands, the form's error state at least tells the customer to
call instead, so they aren't silently dropped from *their* point of view.

---

## 4. Spam protection — the two integration answers

Both were confirmed by reading the platform source, not assumed.

**(a) Honeypot field name is `website`.** `detectSpam()` destructures
`{ website, turnstileToken }` and flags any non-empty `website` string as spam.
Brad's form already sends exactly that. No action needed.

**(b) Turnstile is optional today.** A missing token only fails when
`TURNSTILE_ENFORCE === 'true'` on the platform, and verification is skipped
entirely when `TURNSTILE_SECRET_KEY` is unset. Brad's site sends no token.

> ⚠️ **Standing trap:** if you ever set `TURNSTILE_ENFORCE=true` on the platform,
> every site that doesn't send a token starts silently failing spam checks —
> including this one. If you turn that on, you must also set
> `NEXT_PUBLIC_TURNSTILE_SITE_KEY` here and redeploy. The widget and script are
> already wired; they just don't render while the key is empty.

---

## 5. Google Ads conversion tracking

Nothing loads while `NEXT_PUBLIC_AW_CONVERSION_ID` is empty — no gtag script, no
network request. To switch it on, set all three AW variables and redeploy.

- Form conversion fires in `src/components/QuoteForm.tsx` via
  `trackFormConversion()`, only after the CRM accepts the submission.
- Call conversion fires from `src/components/Analytics.tsx` via a delegated
  listener on every `a[href^="tel:"]`, so it covers all phone links everywhere
  without per-link wiring.
- Both go through `src/lib/tracking.ts`, which no-ops when IDs are absent.

No account IDs are committed anywhere in this repo.

---

## 6. DNS cutover

1. Vercel → Project → **Domains** → add `bradslawnservices.com` and
   `www.bradslawnservices.com`.
2. Set **`www` as primary**, with the apex redirecting to it (Vercel does a 308
   automatically). This must match `NEXT_PUBLIC_SITE_URL`, which is already
   built around the www host.
3. Point DNS at Vercel per its instructions (A record for apex, CNAME for www).
4. Wait for the certificate to issue, then confirm:
   - `http://bradslawnservices.com` → 308 → `https://www.bradslawnservices.com`
   - the old gallery URLs still 308 to `/gallery`
5. **Only after DNS is live**, add the property in Google Search Console under
   **your own** account and submit `https://www.bradslawnservices.com/sitemap.xml`.

---

## 7. Vercel project settings — one already bit us

The project was created while `main` still held only the Phase 0 recon output,
with no `package.json`. Vercel couldn't detect Next.js, set **Framework Preset =
"Other"**, and its output directory default is `public/`. Result: builds
reported **Ready** while every route 404'd, because Vercel was serving `public/`
as a static site and throwing `.next/` away.

Fixed by committing `vercel.json` with `"framework": "nextjs"`, so it's in
version control and survives project re-creation. **Don't override Framework
Preset or Output Directory in the dashboard** — let `vercel.json` win.

Also confirm **Root Directory** is the repo root; `package.json` is at root.

**Deployment Protection is currently on.** The `.vercel.app` alias is public but
per-deployment URLs 302 to Vercel SSO. Send Brad the alias, not a deployment
URL.

---

## 8. Swapping in Brad's new photos

Three steps, no code changes beyond one line:

1. Drop the file into `assets-raw/photos/`.
2. Add a line to the `SLOTS` map in `scripts/prepare-images.mjs` (source file →
   output name + width), then run `npm run prepare-images`. It converts to WebP.
3. Point the slot at it in `content/images.ts` and **write a real alt
   description** — look at the photo and describe it. For a new gallery entry,
   also add it to `content/gallery.ts` with a category.

Weakest current photos, worth replacing first: `commercial-snow-clearing`
(blurry), `yard-after-cleanup` (washed out), `snow-plow-blade`.

---

## 9. Pre-merge checklist

- [ ] Scroll every page on a **real phone**, not just the simulator.
- [ ] Tap the sticky Call Now bar and confirm the dialer opens with the right number.
- [ ] Open the mobile menu, confirm every link works.
- [ ] Swipe the reviews carousel on the homepage.
- [ ] Submit a real test lead and **see it in the platform admin** (§2).
- [ ] Resolve the SMS-consent decision (§3).
- [ ] Confirm Brad's answers on service-area towns, licensing/insurance, and
      whether Kalamazoo counts (see `seo/REBUILD-REPORT.md`).

---

## 10. Verification commands

```bash
npm run build && node scripts/validate-jsonld.mjs
```

Validates every JSON-LD block: parses, uses only real schema.org types,
cross-checks business facts against `seo/FACTS.md`, and asserts zero
Review/AggregateRating markup. Exits non-zero on failure, so it can gate a
deploy.

---

## 11. Known-fragile things

- **The homepage reviews carousel needs `[contain:layout_paint]`.** Without it
  that full-bleed scroller widens the mobile *layout viewport* — `window.innerWidth`
  measured 1560 on a 390px screen — and the `position: fixed` CTA bar, which
  sizes to the viewport rather than the document, rendered 1560px wide with
  "Get a Quote" off-screen. `overflow-hidden` wrappers, `max-width`, `width:100%`
  and disabling scroll-snap all fail to fix it; containment is what works. There
  is a comment on the element saying so.
- **`content/faqs.ts` and the FAQPage schema share one source.** The schema is
  generated from the same array the page renders, so they can't drift. Keep it
  that way — don't hand-write schema copies.
- **No Review or AggregateRating schema, ever.** Deliberate policy. The reviews
  are displayed verbatim; marking up your own reviews violates Google's
  guidelines.
- **`seo/FACTS.md` is the source of truth for every claim on the site.** If a
  fact isn't in there, it doesn't go on a page.
