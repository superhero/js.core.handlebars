const
  CoreHandlebars      = require('.'),
  handlebars          = require('handlebars'),
  LocatorConstituent  = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class CoreHandlebarsLocator extends LocatorConstituent
{
  /**
   * @returns {CoreHandlebars}
   */
  locate()
  {
    const 
      path          = this.locator.locate('core/path'),
      configuration = this.locator.locate('core/configuration'),
      basepath      = configuration.find('handlebars/basepath')

    return new CoreHandlebars(path.main.dirname, handlebars, basepath)
  }
}

module.exports = CoreHandlebarsLocator
