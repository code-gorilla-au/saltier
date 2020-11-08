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
  return (value) => fn1(fn2(value));
}

/**
 * Performs left-to-right function composition
 * @param  {...composeFunction} fns
 */
export function pipe(...fns) {
  return (initValue) => fns.reduce((prevFn, fn) => fn(prevFn), initValue);
}

/**
 * Performs right-to-left function composition
 * @param  {...composeFunction} fns
 */
export function compose(...fns) {
  return (initValue) => fns.reduceRight((prevFn, fn) => fn(prevFn), initValue);
}

/**
 * Creates a throttled function that only invokes func at most once per every wait milliseconds
 * @param {composeFunction} fn function to be invoked
 * @param {Number} waitMs wait miliseconds
 */
export function debounce(fn, waitMs) {
  const wait = parseInt(waitMs, 10);
  // eslint-disable-next-line prefer-rest-params
  const lastArgs = arguments;
  const lastThis = this;
  let lastInvoked = Date.now();
  function debounced() {
    let result = () => { };
    const timeNow = Date.now();
    const timeSinceLastInvoke = timeNow - lastInvoked;
    const waitRemaining = wait - timeSinceLastInvoke;
    if (waitRemaining < 0) {
      return result;
    }
    lastInvoked = timeNow;
    result = fn.apply(lastThis, lastArgs);
    return result;
  }
  return debounced;
}
