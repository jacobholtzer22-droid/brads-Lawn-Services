/**
 * One-shot generator: reads the converted-photo record and writes the new
 * slots into content/images.ts plus a regenerated content/gallery.ts.
 *
 * Run after scripts/new-photos.manifest.mjs has been converted. Safe to
 * re-run: it replaces the generated blocks between the BEGIN/END markers
 * rather than appending duplicates.
 */
import { readFileSync, writeFileSync } from "fs";
import sharp from "sharp";
import { PHOTOS, CATEGORIES } from "./new-photos.manifest.mjs";

const BEGIN = "/* ===== BEGIN 2026 PHOTOS (generated) ===== */";
const END = "/* ===== END 2026 PHOTOS (generated) ===== */";

const camel = (s) => s.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
const esc = (s) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');

const rows = [];
for (const [n, slot, cat, alt, pair] of PHOTOS) {
  const m = await sharp(`public/images/${slot}.webp`).metadata();
  rows.push({ n, slot, key: camel(slot), cat, alt, pair, w: m.width, h: m.height });
}

/* ---------------- content/images.ts ---------------- */
const slotBlock =
  `${BEGIN}\n` +
  `  /*\n` +
  `   * 2026 photo drop — 91 files, every one visually inspected before its\n` +
  `   * alt text was written. Slots carry intrinsic w/h so the masonry gallery\n` +
  `   * renders each photo at its true aspect ratio with zero layout shift.\n` +
  `   */\n` +
  rows
    .map(
      (r) =>
        `  ${r.key}: {\n    src: "/images/${r.slot}.webp",\n    alt: "${esc(r.alt)}",\n    w: ${r.w},\n    h: ${r.h},\n  },`,
    )
    .join("\n") +
  `\n  ${END}\n`;

let img = readFileSync("content/images.ts", "utf8");
if (img.includes(BEGIN)) {
  img = img.replace(
    new RegExp(`${BEGIN.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[\\s\\S]*?${END.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\n`),
    slotBlock,
  );
} else {
  img = img.replace(/\}\s*as const;\s*$/, slotBlock + "} as const;\n");
}
writeFileSync("content/images.ts", img);

/* ---------------- content/gallery.ts ---------------- */
const legacy = [
  ["heroLawn", "Lawn Care"], ["equipmentLineup", "Equipment"],
  ["brushTractor", "Brush Hogging"], ["brushHogging1", "Brush Hogging"],
  ["brushHogging2", "Equipment"], ["stumpGrinder", "Brush Hogging"],
  ["aerationPlugs", "Aeration"], ["aeratorMachine", "Aeration"],
  ["aeratorDetail", "Aeration"], ["aerationTines", "Aeration"],
  ["leafPickupTruck", "Leaf Cleanup"], ["leafVacuumTrailer", "Leaf Cleanup"],
  ["leafTruck", "Leaf Cleanup"], ["yardAfterCleanup", "Leaf Cleanup"],
  ["heroSnow", "Snow"], ["snowPlowBlade", "Snow"], ["commercialSnowClearing", "Snow"],
];

const gallery =
  `/**\n` +
  ` * Gallery items. Each entry references an image slot in content/images.ts.\n` +
  ` * Alt text lives on the slot, not here.\n` +
  ` *\n` +
  ` * GENERATED for the 2026 photo drop by scripts/wire-new-photos.mjs, with\n` +
  ` * the original 2026-08 photo set kept at the end.\n` +
  ` *\n` +
  ` * To add a photo: convert it, add a slot to content/images.ts, then add a\n` +
  ` * line here with its category.\n` +
  ` */\n\n` +
  `export const galleryCategories = [\n` +
  CATEGORIES.map((c) => `  "${c}",`).join("\n") +
  `\n] as const;\n\n` +
  `export type GalleryCategory = (typeof galleryCategories)[number];\n\n` +
  `export type GalleryItem = {\n  slot: string;\n  category: GalleryCategory;\n  /** Slot of the "before" photo when this entry is an "after". */\n  before?: string;\n};\n\n` +
  `export const galleryItems: GalleryItem[] = [\n` +
  rows
    .map(
      (r) =>
        `  { slot: "${r.key}", category: "${r.cat}"${r.pair ? `, before: "${camel(r.pair)}"` : ""} },`,
    )
    .join("\n") +
  `\n\n  /* ---- original 2026-08 set ---- */\n` +
  legacy.map(([k, c]) => `  { slot: "${k}", category: "${c}" },`).join("\n") +
  `\n];\n\n` +
  `/** Before/after pairs, newest first. Drives the Before & After section. */\n` +
  `export const beforeAfterPairs: { before: string; after: string; label: string }[] = [\n` +
  rows
    .filter((r) => r.pair)
    .map(
      (r) =>
        `  { before: "${camel(r.pair)}", after: "${r.key}", label: "${esc(r.cat)}" },`,
    )
    .join("\n") +
  `\n];\n`;

writeFileSync("content/gallery.ts", gallery);

console.log(`content/images.ts   +${rows.length} slots`);
console.log(`content/gallery.ts  ${rows.length + legacy.length} items, ${rows.filter((r) => r.pair).length} before/after pairs`);
console.log(`portrait ${rows.filter((r) => r.h > r.w).length} / landscape ${rows.filter((r) => r.w >= r.h).length}`);
