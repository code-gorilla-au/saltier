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
 * base debounce function
 * @private
 * @param {Function} fn - function to be invoked
 * @param {number} waitMs - time to wait
 * @param {Object} options - function options
 * @param {boolean} options.throttle - converts debounce to a throttle
 * @returns {Function}
 */
function baseDebounce(fn, waitMs, options = { throttle: false }) {
  const wait = parseInt(waitMs, 10);
  let lastInvoked;
  let timer;

  function debounced(...args) {
    if (!lastInvoked) {
      lastInvoked = Date.now();
    }
    const lastThis = this;
    const timeNow = Date.now();
    const timeSinceLastInvoke = timeNow - lastInvoked;
    const waitRemaining = wait - timeSinceLastInvoke;
    let result = () => undefined;
    if (waitRemaining <= 0) {
      lastInvoked = timeNow;
      clearTimeout(timer);
      result = fn.apply(lastThis, args);
      return result;
    }

    if (!options.throttle) {
      lastInvoked = timeNow;
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      result = fn.apply(lastThis, args);
    }, wait);
    return result;
  }
  return debounced;
}

/**
 * Creates a throttled function that invokes after the provided time.
 * Any attempt to invoke the function before the wait will reset the timer
 * @param {composeFunction} fn function to be invoked
 * @param {Number} waitMs wait milliseconds
 * @returns {any}
 * @example
 * // foo should be 1
 * let foo = 0;
 * const bar = fns.debounce(() => {
 *    foo += 1;
 * }, 100);
 * bar();
 * bar();
 * await new Promise((r) => setTimeout(r, 110));
 */
export function debounce(fn, waitMs) {
  return baseDebounce(fn, waitMs, { throttle: false });
}

/**
 * invoke functions at most once per interval
 * @param {composeFunction} fn - function to be invoked
 * @param {Number} waitMs - wait in milliseconds
 * @returns {any}
 * @example
 * // count should be 2
 * let count = 0;
 * const bar = fns.throttle(() => {
 *     count += 1;
 * }, 100);
 * bar();
 * bar();
 * bar();
 * await new Promise((r) => setTimeout(r, 110));
 * bar();
 */
export function throttle(fn, waitMs) {
  return baseDebounce(fn, waitMs, { throttle: true });
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

/**
 * Restricts a number to be within range
 * @param {number} min min value
 * @param {number} max max value
 * @param {number} value value to be evaluated
 * @example
 * // returns 1
 * const value = clamp(1,10,-1);
 *
 * @example
 * // returns 10
 * const value = clamp(1, 10, 11);
 *
 * @example
 * // returns 5
 * const value = clamp(1, 10, 5);
 */
export function clamp(min, max, value) {
  if (value <= min) {
    return min;
  }
  if (value >= max) {
    return max;
  }
  return value;
}

/**
 * iterate over an object and either pick or omit properties based on keys.
 * returns new object.
 * @private
 * @param {string[]} keys - properties to evaluate
 * @param {object} obj - object to iterate over
 * @param {object} options - iteration options
 */
function baseSelector(keys, obj, options = { omit: true }) {
  if (!Array.isArray(keys) || keys.length === 0) {
    return obj;
  }
  const returnObj = {};
  const objEntries = Object.entries(obj);
  objEntries.forEach(([key, value]) => {
    if (options.omit) {
      if (!keys.includes(key)) {
        returnObj[key] = value;
      }
    } else {
      if (!keys.includes(key)) {
        return;
      }
      returnObj[key] = value;
    }
  });
  return returnObj;
}

/**
 * Returns a partial copy of an object omitting the keys specified.
 * @param {string[]} keys - properties to omit
 * @param {object} obj - object to iterate
 * @example
 * // should return { a: 1 }
 * omit(['b'], { a:1, b:2 })
 */
export function omit(keys, obj) {
  return baseSelector(keys, obj, { omit: true });
}

/**
 * Returns a partial copy of an object containing only the keys specified.
 * If the key does not exist, the property is ignored.
 * @param {string[]} keys - properties to pick
 * @param {object} obj - object to iterate
 * @example
 * // should return { a:1 }
 * pick(['a], { a:1,b:2 })
 */
export function pick(keys, obj) {
  return baseSelector(keys, obj, { omit: false });
}
