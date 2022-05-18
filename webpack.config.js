const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const isDevelopment = process.env.NODE_ENV !== 'development'

module.exports = {
  mode: isDevelopment ? 'development' : 'production', // if NODE_ENV is different of development, set mode for production, if it equals development, set for development
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    static: path.resolve(__dirname, 'public') // dev server for improve development ux
  },
  devtool: isDevelopment ? 'eval-source-map' : 'source-map', // souce-map for dev and prod
  plugins: [
    new htmlWebpackPlugin({
      // generate index.html file dynamically
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  performance: {
    // avoid size limits
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  module: {
    rules: [
      {
        // loader for jsx
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        // loader for css
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
}
