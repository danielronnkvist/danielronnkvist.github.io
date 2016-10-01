var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist',
    filename: 'main.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.scss$/,
        loaders: [
          "style",
          "css",
          "postcss",
          "sass"
        ]
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        loader: 'file?name=/fonts/[name].[ext]'
      },
      {
        test: /\.md$/,
        loaders: [
          "raw",
        ]
      },
      {
        test: /\.jpg$/,
        loaders: [
          'file?hash=sha512&digest=hex&name=/[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  postcss: function () {
    return [autoprefixer]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`,
    })
  ]
}
