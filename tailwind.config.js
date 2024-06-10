/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#4154fa',
        'secondary':'#717ff5',
        'bg-color':'#f6f9ff',
      }
    },
  },
  plugins: [],
}

