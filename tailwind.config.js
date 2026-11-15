/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0a0e1a",
          surface: "#0f172a",
          card: "rgba(15, 23, 42, 0.75)",
          sky: "#38bdf8",
          indigo: "#6366f1",
          emerald: "#10b981",
        },
      },
      boxShadow: {
        glow: "0 0 30px -5px rgba(56, 189, 248, 0.2)",
        "glow-indigo": "0 0 30px -5px rgba(99, 102, 241, 0.2)",
      },
    },
  },
  plugins: [],
};

