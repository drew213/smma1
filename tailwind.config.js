/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnightblue: "#262480",
        white: "#fff",
        black: "#000",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        "heading-preferred": "'Rhodium Libre'",
        inherit: "inherit",
      },
      borderRadius: {
        "11xl": "30px",
      },
    },
    fontSize: {
      "13xl": "32px",
      sm: "14px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
