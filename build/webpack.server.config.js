const path = require('path')
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

const resolve = dir => {
  return path.join(__dirname, '..', dir)
}

const serverConfig = {
  mode: 'production',
  target: 'node',
  entry: `${resolve('src/entry-server')}/index.js`,
  output: {
    filename: 'server-bundle.js',
    path: resolve('build-server')
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'isomorphic-style-loader',
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
  }
}

module.exports = merge(baseConfig, serverConfig)
