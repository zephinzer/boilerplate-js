module.exports = readinessCheck;

/**
 * Returns an Express.js middleware that performs the following readiness
 * checks:
 *
 * - none
 *
 * @return {Function}
 */
function readinessCheck() {
  return (req, res) => res.json('ok');
};
