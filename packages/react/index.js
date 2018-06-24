const path = require('path');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');

const provisionGracefulExit = require('./src/_server/graceful-exit');
const livenessCheck = require('./src/_server/liveness-check');
const readinessCheck = require('./src/_server/readiness-check');
const metrics = require('./src/_server/metrics');

const server = express();

server.use(metrics());
server.use(compression());
server.use(helmet());
server.get('/healthz', livenessCheck());
server.get('/readyz', readinessCheck());
server.use('/metrics', metrics.getHandler());
server.use('/', express.static(path.join(__dirname, './dist')));

const serverInstance = server.listen(process.env.PORT || 8080);

provisionGracefulExit(serverInstance);
