const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
<<<<<<< HEAD
    path: path.resolve(__dirname, 'public'),
=======
    path: path.resolve(__dirname, 'pubic'),
>>>>>>> b9f5c10945f7429165cfc20837eac1c51462aa1a
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};
