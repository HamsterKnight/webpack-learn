
const { CleanWebpackPlugin }  = require('clean-webpack-plugin')
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    mian: './src/index.js'
  },
  output: {
    filename: 'chunk-[fullhash:5].js'
  },
  module: {
    rules: [
      {test: /.\js$/, use: 'babel-loader'}
    ]
  }
}