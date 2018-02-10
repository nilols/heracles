var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    pages: __dirname + '/src/main/js/index.js',
    vendors: ['react', 'react-dom']
  },
  devtool: 'eval',
  output: {
    path: __dirname,
    filename: './target/classes/assets/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract({fallback:'style-loader', use:['css-loader']}) },
      { test: /\.less$/, loader: ExtractTextPlugin.extract('css-loader!resolve-url-loader!less-loader?sourceMap') },
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=img/[name].[ext]' },
      { test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: 'url-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: './target/classes/assets/vendors.js'
    }),
    new ExtractTextPlugin({
      filename: './target/classes/assets/bundle.css',
      allChunks: true
    })
  ]
};
