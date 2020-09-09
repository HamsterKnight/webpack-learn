const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  mode: 'development',
  output: {
    filename: 'main-[hash:5].js'
  },
  plugins: [new CleanWebpackPlugin()]
}
