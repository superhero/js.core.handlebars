describe('view/template/helper/substr', () =>
{
  const
  expect        = require('chai').expect,
  HelperFactory = require('.'),
  helperFactory = new HelperFactory,
  substr        = helperFactory.create()

  it('foobar => foo', () => expect(substr('foobar', 0, 3)).to.be.equal('foo'))
  it('foobar => bar', () => expect(substr('foobar', 3, 3)).to.be.equal('bar'))
})
