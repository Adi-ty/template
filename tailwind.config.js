// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      secondary: "#9ABFFF",
      white: `#FFFFFF`,
      black: `#000000`,
      blue: `#0E77FF`,
      blue2: `#0F77FA`,
      grey: `#707070`,
      red: `#E50C0C`,
      red2: `#F51111`,
      red3: `#EA1010`,
      grey2: `#8990AD`,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
