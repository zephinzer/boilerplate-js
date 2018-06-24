const fs = require('fs');
const path = require('path');

const VERSION_PATH = path.join(process.cwd(), './dist/.version');

module.exports = livenessCheck;

/**
 * Returns an Express.js middleware that performs the following health checks:
 *
 * - build `.verison` (generated by `npm run build`) is present
 *
 * @return {Function}
 */
function livenessCheck() {
  return (req, res) => {
    const buildExists = fs.existsSync(VERSION_PATH);
    if (buildExists) {
      res.status(200).json('ok');
    } else {
      res.status(500).json('not ok');
    }
  };
};
