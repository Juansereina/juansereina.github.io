const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const rules = require("./rules");

module.exports ={ 
    resolve: {
      extensions: [".js", ".jsx"],
      modules: [path.resolve(__dirname, "../src"), "node_modules"]
    },
    entry: [path.resolve(__dirname, "../src", "index.jsx")],
    output: {
      path: path.resolve(__dirname, "../build"),
      filename: "index.bundle.js"
    },
    module: rules,
    plugins: [
      new ExtractTextPlugin({
        filename: "css/app_.css", // waiting for fix [contenthash]
        disable: false
      })
    ]
};