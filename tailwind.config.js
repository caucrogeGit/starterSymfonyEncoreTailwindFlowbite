/** @type {import('tailwindcss').Config} */
const theme = require('./theme-flowbite');

module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: theme,
  plugins: [
    require('flowbite/plugin')
  ],
}

