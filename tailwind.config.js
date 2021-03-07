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
          light: "#111827",
          DEFAULT: "#111827",
          dark: "#111827"
        },
        secondary: {
          light: "#226FC4",
          DEFAULT: "#226FC4",
          dark: "#226FC4"
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
