
var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/app.jsx',
    "mode": "development",
    output: { 
        path: path.resolve('./js/'),
        filename: './scripts.min.js' 
    },
    resolve: {
        symlinks: false,
        extensions: [".webpack.js", ".web.js", ".jsx", ".js"],
        modules: [
            './node_modules'
        ]
    },

    resolveLoader: {
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    },

    module: {
        rules: [
            {
                test: /.(jsx|js)$/,
                use : [
                    {
                        loader : 'babel-loader',
                        options : {
                            presets : ['env']
                        }
                    }
                ],
                exclude: /node_modules/
            },
            { 
                test: /\.js$/, 
                enforce : 'pre',
                use: [
                    "source-map-loader"
                ] 
            }
        ]
    },
    plugins : [
        new webpack.ProvidePlugin({
            "React": "react"
        })
        // new webpack.LoaderOptionsPlugin({
        //     minimize: false,
        //     debug: false
        // }),
        // new webpack.DefinePlugin({
        //     'process.env' : {
        //         NODE_ENV : JSON.stringify('production')
        //     }
        // })
    ]
};