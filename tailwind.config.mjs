import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Urbanist Variable", ...defaultTheme.fontFamily.sans],
        // serif: ["Ibarra Real Nova Variable", ...defaultTheme.fontFamily.serif],
        sans: ["Work Sans", ...defaultTheme.fontFamily.sans],
        serif: ["Libre Baskerville", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
