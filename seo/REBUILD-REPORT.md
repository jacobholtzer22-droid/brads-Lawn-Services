# Brad's Lawn Services — Website Rebuild Report

Prepared for Brad. Written in plain language, not jargon.

---

## The short version

Your website has been rebuilt from scratch. It is faster, it works properly on
phones, and it is now built so that both Google and the AI assistants people
increasingly ask for recommendations — ChatGPT, Claude, Perplexity, Google's AI
answers — can actually read and understand what you do and where you do it.
Every one of your customer reviews was kept word for word, every web address
that mattered still works, and nothing on the new site claims anything about
your business that wasn't already true on the old one.

---

## What was wrong with the old site

The old site was hosted on Duda and had a few problems that were quietly
costing you visibility in search:

| Problem | What it meant |
|---|---|
| **17 of 21 pages shared the exact same page title** | Google saw nearly every page as the same page. Your lawn mowing page and your snow plowing page were indistinguishable in search results. |
| **Zero meta descriptions** | Google wrote its own summary of your pages, guessing at what you offer, instead of using copy that sells your service. |
| **No structured data** | Search engines and AI assistants had no machine-readable record of your phone number, hours, service area, or the services you offer. They had to guess from the page text. |
| **No image descriptions** | None of your work photos could be understood by search engines, or by anyone using a screen reader. |
| **Thin service-area content** | Very little actual text saying where you work, which is the single most important signal for a local service business. |

---

## What the new site does differently

**Every page has its own title and description.** All 13 pages now have a
unique, human-written title and summary, each one naming the service and Battle
Creek. That is what shows up as the clickable headline in Google.

**Search engines now get your facts directly.** Every page carries a hidden,
machine-readable record of your business: the phone number, that you're open 24
hours a day 7 days a week, that you've operated since 2010, the four ZIP codes
you serve, and links to your Facebook and HomeAdvisor profiles. Each service
page declares what that service is. This is the format Google uses to build the
business panel on the right side of search results, and it is increasingly what
AI assistants read when someone asks them for a recommendation.

**Questions customers actually ask are answered on the page.** The homepage has
6 frequently asked questions and each service page has 5 or 6 more — about cost,
timing, scheduling, and service area. These are written the way customers ask
them, with the answer in the first sentence. This is exactly the format that
gets picked up for Google's featured answers and quoted by AI assistants.

**AI assistants are explicitly welcomed.** The site tells GPTBot, ClaudeBot,
PerplexityBot, Applebot and the rest that they're allowed to read it, and
includes a plain-text summary of the business written for them. Most small
business sites either block these by accident or ignore them entirely.

**Your service area is spelled out in real text.** A dedicated page names Battle
Creek, Michigan and each of the four ZIP codes — 49014, 49015, 49017, 49037 —
with an honest note that if someone is just outside those, they should call and
ask.

**It's fast and it works on a phone.** The site scores 94 for performance and a
perfect 100 for accessibility, best practices, and SEO on Google's own testing
tool, measured on a simulated phone. There's a permanent Call Now button pinned
to the bottom of the screen on mobile, so a customer is never more than one tap
from reaching you.

---

## What was kept exactly as it was

- **All 16 customer reviews**, word for word, with the customer's name. Nothing
  was edited, shortened, or invented.
- **Your web addresses.** Every page URL that carried over kept its exact
  address. The six old gallery pages and two retired pages now forward
  automatically to the right place, so old links and bookmarks still work and
  Google transfers their credit to the new pages.
- **Your facts.** Phone number, hours, the "Service With An Edge" motto and what
  it means, the 2010 founding, your HomeAdvisor and Thumbtack badges (still
  linking to your live HomeAdvisor profile), and your Google review link.

**One deliberate choice worth explaining:** your reviews are displayed
prominently, but the site does *not* add star-rating code that would try to make
review stars appear in Google search results. Google's guidelines prohibit a
business marking up its own reviews that way, and sites that do it risk a
penalty. The reviews are real and visible to any human reading the page — we
just aren't gaming the search result.

---

## Things I need from you

These are gaps where the old site simply didn't say, and I won't invent an
answer:

1. **Which towns beyond Battle Creek do you actually serve?** Right now the site
   says "Battle Creek and the surrounding areas" and lists the four ZIP codes,
   because that is all the old site claimed. If you cover Springfield,
   Bedford, Emmett, Pennfield, Marshall or anywhere else, tell me and I'll add
   them. **Specifically: does Kalamazoo count?** One of your reviews mentions
   properties there, but a customer mentioning a city isn't the same as you
   advertising that you serve it, so I left it out.
2. **Do you want a street address published?** The old site only ever showed the
   P.O. Box. Right now the site is set up as a "we come to you" business with no
   street address, which is correct for lawn care. Only change this if you want
   customers turning up somewhere.
3. **Are you licensed and/or insured, and can we say so?** The old site never
   claimed it, so the new one doesn't either. If you are, this is a genuinely
   valuable thing to state.
4. **New photos.** The site currently uses the photos recovered from the old
   one. Several are low quality — particularly the commercial snow clearing shot
   and the after-cleanup yard photo. Good replacements would help most on: the
   homepage main image, snow plowing, and leaf cleanup. Swapping one in is a
   two-minute job.
5. **Anything else you offer that isn't listed.** The site covers mowing, brush
   hogging, core aeration, leaf cleanup, and snow plowing, plus hedge trimming,
   gutter cleaning and stump grinding mentioned within those pages.

---

## Recommended next step: everything outside the website

The website is now the strongest asset you have online, but for a local business
roughly half of what decides whether you show up in the map results happens
*off* your website. Worth doing next:

- **Google Business Profile.** This is the single highest-return item. Make sure
  it's fully filled in — every service listed, correct hours, service area,
  and photos posted regularly. For local search this often matters more than the
  website itself.
- **Consistent name, address and phone everywhere.** Your business name and
  phone number should appear character-for-character identically on Google,
  Yelp, Apple Maps, Bing Places, Facebook, HomeAdvisor and Thumbtack.
  Inconsistencies here actively hold back map rankings.
- **Steady flow of new reviews.** Your review link is now a button on the
  reviews page. A steady trickle of recent reviews outperforms a large batch of
  old ones. Asking every satisfied customer is the highest-value habit you can
  build.
- **Claim the profiles you don't have.** Apple Maps and Bing Places are usually
  unclaimed for businesses like yours and take about ten minutes each.

---

## How this was checked, not just claimed

Everything above was verified with printed output rather than assumed:

- Clean production build from a fresh copy of the code — 21 routes, all
  pre-rendered as static files.
- Every page checked with JavaScript disabled: title, description, heading,
  phone number and structured data all present in the raw page.
- All 66 structured-data blocks machine-validated: valid format, every type a
  real schema.org type, business facts cross-checked against the source facts
  file, and confirmed zero review/rating markup anywhere.
- All 8 retired web addresses confirmed to forward correctly.
- Every page checked at phone width and desktop width for layout problems and
  browser errors — zero of both.
- Google Lighthouse on a simulated phone: Performance 94, Accessibility 100,
  Best Practices 100, SEO 100.
- 29 images, all with written descriptions, zero missing.
