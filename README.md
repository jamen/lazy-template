# lazy-template [![NPM version](https://badge.fury.io/js/lazy-template.svg)](https://npmjs.org/package/lazy-template) [![Build Status](https://travis-ci.org/jamen/lazy-template.svg?branch=master)](https://travis-ci.org/jamen/lazy-template)

> Create template strings that are lazy and reusable.

```js
const lazy = require('lazy-template');

// Create a lazy template string.
const greet = lazy`Hello ${'subject'}.`;

greet({ subject: 'world' });
// => 'Hello world.'

greet({ subject: 'lazy-template user.' });
// => 'Hello lazy-template user.'
```

This module is built with [`pixie`](https://github.com/jamen/pixie), and lets you pass in a second parameter for options.

## Installation

```sh
$ npm install --save lazy-template
```

## API

### `lazy`
Create the `compile` function by using the `lazy` tag on a template string:
```javascript
const compile = lazy`Hello ${'world'}.`;
```

### `compile(data, [options])`
Compile the lazy string against some data.
 - data (`Object`): Data to use in your template.
 - options (`Object`): Options that are passed to [`pixie.compile`](https://github.com/jamen/pixie/blob/master/docs/API.md#compile).

```js
const compile = lazy`Hello ${'world'}.`

compile({ world: 'Earth' });
// => 'Hello Earth.'

compile({ world: 'Mars' });
// => 'Hello Mars.'
```

Returns a string of the compiled contents.

## License

MIT © [Jamen Marz](https://github.com/jamen)
