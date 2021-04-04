module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
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
          light: "#148BC8",
          DEFAULT: "#0C78AD",
          dark: "#104E6D"
        }
      },
      animation: {
        "navbar-active": "appear-navbar .8s ease-in forwards",
        "navbar-inactive": "hide-navbar .8s ease-out forwards"
      },
      keyframes: {
        "hide-navbar": {
          from: { height: "384px", opacity: "1" },
          to: { height: "0", opacity: "0" }
        },
        "appear-navbar": {
          from: { height: "0", opacity: "0" },
          to: { height: "384px", opacity: "1" }
        }
      }
    },
    variants: {
      extend: {}
    },
    plugins: []
  }
};
