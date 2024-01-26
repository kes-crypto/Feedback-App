/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/Components/*.jsx",
  ],
  theme: {
    extend: {},
  },
  extend: {
    backgroundImage: {
      mobile: "url('/src/assets/background-header.png')",
      desktop: "url('/src/assets/background-header.png')",
    },
  },
  plugins: [],
};
