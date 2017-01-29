# lazy-template [![NPM version](https://badge.fury.io/js/lazy-template.svg)](https://npmjs.org/package/lazy-template) [![Build Status](https://travis-ci.org/jamen/lazy-template.svg?branch=master)](https://travis-ci.org/jamen/lazy-template)

> Create template strings that are lazy and reusable.

```js
const lazy = require('lazy-template')

// Create a lazy template string.
const greet = lazy`Hello ${0}. How is ${1}?`
// Use the returned function to compile.

greet([ 'Earth', 'the weather' ])
// => 'Hello Earth. How is the weather?'

greet([ 'Mars', 'Jamen' ])
// => 'Hello Mars.  How is Jamen?'
```

This module is built with [`pixie`](https://github.com/jamen/pixie).  You can use array indexes or object keys for the points.  Or just provide a different `compile` function all together.

## Installation

```sh
$ npm install --save lazy-template
```

## Usage

### `lazy`

Create a lazy template string.  Returns a `compile` function, which when called returns the concatenated string.

```javascript
// Using array indexes:
const compile = lazy`Hello ${0}. How are ${1}?`

// Using object keys:
const compile = lazy`Hello ${'world'}.  How is ${'thing'}?`
```

### `compile(data, [compile])`

Compile the "lazy string" using some data.  Returns resulting string.

 - data (`Array`|`Object`): Data to use in your template.
 - compile (`Function`): A custom function to replace [`pixie.compile`](https://github.com/jamen/pixie#pixie_compile)

```js
const compile = lazy`Hello ${0}.`
compile([ 'Earth' ])
// => 'Hello Earth.'

const compile = lazy`Hello ${'world'}.`
compile({ world: 'Mars' });
// => 'Hello Mars.'

const compile = lazy`Hello ${0}.  How is ${1}?`
compile([ 'Pluto', 'Jamen' ], function (template, data) {
  // Compile `template` and `data`
  // Return result
})
```

## License

MIT © [Jamen Marz](https://github.com/jamen)
