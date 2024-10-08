#!/usr/bin/env node

import fs from "fs/promises";

const tailwindConfig = `
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
};
export default config;
`;

export default async function updateTailwindFile() {
  const filePath = "./tailwind.config.ts";

  try {
    await fs.writeFile(filePath, tailwindConfig, "utf8");
    console.log("Tailwind config was overwritten");
  } catch (error) {
    console.error("Error overwriting tailwind config:", error);
  }
}
