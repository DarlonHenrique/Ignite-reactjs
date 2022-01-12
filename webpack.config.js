const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const isDevelopment = process.env.NODE_ENV !== 'development'

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    static: path.resolve(__dirname, 'public')
  },
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
