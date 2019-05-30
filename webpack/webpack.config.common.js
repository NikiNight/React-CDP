const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = {
  mode: process.env.NODE_ENV,

  externals: {
    'react': {commonjs: 'react'},
    'react-dom': {commonjs: 'react-dom'}
   },

  output: {
    filename: 'js/[name].js',
    path: path.resolve('./public'),
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
          loader: 'babel-loader',
          options: {
              presets: ['@babel/preset-react']
          }
      }
      }, {
          test: /\.(png|jpg|gif)$/,
          use: [
              {
                  loader: 'file-loader'
              }
          ]
      }
    ]
  },

  plugins: [
    isDevMod ? new webpack.NamedModulesPlugin() : new webpack.HashedModuleIdsPlugin(),
  ],
};
