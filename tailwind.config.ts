import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./content/**/*.{js,ts}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f1f7f0",
          100: "#dfecdd",
          200: "#c1d9bd",
          300: "#97be92",
          400: "#6ba064",
          500: "#4a9e46",
          600: "#397c36",
          700: "#2b7328",
          800: "#255a22",
          900: "#1f4a1e",
        },
        accent: {
          600: "#b45309",
          700: "#92400e",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-sm": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
      },
      maxWidth: {
        content: "72rem",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
    },
  },
  plugins: [],
};

export default config;
