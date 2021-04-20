const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config.base')
// 压缩js
const TerserPlugin = require("terser-webpack-plugin");

const webpackProdConfig = merge(webpackBaseConfig, {
  mode: 'production',
  stats: { children: false, warnings: false},
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            // 是否注释掉console
            drop_console: false,
            dead_code: true,
            drop_debugger: true,
          },
          output: {
            comments: false,
            // beautity: false
          },
          mangle: true
        },
        parallel: true,
        // sourceMap: false
      })
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2,
        },
      },
    },
  }
})

module.exports = webpackProdConfig