const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const project = require('../config/project.config');
const debug = require('debug')('app:bin:server');

debug('Project environment: ' + project.env);

if (project.globals.__DEV__) {
  const webpackDevConfig = require('../config/webpack.dev.config');
  const server = new WebpackDevServer(webpack(webpackDevConfig), webpackDevConfig.devServer);
  server.listen(project.serverPort);
}

if (project.globals.__PROD__) {
  const webpackProdConfig = require('../config/webpack.prod.config');
  const server = new WebpackDevServer(webpack(webpackProdConfig), webpackProdConfig.devServer);
  server.listen(project.serverPort);
}

debug(`Server is now running at http://localhost:${project.serverPort}.`);
