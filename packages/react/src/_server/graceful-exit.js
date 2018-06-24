module.exports = gracefulExit;

/**
 * Provisions graceful exitting of an Express.js server instance
 *
 * @param {Object} serverInstance
 */
function gracefulExit(serverInstance) {
  serverInstance.on('listening', () => {
    console.info(`Listening on ${process.env.PORT || 8080}`);
  });

  serverInstance.on('error', (err) => {
    console.error('The following error was reported:');
    console.error(err);
    console.info('Terminating in 5 seconds.');
    const ellipsis = () => {
      process.stdout.write('.');
      setTimeout(ellipsis, 1000);
    };
    ellipsis();
    setTimeout(shutdown.bind(null, serverInstance), 5000);
  });

  process.on('SIGINT', () => {
    console.error('\nSIGINT received!');
    shutdown(serverInstance);
  });
};

/**
 * @param {Object} serverInstance
 * @param {Function} serverInstance.close
 */
function shutdown(serverInstance) {
  console.info('\nShutting down server gracefully...');
  serverInstance.close(() => {
    console.info('Exiting with status code 1.');
    process.exit(1);
  });
};
