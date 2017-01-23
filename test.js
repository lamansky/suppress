'use strict'

const assert = require('assert')
const suppress = require('.')

describe('suppress()', function () {
  it('should suppress errors', function () {
    function thrower () {
      throw new Error()
    }

    assert.throws(thrower)
    assert.strictEqual(typeof suppress(thrower)(), 'undefined')
  })

  it('should return the provided fallback if there’s an error', function () {
    function thrower () {
      throw new Error()
    }

    assert.throws(thrower)
    assert.strictEqual(suppress(thrower, 'fallback')(), 'fallback')
  })

  it('should forward the value of `this` to class methods', function () {
    class TestClass {
      constructor (value) {
        this.value = value
      }
      thrower () {
        if (this.value === 'test') throw new Error()
        return 'did not throw'
      }
    }

    TestClass.prototype.thrower = suppress(TestClass.prototype.thrower, 'threw')

    const obj = new TestClass('test')
    assert.strictEqual(obj.thrower(), 'threw')
  })

  it('should silently ignore a non-function', function () {
    suppress('not a function')()
  })
})
