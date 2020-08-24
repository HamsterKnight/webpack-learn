module.exports = function (sourceCode) {
  console.log(sourceCode)
  var code = `var style = document.createElement('style')
  style.innerHTML=\`${sourceCode}\`
  document.head.appendChild(style)
  module.exports=\`${sourceCode}\`
  `
}
