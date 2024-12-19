import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontFamily: {
      inter: ["var(--font-inter)"],
      sans: ["var(--font-geistvf)"],
      mono: ["var(--font-geistvf)"],
      oswald: ["var(--font-oswald)"],
      lato: ["var(--font-lato)"],
      montserrat: ["var(--font-montserrat)"],
      poppins: ["var(--font-poppins)"],
      raleway: ["var(--font-raleway)"],
    },
  },

  plugins: [],
} satisfies Config;
