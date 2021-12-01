/* eslint-disable import/prefer-default-export */
/**
 * Callback function
 * @callback TimerFunc
 * @param {number} remainingTime remaining time
 */

/**
 * simple stop watch with pause and reset
 * @param {Number} initTime starting time to count down
 * @param {TimerFunc} callback callback function
 * @returns
 * @example
 * const stopwatch = timer((value) => {
 *    console.log(value);
 * });
 * stopwatch.start();
 */
export function timer(initTime, callback = () => {}) {
  const defaultInterval = 1000;
  const resetTime = initTime;
  let timeLeft = initTime;
  let timeHandler;

  function handleTime() {
    if (timeLeft <= 0) {
      clearInterval(timeHandler);
      return;
    }
    timeLeft -= 1;
    callback(timeLeft);
  }
  return {
    start() {
      timeHandler = setInterval(handleTime, defaultInterval);
    },
    pause() {
      clearInterval(timeHandler);
    },
    reset() {
      clearInterval(timeHandler);
      timeLeft = resetTime;
      callback(timeLeft);
      timeHandler = setInterval(handleTime, defaultInterval);
    },
  };
}
