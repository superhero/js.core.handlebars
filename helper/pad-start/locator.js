const
CoreHandlebarsHelperPadStart  = require('.'),
LocatorConstituent            = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperPadStartLocator extends LocatorConstituent
{
  /**
   * @returns {CoreHandlebarsHelperPadStart}
   */
  locate()
  {
    return new CoreHandlebarsHelperPadStart
  }
}

module.exports = CoreHandlebarsHelperPadStartLocator
