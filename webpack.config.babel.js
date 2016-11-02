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
      {
        test: /\.(js)$/, 
        loader: 'ss-loader',
        exclude: /node_modules/,
        include: "/lib/"
      },
      {
        test: /\.(json)/, loader: 'json',
      },
    ]
  }
}