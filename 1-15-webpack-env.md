# webpack之区分生产环境配置和开发环境配置

>  方法一， 可以在package.json中执行打包命令的时候，用--config来配置使用的打包文件
```js
// 例如

 script: {
   'dev': 'webpack --config=webpack.dev.config.js',
   'build': 'webpack --config=webpack.pro.configs.js'
 }

```


> 方法二, webpack的配置不仅可以是一个对象，也可以是一个函数，函数参数为env,函数的返回值为当前的webpack配置。我们可以通过env的值，来判断当前使用什么配置,env可以通过运行脚本命令来进行配置

```js
module.exports = env => {
  return
}

```
## env值的设置
```shell
npx webpack --env abc # env: "abc"
npx webpack --env=abc # env: "abc"

npx webpack --env.abc # env: {abc:true}
npx webpack --env.abc=1  # env： {abc:1}
npx webpack --env.abc=1 --env.bcd=2 # env: {abc:1, bcd:2}
```
