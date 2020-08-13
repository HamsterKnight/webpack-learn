const path = require('path')
module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js' // 属性名： chunk的名称，属性值： 入口模块
  },
  output: {
    path: path.resolve(__dirname, 'target'),// 必须配置一个绝对路径，表示资源放置的文件夹默认是dist
    filename: '[name]-[hash].js' // 配置合并模块后的js代码文件的规则（可以是写死的一个文件名，也可以是一个路径和名字）
  }
}