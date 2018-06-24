const ifModule = require('./if')
module.exports = (...args) =>
{
  const
  options = args.pop(),
  inverse = options.inverse

  options.inverse = options.fn
  options.fn      = inverse

  return ifModule(...args, options)
}
