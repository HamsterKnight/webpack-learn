var imgUrl = require('./public/assets/webpack.jpg')
console.log(imgUrl)
var img = document.createElement('img')
img.src = imgUrl.default
document.body.appendChild(img)
module.exports = 'a'
