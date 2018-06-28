const path = require('path');

module.exports = {
  hot: true,
  inline: true,
  contentBase: path.resolve(__dirname, '../build'),
  historyApiFallback: true,
  compress: true,
  open: true,
  overlay: {
    warnings: true,
    errors: true
  },
  stats: 'errors-only',
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
};