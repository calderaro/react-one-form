/* global __dirname, require, module */

const webpack = require('webpack')
const path = require('path')
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin

const config = {
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    path: path.join(__dirname, '/lib'),
    filename: 'reactOneForm.js',
    library: 'reactOneForm',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {test: /(\.jsx|\.js)$/, loader: 'babel-loader', exclude: /(node_modules|bower_components)/}
    ]
  },
  plugins: [
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)}),
    new UglifyJsPlugin({include: /\.min\.js$/, minimize: true, compress: {warnings: false}})
  ],
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  }
}

module.exports = config
