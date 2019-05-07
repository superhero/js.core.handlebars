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
    handlebars    = buildHandlebars(path.main.dirname, this.locator, options)

    return new CoreHandlebars(path.main.dirname, handlebars)
  }
}

module.exports = CoreHandlebarsLocator

let _handlebars

function buildHandlebars(dirname, locator, options)
{
  if(_handlebars)
    return _handlebars

  _handlebars = handlebars

  if(!dirname)
  {
    const msg = 'The public directory is not set'
    throw new Error(msg)
  }

  if(options.partials)
  {
    for(const partial in options.partials)
    {
      const
      template  = options.partials[partial],
      filename  = `${dirname}/${template}.hbs`,
      encoding  = 'utf-8',
      source    = fs.readFileSync(filename, encoding)

      _handlebars.registerPartial(partial, source)
    }
  }

  if(options.helpers)
  {
    if(typeof options.helpers !== 'object')
    {
      const msg = `Invalid format for "config.handlebars.helpers". `
                + `Expected "object" or "Array", found:"${typeof options.helpers}"`
      throw new TypeError(msg)
    }

    for(const name in options.helpers)
    {
      const service = options.helpers[name]

      let helper

      switch(typeof service)
      {
        case 'boolean':
        {
          if(service)
          {
            const msg = `boolean value "true" is not a valid option for a handlebars helper, absolute path is required.`
            throw new TypeError(msg)
          }
          else
          {
            // if false, then lets not...
            continue
          }
        }
        case 'string':
        {
          const helperFactory = locator.locate(service)

          if(typeof helperFactory.create !== 'function')
          {
            const msg = `Invalid helper factory, contract not honered. Expected "create" function is undefined.`
            throw new TypeError(msg)
          }

          helper = helperFactory.create()
          break
        }
        default:
        {
          const msg = `Invalid service. `
                    + `Expected "string" or "boolean". `
                    + `Found:"${typeof service}"`
          throw new TypeError(msg)
        }
      }

      _handlebars.registerHelper(name, helper)
    }
  }

  return _handlebars
}
