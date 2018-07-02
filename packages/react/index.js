const path = require('path');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');

const provisionGracefulExit = require('./src/_server/graceful-exit');
const livenessCheck = require('./src/_server/liveness-check');
const readinessCheck = require('./src/_server/readiness-check');
const metrics = require('./src/_server/metrics');

const server = express();

const port = process.env.PORT || 8080;

server.use(metrics());
server.use(compression());
server.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ['\'self\'', `http://localhost:${port}`],
      scriptSrc: ['\'self\'', '\'unsafe-inline\'', `http://localhost:${port}/static/index.js`],
      styleSrc: ['\'self\'', '\'unsafe-inline\'', `http://localhost:${port}/static/index.js`],
      imgSrc: ['\'self\'', 'data:', `http://localhost:${port}`],
    },
  },
}));
server.get('/healthz', livenessCheck());
server.get('/readyz', readinessCheck());
server.use('/metrics', metrics.getHandler());
// TODO: remove following line in production
server.use(express.static(path.join(__dirname, '/src/__demo/__server_static')));
// /
server.use(express.static(path.join(__dirname, '/dist')));
server.use('/*', express.static(path.join(__dirname, '/dist')));

const serverInstance = server.listen(port);

provisionGracefulExit(serverInstance);
