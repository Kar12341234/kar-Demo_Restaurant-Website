import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#15130f",
        charcoal: "#211f1a",
        cream: "#f7efe0",
        linen: "#fffaf1",
        gold: "#c99b48",
        copper: "#b96336",
        sage: "#7f8f70"
      },
      fontFamily: {
        sans: ["Inter", "Aptos", "ui-sans-serif", "system-ui"],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"]
      },
      boxShadow: {
        glow: "0 22px 70px rgba(201, 155, 72, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
