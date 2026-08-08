import sharp from "sharp";
import { readdir, mkdir, copyFile } from "fs/promises";
import { join, extname, basename } from "path";

const INPUT_DIR = "assets-raw";
const OUTPUT_DIR = "public/images";

const SLOTS = {
  "logos/logo-full.png": { out: "logo.webp", width: 600 },
  "logos/logo-367w.png": { out: "logo-sm.webp", width: 200 },
  "photos/schema-image-2.jpg": { out: "hero-lawn.webp", width: 1920 },
  "photos/schema-image-4.jpg": { out: "hero-snow.webp", width: 1920 },
  "photos/schema-image-5.jpg": { out: "equipment-lineup.webp", width: 1920 },
  "photos/schema-image-1.jpg": { out: "leaf-truck.webp", width: 1920 },
  "photos/schema-image-3.jpg": { out: "aeration-tines.webp", width: 1920 },
  "photos/homepage-hero-brush.jpg": { out: "brush-tractor.webp", width: 1920 },
  "photos/brush-hogging-1.jpg": { out: "brush-hogging-1.webp", width: 1200 },
  "photos/brush-hogging-2.jpg": { out: "brush-hogging-2.webp", width: 1200 },
  "photos/brush-hogging-3.jpg": { out: "stump-grinder.webp", width: 1200 },
  "photos/core-aeration-1.jpg": { out: "aeration-plugs.webp", width: 1200 },
  "photos/core-aeration-2.jpg": { out: "aerator-machine.webp", width: 1200 },
  "photos/core-aeration-3.jpg": { out: "aerator-detail.webp", width: 1200 },
  "photos/leaf-cleanup-1.jpg": { out: "leaf-pickup-truck.webp", width: 1200 },
  "photos/leaf-cleanup-2.jpg": { out: "leaf-vacuum-trailer.webp", width: 1200 },
  "photos/leaf-cleanup-3.jpg": { out: "yard-after-cleanup.webp", width: 1200 },
  "photos/snow-plowing-1.jpg": { out: "snow-plow-blade.webp", width: 1200 },
  "photos/snow-plowing-2.jpg": { out: "commercial-snow-clearing.webp", width: 1200 },
  "badges/homeadvisor-screened.png": { out: "badge-ha-screened.webp", width: 200 },
  "badges/homeadvisor-toprated.png": { out: "badge-ha-toprated.webp", width: 200 },
  "badges/homeadvisor-elite.jpg": { out: "badge-ha-elite.webp", width: 200 },
  "badges/homeadvisor-3year.png": { out: "badge-ha-3year.webp", width: 200 },
  "badges/homeadvisor-20reviews.png": { out: "badge-ha-20reviews.webp", width: 200 },
  "badges/thumbtack-pro-2016.png": { out: "badge-tt-pro.webp", width: 200 },
  "badges/thumbtack-top-pro-2018.jpg": { out: "badge-tt-toppro.webp", width: 200 },
  "badges/google-review-badge.png": { out: "badge-google-review.webp", width: 400 },
};

async function run() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  // Copy logo as PNG too (for favicon/OG where WebP isn't ideal)
  await sharp(join(INPUT_DIR, "logos/logo-full.png"))
    .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(join(OUTPUT_DIR, "logo-512.png"));

  // App icons. Next's App Router picks these up from src/app/ automatically
  // and emits the <link rel="icon"> tags, which also stops the browser's
  // fallback /favicon.ico request from 404ing on every page load.
  await mkdir("src/app", { recursive: true });
  await sharp(join(INPUT_DIR, "logos/logo-full.png"))
    .resize(512, 512, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .png()
    .toFile("src/app/icon.png");
  console.log("  ✓ logos/logo-full.png → src/app/icon.png (512x512)");

  // Apple touch icon: opaque white, since iOS composites transparency to black.
  await sharp(join(INPUT_DIR, "logos/logo-full.png"))
    .resize(160, 160, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .extend({
      top: 10,
      bottom: 10,
      left: 10,
      right: 10,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .png()
    .toFile("src/app/apple-icon.png");
  console.log("  ✓ logos/logo-full.png → src/app/apple-icon.png (180x180)");

  // Open Graph image: 1200x630 JPEG from the strongest real photo.
  // JPEG (not WebP) for maximum compatibility across social/chat previews.
  await sharp(join(INPUT_DIR, "photos/schema-image-2.jpg"))
    .resize(1200, 630, { fit: "cover", position: "center" })
    .jpeg({ quality: 85 })
    .toFile(join(OUTPUT_DIR, "og-image.jpg"));
  console.log("  ✓ photos/schema-image-2.jpg → og-image.jpg (1200x630)");

  let converted = 0;
  for (const [src, { out, width }] of Object.entries(SLOTS)) {
    const inputPath = join(INPUT_DIR, src);
    const outputPath = join(OUTPUT_DIR, out);
    try {
      await sharp(inputPath)
        .resize(width, undefined, { withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(outputPath);
      converted++;
      console.log(`  ✓ ${src} → ${out}`);
    } catch (err) {
      console.error(`  ✗ ${src}: ${err.message}`);
    }
  }

  console.log(`\nConverted ${converted}/${Object.keys(SLOTS).length} images to WebP.`);
}

run().catch(console.error);
