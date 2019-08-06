var webpack = require('webpack');
var path = require('path');
const glob = require('glob');

module.exports = {
    devtool: 'source-map',

    entry : glob.sync('./src/**/*.js').reduce((acc, file) => {
        acc[file.replace(/^\.\/src\//, "")] = file;
        return acc;
    }, {}),
    
    output: {
        path: path.resolve(__dirname, './dist/module'),
        filename: '[name]',
        libraryTarget: 'commonjs2',
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
