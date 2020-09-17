const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
module.exports = {
  mode: 'development',
  output: {
    filename: 'script/main-[hash:5].js',
    publicPath: '/'
  },
  module: {
    rules:[
      {
        test: /\.(png)|(jpg)|(gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'imgs/[name].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({
    template: './src/public/index.html',
    filename: "html/index.html"
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
