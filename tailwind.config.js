/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'underline-grow': {
          '0%': {
            transform: 'scaleX(0)',
          },
          '100%': {
            transform: 'scaleX(1)',
          },
        },
      },
      animation: {
        'underline-grow': 'underline-grow 0.5s ease forwards',
      },
    },
  },
  plugins: [],
}