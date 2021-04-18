const path = require("path");
var ManifestPlugin = require('webpack-manifest-plugin');
const rules = require("./rules");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports ={
    resolve: {
      extensions: [".js", ".jsx"],
      modules: [path.resolve(__dirname, "../src"), "node_modules"]
    },
    entry: [path.resolve(__dirname, "../src", "index.jsx")],
    output: {
      path: path.resolve(__dirname, "../build"),
      filename: "[name].bundle.js",
      chunkFilename: '[name].bundle.js',
    },
    module: rules,
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
      new HtmlWebpackPlugin({
      title: 'Juan Sebastián Reina - Portfolio',
      hash: true,
      template: path.resolve(__dirname, '../src/index.html'),
    }),
    new ManifestPlugin({
      fileName: 'manifest.json',
      basePath: '/',
      seed: {
        "short_name": "Juansereina",
        "name": "Juan Sebastián - Interactive Designer",
        "start_url": "./index.html",
        "description": "Juan Sebastián Reina - Personal Portfolio",
        "display": "standalone",
        "lang": "en-US",
        "theme_color": "#5439dc",
        "background_color": "#fff",
        "icons": [{
          "src": "images/favicon.png",
          "sizes": "192x192",
          "type": "image/png"
        },{
          "src": "images/favicon.png",
          "sizes": "512x512",
          "type": "image/png"
        }],
      }
    }),
    ]
};
