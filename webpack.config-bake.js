var webpack = require('webpack');

module.exports = {
  entry: {
    app: __dirname + '/lib/app.js',
  },
  output: {
    path: __dirname + '/src/',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.(json)/, loader: 'json',
      },
    ]
  }
}