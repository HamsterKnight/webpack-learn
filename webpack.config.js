const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
module.exports = {
  mode: 'development',
  output: {
    filename: 'main-[hash:5].js'
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({
    template: './src/public/index.html'
  }), new CopyPlugin({
    patterns:[{
      from:'./src/public',//将public下的内容复制到dist中, 如果复制中存在模板文件，那么HtmlWebpackPlugin生成的模板还是会覆盖该模板文件，保持对打包内容的引入
      to: './'// 这里默认是导出到dist
    }]
  })]
}
