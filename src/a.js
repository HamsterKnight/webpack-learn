var imgUrl = require('./public/assets/webpack.jpg') // 这里获取到的是一个地址
console.log(imgUrl)
var img = document.createElement('img')
img.src = imgUrl.default
document.body.appendChild(img)
module.exports = 'a'
