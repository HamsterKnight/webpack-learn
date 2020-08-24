module.exports = function (sourceMap) {
  return sourceMap.replace('变量', 'var')
}
