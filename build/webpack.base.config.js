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
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join('static', 'img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf|ttc)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 800000,
          name: path.posix.join('static', 'img/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
