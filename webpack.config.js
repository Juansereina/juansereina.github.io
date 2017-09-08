const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const webpack = require('webpack')
const cssModules = 'module&localIdentName=[name]__[local]___[hash:base64:5]'
const nodeExternals = require('webpack-node-externals');

module.exports = {
    devtool: "cheap-eval-source-map",
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.join(__dirname, 'src'),
            'node_modules'
        ]
    },
    entry: [
        path.join(__dirname, 'src', 'index.jsx')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.boundle.js'
    },
    module: {
        rules: [
           /* {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: `css-loader?${cssModules}`
                })
            },*/
            { test: /\.css$/, use: ['style-loader',`css-loader?${cssModules}`] , exclude: path.resolve(__dirname, 'node_modules')},
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: 'file-loader'
            },
            {
                test: /\.(woff|woff2)$/,
                use: 'url-loader?prefix=font/&limit=5000'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=image/svg+xml'
            },
            { test: /\.json$/, loader: 'json-loader' }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
        title: 'Portfolio Juanse2296',
        minify: {
            collapseWhitespace: true
        },
        hash: true,
        template: path.resolve(__dirname, 'src/index.html')
    }),
        new ExtractTextPlugin({
            filename:"[name]_[contenthash].css",
            disable:false,
            allChunks: true
        }),
    ],
    devServer: {
        hot: true,
        inline: true,
        contentBase: path.resolve(__dirname, './dist'),
        historyApiFallback: true,
        compress: true,
        open: true,
        stats: "errors-only"
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
}