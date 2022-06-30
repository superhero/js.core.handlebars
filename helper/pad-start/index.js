class CoreHandlebarsHelperPadStart
{
  create()
  {
    return (s, targetLength, padString) =>
    {
      return `${s}`.padStart(targetLength, padString)
    }
  }
}

module.exports = CoreHandlebarsHelperPadStart
