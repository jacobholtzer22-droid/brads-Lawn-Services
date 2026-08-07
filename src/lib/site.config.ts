export const siteConfig = {
  name: "Brad's Lawn Services",
  phone: {
    display: "(269) 589-9458",
    e164: "+12695899458",
    tel: "tel:+12695899458",
  },
  email: "callbrad269@gmail.com",
  motto: "Service With An Edge",
  tagline: "A Family Business Since 2010",
  positioning: "Full service grounds maintenance and landscape provider",
  serves: "Residential and commercial properties",
  sinceYear: 2010,
  hours: "Mon – Sun, Open 24 Hours",
  hoursStructured: {
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "24:00",
  },
  availability: "24/7 — Call Anytime",
  location: {
    city: "Battle Creek",
    state: "MI",
    stateFull: "Michigan",
    poBox: "P.O. Box 1395",
    zip: "49016",
  },
  serviceArea: {
    description: "Battle Creek, MI and surrounding areas",
    zips: ["49014", "49015", "49017", "49037"],
  },
  social: {
    facebook:
      "https://facebook.com/Brads-Lawn-Services-1764061037194337",
    homeAdvisor:
      "http://www.homeadvisor.com/rated.BradsLawnServices.57689174.html",
    googleReview:
      "https://search.google.com/local/writereview?placeid=ChIJf09neXrwF4gRaRwX5eKnmEU",
  },
  services: [
    {
      name: "Lawn Mowing",
      slug: "lawn-mowing",
      shortDescription:
        "Weekly mowing, edging, trimming, and walkway blowing for residential and commercial properties.",
    },
    {
      name: "Brush Hogging",
      slug: "brush-hogging",
      shortDescription:
        "Clear overgrown fields, brush, and tall grass with professional-grade tractor equipment.",
    },
    {
      name: "Core Aeration",
      slug: "core-aeration",
      shortDescription:
        "Reduce soil compaction and promote healthier grass growth with professional core aeration.",
    },
    {
      name: "Leaf Cleanup",
      slug: "leaf-cleanup",
      shortDescription:
        "Spring, fall, and storm cleanup with professional leaf blowers, vacuums, and curbside pickup.",
    },
    {
      name: "Snow Plowing",
      slug: "snow-plowing",
      shortDescription:
        "Commercial snow removal, plowing, and salting for lots, drives, sidewalks, and parking areas.",
    },
  ],
  about: {
    origin:
      "Brad's Lawn Services started with an entrepreneurial passion driven to stand out and be a leader in the industry. From our humble beginning we have grown and expanded to a full service grounds maintenance and landscape provider.",
    mottoMeaning: {
      service:
        "Service is our commitment to our customers providing solutions to their lawn care needs.",
      edge: "Edge also represents our high level of equipment maintenance and sharp blades providing optimum performance and cut quality.",
      lines:
        "Sharp defined lines in our edging and trimming that sets us apart from the rest.",
    },
  },
  credentials: [
    { name: "HomeAdvisor Screened & Approved", image: "homeadvisor-screened" },
    { name: "HomeAdvisor Top Rated", image: "homeadvisor-toprated" },
    { name: "HomeAdvisor Elite Service", image: "homeadvisor-elite" },
    { name: "Thumbtack Top Pro 2018", image: "thumbtack-top-pro-2018" },
  ],
  crmUrl:
    process.env.NEXT_PUBLIC_CRM_URL ||
    "https://www.alignandacquire.com/api/contact",
  businessSlug: process.env.NEXT_PUBLIC_BUSINESS_SLUG || "REPLACE_ME_SLUG",

  /**
   * Name of the honeypot field the CRM's spam check reads. Configurable
   * because the exact field name is a Gate 3 confirmation item — if the
   * platform expects something other than "website", set the env var rather
   * than editing the form.
   */
  honeypotField: process.env.NEXT_PUBLIC_HONEYPOT_FIELD || "website",

  /**
   * Cloudflare Turnstile. Empty site key = widget disabled entirely and no
   * turnstileToken is sent. This is the default until Gate 3 confirms whether
   * the CRM endpoint requires a token.
   */
  turnstileSiteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.bradslawnservices.com",
  tracking: {
    awConversionId: process.env.NEXT_PUBLIC_AW_CONVERSION_ID || "",
    awFormLabel: process.env.NEXT_PUBLIC_AW_FORM_LABEL || "",
    awCallLabel: process.env.NEXT_PUBLIC_AW_CALL_LABEL || "",
  },
  googleSiteVerification:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
} as const;
