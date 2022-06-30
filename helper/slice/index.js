class CoreHandlebarsHelperSlice
{
  create()
  {
    return (s, start, end) =>
    {
      return s.slice(start, end)
    }
  }
}

module.exports = CoreHandlebarsHelperSlice
