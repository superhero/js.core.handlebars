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
    this.templates  = {}
  }

  async write(output, viewModel, route)
  {
    const template = viewModel.meta.template || viewModel.template || route.template

    if(!template)
    {
      const error = new Error('view can not be rendered, no template defined')
      error.chain = { template, viewModel, route }
      error.code  = 'E_CORE_HANDLEBARS_NO_ROUTE'
      throw error
    }

    const body = await this.composeFile(template, viewModel.body)

    viewModel.headers['Content-Length'] = Buffer.byteLength(body)

    output.writeHead(viewModel.meta.status || 200, viewModel.headers)
    output.end(body)
  }

  async lazyloadTemplate(template)
  {
    if(template in this.templates)
    {
      return this.templates[template]
    }

    const 
      filename  = template[0] === '/' ? `${template}.hbs` : `${this.dirname}/${template}.hbs`,
      source    = await readFile(filename, 'utf-8'),
      compiled  = this.handlebars.compile(source)

    return this.templates[template] = compiled
  }

  async composeFile(template, context)
  {
    const
      handlebarsTemplate  = await this.lazyloadTemplate(template),
      result              = handlebarsTemplate(context)

    return result
  }
}

module.exports = CoreHandlebars
