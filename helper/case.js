module.exports = function(options, ...args)
{
  return args.includes(this._switchValue)
  ? ''
  : options.fn(this)
}
