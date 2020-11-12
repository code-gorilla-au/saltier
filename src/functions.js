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
 * @returns {composeFunction} compose function
 */
export function composeTwo(fn1, fn2) {
  return (value) => fn1(fn2(value));
}

/**
 * Performs left-to-right function composition
 * @param  {...composeFunction} fns
 * @returns {composeFunction} compose function
 */
export function pipe(...fns) {
  return (initValue) => fns.reduce((prevFn, fn) => fn(prevFn), initValue);
}

/**
 * Performs right-to-left function composition
 * @param  {...composeFunction} fns
 * @returns {any} result of your compose
 */
export function compose(...fns) {
  return (initValue) => fns.reduceRight((prevFn, fn) => fn(prevFn), initValue);
}

/**
 * Creates a throttled function that only invokes func at most once per every wait milliseconds
 * @param {composeFunction} fn function to be invoked
 * @param {Number} waitMs wait milliseconds
 * @returns {any}
 */
export function debounce(fn, waitMs) {
  const wait = parseInt(waitMs, 10);
  let lastInvoked = Date.now();

  function debounced(...args) {
    const lastThis = this;
    const timeNow = Date.now();
    const timeSinceLastInvoke = timeNow - lastInvoked;
    const waitRemaining = wait - timeSinceLastInvoke;

    let result = () => { };
    if (waitRemaining < 0) {
      return result;
    }

    lastInvoked = timeNow;
    result = fn.apply(lastThis, args);
    return result;
  }
  return debounced;
}
