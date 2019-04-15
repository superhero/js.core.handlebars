const
CoreHandlebars      = require('.'),
fs                  = require('fs'),
handlebars          = require('handlebars'),
LocatorConstituent  = require('@superhero/core/locator/constituent')

/**
 * @extends {@superhero/core/locator/constituent}
 */
class CoreHandlebarsLocator extends LocatorConstituent
{
  /**
   * @returns {CoreHandlebars}
   */
  locate()
  {
    const
    path          = this.locator.locate('path'),
    configuration = this.locator.locate('configuration'),
    options       = configuration.find('handlebars'),
    handlebars    = buildHandlebars(path.main.dirname, options.helpers, options.partials)

    return new CoreHandlebars(path.main.dirname, handlebars)
  }
}

module.exports = CoreHandlebarsLocator

let _handlebars

function buildHandlebars(dirname, helpers, partials)
{
  if(_handlebars)
    return _handlebars

  _handlebars = handlebars

  if(!dirname)
  {
    const msg = 'The public directory is not set'
    throw new Error(msg)
  }

  if(partials)
  {
    for(const partial in partials)
    {
      const
      template  = partials[partial],
      filename  = `${dirname}/${template}.hbs`,
      encoding  = 'utf-8',
      source    = fs.readFileSync(filename, encoding)

      _handlebars.registerPartial(partial, source)
    }
  }

  if(helpers)
  {
    if(typeof helpers !== 'object')
    {
      const msg = `Invalid format for "config.handlebars.helpers". `
                + `Expected "object" or "Array", found:"${typeof helpers}"`
      throw new TypeError(msg)
    }

    for(const name in helpers)
    {
      const filename = helpers[name]

      let helper

      switch(typeof filename)
      {
        case 'boolean':
        {
          if(filename)
          {
            helper = require(`${__dirname}/helper/${name}`)
            break
          }
          else
          {
            // if false, then lets not...
            continue
          }
        }
        case 'string':
        {
          helper = require(filename)
          break
        }
        default:
        {
          const msg = `Invalid filename. `
                    + `Expected "string" or "boolean". `
                    + `Found:"${typeof filename}"`
          throw new TypeError(msg)
        }
      }

      _handlebars.registerHelper(name, helper)
    }
  }

  return _handlebars
}
