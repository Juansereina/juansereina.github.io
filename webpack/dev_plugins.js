const webpack = require('webpack');
function generate() {
  const plugins = {
    object: [
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
