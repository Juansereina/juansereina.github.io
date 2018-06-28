const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var ManifestPlugin = require('webpack-manifest-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const rules = require("./rules");
const HtmlWebpackPlugin = require('html-webpack-plugin');
var OfflinePlugin = require('offline-plugin');

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
      new ExtractTextPlugin({
        filename: "css/app_[chunkhash].css",
        allChunks: true
      }),
      new HtmlWebpackPlugin({
      title: 'Juan Sebastián Reina',
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
        "description": "Personal Portfolio of Juan Sebastián Reina - DMI",
        "display": "standalone",
        "lang": "en-US",
        "theme_color": "#02162b",
        "background_color": "#000000",
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
      new FaviconsWebpackPlugin(path.resolve(__dirname, "../src/assets/Images/favicon.png")),
      new OfflinePlugin()
    ]
};