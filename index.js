if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  module.exports = require('./dist/cookie.js')
} else {
  module.exports = require('./dist/cookie.min.js')
}
