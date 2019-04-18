/* eslint-disable global-require */

if (process.env.APP_ENV === 'production') {
  module.exports = require('./bundle.production.js');
} else if (process.env.APP_ENV === 'preproduction') {
  module.exports = require('./bundle.preproduction.js');
} else {
  module.exports = require('./bundle.development.js');
}
