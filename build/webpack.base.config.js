const path = require('path')
const config = require('../config')

const resolve = dir => {
  return path.join(__dirname, '..', dir)
}

const env = process.env.NODE_ENV

const createLintingRule = () => ({
  test: /\.js[x]?$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src')],
  exclude: [/node_modules/],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      ...(env === 'development' && config.dev.useEslint
        ? [createLintingRule()]
        : []),
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  }
}
