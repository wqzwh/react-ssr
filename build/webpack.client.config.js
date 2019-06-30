const path = require('path')
const merge = require('webpack-merge')
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
      },
      {
        test: /\.scss?$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]-[local]-[hash:base64:5]'
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
  }
}

module.exports = merge(baseConfig, clientConfig)
