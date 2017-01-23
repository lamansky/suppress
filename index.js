'use strict'

/**
 * Wraps around a function and suppresses whatever errors it might throw.
 * @param  {function} callback The function with a proclivity for throwing errors.
 * @param  {?any} fallback The value to return in the event that the `callback`
 *   throws an error.
 * @return {function} A passthrough function. Arguments will be forwarded to the
 *   `callback`.
 */
module.exports = function (callback, fallback) {
  return function () {
    if (typeof callback === 'function') {
      try {
        return callback.apply(this || callback, arguments)
      } catch (x) {}
    }
    return fallback
  }
}
