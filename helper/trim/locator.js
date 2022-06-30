const
CoreHandlebarsHelperTrim  = require('.'),
LocatorConstituent        = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperTrimLocator extends LocatorConstituent
{
  /**
   * @returns {CoreHandlebarsHelperTrim}
   */
  locate()
  {
    return new CoreHandlebarsHelperTrim
  }
}

module.exports = CoreHandlebarsHelperTrimLocator
