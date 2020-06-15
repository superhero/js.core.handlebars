class CoreHandlebarsHelperJsonStringify
{
  create()
  {
    return (obj, indentation) => JSON.stringify(obj, null, indentation)
  }
}

module.exports = CoreHandlebarsHelperJsonStringify
