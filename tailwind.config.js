const pixelToRem = (px) => `${px / 16}rem`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: pixelToRem(384),
      md: pixelToRem(525),
      lg: pixelToRem(1024),
      xlg: pixelToRem(1280),
    },
    extend: {
      fontSize: {
        fluid: 'clamp(1.5rem, 3vw + 1.45rem, 2.75rem)',
      },
      scale: {
        101: '1.01',
        102: '1.02',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
