/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'near-black': '#0a0a0a',
        'flame-orange': '#ff5722',
        'vivid-magenta': '#e91e63',
        'acid-green': '#76ff03',
      },
      fontFamily: {
        'satoshi': ['Satoshi', 'sans-serif'],
        'archivo': ['Archivo Black', 'sans-serif'],
      },
      backgroundImage: {
        'beam': 'linear-gradient(135deg, #0a0a0a 0%, #ff5722 50%, #e91e63 100%)',
      },
    },
  },
  plugins: [],
}
