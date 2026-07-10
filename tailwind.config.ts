import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep navy used for headings, logo, primary buttons
        navy: {
          DEFAULT: "#101a2d",
          deep: "#0b1422",
        },
        // Warm gold accent (eyebrow lines, underline, active pills)
        gold: {
          DEFAULT: "#c69749",
          soft: "#d8b06a",
        },
        ink: "#131c2e",
        muted: "#5b6473",
        paper: "#f5f6fa",
        sky: "#e9f1fb",
        line: "#e6e8f0",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,26,45,0.04), 0 8px 24px rgba(16,26,45,0.05)",
        float: "0 8px 30px rgba(16,26,45,0.12)",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
