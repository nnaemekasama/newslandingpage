/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    screens: {
      sm: "375px",
      md: "715px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px", // Added custom breakpoint
    },
    extend: {},
  },
  plugins: [],
}
