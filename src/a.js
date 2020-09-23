var imgUrl = require('./public/assets/webpack.jpg') // 这里获取到的是一个地址
console.log('version', version)
var img = $(`<img src="${imgUrl.default}">`)
$('body').append(img)
module.exports = 'a'
