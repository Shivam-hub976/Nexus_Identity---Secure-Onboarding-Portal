/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nexus-bg': '#0f172a',
        'nexus-card': '#1e293b',
        'nexus-accent': '#38bdf8',
      }
    },
  },
  plugins: [],
}