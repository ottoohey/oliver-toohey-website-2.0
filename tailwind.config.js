/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["'Rammetto One'", "cursive"],
      serif: ["Courgette", "serif"],
    },
    backgroundImage: {
      award: "url('./icons/portrait-sm.jpeg')",
      flutter: "url('./icons/flutter.png')",
      dev: "url('./icons/dev.jpg')",
      cloud: "url('./icons/cloud.jpg')",
      "open-ai": "url('./icons/openai.jpg')",
      norway: "url('./icons/norway.JPG')",
      mona: "url('./icons/mona.jpeg')",
    },
    backgroundSize: {
      small: "40pt",
    },
    extend: {
      inset: {
        "nearly-full": "98%",
      },
    },
  },
  important: true,
  plugins: [],
};
