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
  })],
  devServer: {
    open: true, // 配置运行项目，自动打开浏览器,
    port: '8081', // 配置打开端口，
    proxy: {
      '/api': {
        target: 'https://open.duyiedu.com',// 当请求中有/api的时候，会替换成https://open.duyiedu.com/api
        changeOrigin: true //默认情况下，代理时会保留主机头的来源，可以将 changeOrigin 设置为 true 以覆盖此行为。
      }
    }
  }
}
