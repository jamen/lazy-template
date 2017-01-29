var pixie = require('pixie')
var fargs = require('fast-args')

module.exports = lazy;

/** @module lazy-template
  *
  * Create template strings that are lazy and reusable.
  *
  */

function lazy(partials) {
  var template = [partials, fargs(arguments, 1)]
  return function(data, compile) {
    if (!compile) compile = pixie.compile
    return compile(template, data)
  }
}
