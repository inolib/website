/** @type {import("tailwindcss").Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  plugins: [require("tailwindcss-animate")],
  theme: {
    animation: {
      marquee: "10s linear infinite marquee",
    },
    aspectRatio: {
      n: "3 / 4",
      thumbnail: "2 / 1",
    },
    borderWidth: {
      4: "0.25rem",
      DEFAULT: "0.09375rem",
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
      gray: {
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
        950: "#030712",
      },
      neutral: {
        30: "#D4D4D4",
        50: "#FAFAFA",
        100: "#EAECF0",
        200: "#D1D5DB",
        300: "#9CA3AF",
        400: "#6B7280",
        500: "#4B5563",
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
      manrope: ["Manrope"],
    },
    fontSize: {
      xs: ["0.75rem", 1.5],
      sm: ["0.875rem", 1.5],
      base: ["1rem", 1.5],
      lg: ["1.125rem", 1.5],
      xl: ["1.25rem", 1.5],
      "2xl": ["1.5rem", 1.5],
      "3xl": ["1.875rem", 1.25],
      "4xl": ["2.25rem", 1.25],
      "5xl": ["3rem", 1.25],
      "6xl": ["3.75rem", 1.25],
    },
    keyframes: {
      marquee: {
        "0%": {
          transform: "translateX(0%)",
        },
        "100%": {
          transform: "translateX(-100%)",
        },
      },
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
};
