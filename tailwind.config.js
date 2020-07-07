const tailwindui = require('@tailwindcss/ui');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './layouts/**/*.mdx',
    './layouts/**/*.js',
    './pages/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter var',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  variants: {},
  plugins: [
    tailwindui,
  ],
};
