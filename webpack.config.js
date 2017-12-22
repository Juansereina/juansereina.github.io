const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const rules = require('./webpack/rules');
const plugins = require('./webpack/plugins');
const server = require('./webpack/devServer');

module.exports = {
  devtool: 'cheap-eval-source-map',
  resolve: { extensions: ['.js', '.jsx'], modules: [path.join(__dirname, 'src'), 'node_modules'] },
  entry: [path.join(__dirname, 'src', 'index.jsx')],
  output: { path: path.resolve(__dirname, 'dist'), filename: 'index.boundle.js' },
  module: rules,
  plugins: plugins.generate(webpack, HtmlWebpackPlugin, ExtractTextPlugin).object,
  devServer: server,
};
