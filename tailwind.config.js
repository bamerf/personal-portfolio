const pixelToRem = (px) => `${px / 16}rem`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      mobile: pixelToRem(640),
      tablet: pixelToRem(768),
      laptop: pixelToRem(1024),
      desktop: pixelToRem(1280),
    },
    extend: {},
  },
  plugins: [],
};
