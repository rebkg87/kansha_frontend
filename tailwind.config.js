/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-green": "#213D33",
        "medium-green":"#36AA8E",
        "medium-soft-green":"#6AC3A4",
        "soft-green":"#AAFFEB",
        "super-light-green":"#DCFEF2",
        "gray":"#747474",
        "light-green":"#d9d9d9",
        "mood-angry":"#FF0000",
        "mood-sad":"#FFA600",
        "mood-neutral":"#FAEC29",
        "mood-happy":"#1FA455",
        "mood-very-happy":"#9ECB4A"
      } 
    },
  },
  plugins: [],
}