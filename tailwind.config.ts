import type { Config } from "tailwindcss";

/**
 * Design tokens — see redesign/DESIGN-SYSTEM.md.
 *
 * Palette anchored on the logo greens sampled in assets-raw/manifest.md
 * (#397C36 primary, #2B7328 dark edge) with a harvest-amber accent. Every
 * foreground/background pair in the system is verified WCAG AA; ratios are
 * printed in the design-system doc.
 *
 * No purple, indigo or violet anywhere — hard requirement from the brief.
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./content/**/*.{js,ts}"],
  theme: {
    extend: {
      colors: {
        /* Forest green. Deeper and cooler than the old grass green, with the
           mid of the ramp still close to the logo mark so the header wordmark
           sits comfortably against it. */
        brand: {
          50: "#F2F6F1",
          100: "#DFEADD",
          200: "#BFD5BC",
          300: "#93B790",
          400: "#679565",
          500: "#4A7C48",
          600: "#37663A", // primary CTA
          700: "#2A5230", // hover, links on light
          800: "#204026",
          900: "#18311D",
          950: "#0E1F14", // hero ground, footer, dark bands
        },
        /* Tan. Replaces the previous harvest amber as the accent: eyebrows and
           stat values on dark grounds, the hero button fill, review stars. */
        accent: {
          50: "#FBF8F2",
          100: "#F5EFE3",
          200: "#EADFC9",
          300: "#DCCAA7",
          400: "#CDB388", // accent phrase in headings on dark
          500: "#C0A273", // eyebrows on dark, stat values, hero button
          600: "#866B41", // review stars — clears 3:1 on card, ground AND deep band
          700: "#866B41",
          800: "#6B5634", // accent text on light
          900: "#574629",
        },
        /* Warm neutrals, tan-tinted rather than green-tinted. */
        ink: {
          DEFAULT: "#1B2A1D",
          muted: "#4C5A4B",
        },
        /* Committed tan. The ground is a real tan, not an off-white — the
           site should read as tan + forest green, with neutral used only
           where it earns its keep (form inputs, so typing stays crisp). */
        surface: {
          DEFAULT: "#E5D9C3", // page ground — deeper tan
          tint: "#D9CBB0",    // deeper tan band
          card: "#F2EBDC",    // raised surfaces, lifts off the ground
          input: "#FBF8F1",   // the small neutral allowance
        },
        line: "#C9B994",
      },
      fontFamily: {
        /* Fraunces: variable serif, warm, real weight at 600-700. */
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-sm": ["2.25rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["3rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        "display-xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.03em" }],
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        /* Brand-tinted, low opacity — never neutral black, never heavy. */
        card: "0 1px 2px rgba(27,42,29,0.05), 0 8px 24px -12px rgba(27,42,29,0.12)",
        "card-hover":
          "0 2px 4px rgba(27,42,29,0.06), 0 18px 40px -16px rgba(27,42,29,0.22)",
        float: "0 12px 32px -8px rgba(14,31,20,0.35)",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
    },
  },
  plugins: [],
};

export default config;
