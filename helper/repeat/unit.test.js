describe('view/template/helper/repeat', () =>
{
  const
  expect        = require('chai').expect,
  HelperFactory = require('.'),
  helperFactory = new HelperFactory,
  repeat        = helperFactory.create()

  it('foobar => foobarfoobar', () => expect(repeat('foobar', 2)).to.be.equal('foobarfoobar'))
  it('foobar => foobar',       () => expect(repeat('foobar', 1)).to.be.equal('foobar'))
  it('foobar => ',             () => expect(repeat('foobar', 0)).to.be.equal(''))
})
