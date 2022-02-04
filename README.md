# Core › Handlebars

Licence: [MIT](https://opensource.org/licenses/MIT)

---

[![npm version](https://badge.fury.io/js/%40superhero%2Fcore.handlebars.svg)](https://badge.fury.io/js/%40superhero%2Fcore.handlebars)

This is an addon module to the [superhero/core](https://github.com/superhero/js.core) module. This addon will add a `handlebars` view option.

## Install

`npm install @superhero/core.handlebars`

...or just set the dependency in your `package.json` file:

```json
{
  "dependencies":
  {
    "@superhero/core.handlebars": "*"
  }
}
```

## Example Application

### Example Application › File structure

```
src
├── api
│   └── foobar.js
├── view
│   ├── foobar.hbs
│   └── layout.hbs
├── config.js
├── index.js
└── package.json
```

#### `package.js`

```js
{
  "name": "Super Duper App",
  "version": "0.0.1",
  "description": "An example meant to describe the libraries fundamentals",
  "license": "MIT",
  "dependencies": {
    "superhero": "*",
    "@superhero/core.handlebars": "*"
  }
}

```

#### `config.js`

```js
module.exports =
{
  handlebars:
  {
    partials:
    {
      layout  : 'view/layout'
    }
  },
  core:
  {
    http:
    {
      server:
      {
        routes:
        {
          'create-calculation':
          {
            url       : '/',
            method    : 'get',
            view      : '@superhero/core.handlebars',
            input     : false,
            template  : 'view/foobar',
            endpoint  : 'api/foobar'
          }
        }
      }
    }
  }
}
```

#### `index.js`

```js
const
CoreFactory = require('superhero/core/factory'),
coreFactory = new CoreFactory,
core        = coreFactory.create()

core.add('api')
core.add('@superhero/core.handlebars')

core.load()

core.locate('bootstrap').bootstrap().then(() =>
core.locate('core/http/server').listen(80))
```

#### `api/foobar.js`

```js
const Dispatcher = require('superhero/core/http/server/dispatcher')

class FoobarEndpoint extends Dispatcher
{
  async dispatch()
  {
    // Building a view model that we can use to render the view
    this.view.body.foo = 'bar'
  }
}

module.exports = FoobarEndpoint
```

#### `view/layout.hbs`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ title }}</title>
  </head>

  <body>
    <main>
      {{> @partial-block }}
    </main>
  </body>
</html>
```

#### `view/foobar.hbs`

```html
{{#> layout title="Insert awesome title for the page here" }}
  <p>
    Write your markup here with support for variables, eg: "{{ foo }}"
  </p>
{{/ layout }}
```

### Config overview

```js
module.exports =
{
  handlebars:
  {
    // The library has a few defined core helpers that are activated by default, but can be deactivated with a falsy flag
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
      'stripTags'       : '@superhero/core.handlebars/helper/strip-tags',
      'switch'          : '@superhero/core.handlebars/helper/switch',
      'toFixed'         : '@superhero/core.handlebars/helper/to-fixed',
      'toLowerCase'     : '@superhero/core.handlebars/helper/to-lower-case',
      'toUpperCase'     : '@superhero/core.handlebars/helper/to-upper-case',
      'unless'          : '@superhero/core.handlebars/helper/unless'

      // You can add a custom helper by specify it's name and the path to the service that returns a helper function through the method: "create"
      // example:
      // 'customHelper'    : 'path-to-helper'
    },
    partials:
    {
      // it's possible to register partials to be loaded and used through-out the application
      // example:
      // foo  : 'view/foobar'
    }
  }
}
```