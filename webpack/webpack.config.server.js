const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  name: 'server',
  target: 'node',
  entry: './app/serverRenderer.js',
  externals: [nodeExternals()],
  output: {
    filename: 'js/serverRenderer.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: /public/,
        use: [
          'css-loader/locals', // It doesn't embed CSS but only exports the identifier mappings.
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: 'url-loader?limit=8192'
      }
    ],
  },
});