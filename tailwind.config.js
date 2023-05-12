/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./pages/**/*.{html,js}"],
  important: true,
  theme: {
    extend: {
      colors: {
        dark: "#030211",
        clear: "#ffffff",
        backg: "#F5F5F5",
        grey: "#7C7C7C",
        greyc: "#C1C1C1",
        black: "#000000",
        darker: "#0D0D0D",
        gradient:
          "linear-gradient(90deg, rgba(255, 255, 255, 0) 0.45%, #030211 49.56%, rgba(230, 230, 230, 0) 99.49%)",
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
        syne: ["Syne", "sans-serif"],
      },
    },
  },
  plugins: [],
};
