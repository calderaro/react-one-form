var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var rootPath = process.cwd()

var client = {
  context: path.join(rootPath, 'src'),
  name: 'client',
  entry: './app.js',
  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: path.join(rootPath, 'dist'),
    publicPath: '/static/production/'
  },
  plugins: [
    new ExtractTextPlugin({filename: 'style.css', allChunks: true}),
    new webpack.optimize.UglifyJsPlugin({compressor: {warnings: false}}),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'], include: path.join(__dirname, 'src') },
      { test: /\.(css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              query: {minimize: true, modules: true, importLoaders: 1, localIdentName: '[name]__[local]___[hash:base64:5]'}
            },
            'postcss-loader'
          ]
        })
      }
    ]
  }
}

module.exports = client
