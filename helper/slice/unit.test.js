describe('view/template/helper/slice', () =>
{
  const
  expect        = require('chai').expect,
  HelperFactory = require('.'),
  helperFactory = new HelperFactory,
  slice         = helperFactory.create()

  it('foobar => foo', () => expect(slice('foobar', 0, 3)).to.be.equal('foo'))
  it('foobar => bar', () => expect(slice('foobar', 3, 6)).to.be.equal('bar'))
})
