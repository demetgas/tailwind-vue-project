/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
