const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
process.env.NODE_ENV = 'development';
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'public/index.html'),
  favicon: path.resolve(__dirname, 'public/favicon.ico'),
  filename: 'index.html',
});
const dotenv = require('dotenv').config({
  path: path.join(__dirname, '.env'),
});
module.exports = {
  mode: process.env.NODE_ENV,
  devtool: 'cheap-module-source-map',
  entry: [
    path.resolve(__dirname, './public/index.js'),
    path.resolve(__dirname, './src/fonts/index.css'),
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
        include: path.resolve(__dirname, './src/fonts'),
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: ['babel-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          'style-loader',
          'resolve-url-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', 'css'],
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_GOOGLE_OAUTH_ID': JSON.stringify(
        process.env.REACT_APP_GOOGLE_OAUTH_ID
      ),
      'process.env.REACT_APP_BACKEND_API_URL': JSON.stringify(
        process.env.REACT_APP_BACKEND_API_URL
      ),
    }),
  ],
};
