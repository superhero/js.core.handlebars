const
CoreHandlebarsHelperUnless  = require('.'),
LocatorConstituent          = require('@superhero/core/locator/constituent')

/**
 * @extends {@superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperUnlessLocator extends LocatorConstituent
{
  /**
   * @returns {CoreHandlebarsHelperUnless}
   */
  locate()
  {
    const helperIf = this.locator.locate('@superhero/core.handlebars/helper/if')
    return new CoreHandlebarsHelperUnless(helperIf)
  }
}

module.exports = CoreHandlebarsHelperUnlessLocator
