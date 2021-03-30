const colors = require(`tailwindcss/colors`);

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or "media" or "class"
  theme: {
    fontFamily: {
      Poppins: ["Poppins"],
    },
    screens: {
      xs: { min: "360px", max: "639px" },
      sm: { min: "640px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px", max: "1535px" },
      "2xl": { min: "1536px" },
    },
    colors: {
      emerald: colors.emerald,
      green: colors.green,
      teal: colors.teal,
      cyan: colors.cyan,
      lightblue: colors.lightBlue,
      bluegray: colors.blueGray,
    },
    container: {
      padding: '2rem',
      center: true,
    },
    extend: {
      width: {
        '100': '45rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
