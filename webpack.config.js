const path = require('path');

const buildDirectory = './dist/';

module.exports = {
  "entry": './src/index.js',
  devServer: {
    hot: true,
    inline: true,
    port: 7700,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(buildDirectory),
    filename: 'bundle.js',
    publicPath: 'http://localhost:7700/dist',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }],
  },
  plugins: [],
};