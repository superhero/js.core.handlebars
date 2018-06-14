const ifModule = require('./if');

module.exports = function(a, operator, b, options)
{
  return !ifModule(a, operator, b, options);
}