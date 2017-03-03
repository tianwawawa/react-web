const path = require('path')
const webpack = require('webpack')
const cssnano = require('cssnano')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const project = require('./project.config')

const webpackConfig = {
  name: 'client',
  target: 'web',
  devtool: false,
  cache: true,
  context: path.join(project.basePath, 'src'),
}

/* =================================================== entry ================================================= */
webpackConfig.entry = {
  app: ['./index.js'],
  vendor: [
    'babel-polyfill',
    'lodash',
    'react',
    'react-dom',
    'react-router',
    'react-redux',
    'react-router-redux',
    'redux',
    'redux-thunk',
    'axios',
    'immutable',
  ],
}

webpackConfig.output = {
  filename: '[name].js',
  path: path.join(project.basePath, 'dist'),
  publicPath: '/',
}

/* ================================================== dev server ============================================== */
// the configure of webpack dev server & webpack dev middleware
webpackConfig.devServer = {
  publicPath: '/',
  contentBase: path.join(project.basePath, 'src'),
  hot: true,
  noInfo: false,
  quiet: false,
  https: false,
  historyApiFallback: true,
  stats: {
    chunks: false,
    colors: true
  },
}

/* ================================================= loaders ================================================== */
// not use less file, if you want to use less file, you must add the less-loader module and configure it.
// json-loader is not required anymore

webpackConfig.module = {}

// webpack1 is webpackConfig.module.loaders, but webpack2 is webpackConfig.module.rules
webpackConfig.module.rules = [{
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: [{loader: 'babel-loader', options: {cacheDirectory: true}}]
}]

// css-loader: https://github.com/webpack-contrib/css-loader
// postcss-loader: https://github.com/postcss/postcss-loader

// Don't use the ExtractTextPlugin in development. It can be used in production.
webpackConfig.module.rules.push({
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {loader: 'css-loader', options: {modules: true, importLoaders: 1}},
      {loader: 'postcss-loader'}
    ],
  })
})

// Don't use the ExtractTextPlugin in development. It can be used in production.
webpackConfig.module.rules.push({
  test: /\.scss/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {loader: 'css-loader', options: {modules: true, importLoaders: 1}},
      {loader: 'postcss-loader'},
      {loader: 'sass-loader'}
    ],
  })
})

webpackConfig.module.rules.push({
  test: /\.(png|jpg)/,
  use: [{loader: 'url-loader', options: {limit: 8912}}]
})

webpackConfig.module.rules.push({
  test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  use: [{loader: 'file-loader'}]
})

/* ================================================= plugins =============================================== */
// OccurenceOrderPlugin has been renamed to OccurrenceOrderPlugin
// webpack.optimize.OccurrenceOrderPlugin is now on by default
// webpack.optimize.DedupePlugin isn't needed anymore. Remove it rom your configuration.

// The description of the html-webpack-plugin at https://github.com/ampedandwired/html-webpack-plugin
webpackConfig.plugins = [(
  new HtmlWebpackPlugin({
    template: 'index.html',
    hash: false,
    filename: 'index.html',
    inject: 'body',
    minify: {
      removeComments: true,
      collapseWhitespace: true
    }
  })
)]

webpackConfig.plugins.push(
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        cssnano({
          autoprefixer: {
            add: true,
            remove: true,
            browsers: ['last 2 versions']
          },
          discardComments: {
            removeAll: true
          }
        })
      ],
      context: project.publicPath
    }
  })
)

// Tells React to build in either dev or prod modes.
webpackConfig.plugins.push(
  new webpack.DefinePlugin({
    __DEV__: false,
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
)

// WARNING in webpack: Using NoErrorsPlugin is deprecated. Use NoEmitOnErrorsPlugin instead.
webpackConfig.plugins.push(
  new webpack.NoEmitOnErrorsPlugin()
)

webpackConfig.plugins.push(
  new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor'],
  })
)

// Uglify js files. Minify js files. Use it in production
// Don't use the UglifyJsPlugin in development. Because it slows down the executed speed.
webpackConfig.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      unused: true,
      dead_code: true,
      warnings: false,
      drop_console: true,
    },
    comments: false
  })
)

// Extract text plugin. Don't use the plugin in development. It can be used in the production.
webpackConfig.plugins.push(
  new ExtractTextPlugin({
    filename: 'css/styles.css',
    disable: false,
    allChunks: true
  })
)

module.exports = webpackConfig
