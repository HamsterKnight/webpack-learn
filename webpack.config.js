const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  output: {
    filename: 'main-[hash:5].js'
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({
    filename: 'test.html',
    template: 'src/template/index.html'
  })]
}
