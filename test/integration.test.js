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
    filename  = __dirname + '/template/template',
    context   =
    {
      foo : 'foobar',
      i   : 5
    }

    core.locate('core/console').color('cyan').log('')
    core.locate('core/console').color('cyan').log('- composing file for integration tests:', filename)
    html = await view.composeFile(filename, context)
    core.locate('core/console').color('green').log('✔ composed file')
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

    it('if helper "multiple operators AND"',
    () => expect(html.includes('multiple operators AND')).to.be.equal(true))

    it('if helper "multiple operators OR"',
    () => expect(html.includes('multiple operators OR')).to.be.equal(true))

    it('if helper "multiple x2 operators AND"',
    () => expect(html.includes('multiple x2 operators AND')).to.be.equal(true))

    it('if helper "multiple x2 operators OR"',
    () => expect(html.includes('multiple x2 operators OR')).to.be.equal(true))
  })
})
