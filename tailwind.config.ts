/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      colors: {
        red: {
          primary: "#D11242",
          secondary: "#d21243",
        },
        gray: {
          primary: "#848484",
          secondary: "#585858",
          tertiary: "#ebebeb",
        },
        black: {
          primary: "#000000",
        },
        wine: {
          primary: "#A10550",
          25: "#FBEFF2",
          50: "#FED5E9",
          100: "#FDABD2",
          200: "#FA58A6",
          300: "#F50779",
          400: "#CB0665",
          600: "#79043C",
          700: "#510228",
          750: "#3D021E",
          800: "#280114",
          900: "#14010A",
        },
      },
      screens: {
        xs: "380px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "5xl": "40px",
      },
      fontFamily: {
        sans: ["Open Sans", "ui-sans-serif", "system-ui"],
      },
      backgroundImage: {
        "about-us": "url('/aboutus.jpeg')",
      },
    },
  },
  plugins: [],
};
