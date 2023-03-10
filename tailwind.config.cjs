/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ["./src/**/*.{mdx,ts,tsx}"],
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
  theme: {
    extend: {
      fontFamily: { sans: ["Roboto", "sans-serif"] },
    },
  },
};
