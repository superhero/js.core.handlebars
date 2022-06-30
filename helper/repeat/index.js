class CoreHandlebarsHelperRepeat
{
  create()
  {
    return (s, count) =>
    {
      return `${s}`.repeat(count)
    }
  }
}

module.exports = CoreHandlebarsHelperRepeat
