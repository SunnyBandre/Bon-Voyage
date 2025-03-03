/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        metalMania: ["Metal Mania", "cursive"],
      },
      boxShadow: {
        custom: "13px 13px 20px #ebebeb, -13px -13px 28px #ffffff",
      },
      backgroundImage: {
        landing: "url('/images/Home.png')",
      },
      screens: {
        "3xl": "1800px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
