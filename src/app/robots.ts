import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site.config";

/**
 * Everything on this site is public marketing content, so every crawler —
 * traditional search AND AI answer engines — is explicitly allowed.
 * The AI bots are listed by name rather than relying on the wildcard so the
 * intent is unambiguous to operators who check for their own user agent.
 */
const AI_AND_SEARCH_BOTS = [
  // Traditional search
  "Googlebot",
  "Bingbot",
  // OpenAI
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  // Google AI
  "Google-Extended",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Apple
  "Applebot",
  "Applebot-Extended",
  // Meta
  "Meta-ExternalAgent",
  // Amazon
  "Amazonbot",
  // Common Crawl
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_AND_SEARCH_BOTS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
    host: siteConfig.siteUrl,
  };
}
