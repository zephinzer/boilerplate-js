const fs = require('fs');
const path = require('path');

const expressPrometheusBundle = require('express-prom-bundle');

const VERSION_PATH = path.join(process.cwd(), './dist/.version');
const PACKAGE_PATH = path.join(process.cwd(), './package.json');

module.exports = metrics;

/**
 * Returns an Express.js compatible middleware for metrics collection.
 *
 * @return {Object}
 */
function metrics() {
  if (metrics.instance === null) {
    loadDefaultMetrics(metrics);
    loadVersionMetrics(metrics);
  }
  return metrics.instance;
};

metrics.instance = null;
metrics.version = null;
metrics.getHandler = () => metrics().metricsMiddleware;
metrics.reset = () => {
  metrics.instance.promClient.register.clear();
  metrics.instance = null;
};

/**
 * Sets the `.instance` property of the :metrics function to
 * an `express-prom-bundle` instance.
 *
 * @param {Function} metrics
 */
function loadDefaultMetrics(metrics) {
  metrics.instance = expressPrometheusBundle({
    autoregister: false,
    ignore: ['/healthz', '/readyz', '/metrics'],
    includePath: true,
    includeMethod: true,
    promClient: {
      collectDefaultMetrics: {
        timeout: 1000,
      },
    },
  });
};

/**
 * Creates a `.version` property on the :metrics function and initialises
 * it with: 1) build hash 2) package.json version 3) timestamp
 *
 * - build hash is retrieved from ~/dist/.version
 * - package.json version is retrieved from ~/package.json
 * - timestamp is retrieved from using `new Date()` from this app
 *
 * @param {Function} metrics
 */
function loadVersionMetrics(metrics) {
  metrics.version = new metrics.instance.promClient.Gauge({
    name: 'version',
    help: 'Webpack build hash',
    labelNames: ['build', 'package', 'timestamp'],
  });
  const normalizeNumber = (number) => number < 10 ? `0${number}` : number;
  const now = (new Date());
  const year = now.getFullYear();
  const month = normalizeNumber(now.getMonth());
  const date = normalizeNumber(now.getDate());
  const hour = normalizeNumber(now.getHours());
  const minute = normalizeNumber(now.getMinutes());
  const second = normalizeNumber(now.getSeconds());
  const timestamp = `${year}${month}${date}${hour}${minute}${second}`;
  const humanTimestamp = `${now.toDateString()} ${now.toTimeString()}`;
  const buildHash =
    (fs.existsSync(VERSION_PATH)) ?
      fs.readFileSync(VERSION_PATH).toString()
      : 'unknown';
  metrics.version.labels(
    buildHash,
    require(PACKAGE_PATH).version,
    humanTimestamp
  ).set(parseInt(timestamp));
};
