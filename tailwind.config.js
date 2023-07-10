'use strict';

/**
 * @type {import('tailwindcss').Config}
 **/
const tailwindConfig = {
  content: ['src/**/*.{ts,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('tailwindcss-animated')]
};

module.exports = tailwindConfig;
