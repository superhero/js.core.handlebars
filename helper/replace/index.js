class CoreHandlebarsHelperReplace
{
  create()
  {
    return (s, substr, replacer) =>
    {
      return s.replaceAll(substr, replacer)
    }
  }
}

module.exports = CoreHandlebarsHelperReplace
