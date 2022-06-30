describe('view/template/helper/pad-end', () =>
{
  const
  expect        = require('chai').expect,
  HelperFactory = require('.'),
  helperFactory = new HelperFactory,
  padEnd        = helperFactory.create()

  it('foobar => foobar666',  () => expect(padEnd('foobar',  9, '6' )).to.be.equal('foobar666'))
  it('foobar => foobar6666', () => expect(padEnd('foobar', 10, '6' )).to.be.equal('foobar6666'))
  it('foobar => foobar6767', () => expect(padEnd('foobar', 10, '67')).to.be.equal('foobar6767'))
  it('foobar => foobar',     () => expect(padEnd('foobar',  0, '6' )).to.be.equal('foobar'))
  it('foobar => foobar',     () => expect(padEnd('foobar',  6, '6' )).to.be.equal('foobar'))
})
