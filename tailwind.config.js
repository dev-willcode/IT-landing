module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" }
    },
    extend: {
      colors: {
        primary: {
          light: "#44B6FF",
          DEFAULT: "#4492ff",
          dark: "#243b6b"
        },
        secondary: {
          light: "#4492ff",
          DEFAULT: "#4492ff",
          dark: "#243b6b"
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
