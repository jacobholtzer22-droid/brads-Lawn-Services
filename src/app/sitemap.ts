import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site.config";
import { services } from "../../content/services";

/**
 * Every real page, absolute www URLs, no redirect targets and no 404-only
 * routes. Retired URLs are handled by 308 redirects in next.config.js and are
 * deliberately absent here.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (path: string) => `${siteConfig.siteUrl}${path}`;

  const staticPages: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1.0, freq: "weekly" },
    { path: "/about-us", priority: 0.7, freq: "yearly" },
    { path: "/reviews", priority: 0.8, freq: "monthly" },
    { path: "/areas-we-serve", priority: 0.8, freq: "monthly" },
    { path: "/gallery", priority: 0.6, freq: "monthly" },
    { path: "/employment", priority: 0.4, freq: "yearly" },
    { path: "/contact", priority: 0.9, freq: "yearly" },
    { path: "/request-a-quote", priority: 0.9, freq: "yearly" },
  ];

  return [
    ...staticPages.map((p) => ({
      url: url(p.path),
      lastModified: now,
      changeFrequency: p.freq,
      priority: p.priority,
    })),
    ...services.map((s) => ({
      url: url(`/${s.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
