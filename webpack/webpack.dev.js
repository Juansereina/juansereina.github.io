const merge = require('webpack-merge');
const common = require('./webpack.common');
const rules = require('./rules');
const plugins = require('./dev_plugins');
const server = require('./devServer');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  module: rules,
  plugins: plugins.generate().object,
  devServer: server,
});
