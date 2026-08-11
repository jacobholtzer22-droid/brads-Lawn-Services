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
        brand: {
          50: "#F2F8F1",
          100: "#E4F1E3",
          200: "#C6E3C3",
          300: "#97CA93",
          400: "#6AB365",
          500: "#4A9E46",
          600: "#397C36", // logo green — primary CTA
          700: "#2B7328", // logo dark edge — hover, links on white
          800: "#1D4423",
          900: "#14301A",
          950: "#0F2410", // hero ground, footer
        },
        accent: {
          300: "#F5C97A",
          400: "#F0B646", // accent phrase in headings on dark
          500: "#E8A33D", // eyebrows on dark, stat values
          600: "#C27C15",
          700: "#9A6110",
          800: "#8A5A0B", // accent text on white
        },
        /* Warm-shifted neutrals — deliberately not blue-grey slate. */
        ink: {
          DEFAULT: "#1C2A1C",
          muted: "#4A5A48",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          tint: "#F4F7F2",
        },
        line: "#E3E9E0",
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
        card: "0 1px 2px rgba(28,42,28,0.05), 0 8px 24px -12px rgba(28,42,28,0.12)",
        "card-hover":
          "0 2px 4px rgba(28,42,28,0.06), 0 18px 40px -16px rgba(28,42,28,0.22)",
        float: "0 12px 32px -8px rgba(15,36,16,0.35)",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
    },
  },
  plugins: [],
};

export default config;
