const webpack = require('webpack');
const CleanWebPackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const commonPaths = require('./common-paths');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const config = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: commonPaths.outputPath,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })                
                //exclude: /node_modules/
            },
            {
                test: /\.svg|.png|.jpg$/,
                loader: 'url-loader',
                exclude: /node_modules/,
                options: {
                  fallback: 'file-loader',
                },
            },
            {
                test: /\.(woff|woff2|ttf|eot|json)$/,
                loader: 'file-loader',
            },
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new ExtractTextWebpackPlugin('styles.css'),
        new CleanWebPackPlugin(['public'], { root: commonPaths.root }),
        new HtmlWebPackPlugin({
            template: commonPaths.template,
            favicon: commonPaths.favicon,
            inject: true
        }),
        new CopyWebpackPlugin([{ 
            from: './data', 
            to: 'api',
            toType: 'dir'
        }])
    ]
};

module.exports = config;