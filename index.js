const
fs        = require('fs'),
util      = require('util'),
readFile  = util.promisify(fs.readFile)

class CoreHandlebars
{
  constructor(dirname, handlebars)
  {
    this.dirname    = dirname
    this.handlebars = handlebars
  }

  async write(output, viewModel, route)
  {
    const template = viewModel.meta.template || viewModel.template || route.template

    if(!template)
    {
      const msg = 'view can not be rendered, no template defined'
      throw new Error(msg)
    }

    const body = await this.composeFile(template, viewModel.body)

    viewModel.headers['Content-Length'] = Buffer.byteLength(body)

    output.writeHead(viewModel.meta.status || 200, viewModel.headers)
    output.end(body)
  }

  async composeFile(template, context)
  {
    const filename = `${this.dirname}/${template}.hbs`
    return await readFile(filename, 'utf-8').then((source) =>
    {
      const
      template = this.handlebars.compile(source),
      composed = template(context)

      return composed
    })
  }
}

module.exports = CoreHandlebars
