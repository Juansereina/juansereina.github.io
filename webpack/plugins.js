const path = require('path');

function generate(webpack, HtmlWebpackPlugin, ExtractTextPlugin) {
  const plugins = {
    object: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
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
