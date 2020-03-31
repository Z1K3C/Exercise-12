const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/app.jsx',
    mode: 'development',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
       rules: [
          { test: /\.jsx$/,loader: 'babel-loader',exclude: /node_modules/ },
          { test: /\.css/,use: [MiniCssExtractPlugin.loader,'css-loader'] }
       ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "bundle.css"
      })
    ],
    devtool: 'source-map'
}