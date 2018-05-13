describe('view/handlebars', () =>
{
  const expect = require('chai').expect

  let View, view

  before(() =>
  {
    View = require('.')
    view = new View
  })

  describe('static get handlebars', () =>
  {
    it('should return the handlebars instance',
    () => expect(view.handlebars).to.be.equal(require('handlebars')))
  })
})
