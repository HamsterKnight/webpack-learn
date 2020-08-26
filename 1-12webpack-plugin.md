# plugin

> loader的功能定位是将代码进行转换，对于一些其他操作loader很难实现

- 当webpack生成文件时，顺便多生成一个说明描述文件
- 当webpack编译启动时，控制台输出一句话表示webpack启动了
- 当xxxx时，xxxx

这种类似的功能需要把功能嵌入到webpack的编译流程中, 这种事情的实现依托于plugin


本质上plugin是一个带有apply方法的对象
```js
var plugin = {
  apply: function(compiler) {

  }
}
```
习惯上plugin会被写成构造函数的格式
```js

class MyClass() {
  apply(compiler) {

  }
}
var plugin = new MyClass()
```

插件的apply函数，会在创建好Compiler对象后运行

compiler独享是在初始化阶段构建的，整个webpack打包期间只有一个compiler对象，后续完成打包工作的是compiler对象内部创建的compilation
（平常如果我们在webpack中配置了watch, 兼容文件变化并自动打包，不会重新进入初始化阶段，而是从编译阶段开始）

apply方法会在创建好compiler对象后调用, 并向方法中传入一个compiler对象


compiler对象提供了大量的钩子函数（hooks，可以理解为事件），plugin的开发者可以注册这些钩子函数，参与webpack编译和生成。

你可以在apply方法中使用下面的代码注册钩子函数:

```js
class MyPlugin{
    apply(compiler){
        compiler.hooks.事件名称.事件类型(name, function(compilation){
            //事件处理函数
        })
    }
}
```

**事件名称**

即要监听的事件名，即钩子名，所有的钩子：https://www.webpackjs.com/api/compiler-hooks

**事件类型**

这一部分使用的是 Tapable API，这个小型的库是一个专门用于钩子函数监听的库。

它提供了一些事件类型：

- tap：注册一个同步的钩子函数，函数运行完毕则表示事件处理结束
- tapAsync：注册一个基于回调的异步的钩子函数，函数通过调用一个回调表示事件处理结束
- tapPromise：注册一个基于Promise的异步的钩子函数，函数通过返回的Promise进入已决状态表示事件处理结束

**处理函数**

处理函数有一个事件参数```compilation```





> 用一句话来总结，plugin是在webpack运行的各个阶段中，执行相关的操作



# 用法
```js
const MyPlugin = require('./plugin/MyPlugin') // 导入插件
module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js' // 属性名： chunk的名称，属性值： 入口模块
  },
  output: {
    path: path.resolve(__dirname, 'dist'),// 必须配置一个绝对路径，表示资源放置的文件夹默认是dist
    filename: '[name].js' // 配置合并模块后的js代码文件的规则（可以是写死的一个文件名，也可以是一个路径和名字）
  },
  plugins: [new MyPlugin()] //使用插件
}

```
