const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'
module.exports = {
  rules: [
    {
      test: /\.(sa|sc|c)ss$/,
      use: [
        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: {
              localIdentName: "[path][name]__[local]--[hash:base64:5]",
            }
          },
        },
        'sass-loader',
      ],
      exclude: path.resolve(__dirname, 'node_modules'),
    },
    { test: /(\.js|jsx)$/, exclude: /node_modules/, loaders: ['babel-loader'] },
    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: 'file-loader' },
    { test: /\.(woff|woff2)$/, use: 'url-loader?prefix=font/&limit=5000' },
    { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/octet-stream' },
    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=image/svg+xml' },
    { test: /\.(jpg|png|webp)$/, use: [{ loader: 'file-loader', options: { name: '[name].[ext]', outputPath: 'images/' } }] }
  ],
};
