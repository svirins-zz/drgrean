module.exports = {
  darkMode: "class",
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    display: ["responsive", "hover", "focus", "grid", "hidden"],
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Montserrat", "sans-serif"],
      mono: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [
    require("tailwindcss"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwind-nord"),
  ],
};
