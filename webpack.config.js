const webpackDevConfig = require('./webpack.dev.config')
const webpackProConfig = require('./webpack.pro.config')
const webpackCommon = require('./webpack.common')
module.exports = function(env) {
  console.log(env)
  if(env == 'production') {
    return {
      ...webpackProConfig,
      ...webpackCommon
    }
  }
  return {
    ...webpackCommon,
    ...webpackDevConfig
  }

}
