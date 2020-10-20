module.exports =  {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    main: './src/index.js',
    other: './src/other.js'
  },
  output: {
    filename: '[name]-[contenthash:5].js'
  },
  module: {
    noParse: /other\.js$/
  }
}
