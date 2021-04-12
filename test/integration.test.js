describe('integration tests', () =>
{
  const
  handlebars  = require('handlebars'),
  expect      = require('chai').expect

  let core, html

  before(async () =>
  {
    const
    CoreFactory = require('superhero/core/factory'),
    coreFactory = new CoreFactory

    core = coreFactory.create()

    core.add('@superhero/core.handlebars', __dirname + '/..')
    core.add('test', __dirname)

    core.load()

    // bootstrap and compose the html template
    await core.locate('core/bootstrap').bootstrap()

    const
    view      = core.locate('@superhero/core.handlebars'),
    filename  = '/test/template/template',
    context   =
    {
      foo : 'foobar',
      i   : 5
    }

    html = await view.composeFile(filename, context)
  })

  describe('static get handlebars', () =>
  {
    it('should return the handlebars instance', () =>
    {
      const view = core.locate('@superhero/core.handlebars')
      expect(view.handlebars).to.be.equal(handlebars)
    })
  })

  describe('', async () =>
  {
    it('possible to load template',
    () => expect(html.includes('loaded')).to.be.equal(true))

    it('possible to read context variable',
    () => expect(html.includes('foobar')).to.be.equal(true))

    it('possible to load a partial',
    () => expect(html.includes('<head>')).to.be.equal(true))

    it('if helper "=="',
    () => expect(html.includes('==')).to.be.equal(true))

    it('if helper "!="',
    () => expect(html.includes('!=')).to.be.equal(true))

    it('if helper "<"',
    () => expect(html.includes('<')).to.be.equal(true))

    it('if helper "<="',
    () => expect(html.includes('<=')).to.be.equal(true))

    it('if helper ">"',
    () => expect(html.includes('>')).to.be.equal(true))

    it('if helper ">="',
    () => expect(html.includes('>=')).to.be.equal(true))

    it('if helper "&&"',
    () => expect(html.includes('&&')).to.be.equal(true))

    it('if helper "||"',
    () => expect(html.includes('||')).to.be.equal(true))

    it('if helper "typeof"',
    () => expect(html.includes('typeof')).to.be.equal(true))
  })
})
