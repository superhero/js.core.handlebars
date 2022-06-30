const
CoreHandlebarsHelperRepeat  = require('.'),
LocatorConstituent          = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperRepeatLocator extends LocatorConstituent
{
  /**
   * @returns {CoreHandlebarsHelperRepeat}
   */
  locate()
  {
    return new CoreHandlebarsHelperRepeat
  }
}

module.exports = CoreHandlebarsHelperRepeatLocator
