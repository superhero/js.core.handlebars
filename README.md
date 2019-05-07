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
App
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
    "@superhero/core": "*",
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
          template  : 'view/foobar',
          endpoint  : 'api/foobar'
        }
      }
    }
  }
}
```

#### `index.js`

```js
const
CoreFactory = require('@superhero/core/factory'),
coreFactory = new CoreFactory,
core        = coreFactory.create()

core.add('api')
core.add('@superhero/core.handlebars')
core.add('http/server')

core.load()

core.locate('bootstrap').bootstrap().then(() =>
core.locate('http/server').listen(process.env.HTTP_PORT))
```

#### `api/foobar.js`

```js
const Dispatcher = require('@superhero/core/http/server/dispatcher')

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

### Template View

```js
module.exports =
{
  bootstrap:
  {
    handlebars:
    {
      helpers:
      {
        // The library has a few defined core helpers that are activated by default, but can be deactivated with a falsy flag
        // calculate
        // case
        // concat
        // dateformat
        // escDoubleQuote
        // escSingelQuote
        // if
        // jsonStringify
        // math
        // stripTags
        // switch
        // toFixed
        // toLowerCase
        // toUpperCase
        // unless

        // You can add a custom helper by specify it's name and the path to the
        // exported function
        'customHelper'    : 'path-to-helper'
      },
      partials:
      {
        // You can register partials to be loaded and used through-out the
        // application, such as a layout, for instance...
        name : 'path-to-partial'
      }
    },
    // ...
  },
  // ...
}
```
