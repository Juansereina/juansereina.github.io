const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function generate() {
  const plugins = {
    object: [
      new HtmlWebpackPlugin({
        title: 'Juan Sebastián Reina',
        hash: true,
        template: path.resolve(__dirname, '../src/index.html'),
        filename: '../index.html'
      }),
      new ExtractTextPlugin({
        filename: 'css/app_.css', // waiting for fix [contenthash] 
        disable: false,
 //YA        allChunks: true,
      }),
    ],
  };
  return plugins;
}

/*
minify: {
          collapseWhitespace: true,
          collapseInlineTagWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
        },
*/

module.exports = {
  generate,
};
