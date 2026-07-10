import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep midnight navy — headings, logo, primary surfaces
        navy: {
          DEFAULT: "#12243c",
          deep: "#0a1626",
          soft: "#1c3350",
        },
        // Champagne gold accent — eyebrows, underlines, highlights
        gold: {
          DEFAULT: "#b1873f",
          soft: "#d3ac66",
          bright: "#e7cd93",
        },
        ink: "#1b2334",
        muted: "#6b6f7b",
        // Warm ivory canvas + tinted sand for alternate sections
        paper: "#f4f0e7",
        sand: "#ece5d6",
        sky: "#e9e2d3",
        line: "#e5dccb",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,26,45,0.04), 0 10px 30px rgba(16,26,45,0.06)",
        float: "0 12px 40px rgba(16,26,45,0.14)",
        gold: "0 10px 30px rgba(177,135,63,0.28)",
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
