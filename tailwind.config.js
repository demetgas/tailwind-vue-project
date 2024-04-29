/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: { xs: "375px", sm: "640px", md: "768px", lg: "1024px" },
    extend: {
      colors: {
        babyblue: "#d4dfe7",
        babyblue2: "#acbfcc",
        hero: "#091315",
        hero2: "#142529",
        intro: "#141414",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
