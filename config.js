module.exports =
{
  handlebars:
  {
    helpers:
    {
      'calculate'       : '@superhero/core.handlebars/helper/calculate',
      'case'            : '@superhero/core.handlebars/helper/case',
      'concat'          : '@superhero/core.handlebars/helper/concat',
      'dateformat'      : '@superhero/core.handlebars/helper/dateformat',
      'escDoubleQuote'  : '@superhero/core.handlebars/helper/esc-double-quote',
      'escSingelQuote'  : '@superhero/core.handlebars/helper/esc-singel-quote',
      'if'              : '@superhero/core.handlebars/helper/if',
      'jsonStringify'   : '@superhero/core.handlebars/helper/json-stringify',
      'math'            : '@superhero/core.handlebars/helper/math',
      'padEnd'          : '@superhero/core.handlebars/helper/pad-end',
      'padStart'        : '@superhero/core.handlebars/helper/pad-start',
      'repeat'          : '@superhero/core.handlebars/helper/repeat',
      'replace'         : '@superhero/core.handlebars/helper/replace',
      'slice'           : '@superhero/core.handlebars/helper/slice',
      'stripTags'       : '@superhero/core.handlebars/helper/strip-tags',
      'substr'          : '@superhero/core.handlebars/helper/substr',
      'switch'          : '@superhero/core.handlebars/helper/switch',
      'toFixed'         : '@superhero/core.handlebars/helper/to-fixed',
      'toLowerCase'     : '@superhero/core.handlebars/helper/to-lower-case',
      'toUpperCase'     : '@superhero/core.handlebars/helper/to-upper-case',
      'unless'          : '@superhero/core.handlebars/helper/unless'
    },
    partials:
    {

    }
  },
  core:
  {
    bootstrap:
    {
      '@superhero/core.handlebars' : '@superhero/core.handlebars/bootstrap'
    },
    locator:
    {
      '@superhero/core.handlebars/bootstrap'                : __dirname + '/bootstrap',
      '@superhero/core.handlebars/helper/calculate'         : __dirname + '/helper/calculate',
      '@superhero/core.handlebars/helper/case'              : __dirname + '/helper/case',
      '@superhero/core.handlebars/helper/concat'            : __dirname + '/helper/concat',
      '@superhero/core.handlebars/helper/dateformat'        : __dirname + '/helper/dateformat',
      '@superhero/core.handlebars/helper/esc-double-quote'  : __dirname + '/helper/esc-double-quote',
      '@superhero/core.handlebars/helper/esc-singel-quote'  : __dirname + '/helper/esc-singel-quote',
      '@superhero/core.handlebars/helper/if'                : __dirname + '/helper/if',
      '@superhero/core.handlebars/helper/json-stringify'    : __dirname + '/helper/json-stringify',
      '@superhero/core.handlebars/helper/math'              : __dirname + '/helper/math',
      '@superhero/core.handlebars/helper/pad-end'           : __dirname + '/helper/pad-end',
      '@superhero/core.handlebars/helper/pad-start'         : __dirname + '/helper/pad-start',
      '@superhero/core.handlebars/helper/repeat'            : __dirname + '/helper/repeat',
      '@superhero/core.handlebars/helper/replace'           : __dirname + '/helper/replace',
      '@superhero/core.handlebars/helper/slice'             : __dirname + '/helper/slice',
      '@superhero/core.handlebars/helper/strip-tags'        : __dirname + '/helper/strip-tags',
      '@superhero/core.handlebars/helper/substr'            : __dirname + '/helper/substr',
      '@superhero/core.handlebars/helper/switch'            : __dirname + '/helper/switch',
      '@superhero/core.handlebars/helper/to-fixed'          : __dirname + '/helper/to-fixed',
      '@superhero/core.handlebars/helper/to-lower-case'     : __dirname + '/helper/to-lower-case',
      '@superhero/core.handlebars/helper/to-upper-case'     : __dirname + '/helper/to-upper-case',
      '@superhero/core.handlebars/helper/unless'            : __dirname + '/helper/unless',
      '@superhero/core.handlebars'                          : __dirname
    }
  }
}
