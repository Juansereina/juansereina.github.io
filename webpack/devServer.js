const path = require('path');

module.exports = {
  hot: true,
  inline: true,
  contentBase: path.resolve(__dirname, '../dist'),
  historyApiFallback: true,
  compress: true,
  open: true,
  stats: 'errors-only',
};
