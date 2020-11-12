/**
 * Checks if date is in the past
 * @param {String} value - Date string
 */
export function isPassedDate(value = '') {
  const date = new Date(value);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  function dayOfMonth() {
    if (date.getMonth() === yesterday.getMonth()) {
      return date.getDate() <= yesterday.getDate();
    }
    return true;
  }

  return (
    dayOfMonth() &&
    date.getMonth() <= yesterday.getMonth() &&
    date.getFullYear() <= yesterday.getFullYear()
  );
}

export function foo() {
  throw Error('not implemented');
}
