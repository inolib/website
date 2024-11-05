/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  plugins: [],
  theme: {
    animation: {
      marquee: "10s linear infinite marquee",
    },
    aspectRatio: {
      n: "2 / 3",
      thumbnail: "2 / 1",
    },
    borderWidth: {
      DEFAULT: "0.09375rem", // 1.5px
      4: "0.25rem", // 4px
    },
    colors: {
      black: "#000000",
      blue: {
        50: "#EEF5F6",
        100: "#CBE0E4",
        300: "#8EBBC5",
        600: "#4F8C99",
        700: "#3E6D77",
        900: "#254147",
        950: "#111F22",
      },
      neutral: {
        50: "#FAFAFA",
        700: "#404040",
        800: "#262626",
      },
      red: {
        600: "#DC2626",
      },
      sand: {
        50: "#F5F4EE",
        400: "#E0DBC7",
      },
      transparent: "transparent",
      white: "#FFFFFF",
      yellow: {
        500: "#E1FF01",
        600: "#CDE801",
      },
    },
    fontFamily: {
      manrope: ["Manrope Variable", "sans-serif"],
    },
    fontSize: {
      xs: ["0.75rem", 1.5], // 12px
      sm: ["0.875rem", 1.5], // 14px
      base: ["1rem", 1.5], // 16px
      lg: ["1.125rem", 1.5], // 18px
      xl: ["1.25rem", 1.5], // 20px
      "2xl": ["1.5rem", 1.5], // 24px
      "3xl": ["1.875rem", 1.25], // 30px
      "4xl": ["2.25rem", 1.25], // 36px
      "5xl": ["3rem", 1.25], // 48px
      "6xl": ["3.75rem", 1.25], // 60px
    },
    keyframes: {
      marquee: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(-100%)" },
      },
    },
  },
};
