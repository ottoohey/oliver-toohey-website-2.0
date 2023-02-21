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
      automation: "url('./icons/automation.png')",
      norway: "url('./icons/norway.JPG')",
      mona: "url('./icons/mona.jpeg')",
      react: "url('./icons/react.png')",
      cron: "url('./icons/cron.png')",
      cloudfront: "url('./icons/CloudFront.png')",
      route53: "url('./icons/Route 53.png')",
      s3: "url('./icons/S3.png')",
    },
    backgroundSize: {
      small: "35vw",
    },
    extend: {
      inset: {
        "nearly-full": "98%",
      },
      spacing: {
        "custom-top": "20vh",
      },
    },
  },
  important: true,
  plugins: [],
};
