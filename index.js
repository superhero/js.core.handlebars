const
fs        = require('fs'),
util      = require('util'),
config    = require('./config_module'),
readFile  = util.promisify(fs.readFile)

module.exports = class
{
  get handlebars()
  {
    return require('handlebars')
  }

  async compose(vm, route)
  {
    const template = vm.template || route.template

    if(!template)
      throw new Error('view can not be rendered, no template defined')

    return await this.composeFile(`${config.path}/${template}.hbs`, vm.body)
  }

  async composeFile(filename, context)
  {
    return await readFile(filename, 'utf-8').then((source) =>
    {
      const
      template = this.handlebars.compile(source),
      composed = template(context)

      return composed
    })
  }
}
