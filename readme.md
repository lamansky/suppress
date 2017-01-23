# suppress

A [Node.js](https://nodejs.org/) module that wraps around a function and suppresses whatever errors it might throw.

When suppressing errors from functions that normally return a value, you can optionally specify a "fallback value" to be returned in the event of an error.

## Installation

```bash
npm install suppress --save
```

## Usage

```javascript
const suppress = require('suppress')

function thrower () {
  throw new Error()
}

suppress(thrower)() // undefined
suppress(thrower, 'return if error')() // 'return if error'
```
