const path = require('path')
const merge = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const baseConfig = require('./webpack.base.config')
const config = require('../config')

const env = process.env.NODE_ENV
const resolve = dir => {
  return path.join(__dirname, '..', dir)
}

const clientConfig = {
  mode: 'development',
  devtool: env === 'development' ? config.dev.devtool : config.build.devtool,
  entry: `${resolve('src/entry-client')}/index.js`,
  output: {
    filename: 'client-bundle.js',
    path: resolve('build-client')
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)?$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[local]'
            }
          },
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: resolve('src') + '/assets/css/rem_function.scss'
            }
          }
        ],
        include: resolve('src')
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: resolve('src/static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
}

module.exports = merge(baseConfig, clientConfig)
