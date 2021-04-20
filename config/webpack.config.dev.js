const { turn } = require('core-js/core/array')
const { merge } = require('webpack-merge')

const webpackBaseConfig = require('./webpack.config.base')

const webpackDevConfig = merge(webpackDevConfig, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  stats: { children: false, warnings: false},
})

module.exports = webpackDevConfig