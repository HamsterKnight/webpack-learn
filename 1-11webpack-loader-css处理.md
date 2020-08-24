# loader


> webpack做的事情，只是分析各个模块的依赖关系, 形成资源列表, 然后将资源打包生成到指定文件中。更多的功能需要借助webpack loader和webpack plugins完成

> webpack laoder本质上是一个函数，它的作用是将某个源码字符串转换成另外一个源码字符串返回。

> loader函数在模块解释过程中被调用，以得到最终的源码


## loader的两种书写方法
#### 第一种
```js
module.exports = {
  module: {
    rules: [
      {
        text: /\.js$/   //正则表达式匹配出符合条件的文件
        use: ['./abc.js', './bcd.js'] //loader模块的路径，该字符串会被放置到require中
      }
    ]
  }

}
```
#### 第二种
```js
module.exports = {
  module: { //针对模块的配置，目前版本只有两个配置，rules、noParse
    rules: [
      {
        text: /\.js$/   //正则表达式匹配出符合条件的文件
        use: [ // 每个loader都是一个对象 ，loader存放路径，options存放loader的额外参数
          {
            loader: './abc.js', //loader模块的路径，该字符串会被放置到require中
            options: { // 向loader中传入的额外参数
              name: 'zzz'
            }
          }
        ]
      }
    ]
  }

}
```




> 这里样式css的处理，本质上是创建一个style标签，插入到head中
