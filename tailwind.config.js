/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Montserrat'", "sans-serif"],
        display: ["'Montserrat'", "sans-serif"],
      },
      colors: {
        navy: {
          50: "#eef2ff",
          100: "#e0e7ff",
          500: "#2563eb",
          600: "#1d4ed8",
          700: "#1e3a8a",
          800: "#1e3270",
          900: "#0f1f4a",
        },
        teal: {
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
        },
        coral: {
          400: "#fb7185",
          500: "#f43f5e",
        },
        amber: {
          400: "#fbbf24",
          500: "#f59e0b",
        },
      },
    },
  },
  plugins: [],
};
