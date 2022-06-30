describe('view/template/helper/replace', () =>
{
  const
  expect        = require('chai').expect,
  HelperFactory = require('.'),
  helperFactory = new HelperFactory,
  replace       = helperFactory.create()

  it('foobar => foobaz', () => expect(replace('foobar', 'bar', 'baz')).to.be.equal('foobaz'))
  it('foofoo => barbar', () => expect(replace('foofoo', 'foo', 'bar')).to.be.equal('barbar'))
  it('foobar => foobar', () => expect(replace('foobar', 'baz', 'qux')).to.be.equal('foobar'))
})
