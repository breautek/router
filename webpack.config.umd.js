var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'source-map',

    entry : './src/index.js',
    
    output: {
        path: path.resolve(__dirname, './dist/umd'),
        filename: './router.js',
        libraryTarget: 'umd',
        library: 'router'
    },
    
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.jsx', '.js'],
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
                            presets : ['@babel/preset-env', '@babel/preset-react']
                        }
                    }
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use : [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            { 
                test: /\.js$/, 
                enforce : 'pre',
                use: [
                    "source-map-loader"
                ] 
            },
            {
                test: /\.(png|jp(e*)g|svg|ttf)$/,
                use : [
                    {
                        loader: 'url-loader',
                        options : {
                            limit: 8000,
                            outputPath: './www/res/assets/',
                            name: '[hash]-[name].[ext]',
                            publicPath:'./res/assets/'
                        }
                    }
                ]
            }
        ]
    }
};
