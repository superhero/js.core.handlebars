describe('view/handlebars', () =>
{
  const
  handlebars  = require('handlebars'),
  expect      = require('chai').expect

  let core

  before((done) =>
  {
    const
    CoreFactory = require('@superhero/core/factory'),
    coreFactory = new CoreFactory

    core = coreFactory.create()

    core.add('@superhero/core.handlebars', __dirname + '/..')

    core.load()

    core.locate('bootstrap').bootstrap().then(done)
  })

  describe('static get handlebars', () =>
  {
    it('should return the handlebars instance', () =>
    {
      const view = core.locate('view/handlebars')
      expect(view.handlebars).to.be.equal(handlebars)
    })
  })

  /*
  describe('', () =>
  {
    let html

    before(async () =>
    {
      const
      Core = require('@superhero/core'),
      core = new Core({ view:{} })

      await core.bootstrap(
      {
        [__dirname] :
        {
          path      : __dirname,
          partials  : { layout : 'test/layout' },
          helpers   : { if : true }
        }
      })

      html = await view.compose(
      {
        template  : 'test/template',
        body      :
        {
          foo : 'foobar',
          i   : 5
        }
      })
    })

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
  */
})
