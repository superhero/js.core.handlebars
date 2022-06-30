class CoreHandlebarsHelperPadEnd
{
  create()
  {
    return (s, targetLength, padString) =>
    {
      return `${s}`.padEnd(targetLength, padString)
    }
  }
}

module.exports = CoreHandlebarsHelperPadEnd
