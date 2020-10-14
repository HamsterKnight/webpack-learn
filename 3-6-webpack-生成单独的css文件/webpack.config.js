const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  mode: 'development',
  output: {
    filename: 'chunk-[contenthash:5].js',
    path: path.resolve(__dirname, 'output')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader?modules']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/templates/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin()
  ]
}