const
CoreHandlebarsHelperSlice = require('.'),
LocatorConstituent        = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperSliceLocator extends LocatorConstituent
{
  /**
   * @returns {CoreHandlebarsHelperReplace}
   */
  locate()
  {
    return new CoreHandlebarsHelperSlice
  }
}

module.exports = CoreHandlebarsHelperSliceLocator
