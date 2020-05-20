const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const copyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        main:"./src/main.js"
    },
    output: {
        path: path.resolve(__dirname,"./dist"),
        filename: "[name].js"
    },
    devServer: {
       port:"8081",
        historyApiFallback: true,
        overlay:{
            warnings:true,
            errors:true
        }
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:[miniCssExtractPlugin.loader,"css-loader"]
            },
            {
                test:/\.scss$/,
                use:["style-loader",miniCssExtractPlugin.loader,"css-loader","sass-loader"]
            },
            {
                test: /\.(wolf|wolf2|ttf|otf)$/,
                use: [
                    {
                        loader:"file-loader",
                        options: {
                            outputPath: "fonts"
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|fif|svg)$/,
                use:[
                    {
                        loader:"file-loader",
                        options: {
                            outputPath:"img"
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:"babel-loader"
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/main.html"
        }),
        new miniCssExtractPlugin(),
        new copyWebpackPlugin({
                patterns: [
                    {from: "./src/img", to: "img"}
                ]
            }
        )

    ]
}