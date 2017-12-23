const path = require('path');
const rules = require('./rules');
const plugins = require('./common_plugins');

module.exports = {
  resolve: { extensions: ['.js', '.jsx'], modules: [path.resolve(__dirname, '../src'), 'node_modules'] },
  entry: [path.resolve(__dirname, '../src', 'index.jsx')],
  output: { path: path.resolve(__dirname, '../dist'), filename: 'index.boundle.js' },
  module: rules,
  plugins: plugins.generate().object,
};
