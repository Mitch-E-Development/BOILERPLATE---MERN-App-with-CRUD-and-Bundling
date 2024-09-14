/**
 * @file webpack.config.js
 * @description Webpack configuration file for bundling the server-side code. This configuration targets Node.js and bundles the code into a single file.
 * @module webpack.config
 * @requires path
 */

const path = require('path');

module.exports = {
  /**
   * The entry point for the application. Webpack starts building the dependency graph from this file.
   * @type {string}
   */
  entry: './src/server.js',

  /**
   * The target environment for the bundle. 'node' is used for server-side code.
   * @type {string}
   */
  target: 'node',

  output: {
    /**
     * The directory where the bundled files will be output.
     * @type {string}
     */
    path: path.resolve(__dirname, 'dist'),

    /**
     * The name of the bundled file.
     * @type {string}
     */
    filename: 'bundle.js',

    /**
     * The public URL of the output directory when referenced in a browser.
     * @type {string}
     */
    publicPath: '/dist/',
  },

  module: {
    rules: [
      {
        /**
         * Rule for processing JavaScript files. Excludes files in the node_modules directory.
         * @type {Object}
         */
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          /**
           * Loader for transpiling JavaScript files using Babel.
           * @type {string}
           */
          loader: 'babel-loader',
        },
      },
    ],
  },
};
