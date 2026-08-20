/**
 * Manifest for the Aeration photo drop ("2026 Website Photos/Aeration/",
 * 87 jpgs + 12 mp4s).
 *
 * Every entry written after visually inspecting the photo on contact sheets.
 * `n` is the sheet index (A1-A87, sorted filename order).
 *
 * USED 55 OF 87. This set is burst-heavy — the same sign, machine angle, or
 * patch of turf shot four or five times a second apart. Publishing all of them
 * would pad the gallery with near-identical frames, which reads as filler and
 * makes the good shots harder to find. Skipped, by group:
 *
 *   A14, A15   crew member carrying a dog — not service content
 *   A32        seed-application spec chart — an equipment sticker, not marketing
 *   A13        drum with spec decal — same reason
 *   A42-A45    four near-identical close-ups of the same yard sign; kept A41
 *              (sign in its yard) and A46 (sign with truck and trailer)
 *   A51-A53,   repeat profile angles of the same Turfco aerator on the same
 *   A55, A77   lawn; kept A6, A10, A54, A78 which differ meaningfully
 *   A2, A4,    repeat frames of the same aerated turf; kept the sharpest of
 *   A22, A23,  each cluster
 *   A26, A27,
 *   A35, A38,
 *   A39, A81-A83
 *   A57-A59,   repeat frames of the same load-in by the trailer; kept A56, A60
 *   A62, A64,  repeat frames of the same pass; kept A61, A63, A69, A74
 *   A70
 *   A66        second angle of the same two-truck line-up; kept A65
 *   A71, A72,  repeat green-turf frames already covered by A67/A73
 *   A76, A79,
 *   A80
 *   the 12 mp4s — video is a bigger change than a photo swap
 *
 * Any of these can be added back in a minute; say which and I will.
 */

/** n, slot, category, alt */
export const AERATION_PHOTOS = [
  // ---------- what aeration actually does (the educational core) ----------
  [34, "aer-plugs-hand", "Aeration", "Soil cores pulled from a lawn held in a hand, showing the depth core aeration reaches"],
  [85, "aer-plugs-hand-close", "Aeration", "Close view of soil plugs removed during core aeration"],
  [87, "aer-tine-core", "Aeration", "Hollow aeration tine with a soil core still inside it above the grass"],
  [86, "aer-tines-plugs", "Aeration", "Aeration tines set into the turf with fresh soil plugs alongside"],
  [36, "aer-plug-and-hole", "Aeration", "A soil plug beside the open hole it was pulled from in the lawn"],
  [37, "aer-hand-pointing", "Aeration", "Hand indicating the soil cores left across a freshly aerated lawn"],
  [5, "aer-plugs-turf", "Aeration", "Soil cores scattered across green turf straight after aeration"],
  [20, "aer-plugs-spread", "Aeration", "Plugs spread evenly over the grass following a core aeration pass"],
  [25, "aer-plugs-dense", "Aeration", "Dense pattern of soil cores across a lawn after aeration"],

  // ---------- aerated lawns ----------
  [1, "aer-lawn-result", "Aeration", "Lawn showing the soil cores left behind by a core aeration pass"],
  [3, "aer-lawn-rows", "Aeration", "Aeration rows running across a residential lawn"],
  [24, "aer-lawn-striped", "Aeration", "Aerated lawn with mowing stripes still visible through the cores"],
  [21, "aer-lawn-wide", "Aeration", "Wide view of a residential lawn directly after core aeration"],
  [33, "aer-lawn-seeded", "Aeration", "Lawn aerated and overseeded, with cores breaking down into the turf"],
  [40, "aer-lawn-open", "Aeration", "Open lawn area covered in soil cores after aeration"],
  [47, "aer-lawn-strip", "Aeration", "Strip of lawn worked over with the core aerator"],

  // ---------- the machine ----------
  [7, "aer-controls-branded", "Aeration", "Turfco aerator control panel carrying the Brad's Lawn Services decal and phone number"],
  [6, "aer-machine-lawn", "Aeration", "Turfco walk-behind core aerator parked on a residential lawn"],
  [10, "aer-machine-profile", "Aeration", "Side profile of the Turfco XT8 core aerator with its seeder hopper"],
  [54, "aer-machine-clean", "Aeration", "Turfco core aerator ready for work on a customer's lawn"],
  [78, "aer-machine-front", "Aeration", "Front view of the core aerator with the seed hopper mounted"],
  [8, "aer-drum-grass", "Aeration", "Aerator tine drum lowered over the grass ready to pull cores"],
  [48, "aer-drum-tines", "Aeration", "Close view of the aerator's hollow tines above the turf"],
  [49, "aer-tines-working", "Aeration", "Aeration tines biting into a thin patch of lawn"],
  [50, "aer-drum-raised", "Aeration", "Aerator drum raised, showing the full row of hollow tines"],
  [84, "aer-hopper-seed", "Aeration", "Seed hopper loaded on the aerator ready for an overseeding pass"],

  // ---------- overseeding ----------
  [29, "aer-seeder-loaded", "Aeration", "Seeder box loaded with grass seed ready to go out behind the aerator"],
  [30, "aer-seeder-box", "Aeration", "Turfco seeder box mounted for an overseeding run"],

  // ---------- crew at work ----------
  [16, "aer-crew-branded-shirt", "Aeration", "Crew member in a Brad's Lawn Services shirt running the core aerator"],
  [18, "aer-crew-machine", "Aeration", "Crew member standing with the core aerator on a residential lawn"],
  [61, "aer-crew-spring-lawn", "Aeration", "Crew member working the aerator across a spring lawn"],
  [60, "aer-crew-sidewalk", "Aeration", "Aerating a front lawn up along the sidewalk edge"],
  [63, "aer-crew-riding", "Aeration", "Riding the aerator across a lawn with the truck and trailer at the curb"],
  [56, "aer-loading-trailer", "Aeration", "Loading the aerator back onto the trailer at the end of a job"],
  [74, "aer-crew-field-front", "Aeration", "Crew member driving the aerator straight down a large open field"],
  [69, "aer-crew-field-pass", "Aeration", "Working the spreader across a large sports field"],

  // ---------- commercial scale ----------
  [67, "aer-field-stripes", "Aeration", "Large sports field striped by a full aeration and overseeding pass"],
  [68, "aer-field-wide", "Aeration", "Wide view of a commercial field being aerated and overseeded"],
  [73, "aer-field-green", "Aeration", "Freshly worked commercial turf running out toward the ball diamond"],
  [75, "aer-field-diamond", "Aeration", "Aerated and seeded turf alongside a baseball diamond"],

  // ---------- equipment / fleet ----------
  [28, "equip-fleet-yard", "Equipment", "Zero-turn mowers and the core aerator lined up outside the shop"],
  [65, "equip-trucks-trailers", "Equipment", "Two Brad's Lawn Services trucks with enclosed trailers staged for the day"],
  [9, "equip-aerator-detail", "Equipment", "Engine and drive detail on the Turfco core aerator"],
  [11, "equip-aerator-side", "Equipment", "Turfco XT8 aerator seen from the operator's side"],
  [12, "equip-aerator-rear", "Equipment", "Rear of the core aerator showing the tine drum and hopper"],
  [51, "equip-aerator-turf", "Equipment", "Core aerator standing on a customer's front lawn"],
  [52, "equip-aerator-hopper", "Equipment", "Core aerator with the seed hopper fitted for overseeding"],

  // ---------- branded yard signs ----------
  [41, "aer-yard-sign", "Aeration", "Core Aeration yard sign staked in a customer's lawn"],
  [46, "aer-sign-truck", "Aeration", "Core Aeration yard sign with the work truck and trailer at the curb"],

  // ---------- turf results ----------
  [71, "aer-turf-green", "Lawn Care", "Thick green turf a few weeks on from aeration and overseeding"],
  [72, "aer-turf-recovered", "Lawn Care", "Recovered lawn filled in after core aeration and seeding"],
  [81, "aer-turf-thin", "Aeration", "Thin turf opened up by aeration so seed can reach the soil"],
  [82, "aer-turf-seeded", "Aeration", "Seeded ground worked over after an aeration pass"],
  [83, "aer-turf-fill", "Aeration", "Lawn beginning to fill back in after aeration and overseeding"],
  [76, "aer-turf-dormant", "Aeration", "Dormant turf aerated early in the season ahead of green-up"],
];
