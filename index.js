var pixie = require('pixie');

module.exports = lazy;

/** @module lazy-template
  *
  * Create template strings that are lazy and reusable.
  *
  */

function lazy(partials) {
  var expressions = Array.prototype.slice.call(arguments, 1);
  var template = [partials, expressions];
  return function(data, options) {
    return pixie.compile(template, data, options);
  }
};
