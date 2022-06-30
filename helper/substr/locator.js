const
CoreHandlebarsHelperSubstr  = require('.'),
LocatorConstituent          = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperSubstrLocator extends LocatorConstituent
{
  /**
   * @returns {CoreHandlebarsHelperSubstr}
   */
  locate()
  {
    return new CoreHandlebarsHelperSubstr
  }
}

module.exports = CoreHandlebarsHelperSubstrLocator
