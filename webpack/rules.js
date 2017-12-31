const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssModules = 'module&localIdentName=[name]__[local]___[hash:base64:5]';

module.exports = {
  rules: [
    { test: /\.css$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: `css-loader?${cssModules}` }), exclude: path.resolve(__dirname, 'node_modules') },
    { test: /(\.js|jsx)$/, exclude: /node_modules/, loaders: ['babel-loader'] },
    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: 'file-loader' },
    { test: /\.(woff|woff2)$/, use: 'url-loader?prefix=font/&limit=5000' },
    { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/octet-stream' },
    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=image/svg+xml' },
    { test: /\.json$/, loader: 'json-loader' },
    {
      test: /\.png$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/',
          },
        },
      ],
    },
  ],
};
