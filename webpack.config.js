'use strict';

const path = require('path');
const webpack = require('webpack');

const paths = {
  entry: [
    'babel-polyfill',
    './common/index'
  ],
  js: path.join(__dirname, 'public', 'js'),
};

module.exports = {
  entry: paths.entry,
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
  output: {
    path: paths.js,
    publicPath: '/public/js/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: paths.js,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [ 'babel' ],
        exclude: [/node_modules/],
        include: __dirname,
      }, {
        test: /\.json$/,
        loaders: [ 'json' ],
        exclude: /node_modules/,
        include: __dirname,
      }
    ]
  }
};
