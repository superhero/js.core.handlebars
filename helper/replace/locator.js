const
CoreHandlebarsHelperReplace = require('.'),
LocatorConstituent          = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperReplaceLocator extends LocatorConstituent
{
  /**
   * @returns {CoreHandlebarsHelperReplace}
   */
  locate()
  {
    return new CoreHandlebarsHelperReplace
  }
}

module.exports = CoreHandlebarsHelperReplaceLocator
