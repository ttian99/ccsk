var webpack = require('webpack');

var SRC_PATH = __dirname + '/lib';
module.exports = {
  entry: {
    app: __dirname + '/lib/app-es6.js',
  },
  output: {
    path: __dirname + '/src/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      { test: /\.(json)/, loader: 'json'}
    ]
  }
}