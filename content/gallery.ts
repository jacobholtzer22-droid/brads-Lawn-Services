/**
 * Gallery items. Each entry references an image slot in content/images.ts.
 * Alt text lives on the slot, not here.
 *
 * GENERATED for the 2026 photo drop by scripts/wire-new-photos.mjs, with
 * the original 2026-08 photo set kept at the end.
 *
 * To add a photo: convert it, add a slot to content/images.ts, then add a
 * line here with its category.
 */

export const galleryCategories = [
  "Lawn Care",
  "Leaf Cleanup",
  "Snow",
  "Hedges & Overgrowth",
  "Storm Cleanup",
  "Brush Hogging",
  "Aeration",
  "Equipment",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  slot: string;
  category: GalleryCategory;
  /** Slot of the "before" photo when this entry is an "after". */
  before?: string;
};

export const galleryItems: GalleryItem[] = [
  { slot: "snowPlowDriveway", category: "Snow" },
  { slot: "snowPlowBranded", category: "Snow" },
  { slot: "snowPlowRoadPov", category: "Snow" },
  { slot: "snowLotClearedCars", category: "Snow" },
  { slot: "snowLotDusk", category: "Snow" },
  { slot: "snowSidewalkEdge", category: "Snow" },
  { slot: "snowPlowSidewalk", category: "Snow" },
  { slot: "snowPlowTrucks", category: "Snow" },
  { slot: "snowLotEvening", category: "Snow" },
  { slot: "snowPlowSunrise", category: "Snow" },
  { slot: "snowLotSunny", category: "Snow" },
  { slot: "snowEntranceCleared", category: "Snow" },
  { slot: "snowPlowStaged", category: "Snow" },
  { slot: "snowDriveCommercial", category: "Snow" },
  { slot: "snowPlowTruckLot", category: "Snow" },
  { slot: "leafCrewBlowerStreet", category: "Leaf Cleanup" },
  { slot: "leafTruckVacWorking", category: "Leaf Cleanup" },
  { slot: "leafCrewHivisTruck", category: "Leaf Cleanup" },
  { slot: "leafTruckBlowerLawn", category: "Leaf Cleanup" },
  { slot: "leafVacBigPile", category: "Leaf Cleanup" },
  { slot: "leafVacIntoTruck", category: "Leaf Cleanup" },
  { slot: "leafTruckStreet", category: "Leaf Cleanup" },
  { slot: "leafBeforeBrickHouse", category: "Leaf Cleanup" },
  { slot: "leafAfterBrickHouse", category: "Leaf Cleanup", before: "leafBeforeBrickHouse" },
  { slot: "leafColonialRows", category: "Leaf Cleanup" },
  { slot: "leafRowsSlope", category: "Leaf Cleanup" },
  { slot: "leafYardSignCleared", category: "Leaf Cleanup" },
  { slot: "leafBeforeRanch", category: "Leaf Cleanup" },
  { slot: "leafAfterRanch", category: "Leaf Cleanup", before: "leafBeforeRanch" },
  { slot: "leafBlowerBackyard", category: "Leaf Cleanup" },
  { slot: "leafCrewDriveway", category: "Leaf Cleanup" },
  { slot: "leafTwoCrewVac", category: "Leaf Cleanup" },
  { slot: "leafTruckBrandedCrew", category: "Leaf Cleanup" },
  { slot: "leafTruckBrandedVac", category: "Leaf Cleanup" },
  { slot: "leafCurbBefore", category: "Leaf Cleanup" },
  { slot: "leafTruckVacCurb", category: "Leaf Cleanup" },
  { slot: "leafTrailerCurb", category: "Leaf Cleanup" },
  { slot: "leafVacHoseCurb", category: "Leaf Cleanup" },
  { slot: "leafCurbAfter", category: "Leaf Cleanup", before: "leafCurbBefore" },
  { slot: "leafBeforeStoneDrive", category: "Leaf Cleanup" },
  { slot: "leafAfterStoneDrive", category: "Leaf Cleanup", before: "leafBeforeStoneDrive" },
  { slot: "springBeforeCurb", category: "Leaf Cleanup" },
  { slot: "springAfterCurb", category: "Leaf Cleanup", before: "springBeforeCurb" },
  { slot: "leafTractorPile", category: "Leaf Cleanup" },
  { slot: "leafPileTrailer", category: "Leaf Cleanup" },
  { slot: "leafVacTrailerSign", category: "Leaf Cleanup" },
  { slot: "leafTrailerAutumn", category: "Leaf Cleanup" },
  { slot: "leafHugePile", category: "Leaf Cleanup" },
  { slot: "leafPileHouse", category: "Leaf Cleanup" },
  { slot: "leafTrailerHose", category: "Leaf Cleanup" },
  { slot: "leafTruckMailbox", category: "Leaf Cleanup" },
  { slot: "leafCrewWalkingHose", category: "Leaf Cleanup" },
  { slot: "leafTruckDumping", category: "Leaf Cleanup" },
  { slot: "lawnSpringSidewalk", category: "Lawn Care" },
  { slot: "lawnTudorSpring", category: "Lawn Care" },
  { slot: "lawnTreeSpring", category: "Lawn Care" },
  { slot: "lawnWalkClean", category: "Lawn Care" },
  { slot: "lawnWalkEdged", category: "Lawn Care" },
  { slot: "lawnSummerShrubs", category: "Lawn Care" },
  { slot: "lawnSummerSlope", category: "Lawn Care" },
  { slot: "lawnSummerLush", category: "Lawn Care" },
  { slot: "lawnWideManicured", category: "Lawn Care" },
  { slot: "lawnWideSummer", category: "Lawn Care" },
  { slot: "hedgeBeforeWalk", category: "Hedges & Overgrowth" },
  { slot: "hedgeAfterWalk", category: "Hedges & Overgrowth", before: "hedgeBeforeWalk" },
  { slot: "hedgeBeforeGate", category: "Hedges & Overgrowth" },
  { slot: "hedgeAfterGate", category: "Hedges & Overgrowth", before: "hedgeBeforeGate" },
  { slot: "hedgeBeforeRow", category: "Hedges & Overgrowth" },
  { slot: "hedgeAfterRow", category: "Hedges & Overgrowth", before: "hedgeBeforeRow" },
  { slot: "hedgeBeforeHouse", category: "Hedges & Overgrowth" },
  { slot: "hedgeAfterHouse", category: "Hedges & Overgrowth", before: "hedgeBeforeHouse" },
  { slot: "hedgeAfterHouse2", category: "Hedges & Overgrowth" },
  { slot: "brushBeforeTree", category: "Hedges & Overgrowth" },
  { slot: "brushAfterTree", category: "Hedges & Overgrowth", before: "brushBeforeTree" },
  { slot: "brushBeforeMass", category: "Hedges & Overgrowth" },
  { slot: "brushAfterMass", category: "Hedges & Overgrowth", before: "brushBeforeMass" },
  { slot: "hedgePorchTrimmed", category: "Hedges & Overgrowth" },
  { slot: "hedgePorchClean", category: "Hedges & Overgrowth" },
  { slot: "stormLogLawn", category: "Storm Cleanup" },
  { slot: "stormChainsawCut", category: "Storm Cleanup" },
  { slot: "stormChainsawWork", category: "Storm Cleanup" },
  { slot: "stormCrewHelmet", category: "Storm Cleanup" },
  { slot: "stormCutClose", category: "Storm Cleanup" },
  { slot: "stormCutTrunk", category: "Storm Cleanup" },
  { slot: "stormTractorSplitter", category: "Storm Cleanup" },
  { slot: "stormLawnCleared", category: "Storm Cleanup", before: "stormLogLawn" },
  { slot: "stormChipsLawn", category: "Storm Cleanup" },
  { slot: "stormChipsSpread", category: "Storm Cleanup" },
  { slot: "equipTractorLeaves", category: "Equipment" },
  { slot: "equipTractorLoading", category: "Equipment" },
  { slot: "equipLeafVacTrailer", category: "Equipment" },

  /* ---- original 2026-08 set ---- */
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

/** Before/after pairs, newest first. Drives the Before & After section. */
export const beforeAfterPairs: { before: string; after: string; label: string }[] = [
  { before: "leafBeforeBrickHouse", after: "leafAfterBrickHouse", label: "Leaf Cleanup" },
  { before: "leafBeforeRanch", after: "leafAfterRanch", label: "Leaf Cleanup" },
  { before: "leafCurbBefore", after: "leafCurbAfter", label: "Leaf Cleanup" },
  { before: "leafBeforeStoneDrive", after: "leafAfterStoneDrive", label: "Leaf Cleanup" },
  { before: "springBeforeCurb", after: "springAfterCurb", label: "Leaf Cleanup" },
  { before: "hedgeBeforeWalk", after: "hedgeAfterWalk", label: "Hedges & Overgrowth" },
  { before: "hedgeBeforeGate", after: "hedgeAfterGate", label: "Hedges & Overgrowth" },
  { before: "hedgeBeforeRow", after: "hedgeAfterRow", label: "Hedges & Overgrowth" },
  { before: "hedgeBeforeHouse", after: "hedgeAfterHouse", label: "Hedges & Overgrowth" },
  { before: "brushBeforeTree", after: "brushAfterTree", label: "Hedges & Overgrowth" },
  { before: "brushBeforeMass", after: "brushAfterMass", label: "Hedges & Overgrowth" },
  { before: "stormLogLawn", after: "stormLawnCleared", label: "Storm Cleanup" },
];
