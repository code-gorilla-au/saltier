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
  let lastInvoked = Date.now() - waitMs;

  function debounced(...args) {
    const lastThis = this;
    const timeNow = Date.now();
    const timeSinceLastInvoke = timeNow - lastInvoked;
    const waitRemaining = wait - timeSinceLastInvoke;
    let result = () => undefined;
    if (waitRemaining > 0) {
      return result;
    }

    lastInvoked = timeNow;
    result = fn.apply(lastThis, args);
    return result;
  }
  return debounced;
}

/**
 * trampoline a recusive function for a safe recusion
 * https://levelup.gitconnected.com/safe-recursion-with-trampoline-in-javascript-dbec2b903022
 * @param {Function} fn function to trampoline
 * @returns {Function} function being trampolined
 */
export function trampoline(fn) {
  return function trampolined(...args) {
    let result = fn(...args);
    while (typeof result === 'function') {
      result = result();
    }
    return result;
  };
}
