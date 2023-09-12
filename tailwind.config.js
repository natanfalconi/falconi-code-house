/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-title': '#1F1F1F',
        'gray-text': '#5B5A62'
      },
    },
  },
  plugins: [],
}

