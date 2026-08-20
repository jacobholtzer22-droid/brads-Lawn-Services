/**
 * Per-service page content.
 *
 * EVERY factual claim here traces to seo/FACTS.md. Do not add capabilities,
 * pricing, timelines, licensing, or named cities that are not in that file.
 */

export type ServiceContent = {
  slug: string;
  name: string;
  h1: string;
  /** First two sentences must answer who / what / where. */
  intro: string;
  intro2?: string;
  included: string[];
  includedHeading: string;
  benefits?: { heading: string; items: { title: string; body: string }[] };
  howItWorks: { title: string; body: string }[];
  imageSlots: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const services: ServiceContent[] = [
  {
    slug: "lawn-mowing",
    name: "Lawn Mowing",
    h1: "Lawn Mowing in Battle Creek, MI",
    intro:
      "Brad's Lawn Services mows residential and commercial lawns throughout Battle Creek, MI and the surrounding areas. We handle weekly maintenance, edging, trimming, and cleanup so your property looks sharp without you touching a mower.",
    intro2:
      "Every lawn is different. Whether you need a standing weekly schedule, help while you are away, or a one-time cut on an overgrown yard, we build the visit around what your property actually needs.",
    includedHeading: "What's included",
    included: [
      "Weekly lawn mowing",
      "Edging along drives, walks, and beds",
      "Weed eating and trimming",
      "Blowing off walkways and patios",
      "Hedge and shrub trimming",
      "Aerating and seeding",
      "Overgrowth clearing",
      "Seasonal gutter cleaning",
    ],
    benefits: {
      heading: "Why homeowners hand it off",
      items: [
        {
          title: "Sharp, defined lines",
          body: "Clean edging and trimming lines are the difference between a cut lawn and a cared-for one. That is the edge in Service With An Edge.",
        },
        {
          title: "Well-maintained equipment",
          body: "Sharp blades cut grass instead of tearing it. We keep our equipment maintained so every pass leaves a clean cut.",
        },
        {
          title: "One less thing on your list",
          body: "Weekly maintenance contracts mean it just gets done. No scheduling calls, no weekend lost to the yard.",
        },
      ],
    },
    howItWorks: [
      {
        title: "Tell us about your property",
        body: "Call or send us a message with your address and what you are looking for. Weekly service, as-needed care, or a one-time cleanup.",
      },
      {
        title: "We quote the work",
        body: "We look at the size of the lawn, what shape it is in, and how often you want it serviced, then give you a price.",
      },
      {
        title: "We show up and cut",
        body: "Mow, edge, trim, and blow off the hard surfaces. You come home to a finished lawn.",
      },
    ],
    imageSlots: [
      "lawnWideManicured",
      "lawnSummerShrubs",
      "lawnSummerLush",
      "lawnWalkEdged",
      "hedgePorchClean",
    ],
    faqs: [
      {
        q: "How much does lawn mowing cost in Battle Creek?",
        a: "Price depends on the size of your lawn, how much trimming and edging it needs, the condition it is in when we start, and how often you want service. We do not use a flat rate because every property is different. Call (269) 589-9458 and we will give you a real number for your address.",
      },
      {
        q: "Do you mow commercial properties?",
        a: "Yes. We serve both homes and offices or businesses. Commercial properties are usually on a weekly maintenance schedule.",
      },
      {
        q: "Can you mow while I am out of town?",
        a: "Yes. Vacation lawn care is one of the things we do most. Let us know your dates and we will keep the lawn cut while you are gone.",
      },
      {
        q: "My yard is badly overgrown. Will you still take it?",
        a: "Yes. Overgrowth clearing is part of what we do, and for heavier growth we can bring brush hogging equipment instead of a mower. Call and describe what you are dealing with.",
      },
      {
        q: "Do I have to sign a contract?",
        a: "We offer weekly maintenance contracts, but we also do as-needed lawn care. You can start with a single cut and decide from there.",
      },
      {
        q: "What areas do you mow?",
        a: "Battle Creek, MI and the surrounding areas, including ZIP codes 49014, 49015, 49017, and 49037. If you are not sure whether we reach your street, just call and ask.",
      },
    ],
    related: ["core-aeration", "leaf-cleanup", "brush-hogging"],
  },
  {
    slug: "brush-hogging",
    name: "Brush Hogging",
    h1: "Brush Hogging in Battle Creek, MI",
    intro:
      "Brad's Lawn Services clears overgrown property in Battle Creek, MI and the surrounding areas with professional brush hogging equipment. We cut down overgrown trees, brush, and tall grass, then clean up and haul away the debris.",
    intro2:
      "If a field, lot, or back section of your property has gotten away from you, a standard mower is not going to fix it. We bring a tractor and brush hog built for exactly that job.",
    includedHeading: "What we handle",
    included: [
      "Overgrown fields and lots",
      "Heavy brush and tall grass",
      "Small overgrown trees and saplings",
      "Debris cleanup and haul-away",
      "Field mowing",
      "Stump grinding (also available)",
    ],
    benefits: {
      heading: "Why brush hogging beats a mower",
      items: [
        {
          title: "Built for heavy growth",
          body: "A brush hog is designed to cut through material that would stop or damage a standard mower.",
        },
        {
          title: "We clean up after",
          body: "Cutting is only half the job. We clean up the debris and haul it away so you are left with usable ground.",
        },
        {
          title: "Stumps too",
          body: "Stump grinding is available if the clearing job leaves stumps behind.",
        },
      ],
    },
    howItWorks: [
      {
        title: "Describe the property",
        body: "Call us with the address and roughly how much area needs clearing and how heavy the growth is.",
      },
      {
        title: "We bring the equipment out",
        body: "We haul the brush hog equipment to your property.",
      },
      {
        title: "Cut, clean, haul",
        body: "We cut the overgrowth down, clean up what is left, and haul the debris away.",
      },
    ],
    imageSlots: ["brushTractor", "brushHogging2", "stumpGrinder"],
    faqs: [
      {
        q: "What does brush hogging cost?",
        a: "It depends on how much area needs clearing, how heavy and woody the growth is, how accessible the ground is, and how much debris has to be hauled off. Call (269) 589-9458 and describe the property and we will quote it.",
      },
      {
        q: "How overgrown is too overgrown?",
        a: "Brush hogging is made for growth that a mower cannot handle, including tall grass, heavy brush, and small trees. Tell us what is out there and we will tell you honestly whether it is a fit.",
      },
      {
        q: "Do you haul the debris away?",
        a: "Yes. Cleaning up and hauling away the debris is part of the job, not an add-on you have to arrange separately.",
      },
      {
        q: "Can you grind out stumps too?",
        a: "Yes, stump grinding is available. Mention it when you call so we bring the right attachment.",
      },
      {
        q: "Do you brush hog fields and vacant lots?",
        a: "Yes. Field mowing and overgrown lot clearing are both regular jobs for us in the Battle Creek area.",
      },
    ],
    related: ["lawn-mowing", "leaf-cleanup", "snow-plowing"],
  },
  {
    slug: "core-aeration",
    name: "Core Aeration",
    h1: "Core Aeration in Battle Creek, MI",
    intro:
      "Brad's Lawn Services provides core aeration for lawns in Battle Creek, MI and the surrounding areas. Core aeration pulls small plugs of soil out of your lawn, roughly three quarters of an inch across and two to three inches long, so air and water can reach the root system.",
    intro2:
      "Aeration means to supply with air. Lawn core aeration is the process of opening the ground from the cores removed, exposing the root system and allowing air deeper into the root base.",
    includedHeading: "What core aeration does",
    included: [
      "Promotes healthier grass",
      "Decreases weed growth",
      "Reduces water runoff",
      "Minimizes soil compaction",
      "Enhances drought tolerance",
    ],
    benefits: {
      heading: "Signs your lawn needs it",
      items: [
        {
          title: "Hard, compacted soil",
          body: "If the ground feels hard underfoot and water pools or runs off instead of soaking in, compaction is likely the problem.",
        },
        {
          title: "Thin or struggling grass",
          body: "Grass that will not thicken up may not be getting air and water down to the roots.",
        },
        {
          title: "Heavy foot or vehicle traffic",
          body: "Areas that get walked on, played on, or driven over compact faster than the rest of the lawn.",
        },
      ],
    },
    howItWorks: [
      {
        title: "We look at the lawn",
        body: "We check the condition of the turf and the soil so aeration is actually the right call.",
      },
      {
        title: "We pull the cores",
        body: "A commercial core aerator removes plugs of soil across the lawn, opening the ground to the root base.",
      },
      {
        title: "The plugs break down",
        body: "The cores are left on the surface to break down naturally back into the lawn.",
      },
    ],
    imageSlots: [
      "aerFieldStripes",
      "aerPlugsHand",
      "aerTineCore",
      "aerPlugAndHole",
      "aerMachineLawn",
      "aerControlsBranded",
      "aerLawnStriped",
      "aerFieldStripes",
      "aerCrewBrandedShirt",
    ],
    faqs: [
      {
        q: "What does core aeration do for my lawn?",
        a: "It opens up compacted soil so air, water, and nutrients reach the roots. That promotes healthier grass, decreases weed growth, reduces water runoff, minimizes soil compaction, and improves how well your lawn handles drought.",
      },
      {
        q: "How much does core aeration cost?",
        a: "It comes down to the size of your lawn and its current condition. There is no flat rate. Call (269) 589-9458 with your address and we will quote the lawn.",
      },
      {
        q: "What are the plugs left on my lawn?",
        a: "Those are the soil cores the aerator pulled out, about three quarters of an inch in diameter and two to three inches long. They are meant to stay on the surface and break down back into the lawn.",
      },
      {
        q: "Should I aerate and seed at the same time?",
        a: "Seeding is one of the services we offer alongside mowing and aeration. Mention it when you call and we will talk through what makes sense for your lawn.",
      },
      {
        q: "How do I know if my lawn is compacted?",
        a: "Common signs are hard ground, water running off instead of soaking in, thin grass that will not fill in, and heavily used areas that look worse than the rest of the yard.",
      },
    ],
    related: ["lawn-mowing", "leaf-cleanup", "brush-hogging"],
  },
  {
    slug: "leaf-cleanup",
    name: "Leaf Cleanup",
    h1: "Leaf Cleanup in Battle Creek, MI",
    intro:
      "Brad's Lawn Services handles leaf cleanup for homes and businesses in Battle Creek, MI and the surrounding areas. We use professional-grade leaf blowers and vacuums to clear leaves, limbs, and storm debris, including curbside leaf pickup.",
    intro2:
      "We work three seasons of cleanup: spring, fall, and after storms. Whatever the yard is buried under, we clear it and take it away.",
    includedHeading: "Three kinds of cleanup",
    included: [
      "Spring cleanup: tree limbs, leftover leaves, gutter cleaning, walkway and patio clearing",
      "Fall cleanup: leaf removal and curbside leaf pickup",
      "Storm cleanup: debris removal and damage restoration",
    ],
    benefits: {
      heading: "Why it matters",
      items: [
        {
          title: "Leaves smother grass",
          body: "A heavy leaf layer left over winter blocks light and traps moisture against the turf.",
        },
        {
          title: "Professional-grade equipment",
          body: "Leaf blowers and vacuums clear a yard far faster and more completely than a rake and bags.",
        },
        {
          title: "We haul it off",
          body: "Curbside leaf pickup and hauling mean the pile does not just move to the edge of your property.",
        },
      ],
    },
    howItWorks: [
      {
        title: "Call when the yard is ready",
        body: "Fall cleanup timing depends on your trees. Call us and we will get you on the schedule.",
      },
      {
        title: "We clear the property",
        body: "Blowers and vacuums move leaves and debris off the lawn, beds, walkways, and patios.",
      },
      {
        title: "We haul it away",
        body: "Curbside pickup and hauling so the debris leaves with us.",
      },
    ],
    imageSlots: [
      "leafTruckBrandedCrew",
      "leafTwoCrewVac",
      "leafHugePile",
      "leafVacBigPile",
      "equipLeafVacTrailer",
      "leafAfterRanch",
    ],
    faqs: [
      {
        q: "How much does leaf cleanup cost?",
        a: "It depends on the size of the property, how many trees you have, how deep the leaves are, and whether you need a single cleanup or several passes through the season. Call (269) 589-9458 and we will quote your yard.",
      },
      {
        q: "When should I schedule fall leaf cleanup?",
        a: "It depends on your trees. Some properties need one pass after everything drops, others need a few visits through the fall. Call and we will work out the timing with you.",
      },
      {
        q: "Do you do curbside leaf pickup?",
        a: "Yes. Curbside leaf pickup is part of our fall cleanup service, and we have the vacuum equipment for it.",
      },
      {
        q: "Can you clean up after a storm?",
        a: "Yes. Storm cleanup covers debris removal and damage restoration. Call us and describe what came down.",
      },
      {
        q: "Do you clean gutters too?",
        a: "Yes. Seasonal gutter cleaning is included in our spring cleanup work and is also available with regular lawn maintenance.",
      },
    ],
    related: ["lawn-mowing", "snow-plowing", "core-aeration"],
  },
  {
    slug: "snow-plowing",
    name: "Snow Plowing",
    h1: "Snow Plowing in Battle Creek, MI",
    intro:
      "Brad's Lawn Services provides commercial snow removal and salting in Battle Creek, MI and the surrounding areas. We plow and salt lots and drive areas, and clear sidewalks and entrances so your property stays open through the winter.",
    intro2:
      "Our team brings a combined 30 years of experience in the snow and ice management industry.",
    includedHeading: "What we clear",
    included: [
      "Commercial snow removal and salting",
      "Sidewalk and entrance clearing",
      "Lot and drive area plowing and salting",
    ],
    benefits: {
      heading: "Properties we serve",
      items: [
        {
          title: "Commercial and light industrial",
          body: "Lots, drives, and loading areas that have to be passable when your people arrive.",
        },
        {
          title: "Retail and multi-family",
          body: "Storefront entrances, sidewalks, and parking areas where customers and residents walk.",
        },
        {
          title: "Private roads and parking areas",
          body: "Access routes that the city does not plow.",
        },
      ],
    },
    howItWorks: [
      {
        title: "Set it up before the season",
        body: "Call ahead of winter so your property is on the route when the first snow comes.",
      },
      {
        title: "We plow the drive and lot areas",
        body: "Lots, drives, and access areas get plowed and salted.",
      },
      {
        title: "We clear the walking surfaces",
        body: "Sidewalks and entrances get cleared so people can get in the door safely.",
      },
    ],
    imageSlots: [
      "snowPlowBranded",
      "snowPlowTrucks",
      "snowLotClearedCars",
      "snowEntranceCleared",
      "snowLotSunny",
      "snowPlowSunrise",
    ],
    faqs: [
      {
        q: "How much does commercial snow plowing cost?",
        a: "It depends on the size of the lot, how much sidewalk and entrance area there is, and how you want salting handled. Call (269) 589-9458 to talk through your property and get a quote.",
      },
      {
        q: "What kinds of properties do you plow?",
        a: "Commercial sites, light industrial, retail, multi-family properties, private roads, and parking areas.",
      },
      {
        q: "Do you salt as well as plow?",
        a: "Yes. Salting is part of our commercial snow and ice service for lots, drives, sidewalks, and entrances.",
      },
      {
        q: "When should I set up snow service?",
        a: "Before the season starts. Getting on the schedule early means your property is on the route when the first storm hits.",
      },
      {
        q: "Do you clear sidewalks and entrances?",
        a: "Yes. Sidewalk and entrance clearing is a separate part of the service from plowing the lot and drive areas.",
      },
    ],
    related: ["leaf-cleanup", "lawn-mowing", "brush-hogging"],
  },
];

export function getService(slug: string): ServiceContent | undefined {
  return services.find((s) => s.slug === slug);
}
