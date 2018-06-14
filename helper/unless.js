const ifModule = require('./if')
module.exports = (...args) => !ifModule(...args)
