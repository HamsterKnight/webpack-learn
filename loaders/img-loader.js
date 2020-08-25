// 有两种打包压缩图片的方式，一个是通过地址路径，一个是将图片转换成base64的格式


// 第一种：将图片转换成base64格式
/* function loader (buffer) { // 通过设置raw, 给的是buffer
  var content = getBase64(buffer)
  return `module.exports= \`${content}\``
}
module.exports = loader

loader.raw = true // 该设置是表明loader要处理的是原始数据

// 将buffer转化成base64格式
function getBase64(buffer) {
  return 'data:image/png;base64,' + buffer.toString("base64")
}
 */

// 第二种：将图片打包，返回图片地址

var loaderUtil = require('loader-utils')
function loader(buffer) {
  // 可以通过limit来判断，使用哪种方式
  var {limit = 1000, filename = '[contenthash].[ext]'} = loaderUtil.getOptions(this)
  var content = getFilePath.call(this, buffer, filename)
  return `module.exports=\`${content}\``

}

module.exports = loader

loader.raw = true

function getFilePath(buffer, name) {
  var filename = loaderUtil.interpolateName(this, name, {
      content: buffer
  });
  this.emitFile(filename, buffer);
  return filename;
}
