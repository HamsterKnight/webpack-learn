module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader" }
    ]
  }
}