const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: "./src/js/components/app.js",
  output: {
    path: path.join(__dirname, 'public', 'build', 'js'),
    publicPath: "/build/js/",
    filename: 'main.min.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    proxy: {
      '/api': 'http://localhost:3200'
    },
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    https: false,
    noInfo: true
  }
}
