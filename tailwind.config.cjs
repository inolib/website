/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ["./src/**/*.{mdx,ts,tsx}"],
  plugins: [],
  theme: {
    extend: {
      fontFamily: { sans: ["Roboto", "sans-serif"] },
    },
  },
};
