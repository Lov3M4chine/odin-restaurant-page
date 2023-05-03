const path = require('path');
const mode = process.env.NODE_ENV || 'development';
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: mode,
  module: {
   rules: [
    {
     test: /\.css$/i,
     use: ['style-loader', 'css-loader', 'postcss-loader'],
    },
   ],
  },
    plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
};
