module.exports = function (sourceMap) {
  console.log(this.loaders)
  return sourceMap.replace('变量', 'var')
}