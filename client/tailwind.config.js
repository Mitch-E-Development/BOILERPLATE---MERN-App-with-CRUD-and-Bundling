/**
 * @file tailwind.config.js
 * @description Tailwind CSS configuration file. This file specifies the content paths for Tailwind to scan for class names, theme customizations, and plugins.
 * @module tailwind.config
 */

/** 
 * The content paths where Tailwind should look for class names.
 * Tailwind will purge unused styles based on these paths.
 * @type {Array<string>}
 */
export const content = [
  './src/**/*.{js,jsx,ts,tsx}', // Scan all JavaScript, JSX, TypeScript, and TSX files in the src directory
  './public/index.html', // Scan the public index.html file for Tailwind classes
];

/**
 * Theme customizations for extending Tailwind's default theme.
 * Add custom colors, fonts, spacing, etc. here.
 * @type {Object}
 */
export const theme = {
  extend: {},
};

/**
 * Array of Tailwind CSS plugins to extend functionality.
 * Plugins can add additional utilities or components.
 * @type {Array}
 */
export const plugins = [];
