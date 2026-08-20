/**
 * Manifest for the 2026 photo drop (93 files in "2026 Website Photos/").
 *
 * Every entry was written after VISUALLY INSPECTING the photo via contact
 * sheets — not inferred from the camera filename. `n` is the index on those
 * sheets (sorted filename order, 1-based).
 *
 * `pair` marks before/after: the "after" entry names the slot of its "before".
 *
 * EXCLUDED, with reasons:
 *   #16 — badly blurred and underexposed, no usable subject
 *   #19 — a recognisable third-party storefront brand. Brad plowed it, but
 *         publishing another company's branding as marketing needs their
 *         permission, so it stays out until Jacob says otherwise.
 *   the .mp4 — video is a bigger change than a photo swap; left for a later pass.
 */

export const CATEGORIES = [
  "Lawn Care",
  "Leaf Cleanup",
  "Snow",
  "Hedges & Overgrowth",
  "Storm Cleanup",
  "Brush Hogging",
  "Aeration",
  "Equipment",
];

/** n, slot, category, alt, [pair] */
export const PHOTOS = [
  // ---------- SNOW ----------
  [1, "snow-plow-driveway", "Snow", "Red snow plow blade mounted on a truck beside a cleared driveway after a Battle Creek snowfall"],
  [11, "snow-plow-branded", "Snow", "Close-up of a red Western plow blade lettered Brad's Lawn Services 269-589-9458"],
  [12, "snow-plow-road-pov", "Snow", "View over a raised plow blade while clearing a snow-covered road"],
  [13, "snow-lot-cleared-cars", "Snow", "Commercial parking lot plowed clear to the pavement with customer cars parked"],
  [14, "snow-lot-dusk", "Snow", "Commercial building with its parking lot cleared of snow at dusk"],
  [15, "snow-sidewalk-edge", "Snow", "Sidewalk and curb line cleared down to bare concrete alongside a plowed lot"],
  [17, "snow-plow-sidewalk", "Snow", "White plow blade parked beside a freshly cleared commercial sidewalk"],
  [18, "snow-plow-trucks", "Snow", "Two plow trucks with blades raised, staged in a snow-covered commercial lot"],
  [20, "snow-lot-evening", "Snow", "Plowed commercial lot with snow banked along the edges in the evening"],
  [21, "snow-plow-sunrise", "Snow", "Sunrise over a snow-covered lot seen across the top of a plow blade"],
  [22, "snow-lot-sunny", "Snow", "Single-story commercial building with its lot and drive plowed on a clear winter day"],
  [23, "snow-entrance-cleared", "Snow", "Commercial entrance and walkway cleared of snow right up to the door"],
  [24, "snow-plow-staged", "Snow", "Plow truck parked beside banked snow after clearing a commercial lot"],
  [25, "snow-drive-commercial", "Snow", "Cleared commercial drive running alongside a brick building after plowing"],
  [26, "snow-plow-truck-lot", "Snow", "Plow truck with its blade down working across a snow-covered lot"],

  // ---------- LEAF CLEANUP ----------
  [2, "leaf-crew-blower-street", "Leaf Cleanup", "Crew running a walk-behind blower to windrow leaves toward the street for pickup"],
  [3, "leaf-truck-vac-working", "Leaf Cleanup", "Brad's leaf pick-up truck and vacuum working a curbside leaf row"],
  [4, "leaf-crew-hivis-truck", "Leaf Cleanup", "Crew member in high-visibility gear feeding leaves into the vacuum truck"],
  [5, "leaf-truck-blower-lawn", "Leaf Cleanup", "Branded leaf pick-up truck and walk-behind blower clearing a residential lawn"],
  [6, "leaf-vac-big-pile", "Leaf Cleanup", "Crew member vacuuming a large leaf pile from a front lawn"],
  [7, "leaf-vac-into-truck", "Leaf Cleanup", "Leaves being vacuumed from a curbside pile straight into the collection truck"],
  [8, "leaf-truck-street", "Leaf Cleanup", "Brad's leaf pick-up truck working along a residential street lined with leaves"],
  [9, "leaf-before-brick-house", "Leaf Cleanup", "Front lawn of a brick house buried under fallen leaves before cleanup"],
  [10, "leaf-after-brick-house", "Leaf Cleanup", "The same brick house with its lawn cleared of leaves after cleanup", "leaf-before-brick-house"],
  [27, "leaf-colonial-rows", "Leaf Cleanup", "Leaves blown into rows across the lawn of a colonial house ready for collection"],
  [28, "leaf-rows-slope", "Leaf Cleanup", "Windrowed leaves running across a sloped lawn during fall cleanup"],
  [29, "leaf-yard-sign-cleared", "Leaf Cleanup", "Brad's leaf pick-up yard sign on a cleared colonial lawn after cleanup"],
  [30, "leaf-before-ranch", "Leaf Cleanup", "Ranch house front yard covered in heavy leaf fall before cleanup"],
  [31, "leaf-after-ranch", "Leaf Cleanup", "The same ranch house with its yard cleared of leaves after cleanup", "leaf-before-ranch"],
  [32, "leaf-blower-backyard", "Leaf Cleanup", "Walk-behind blower clearing leaves from a fenced back lawn"],
  [33, "leaf-crew-driveway", "Leaf Cleanup", "Crew clearing leaves along a driveway with a blower and collection truck"],
  [34, "leaf-two-crew-vac", "Leaf Cleanup", "Two crew members working a leaf vacuum hose across a residential lawn"],
  [35, "leaf-truck-branded-crew", "Leaf Cleanup", "Brad's branded leaf pick-up truck with crew vacuuming leaves behind it"],
  [36, "leaf-truck-branded-vac", "Leaf Cleanup", "Crew feeding the vacuum hose beside the branded leaf pick-up truck"],
  [37, "leaf-curb-before", "Leaf Cleanup", "Deep leaf row banked along a residential curb waiting for pickup"],
  [38, "leaf-truck-vac-curb", "Leaf Cleanup", "Branded leaf pick-up truck vacuuming a curbside leaf row clean"],
  [39, "leaf-trailer-curb", "Leaf Cleanup", "Leaf collection trailer and truck working a leaf-lined residential street"],
  [40, "leaf-vac-hose-curb", "Leaf Cleanup", "Vacuum hose drawing leaves out of a heavy curbside pile"],
  [41, "leaf-curb-after", "Leaf Cleanup", "Curb strip cleared back to bare grass after leaf pickup", "leaf-curb-before"],
  [42, "leaf-before-stone-drive", "Leaf Cleanup", "Leaf pile heaped on a driveway beside a stone retaining wall before removal"],
  [43, "leaf-after-stone-drive", "Leaf Cleanup", "The same driveway swept clean beside the stone wall after removal", "leaf-before-stone-drive"],
  [44, "spring-before-curb", "Leaf Cleanup", "Winter leaf litter banked along a curb strip before spring cleanup"],
  [45, "spring-after-curb", "Leaf Cleanup", "The same curb strip cleared to green grass after spring cleanup", "spring-before-curb"],
  [51, "leaf-tractor-pile", "Leaf Cleanup", "Tractor working a long leaf pile heaped along a curb strip"],
  [52, "leaf-pile-trailer", "Leaf Cleanup", "Large leaf pile alongside the dump trailer it is being loaded into"],
  [65, "leaf-vac-trailer-sign", "Leaf Cleanup", "Leaf vacuum trailer and Brad's yard sign set up on a fall cleanup job"],
  [66, "leaf-trailer-autumn", "Leaf Cleanup", "Leaf vacuum trailer and truck parked on an autumn residential street"],
  [68, "leaf-huge-pile", "Leaf Cleanup", "Very large leaf pile stacked beside the vacuum trailer on a front lawn"],
  [69, "leaf-pile-house", "Leaf Cleanup", "Leaf pile and vacuum trailer in front of a two-story house during fall cleanup"],
  [70, "leaf-trailer-hose", "Leaf Cleanup", "Vacuum trailer with its hose laid out across a residential driveway"],
  [71, "leaf-truck-mailbox", "Leaf Cleanup", "Branded leaf pick-up truck and crew clearing leaves beside a mailbox"],
  [72, "leaf-crew-walking-hose", "Leaf Cleanup", "Crew member carrying the vacuum hose up a driveway during fall cleanup"],
  [73, "leaf-truck-dumping", "Leaf Cleanup", "Brad's leaf pick-up truck tipping a load of collected leaves"],

  // ---------- LAWN CARE ----------
  [46, "lawn-spring-sidewalk", "Lawn Care", "Green spring lawn edged cleanly along a residential sidewalk"],
  [47, "lawn-tudor-spring", "Lawn Care", "Tudor-style house with a freshly cut spring lawn"],
  [48, "lawn-tree-spring", "Lawn Care", "Trimmed spring lawn around a mature shade tree in front of a house"],
  [63, "lawn-walk-clean", "Lawn Care", "Clean-edged walkway running between two sections of cut lawn"],
  [64, "lawn-walk-edged", "Lawn Care", "Sharp edging along a concrete walk with the lawn cut on both sides"],
  [78, "lawn-summer-shrubs", "Lawn Care", "Manicured summer lawn with rounded shrubs in front of a ranch home"],
  [79, "lawn-summer-slope", "Lawn Care", "Trimmed shrubs and a healthy green lawn on a sloped back yard"],
  [80, "lawn-summer-lush", "Lawn Care", "Lush green summer lawn running up to a house with shaped shrubs"],
  [81, "lawn-wide-manicured", "Lawn Care", "Wide manicured lawn with a row of shaped shrubs under a clear blue sky"],
  [82, "lawn-wide-summer", "Lawn Care", "Broad summer lawn cut clean across an open residential property"],

  // ---------- HEDGES & OVERGROWTH ----------
  [74, "hedge-before-walk", "Hedges & Overgrowth", "Overgrown hedges crowding in over a front walkway before trimming"],
  [77, "hedge-after-walk", "Hedges & Overgrowth", "The same walkway opened up after the hedges were cut back", "hedge-before-walk"],
  [75, "hedge-before-gate", "Hedges & Overgrowth", "Overgrown shrubs swallowing a gate and path before trimming"],
  [76, "hedge-after-gate", "Hedges & Overgrowth", "The same gate and path clear after the shrubs were trimmed back", "hedge-before-gate"],
  [83, "hedge-before-row", "Hedges & Overgrowth", "Long shrub row grown wild and out of shape before trimming"],
  [84, "hedge-after-row", "Hedges & Overgrowth", "The same shrub row cut back to a clean flat line", "hedge-before-row"],
  [85, "hedge-before-house", "Hedges & Overgrowth", "Overgrown shrubs blocking the front of a house before trimming"],
  [86, "hedge-after-house", "Hedges & Overgrowth", "The same house front opened up after the overgrown shrubs were cut back", "hedge-before-house"],
  [87, "hedge-after-house-2", "Hedges & Overgrowth", "Trimmed shrubs and a clear walkway at the front of the house after the work"],
  [88, "brush-before-tree", "Hedges & Overgrowth", "Heavy brush grown up around the base of a mature tree before clearing"],
  [89, "brush-after-tree", "Hedges & Overgrowth", "The same ground cleared out around the tree after brush removal", "brush-before-tree"],
  [90, "brush-before-mass", "Hedges & Overgrowth", "Dense overgrown shrub mass taking over a side yard before clearing"],
  [91, "brush-after-mass", "Hedges & Overgrowth", "The same side yard with the shrubs cut back and shaped", "brush-before-mass"],
  [92, "hedge-porch-trimmed", "Hedges & Overgrowth", "Freshly trimmed hedge running along a screened porch with the trimmer set down"],
  [93, "hedge-porch-clean", "Hedges & Overgrowth", "Neatly squared hedge line along a screened porch after trimming"],

  // ---------- STORM CLEANUP ----------
  [53, "storm-log-lawn", "Storm Cleanup", "Large fallen tree trunk down across a lawn with a chainsaw ready beside it"],
  [54, "storm-chainsaw-cut", "Storm Cleanup", "Crew member cutting a fallen trunk into sections with a chainsaw"],
  [55, "storm-chainsaw-work", "Storm Cleanup", "Chainsaw work sectioning a downed tree on a residential lawn"],
  [56, "storm-crew-helmet", "Storm Cleanup", "Crew member in helmet and high-visibility gear cutting up a fallen tree"],
  [57, "storm-cut-close", "Storm Cleanup", "Close work cutting a large log into movable rounds"],
  [58, "storm-cut-trunk", "Storm Cleanup", "Sectioning the length of a fallen trunk with a chainsaw"],
  [59, "storm-tractor-splitter", "Storm Cleanup", "Tractor and log splitter set up alongside the truck during storm cleanup"],
  [60, "storm-lawn-cleared", "Storm Cleanup", "Lawn cleared and raked flat after the fallen tree was removed", "storm-log-lawn"],
  [61, "storm-chips-lawn", "Storm Cleanup", "Wood chips left across the lawn where the tree work was carried out"],
  [62, "storm-chips-spread", "Storm Cleanup", "Chips and debris spread over the grass before the final cleanup pass"],

  // ---------- EQUIPMENT ----------
  [49, "equip-tractor-leaves", "Equipment", "Compact tractor carrying a loader bucket heaped with leaves to the dump truck"],
  [50, "equip-tractor-loading", "Equipment", "Tractor loading collected leaves into the dump truck on a residential street"],
  [67, "equip-leaf-vac-trailer", "Equipment", "Brad's leaf vacuum trailer parked and ready for a fall cleanup route"],
];
