class MyPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('test', function (compilation) {
      console.log('编译完成')
    })
  }
}
module.exports = MyPlugin
