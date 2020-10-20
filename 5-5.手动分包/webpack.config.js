const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    "main": "./src/index.js"
  },
  output: {
    filename: '[name][contenthash:5].js',
  },
  plugins: [
    new CleanWebpackPlugin({
      // 要清除的文件或目录
      // 排除掉dll目录本身和它里面的文件
      cleanOnceBeforeBuildPatterns: ["**/*", "!dll", "!dll/*"]
    }),
    new HtmlWebpackPlugin({
      template: './src/template/index.html'
    }),
    // 配置不被打包进bundle的文件资源，相当于跟webpack说，你别打包这个资源内容了哦，我通过全局引入了
    new webpack.DllReferencePlugin({
      manifest: require("./dll/jquery.manifest.json")
    }),
    new webpack.DllReferencePlugin({
      manifest: require("./dll/lodash.manifest.json")
    })
  ]
}
