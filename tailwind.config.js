/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: 'Raleway',
      },
      colors: {
        'brown': '#2c2306',
    },
    }
  },
  plugins: [],
}

