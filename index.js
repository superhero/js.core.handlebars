const
fs        = require('fs'),
util      = require('util'),
config    = require('./config_module'),
readFile  = util.promisify(fs.readFile)

module.exports = class
{
  constructor(stream)
  {
    this.out        = stream
    this.handlebars = require('handlebars')
  }

  async write(vm, route)
  {
    const template = vm.template || route.template

    if(!template)
      throw new Error('view can not be rendered, no template defined')

    const
    path = `${config.path}/${template}.hbs`,
    body = await this.composeFile(path, vm.body)

    this.out.writeHead(vm.status || 200, vm.headers)
    this.out.end(body)
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
