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
 * @example
 * // returns 10
 * const sum = composeTwo(add(2), add(3))
 * sum(5)
 */
export function composeTwo(fn1, fn2) {
  return (value) => fn1(fn2(value));
}

/**
 * Performs left-to-right function composition
 * @param  {...composeFunction} fns
 * @returns {composeFunction} compose function
 * @example
 * // returns 3
 * const mathPipe = fns.pipe(
 *    (value) => value * 2,
 *    (value) => value - 3,
 * )(3);
 */
export function pipe(...fns) {
  return (initValue) => fns.reduce((prevFn, fn) => fn(prevFn), initValue);
}

/**
 * Performs right-to-left function composition
 * @param  {...composeFunction} fns
 * @returns {any} result of your compose
 * @example
 * // returns 3
 * const stuff = fns.compose(
 *    (value) => value - 3,
 *    (value) => value * 2,
 * )(3);
 */
export function compose(...fns) {
  return (initValue) => fns.reduceRight((prevFn, fn) => fn(prevFn), initValue);
}

/**
 * Creates a throttled function that only invokes func at most once per every wait milliseconds
 * @param {composeFunction} fn function to be invoked
 * @param {Number} waitMs wait milliseconds
 * @returns {any}
 * @example
 * // foo should be 2
 * let foo = 0;
 * const bar = fns.debounce(() => {
 *    foo += 1;
 * }, 100);
 * bar();
 * bar();
 * await new Promise((r) => setTimeout(r, 110));
 * bar();
 */
export function debounce(fn, waitMs) {
  const wait = parseInt(waitMs, 10);
  let lastInvoked = Date.now();
  let timer;

  function debounced(...args) {
    const lastThis = this;
    const timeNow = Date.now();
    const timeSinceLastInvoke = timeNow - lastInvoked;
    const waitRemaining = wait - timeSinceLastInvoke;
    let result = () => undefined;
    if (waitRemaining > 0) {
      lastInvoked = timeNow;
      clearTimeout(timer);
      timer = setTimeout(() => {
        result = fn.apply(lastThis, args);
      }, wait);
      return result;
    }

    lastInvoked = timeNow;
    clearTimeout(timer);
    result = fn.apply(lastThis, args);
    return result;
  }
  return debounced;
}

/**
 * trampoline a recursive function for a safe recursion
 * https://levelup.gitconnected.com/safe-recursion-with-trampoline-in-javascript-dbec2b903022
 * @param {Function} fn function to trampoline
 * @returns {Function} function being trampolined
 * @example
 * // returns true
 * function recursiveFn(n) {
 *   if (n < 0) {
 *     return true;
 *   }
 *   return function f() {
 *     return recursiveFn(n - 1);
 *   };
 * }
 * trampoline(recursiveFn)
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
