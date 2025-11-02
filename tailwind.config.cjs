/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A1A2F',
        accent: '#A8E6CF',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
