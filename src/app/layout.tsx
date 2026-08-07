import type { Metadata } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import { siteConfig } from "@/lib/site.config";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
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
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
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
  address: {
    "@type": "PostalAddress",
    postOfficeBoxNumber: siteConfig.location.poBox.replace("P.O. Box ", ""),
    addressLocality: siteConfig.location.city,
    addressRegion: siteConfig.location.state,
    postalCode: siteConfig.location.zip,
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: siteConfig.location.city,
    containedInPlace: {
      "@type": "State",
      name: siteConfig.location.stateFull,
    },
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: siteConfig.hoursStructured.dayOfWeek,
    opens: siteConfig.hoursStructured.opens,
    closes: siteConfig.hoursStructured.closes,
  },
  foundingDate: String(siteConfig.sinceYear),
  slogan: siteConfig.motto,
  sameAs: [siteConfig.social.facebook],
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
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  publisher: { "@id": `${siteConfig.siteUrl}/#business` },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${body.variable} ${heading.variable}`}>
      <body className="font-body antialiased">
        <JsonLd data={businessSchema} />
        <JsonLd data={websiteSchema} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
