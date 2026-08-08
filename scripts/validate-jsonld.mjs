/**
 * Extracts every JSON-LD block from the built HTML and asserts:
 *   1. it parses as valid JSON
 *   2. every @type is a real schema.org type
 *   3. no Review / AggregateRating markup exists anywhere (project policy)
 *   4. the business facts it asserts match seo/FACTS.md
 *
 * Run AFTER `npm run build`:   node scripts/validate-jsonld.mjs
 */
import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

const BUILD_DIR = ".next/server/app";

/** Types this site is allowed to emit. All verified against schema.org. */
const ALLOWED_TYPES = new Set([
  "HomeAndConstructionBusiness",
  "Organization",
  "WebSite",
  "Service",
  "BreadcrumbList",
  "ListItem",
  "FAQPage",
  "Question",
  "Answer",
  "ItemList",
  "City",
  "State",
  "PostalCodeRangeSpecification",
  "OpeningHoursSpecification",
]);

/** Never allowed — self-serving rating markup is a deliberate policy ban. */
const BANNED_TYPES = new Set(["Review", "AggregateRating", "Rating"]);

/** Ground truth from seo/FACTS.md. */
const FACTS = {
  phone: "+12695899458",
  city: "Battle Creek",
  zips: ["49014", "49015", "49017", "49037"],
  founded: "2010",
  opens: "00:00",
  closes: "24:00",
  sameAs: ["facebook.com", "homeadvisor.com"],
};

function walk(dir) {
  const out = [];
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (p.endsWith(".html")) out.push(p);
  }
  return out;
}

function collectTypes(node, acc = new Set()) {
  if (Array.isArray(node)) node.forEach((n) => collectTypes(n, acc));
  else if (node && typeof node === "object") {
    if (typeof node["@type"] === "string") acc.add(node["@type"]);
    Object.values(node).forEach((v) => collectTypes(v, acc));
  }
  return acc;
}

const files = walk(BUILD_DIR).sort();
const failures = [];
const rows = [];
let totalBlocks = 0;
const allTypes = new Set();
let sawBusiness = false;

for (const file of files) {
  const html = readFileSync(file, "utf8");
  const page =
    "/" +
    file
      .replace(BUILD_DIR + "/", "")
      .replace(/\.html$/, "")
      .replace(/^index$/, "");
  const blocks = [
    ...html.matchAll(
      /<script type="application\/ld\+json">(.*?)<\/script>/gs,
    ),
  ].map((m) => m[1]);

  const types = new Set();
  for (const raw of blocks) {
    totalBlocks++;
    let data;
    try {
      data = JSON.parse(raw.replaceAll("\\u003c", "<"));
    } catch (err) {
      failures.push(`${page}: JSON-LD does not parse — ${err.message}`);
      continue;
    }
    collectTypes(data).forEach((t) => {
      types.add(t);
      allTypes.add(t);
    });

    // Fact checks on the business node.
    if (data["@type"] === "HomeAndConstructionBusiness") {
      sawBusiness = true;
      const s = JSON.stringify(data);
      if (data.telephone !== FACTS.phone)
        failures.push(`${page}: telephone ${data.telephone} != ${FACTS.phone}`);
      if (!s.includes(FACTS.city))
        failures.push(`${page}: areaServed missing ${FACTS.city}`);
      for (const z of FACTS.zips)
        if (!s.includes(z)) failures.push(`${page}: areaServed missing ZIP ${z}`);
      if (data.foundingDate !== FACTS.founded)
        failures.push(`${page}: foundingDate ${data.foundingDate} != ${FACTS.founded}`);
      const oh = data.openingHoursSpecification;
      if (!oh || oh.opens !== FACTS.opens || oh.closes !== FACTS.closes)
        failures.push(`${page}: opening hours are not 24/7`);
      for (const d of FACTS.sameAs)
        if (!s.includes(d)) failures.push(`${page}: sameAs missing ${d}`);
      if (data.address)
        failures.push(`${page}: business node has an address (service-area business — must not)`);
      if (data.geo) failures.push(`${page}: business node has geo coords (must not)`);
    }
  }

  for (const t of types) {
    if (BANNED_TYPES.has(t)) failures.push(`${page}: BANNED schema type "${t}"`);
    else if (!ALLOWED_TYPES.has(t))
      failures.push(`${page}: unrecognised schema type "${t}"`);
  }

  rows.push({ page, blocks: blocks.length, types: [...types].join(", ") });
}

console.log("JSON-LD VALIDATION");
console.log("=".repeat(96));
console.log("PAGE".padEnd(20) + "BLOCKS".padEnd(8) + "TYPES");
console.log("-".repeat(96));
for (const r of rows)
  console.log(r.page.padEnd(20) + String(r.blocks).padEnd(8) + r.types);

console.log("\n" + "-".repeat(96));
console.log(`Pages: ${rows.length}   JSON-LD blocks: ${totalBlocks}`);
console.log(`Distinct @types: ${[...allTypes].sort().join(", ")}`);
console.log(
  `Banned types (Review/AggregateRating/Rating) found: ${
    [...allTypes].filter((t) => BANNED_TYPES.has(t)).length
  }`,
);
if (!sawBusiness) failures.push("No HomeAndConstructionBusiness node found on any page");

if (failures.length) {
  console.log("\nFAILURES:");
  failures.forEach((f) => console.log("  ✗ " + f));
  process.exit(1);
}
console.log("\nAll checks passed.");
