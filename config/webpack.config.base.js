const path = require('path')
const untils = require('./utils')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
//const { webpack } = require('_webpack@5.32.0@webpack')


const config = {
  target: 'node',
  entry: {
    server: path.join(untils.APP_PATH, 'index.js')  // path.join(__dirname, 'src/index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: untils.DIST_PATH   // path.join(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        use: {
          loader: 'babel-loader'
        },
        exclude: [path.join(__dirname, '/node_modules')]
      }
    ]
  },
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: (process.env.NODE_ENV == 'production' || 
        process.env.NODE_ENV == 'prod') ? "'production'" : "'development'"
      }
    })
  ]
}

module.exports = config