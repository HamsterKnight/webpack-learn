//合并两个模块
//  ./src/a.js
//  ./src/index.js
(function (modules) {
  var moduleLocalCache = {} // 用于缓存模块导出的结果

  //require函数相当于是运行一个模块，得到模块导出结果
  function require(moduleId) {

    if(moduleLocalCache[moduleId]) {
      // 检查是否有缓存
      return moduleLocalCache[moduleId]
    }
    var func = modules[moduleId] // 得到该模块对应的函数
    var module = {
      exports: {}
    }
    func(module, module.exports, require) // 运行模块
    var result = module.exports // 得到模块返回结果
    moduleLocalCache[moduleId] = result // 缓存起来
    return result // 返回模块导出结果
  }
  // 执行入口模块
  require('../src/index.js') // require函数相当于是运行了一个模块，得到模块导出结果
})({
  // 该对象保存了所有模块,以及模块对应的代码
  '../src/a.js': function name(module, exports, require) {
    module.exports = 'a'
  },
  '../src/index.js': function name(module, exports, require) {
    var a = require('../src/a.js')
    console.log('module index', a)
  }
})