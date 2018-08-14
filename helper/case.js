module.exports = function(...args)
{
  const options = args.pop()

  return args.includes(this._switchValue)
  ? options.fn(this)
  : ''
}
