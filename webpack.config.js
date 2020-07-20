const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['@babel/polyfill','./src/script.js'],
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'build')
    },
    devServer: {
        port: '3000',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(jpg|png|jpeg|svg|gif)$/,
                use: ['file-loader',]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader',]
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env'
                    ],
                    plugins: [
                        ["@babel/plugin-proposal-class-properties", { "loose": true }]
                    ]
                }
            }
        ]  
    }
}