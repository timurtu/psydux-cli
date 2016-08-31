module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: './.psydux/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel?cacheDirectory']
      },
      {
        test: /\.scss$/,
        include: /node_modules|src/,
        loader: 'style!css!sass'
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  }
}
