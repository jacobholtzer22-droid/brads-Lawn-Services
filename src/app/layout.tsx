import type { Metadata } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import { siteConfig } from "@/lib/site.config";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { MobileCTABar } from "@/components/MobileCTABar";
import { Analytics } from "@/components/Analytics";
import Script from "next/script";
import "./globals.css";

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const heading = Lexend({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} | Lawn Care in ${siteConfig.location.city}, ${siteConfig.location.state}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.name} provides professional lawn mowing, brush hogging, core aeration, leaf cleanup, and snow plowing in ${siteConfig.location.city}, ${siteConfig.location.state}. ${siteConfig.availability}.`,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    url: siteConfig.siteUrl,
    title: `${siteConfig.name} | Lawn Care in ${siteConfig.location.city}, ${siteConfig.location.state}`,
    description: `Lawn mowing, brush hogging, core aeration, leaf cleanup, and snow plowing in ${siteConfig.location.city}, ${siteConfig.location.state}. ${siteConfig.tagline}.`,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `Freshly mowed and striped lawn maintained by ${siteConfig.name} in ${siteConfig.location.city}, ${siteConfig.location.state}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-image.jpg"],
  },
  ...(siteConfig.googleSiteVerification && {
    verification: { google: siteConfig.googleSiteVerification },
  }),
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${siteConfig.siteUrl}/#business`,
  name: siteConfig.name,
  telephone: siteConfig.phone.e164,
  email: siteConfig.email,
  url: siteConfig.siteUrl,
  image: `${siteConfig.siteUrl}/images/logo-512.png`,
  logo: `${siteConfig.siteUrl}/images/logo-512.png`,
  description: `Professional lawn care and grounds maintenance in ${siteConfig.location.city}, ${siteConfig.location.state}. ${siteConfig.motto}.`,
  // Deliberately NO address and NO geo: this is a service-area business and
  // no street address is published anywhere. See seo/FACTS.md.
  // Deliberately NO aggregateRating / Review: policy decision, see the brief.
  areaServed: [
    {
      "@type": "City",
      name: siteConfig.location.city,
      containedInPlace: {
        "@type": "State",
        name: siteConfig.location.stateFull,
      },
    },
    ...siteConfig.serviceArea.zips.map((zip) => ({
      "@type": "PostalCodeRangeSpecification" as const,
      postalCodeBegin: zip,
      postalCodeEnd: zip,
    })),
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: siteConfig.hoursStructured.dayOfWeek,
    opens: siteConfig.hoursStructured.opens,
    closes: siteConfig.hoursStructured.closes,
  },
  foundingDate: String(siteConfig.sinceYear),
  slogan: siteConfig.motto,
  sameAs: [siteConfig.social.facebook, siteConfig.social.homeAdvisor],
  knowsAbout: [
    "Lawn Mowing",
    "Brush Hogging",
    "Core Aeration",
    "Leaf Cleanup",
    "Snow Plowing",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.siteUrl}/#website`,
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  publisher: { "@id": `${siteConfig.siteUrl}/#business` },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.siteUrl}/#organization`,
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  logo: `${siteConfig.siteUrl}/images/logo-512.png`,
  telephone: siteConfig.phone.e164,
  email: siteConfig.email,
  foundingDate: String(siteConfig.sinceYear),
  sameAs: [siteConfig.social.facebook, siteConfig.social.homeAdvisor],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${body.variable} ${heading.variable}`}>
      <head>
        {/*
          Marks the document as JS-capable so the scroll-reveal CSS can apply
          its hidden state. Without JS this never runs and all content renders
          visible. Runs before paint to avoid a flash of revealed content.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body className="font-body antialiased pb-16 md:pb-0">
        <JsonLd data={businessSchema} />
        <JsonLd data={websiteSchema} />
        <JsonLd data={organizationSchema} />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCTABar />
        <Analytics />
        {/* Turnstile loads only when a site key is configured (Gate 3 item). */}
        {siteConfig.turnstileSiteKey && (
          <Script
            id="cf-turnstile"
            src="https://challenges.cloudflare.com/turnstile/v0/api.js"
            strategy="afterInteractive"
            defer
          />
        )}
      </body>
    </html>
  );
}
