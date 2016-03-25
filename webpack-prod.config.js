const webpack = require("webpack");

module.exports = {
  entry: "./build.js",
  output: {
    filename: "app.min.js",
    path: "./dist"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ],
  module: {
    loaders: [
      {
        loader: "babel",
        exclude: /(node_modules|bower_components)/,
        test: /\.jsx?$/
      }
    ]
  }
};
