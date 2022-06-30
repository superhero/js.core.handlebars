class CoreHandlebarsHelperSubstr
{
  create()
  {
    return (s, start, length) =>
    {
      return s.substr(start, length)
    }
  }
}

module.exports = CoreHandlebarsHelperSubstr
