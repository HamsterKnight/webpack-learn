const path = require('path')
module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js' // 属性名： chunk的名称，属性值： 入口模块
  },
  output: {
    path: path.resolve(__dirname, 'target'),// 必须配置一个绝对路径，表示资源放置的文件夹默认是dist
    filename: '[name].js' // 配置合并模块后的js代码文件的规则（可以是写死的一个文件名，也可以是一个路径和名字）
  },

  module: {
    rules:[
      {
        test: /\.js$/, // 匹配的文件
        use: [
          {
            loader: './loaders/test-loader',                       // 对匹配的文件进行加工处理 // loader可以是一个数组，也可以是一个字符串 // loader的加载是从右到左的
            options: {
              name: '曾世鑫'                                      // options是传给loader的的参数,可以在loader函数中的this.loaders找到对应的loader的相关参数
            }                                                    // 获取options参数很麻烦，可以通过第三方库loader-utils来继续处理
          }                                                      // var loaderUtils = require(loader-utils')
        ]                                                        // var options = loaderUtils.getOptions(this)
      },
      {
        test: /\.css$/,
        use: ['./loaders/css-loader']
      }
    ]
  }
}
