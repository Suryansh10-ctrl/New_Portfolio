import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          100: "oklch(14% 0.004 49.25)",
          200: "oklch(21% 0.006 56.043)",
          300: "oklch(26% 0.007 34.298)",
          400: "oklch(37% 0.01 67.558)",
          500: "oklch(44% 0.011 73.639)",
          600: "oklch(55% 0.013 58.071)",
          700: "oklch(70% 0.01 56.259)",
          800: "oklch(86% 0.005 56.366)",
          900: "oklch(98% 0.001 106.423)",
        },
      },
      fontFamily: {
        grunge: ["var(--font-grunge)", "Impact", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      fontSize: {
        12: "0.75rem",
        16: "1rem",
        20: "1.25rem",
        24: "1.5rem",
        32: "2rem",
        40: "2.5rem",
        48: "3rem",
        64: "4rem",
        80: "5rem",
        96: "6rem",
        128: "8rem",
        216: "13.5rem",
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      screens: {
        xsm: "320px",
        sm: "480px",
        md: "768px",
        lg: "1200px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};

export default config;

