
const path = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const API_DIR = 'api_extension';

module.exports = {
  entry: {
    api_exporter: `./src/api_exporter.js`,
    service_worker: `./src/service_worker.js`,
  //  background: './src/background/index.ts'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [
          '/node_modules/',
        ],
      }
    ],
  },
  resolve: {
    extensions: ['tsx','.ts', '.js'],
  },

  plugins: [
    new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
    // new HtmlWebpackPlugin({template: 'src/popup/index.html'}),
    new CopyWebpackPlugin({
      patterns: [
        {from: `./manifest.json`},
        // {from: `./src/background.html`},
        // {from: './src/icons/icon16.png'},
        // {from: './src/icons/icon48.png'},
        // {from: './src/icons/icon128.png'},
      ],
    }),
  ],
  output: {filename: '[name].js', path: path.resolve('..', __dirname, 'dist')}, // chrome will look for files under dist/* folder
};
