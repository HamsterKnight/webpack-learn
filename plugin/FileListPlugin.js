class FileListPlugin {
  constructor(filename = "filelist.txt"){
    this.filename = filename;
}
  apply(compiler) {
    compiler.hooks.emit.tap('test',   (compilation)=> {
      var fileList = []
      for(var key in compilation.assets) {
        fileList.push(`name: key \n\n size: ${compilation.assets[key].size()}`)
      }
      console.log(this.filename)
      var str = fileList.join('\n\n')
      compilation.assets[this.filename] = {
        source() {
          return str
        },
        size() {
            return str.length;
        }
      }
    })
  }
}
module.exports = FileListPlugin
