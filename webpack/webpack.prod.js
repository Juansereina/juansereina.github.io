const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new UglifyJSPlugin({
      cache: true,
      parallel: true,
      sourceMap: true
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
  ].filter(Boolean),
});
