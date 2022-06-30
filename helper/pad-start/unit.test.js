describe('view/template/helper/pad-start', () =>
{
  const
  expect        = require('chai').expect,
  HelperFactory = require('.'),
  helperFactory = new HelperFactory,
  padStart      = helperFactory.create()

  it('foobar => 666foobar',  () => expect(padStart('foobar',  9, '6' )).to.be.equal('666foobar'))
  it('foobar => 6666foobar', () => expect(padStart('foobar', 10, '6' )).to.be.equal('6666foobar'))
  it('foobar => 6767foobar', () => expect(padStart('foobar', 10, '67')).to.be.equal('6767foobar'))
  it('foobar => foobar',     () => expect(padStart('foobar',  0, '6' )).to.be.equal('foobar'))
  it('foobar => foobar',     () => expect(padStart('foobar',  6, '6' )).to.be.equal('foobar'))
})
