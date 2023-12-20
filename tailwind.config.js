/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
          "theme-primary": "#5368DF",
          "theme-secondary": "#4CAF50",
          "theme-grayish-blue": "#9194A1",
          "theme-dark-blue": "rgb(37, 43, 70)",
          "theme-dark-blue-tp": "rgba(37, 43, 70, 0.9)",
      },
  },
    container: {
      center: true,
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("flowbite/plugin")
  ],
}

