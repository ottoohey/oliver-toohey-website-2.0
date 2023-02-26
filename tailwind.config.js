/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["'Rammetto One'", "cursive"],
      serif: ["Courgette", "serif"],
    },
    backgroundImage: {
      award: "url('./images/icons/portrait-sm.jpeg')",
      flutter: "url('./images/icons/flutter.png')",
      dev: "url('./images/icons/dev.jpg')",
      cloud: "url('./images/icons/cloud.jpg')",
      automation: "url('./images/icons/automation.png')",
      norway: "url('./images/icons/norway.JPG')",
      mona: "url('./images/icons/mona.jpeg')",
      react: "url('./images/icons/react.png')",
      cron: "url('./images/icons/cron.png')",
      cloudfront: "url('./images/icons/CloudFront.png')",
      route53: "url('./images/icons/Route 53.png')",
      s3: "url('./images/icons/S3.png')",
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
