const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [plugin(function ({ addVariant, e }) {
    addVariant('hidden', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `[data-hidden='true'].${e(`hidden${separator}${className}`)}`;
      });
    });
  })],
};
