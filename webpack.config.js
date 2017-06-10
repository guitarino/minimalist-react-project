const DEBUG = true;

const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    main: './scripts/index.js'
  },
  watch: DEBUG ? true : false,
  devtool: DEBUG ? 'source-map' : false,
  output: {
    path: path.resolve(__dirname, 'src/scripts'),
    publicPath: '/scripts/',
		filename: '[name].bundle.js',
		chunkFilename: '[id].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
            plugins: ['syntax-dynamic-import']
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(DEBUG ? 'development' : 'production')
      }
    }),
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
};