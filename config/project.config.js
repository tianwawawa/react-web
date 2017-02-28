const path = require('path')
const ip = require('ip')

const config = {
  basePath: path.resolve(__dirname, '..'),
  env: process.env.NODE_ENV || 'development',
  serverHost: ip.address(),
  serverPort: process.env.PORT || 8081,
  compilFailonWarning: false
}

config.globals = {
  'process.env': {
    'NODE_ENV': JSON.stringify(config.env)
  },
  'NODE_ENV': config.env,
  '__DEV__': config.env === 'development',
  '__PROD__': config.env === 'production',
  '__TEST__': config.env === 'test',
}

config.comilerStatus = {
  chunks: false,
  chunkModules: false,
  colors: true
}

config.paths = {
  srcAssets: path.join(config.basePath, 'src/assets')
}

module.exports = config
