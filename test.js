const lazy = require('./');
const test = require('tape');

function testEngine(expression, data) {
  return data[expression].toLowerCase();
};

test('lazy string outputs', function(t) {
  t.is((lazy`foo ${'bar'} baz`)({ bar: 'HELLO' }), 'foo HELLO baz', 'templates single values');
  t.is((lazy`foo ${'bar'} baz ${'qux'}`)({ bar: 'HELLO', qux: 'WORLD' }), 'foo HELLO baz WORLD', 'templates multiple values');
  t.is((lazy`foo ${0} baz ${1}`)(['QUX', 'QIX']), 'foo QUX baz QIX', 'with arrays')
  t.end();
});
