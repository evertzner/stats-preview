/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lexend: ['Lexend Deca', 'serif']
      }
    }
  },
  plugins: []
};
