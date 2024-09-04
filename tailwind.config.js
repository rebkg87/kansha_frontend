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
        "medium-green": "#135d51",
        "medium-soft-green": "#338065",
        "soft-green": "#ccfff3",
        "super-light-green": "#f0fefa",
        "gray": "#565656",
        "light-gray": "#d9d9d9",
        "mood-angry": "#FF0000",
        "mood-sad": "#FFA600",
        "mood-neutral": "#FAEC29",
        "mood-happy": "#1FA455",
        "mood-very-happy": "#9ECB4A"
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },
      fontSize: {
        'paragraphs': '1.25rem',
        'long-paragrah': '1rem',
        'navbar': '1rem',
        'footer': '.625rem',
        'h1': '3.375rem',
        'h2': '2.625rem',
        'h3': '2rem',
        'h4': '1.75rem',
        'h5': '1.25rem',
        'h6': '1rem'
      },
      lineHeight: {
        'paragraphs': '1.375rem',
        'short-paragrah': '1.25rem',
        'long-paragrah': '1.5rem',
        'navbar': '1.5rem',
        'footer': '.875rem',
        'h1': '4rem',
        'h2': '3.125rem',
        'h3': '2.5rem',
        'h4': '2.25rem',
        'h5': '1.625rem',
        'h6': '1.375rem'
      },
      boxShadow: {
        'inner-inputV2': 'inset 0px 3px 4px rgba(0, 0, 0, 0.25)',
        'navbar-b': '0px -2px 6px rgba(0, 0, 0, 0.10)'
      },
      plugins: []
    }
  }
}