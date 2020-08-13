

# 入口和出口配置


**入口**

入口使用```entry```进行配置

entry的配置是一个对象，也可以直接是一个路径字符串

配置是一个对象
```
entry: {
  main: './src/index.js 
}
```
配置是一个路径字符串
```entry: './src/index.js'```
当配置是一个路径字符串的时候，实际打包的时候也会转换成配置对象的形式



入口真正的配置是chunk(这里的chunk说的是编译过程中的chunk，不懂就回去看看视频1-8的chunk)



**出口**

出口通过```output```进行配置


output : {

  ***path***: path.resolve(__dirname, 'dist') // 输出路径必须是一个绝对路径，通过node中的 <br>
  &nbsp;&nbsp;&nbsp;path模块中的resolve方法，得到当前配置文件的决定路径，后面拼接上自己想要输出的路径，默认为dist
  **filename**: 配置的合并的js文件的规则（配置输出的文件名）
  
   配置规则第一版：

    单个入口：
    1. 可直接写死输出名字，比如bundle.js
    2. [name].js已chunk名字命名输出
    多个入口：
    [name].js会以chunk名字命名输出

  配置规则第二版

    第一版规则中如果重新打包，那么文件名字没有发生变化，在服务器上就会有缓存，请求的时候还是旧的资源。
    在第一版的规则上加上hash值，实现每次打包文件后缀不相同
    1.
    [name][hash].js 
    hash 是多个chunk assets合并之后产生
    2.
    [name][chunkhash].js
    chunkhash是单个chunk assets产生

    hash或者chunkhash还能规定输出文件后缀使用的位数[hash:5]或者[chunkhash:10]
    

}
