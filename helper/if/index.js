class CoreHandlebarsHelperIf
{
  create()
  {
    const 
      comparisonOperator = (a, operator, b) => 
      {
        switch (operator)
        {
          case '==' : case 'eq' : return (a == b)
          case '<'  : case 'lt' : return (a <  b)
          case '<=' : case 'lte': return (a <= b)
          case '>'  : case 'gt' : return (a >  b)
          case '>=' : case 'gte': return (a >= b)
          case '!=' : case 'not': return (a != b)
          case 'typeof' : return  (typeof a == b)
          case 'has'    : return  (a.includes(b))
          case 'in'     : return  (a in b)
          default       : 
          {
            const error = new Error('Handlebars Helper comparison operator unknown')
            error.chain = { a, operator, b }
            error.code  = 'E_HANDLEBARS_HELPER_IF'
            throw error
          }
        }
      },
      logicalOperator = (a, operator, b) =>
      {
        switch (operator)
        {
          case '&&' : case 'and': return (a && b)
          case '||' : case 'or' : return (a || b)
          default: 
          {
            const error = new Error('Handlebars Helper logical operator unknown')
            error.chain = { a, operator, b }
            error.code  = 'E_HANDLEBARS_HELPER_IF'
            throw error
          }
        }
      },
      recursive = (a, args) =>
      {
        if(args.length === 0)
        {
          return !!a
        }

        const operator  = `${args.shift()}`.toLowerCase()
        let b           = args.shift()

        if(operator === '&&'  || operator === '||'
        || operator === 'and' || operator === 'or')
        {
          b = recursive(b, args)
          return logicalOperator(a, operator, b)
        }
        else
        {
          return comparisonOperator(a, operator, b)
        }
      }

    return function(a, ...args)
    {
      if(args.length === 0)
      {
        const error = new Error('Handlebars Helper "if" needs at least one parameter')
        error.code  = 'E_HANDLEBARS_HELPER_IF'
        throw error
      }

      const options = args.pop()

      while(args.length > 0)
      {
        a = recursive(a, args)
      }

      return a ? options.fn(this) : options.inverse(this)
    }
  }
}

module.exports = CoreHandlebarsHelperIf
