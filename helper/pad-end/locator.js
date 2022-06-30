const
CoreHandlebarsHelperPadEnd  = require('.'),
LocatorConstituent          = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperPadEndLocator extends LocatorConstituent
{
  /**
   * @returns {CoreHandlebarsHelperPadEnd}
   */
  locate()
  {
    return new CoreHandlebarsHelperPadEnd
  }
}

module.exports = CoreHandlebarsHelperPadEndLocator
