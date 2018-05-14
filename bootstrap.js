const
handlebars  = require('handlebars'),
config      = require('./config'),
log         = require('@superhero/debug').log

addHelper(name, filename)
{
  let helper
  switch(typeof filename)
  {
    case 'string' :
      helper = require(filename)
      break

    case 'undefined' :
      helper = require(`${__dirname}/helper/${name}`)
      break

    default:
      const
      msg   = `Invalid filename. `
            + `Expected "string" or "boolean". `
            + `Found:"${typeof filename}"`,
      error = new TypeError(msg)
      throw error
  }

  handlebars.registerHelper(name, helper)
}

module.exports = (options, config_core) =>
{
  log(`Bootstrap handlebars`)

  config_core.view.handlebars = __dirname

  log(`Added the view "handlebars" to the list of accepted view servants`)

  if('path' in options)
  {
    log(`Set the public directory to: ${options.path}"`)
    config.path = options.path
  }

  if('partials' in options)
  {
    log(`Adding partials`)
    for(let partial in options.partials)
    {
      log(`Adding partial:"${partial}"`)

      const
      template = options.partials[partial],
      source = fs.readFileSync(`${config.path}/${template}.hbs`, 'utf-8')

      handlebars.registerPartial(name, source)
    }
  }

  if('helpers' in options)
  {
    log(`Adding helpers`)
    if(Array.isArray(options.helpers))
    {
      log(`Adding helpers by Array`)
      for(const name of options.helpers)
      {
        log(`Adding helper:"${name}"`)
        addHelper(name)
      }
    }

    else if(typeof options.helpers === 'object')
    {
      log(`Adding helpers by object`)
      for(const name in options.helpers)
      {
        const filepath = options.helpers[name]

        // if true, then assume attempting to add a library helper
        if(filepath === true)
        {
          log(`Adding helper:"${name}"`)
          addHelper(name)
        }
        else if(filepath)
        {
          log(`Adding custom helper:"${name}" from:"${filepath}"`)
          addHelper(name, filepath)
        }
        else
        {
          log(`Ignoring helper:"${name}"`)
        }
      }
    }

    else
    {
      const
      type  = typeof options.helpers,
      msg   = `Invalid format for "config.handlebars.helpers". `
            + `Expected "object" or "Array", found:"${type}"`
      error = new TypeError(msg)
      throw error
    }
  }
}
