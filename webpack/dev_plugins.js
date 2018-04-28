const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
function generate() {
  const plugins = {
    object: [
      new HtmlWebpackPlugin({
        title: 'Juan Sebastián Reina',
        hash: true,
        template: path.resolve(__dirname, '../src/index.html'),
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    ],
  };
  return plugins;
}

module.exports = {
  generate,
};
