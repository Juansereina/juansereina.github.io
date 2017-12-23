const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function generate() {
  const plugins = {
    object: [
      new HtmlWebpackPlugin({
        title: 'Portfolio Juanse2296',
        minify: {
          collapseWhitespace: true,
        },
        hash: true,
        template: path.resolve(__dirname, '../src/index.html'),
      }),
      new ExtractTextPlugin({
        filename: '[name]_[contenthash].css',
        disable: false,
        allChunks: true,
      }),
    ],
  };
  return plugins;
}

module.exports = {
  generate,
};
