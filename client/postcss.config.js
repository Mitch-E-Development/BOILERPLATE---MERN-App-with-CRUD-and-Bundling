/**
 * @file postcss.config.js
 * @description PostCSS configuration file for integrating Tailwind CSS and Autoprefixer plugins. Tailwind CSS handles utility-first styling, and Autoprefixer ensures compatibility with different browsers.
 * @module postcss.config
 */

module.exports = {
  plugins: [
    /**
     * Tailwind CSS plugin for generating utility classes based on configuration.
     * @type {Function}
     */
    require('tailwindcss'),

    /**
     * Autoprefixer plugin to add vendor prefixes to CSS rules for better cross-browser compatibility.
     * @type {Function}
     */
    require('autoprefixer'),
  ],
};
