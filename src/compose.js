/**
 * This callback type is called `requestCallback` and is displayed as a global symbol.
 *
 * @callback composeFunction
 * @param {any} value
 */

/**
 * Compose two function
 * @param {composeFunction} fn1
 * @param {composeFunction} fn2
 */
export function composeTwo(fn1, fn2) {
  return function compose(value) {
    return fn1(fn2(value));
  };
}

export function pipe(...fns) {
  return (initValue) => fns.reduce((prevVal, val) => val(prevVal), initValue);
}
