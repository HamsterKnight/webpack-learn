const path = require("path");
const webpack = require('webpack')
module.exports = {
  entry: {
    "jquery": ["jquery"],
    "lodash": ["lodash"]
  },
  output: {
    filename: 'dll/[name].js',
    library: "[name]" // 打包的bundle名字
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, "dll", "[name].manifest.json"), //资源清单的保存位置, 需要是绝对位置
      name: "[name]"//资源清单中，暴露的变量名
    })
  ]
}
