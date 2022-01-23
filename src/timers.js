/* eslint-disable import/prefer-default-export */
/**
 * Callback function
 * @callback TimerFunc
 * @param {number} remainingTime remaining time
 * @private
 */

/**
 * simple stop watch with pause and reset
 * @param {Number} initTime starting time to count down
 * @param {TimerFunc} callback callback function
 * @returns {void}
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
    /**
     * Start timer
     */
    start() {
      timeHandler = setInterval(handleTime, defaultInterval);
    },
    /**
     * Pause timer
     */
    pause() {
      clearInterval(timeHandler);
    },
    /**
     * Reset timer
     */
    reset() {
      clearInterval(timeHandler);
      timeLeft = resetTime;
      callback(timeLeft);
      timeHandler = setInterval(handleTime, defaultInterval);
    },
  };
}
