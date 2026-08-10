/**
 * Dumps the frozen SEO surface from the BUILT HTML.
 *
 * Phase 0 of the visual redesign captures this as redesign/BASELINE-SEO.txt.
 * Phase D re-runs the identical script against the new build and diffs. The
 * diff must be empty — that is the proof the redesign changed presentation
 * only.
 *
 *   npm run build && node scripts/dump-seo.mjs > redesign/BASELINE-SEO.txt
 *
 * Deterministic by construction: pages sorted, tags emitted in a fixed order,
 * JSON-LD re-serialised with stable 2-space formatting (key order preserved
 * from the source object, which is itself deterministic).
 */
import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

const BUILD_DIR = ".next/server/app";

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (p.endsWith(".html")) out.push(p);
  }
  return out;
}

function decode(s) {
  return s
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&#39;", "'")
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&nbsp;", " ");
}

/** First capture group of the first match, or a fixed marker. */
function one(html, re) {
  const m = html.match(re);
  return m ? decode(m[1]) : "(none)";
}

/** All name/property meta tags matching a prefix, sorted for stability. */
function metas(html, attr, prefix) {
  const re = new RegExp(
    `<meta[^>]+${attr}="(${prefix}[^"]*)"[^>]*content="([^"]*)"`,
    "g",
  );
  const found = [...html.matchAll(re)].map(
    (m) => `${m[1]} = ${decode(m[2])}`,
  );
  return found.sort();
}

const files = walk(BUILD_DIR).sort();
const lines = [];

lines.push("BASELINE SEO SURFACE — frozen contract for the visual redesign");
lines.push("Generated from the production build by scripts/dump-seo.mjs");
lines.push("=".repeat(78));

for (const file of files) {
  const html = readFileSync(file, "utf8");
  const route =
    "/" +
    file
      .replace(BUILD_DIR + "/", "")
      .replace(/\.html$/, "")
      .replace(/^index$/, "");

  lines.push("");
  lines.push("#".repeat(78));
  lines.push(`ROUTE: ${route.length > 1 ? route.replace(/\/$/, "") : "/"}`);
  lines.push("#".repeat(78));

  lines.push(`TITLE:       ${one(html, /<title>(.*?)<\/title>/s)}`);
  lines.push(
    `DESCRIPTION: ${one(html, /<meta name="description" content="(.*?)"/s)}`,
  );
  lines.push(
    `CANONICAL:   ${one(html, /<link rel="canonical" href="(.*?)"/s)}`,
  );
  lines.push(
    `ROBOTS:      ${one(html, /<meta name="robots" content="(.*?)"/s)}`,
  );

  const og = metas(html, "property", "og:");
  const tw = metas(html, "name", "twitter:");
  lines.push("OPENGRAPH:");
  (og.length ? og : ["(none)"]).forEach((t) => lines.push(`  ${t}`));
  lines.push("TWITTER:");
  (tw.length ? tw : ["(none)"]).forEach((t) => lines.push(`  ${t}`));

  const blocks = [
    ...html.matchAll(
      /<script type="application\/ld\+json">(.*?)<\/script>/gs,
    ),
  ].map((m) => m[1]);

  lines.push(`JSON-LD BLOCKS: ${blocks.length}`);
  blocks.forEach((raw, i) => {
    lines.push(`--- json-ld[${i}] ---`);
    try {
      lines.push(JSON.stringify(JSON.parse(raw.replaceAll("\\u003c", "<")), null, 2));
    } catch (err) {
      lines.push(`!! UNPARSEABLE: ${err.message}`);
      lines.push(raw);
    }
  });
}

lines.push("");
lines.push("=".repeat(78));
lines.push(`TOTAL ROUTES: ${files.length}`);

console.log(lines.join("\n"));
