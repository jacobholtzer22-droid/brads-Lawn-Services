/**
 * Gallery items. Each entry references an image slot in content/images.ts.
 * Alt text was written after visually inspecting each photo (see
 * assets-raw/manifest.md).
 *
 * Brad is sending new photos. To add one: convert it via
 * `npm run prepare-images`, add the slot to content/images.ts, then add an
 * entry here with the right category.
 */

export const galleryCategories = [
  "Lawn Care",
  "Brush Hogging",
  "Aeration",
  "Leaf Cleanup",
  "Snow",
  "Equipment",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const galleryItems: { slot: string; category: GalleryCategory }[] = [
  { slot: "heroLawn", category: "Lawn Care" },
  { slot: "equipmentLineup", category: "Equipment" },

  { slot: "brushTractor", category: "Brush Hogging" },
  { slot: "brushHogging1", category: "Brush Hogging" },
  { slot: "brushHogging2", category: "Equipment" },
  { slot: "stumpGrinder", category: "Brush Hogging" },

  { slot: "aerationPlugs", category: "Aeration" },
  { slot: "aeratorMachine", category: "Aeration" },
  { slot: "aeratorDetail", category: "Aeration" },
  { slot: "aerationTines", category: "Aeration" },

  { slot: "leafPickupTruck", category: "Leaf Cleanup" },
  { slot: "leafVacuumTrailer", category: "Leaf Cleanup" },
  { slot: "leafTruck", category: "Leaf Cleanup" },
  { slot: "yardAfterCleanup", category: "Leaf Cleanup" },

  { slot: "heroSnow", category: "Snow" },
  { slot: "snowPlowBlade", category: "Snow" },
  { slot: "commercialSnowClearing", category: "Snow" },
];
