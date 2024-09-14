/**
 * @file webpack.config.js
 * @description Webpack configuration for client-side JavaScript and CSS bundling. Includes setup for React, Babel, and CSS processing.
 * @module webpack.config
 * @requires path
 * @requires html-webpack-plugin
 * @requires webpack
 * @requires dotenv
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config(); // Load environment variables

module.exports = {
  /**
   * The entry points for the application. Webpack starts building the dependency graph from these files.
   * @type {Object}
   */
  entry: {
    main: './src/index.js',
  },

  output: {
    /**
     * The directory where the bundled files will be output.
     * @type {string}
     */
    path: path.resolve(__dirname, 'dist'),

    /**
     * The name pattern for the bundled files.
     * @type {string}
     */
    filename: '[name].bundle.js',

    /**
     * The public URL of the output directory when referenced in a browser.
     * @type {string}
     */
    publicPath: '/',
  },

  module: {
    rules: [
      {
        /**
         * Rule for processing JavaScript and JSX files.
         * @type {Object}
         */
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          /**
           * Loader for transpiling JavaScript and JSX files using Babel.
           * @type {string}
           */
          loader: 'babel-loader',
          options: {
            /**
             * Babel presets for transforming modern JavaScript and React JSX.
             * @type {Array}
             */
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        /**
         * Rule for processing CSS files.
         * @type {Object}
         */
        test: /\.css$/,
        use: [
          /**
           * Loader for injecting CSS into the DOM.
           * @type {string}
           */
          'style-loader',

          /**
           * Loader for resolving CSS imports.
           * @type {string}
           */
          'css-loader',

          /**
           * Loader for processing CSS with PostCSS.
           * @type {string}
           */
          'postcss-loader',
        ],
      },
    ],
  },

  resolve: {
    /**
     * Extensions that Webpack will resolve automatically.
     * @type {Array}
     */
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    /**
     * Plugin for generating an HTML file and injecting the bundled scripts.
     * @type {HtmlWebpackPlugin}
     */
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body',
    }),

    /**
     * Plugin for defining environment variables to be used in the application.
     * @type {webpack.DefinePlugin}
     */
    new webpack.DefinePlugin({
      'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL), // Use environment variable from .env file
    }),
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          /**
           * Group vendor modules (from node_modules) into a separate chunk.
           * @type {Object}
           */
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
    historyApiFallback: true, // Serve index.html for all routes to support client-side routing
  },
};
