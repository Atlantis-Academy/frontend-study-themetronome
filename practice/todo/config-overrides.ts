const path = require('path')

const { override, babelInclude } = require('customize-cra')

// eslint-disable-next-line func-names
module.exports = function(config, env) {
  return Object.assign(
    config,
    override(babelInclude([path.resolve('src'), path.resolve('./app'), path.resolve('./ui')]))(
      config,
      env,
    ),
  )
}
