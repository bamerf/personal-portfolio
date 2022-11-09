const defaultTheme = require('tailwindcss/defaultTheme');

const pixelToRem = (px) => `${px / 16}rem`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
    textShadow: {
      default: '0 0 0.8px #404040, 0 0 0.8px #404040',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        fluid: 'clamp(1.5rem, 3vw + 1.45rem, 2.75rem)',
      },
      scale: {
        101: '1.01',
        102: '1.02',
      },
      textShadow: {
        dark: '0 0 0.8px #a3a3a3, 0 0 0.8px #a3a3a3',
      },
      transitionDelay: {
        100: '100ms',
        200: '200ms',
        300: '300ms',
        400: '400ms',
        500: '500ms',
        600: '600ms',
        700: '700ms',
        800: '800ms',
        900: '900ms',
        1000: '1000ms',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-textshadow'),
  ],
};
