/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#D92243",
        secondary: "#21825C",
        background: "#F1F9F9",
      },
    },
  },
  plugins: [],
};
