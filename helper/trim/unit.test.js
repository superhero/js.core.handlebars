describe('view/template/helper/trim', () =>
{
  const
  expect        = require('chai').expect,
  HelperFactory = require('.'),
  helperFactory = new HelperFactory,
  trim          = helperFactory.create()

  it('"  foobar  " => "foobar"', () => expect(trim('  foobar  ')).to.be.equal('foobar'))
})
