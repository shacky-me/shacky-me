/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#E31837',
        'brand-dark': '#1A1A1A',
        'brand-cream': '#F5F5DC',
      },
      fontFamily: {
        'heading': ['Georgia', 'serif'],
        'body': ['Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}