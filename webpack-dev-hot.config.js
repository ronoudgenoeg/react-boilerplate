const webpack = require("webpack");
var path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // prevents reload on syntax errors
    './build.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js",
    publicPath: '/static/'
  },
  devtool: 'eval',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    })
  ],
  module: {
    loaders: [
      {
        loaders: ['react-hot', 'babel'],
        exclude: /(node_modules|bower_components)/,
        test: /\.js$/
      }
    ]
  }
};
