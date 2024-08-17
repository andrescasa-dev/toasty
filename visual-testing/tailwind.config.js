/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        trackingProgress: {
          "0%": { width: "100%" },
          "100%": { width: "0%" },
        },
      },
      animation: {
        trackingProgress: "trackingProgress 1s linear forwards",
      },
      colors: {
        primary: "#1B1B1B",
        secondary: "#EDEDED",
        background: "#FFFFFF",
        text: "#000000",
        border: "#B3B2B2",

        warning: "#DC7609",
        error: "#E60000",
        info: "#0973DC",
      },
    },
    borderRadius: {
      "200": "0.25rem",
      "400": "0.5rem",
      full: "1000px",
    },
  },
  plugins: [],
}

