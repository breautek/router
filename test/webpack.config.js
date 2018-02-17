var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./src/app.jsx",
    resolve: {
        extensions: ['.js', '.jsx']
        // symlinks: false,
        // modules: [
        //     "node_modules",
        //     "../router"
        // ]
        // alias: {
        //     '@breautek/router': path.resolve(__dirname, '../router')
        // }
    },
    module: {
        loaders : [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules\/(?!(@breautek)\/).*/,
                loader: 'babel-loader'
            }
        ]
    },
    output: {
    path: __dirname + "/js",
        filename: "scripts.min.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};
