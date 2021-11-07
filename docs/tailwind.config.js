module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    colors: {
      yellow: {
        DEFAULT: "#e9ba03",
        light: "#fbf2cf",
      },
      brown: {
        DEFAULT: "#A07241",
      },
      blue: {
        light: "b9d9f0",
        DEFAULT: "#83c4ec",
        dark: "#38a0d2",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
      black: {
        DEFAULT: "#000000",
      },
      extend: {
        fontFamily: {
          body: ["Roboto"]
        },
        backgroundImage: {
          'main-splash': "url('/public/img/mainSplash.jpg')",
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
