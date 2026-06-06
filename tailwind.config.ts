import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#050505",
          charcoal: "#121212",
          gold: "#D4AF37",
          goldHover: "#E4C15A",
          muted: "#B3B3B3"
        }
      },
      fontFamily: {
        heading: ["var(--font-inter)", "Arial", "sans-serif"],
        body: ["var(--font-inter)", "Arial", "sans-serif"]
      },
      boxShadow: {
        gold: "0 0 30px rgba(212,175,55,0.18)"
      }
    }
  },
  plugins: []
};

export default config;