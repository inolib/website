/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ["./src/**/*.{mdx,ts,tsx}"],
  plugins: [require("@tailwindcss/aspect-ratio"), require("@tailwindcss/forms"), require("@tailwindcss/typography")],
  theme: {
    extend: {
      animation: {
        "toaster-in": "fade-in 1s linear",
        "toaster-out": "fade-out 1s linear",
      },
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
    },
  },
};
