/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: '#0a192f',
        brown: '#8b4513',
        offwhite: '#f8f9fa',
      }
    },
  },
  plugins: [],
}
