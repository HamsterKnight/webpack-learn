# webpack的其他配置项

> content

```js
context:path.resolve(__dirname, "app")
```
context的配置会影响入口和loaders的解释，入口和loaders的解释路径会以context的配置为基准路径，这样配置会独立于CWD(crrent working directory 当前执行路径)

## output

> library

```js
library: 'abc'

将打包出来的结果，会将自执行函数结果暴露给abc

```

> libraryTarget
```js
libraryTarget: 'var'

该配置，更精细的控制如何暴露入口包的导出结果
```
其他可用的值有
- var： 默认值，暴露给一个普通变量
- window： 暴露给window对象的一个属性
- this: 暴露给this的一个属性
- global: 暴露给global的一个属性
- commonjs: 暴露给exports的一个属性
- 其他 https://www.webpackjs.com/configuration/output/#output-librarytarget

> target
```js
target: 'web'
```
设置打包结构最终要运行的环境,常用值有

- web: 打包后代码运行在web环境中
- node: 打包后代码运行在node环境中
- 其他：https://www.webpackjs.com/configuration/target/

## module.noParse
```
  module: {
    noParse: /jquery/,
    rules: []
  }

```
不解释正则表达式匹配的模块的，通常用来忽略那些大型的单模块库，以提高**构建性能**

备注： 这里所谓的解释是什么意思呢，就是解释模块，读取文件内容，进行loader处理，生成AST语法树，分析依赖，将依赖存进dependenies依赖数组中，对依赖函数进行替换也就是require => __webpack__require.

上面这个配置就是跳过这个步骤

## resolve

resolve的相关配置主要用于控制模块解释过程
### modules
```js
resolve: {
  modules: ['node_modules'] // 默认值
}
```

当解释模块的时候，如果遇到导入语句, 比如```require('test')```,webpack会从下面的位置，寻找依赖的模块
1. 当前路径下的```node_modules```目录
2. 上级路径下的```node_modules```目录
3. ..

### extensions
```js
 resolve: {
   extensions: [".js", ".json"] // 默认值
 }
```
当解释模块的时候，如果遇到没有文件后缀的导入语句, 例如```require("test")```,会依次测试它的后缀名
- test.js
- test.json

### alias
```js
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
```

有了alias（别名）后，导入语句中可以加入配置的键名，例如```require("@/test.js")```，webpack会将其看作是```require(src的绝对路径+"/test.js")```。

在大型系统中，源码结构往往比较深和复杂，别名配置可以让我们更加方便的导入依赖


> externals

```js
externals: {
  "jquery": '$',
  "lodash": '_',
  '内容引用该模块的名字': 第三方库暴露的变量
}
```

从最终的bundle中排除掉配置的配置的源码，例如，入口模块是

```js
//index.js
require("jquery")
require("lodash")
```

生成的bundle是：

```js
(function(){
    ...
})({
    "./src/index.js": function(module, exports, __webpack_require__){
        __webpack_require__("jquery")
        __webpack_require__("lodash")
    },
    "jquery": function(module, exports){
        //jquery的大量源码
    },
    "lodash": function(module, exports){
        //lodash的大量源码
    },
})
```

但有了上面的配置后，则变成了

```js
(function(){
    ...
})({
    "./src/index.js": function(module, exports, __webpack_require__){
        __webpack_require__("jquery")
        __webpack_require__("lodash")
    },
    "jquery": function(module, exports){
        module.exports = $;
    },
    "lodash": function(module, exports){
        module.exports = _;
    },
})
```

这比较适用于一些第三方库来自于外部CDN的情况，这样一来，即可以在页面中使用CDN，又让bundle的体积变得更小，还不影响源码的编写

## stats

stats控制的是构建过程中控制台的输出内容
