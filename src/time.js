const milisecondsPerDay = 86400000;

/**
 * returns date converted to UTC
 * @param {Date} date date object
 */
export function dateToUTC(date) {
  const minutes = date.getMinutes() - date.getTimezoneOffset();
  const newDate = new Date(date);
  newDate.setMinutes(minutes);
  return newDate;
}

/**
 * returns the number of days between two dates
 * @param {Date} startDate date object
 * @param {Date} endDate date object
 */
export function daysBetween(startDate, endDate) {
  return Math.trunc((dateToUTC(endDate) - dateToUTC(startDate)) / milisecondsPerDay);
}

/**
 * returns the number of days since the given date
 * @param {Date} date date object
 */
export function daysSinceDate(date = new Date()) {
  const today = dateToUTC(new Date());
  return daysBetween(date, today);
}

export function dateYesterday() {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return date;
}

/**
 * Checks if date is in the past
 * @param {String} value - Date string
 */
export function isDateInPast(value) {
  const date = new Date(value);
  const yesterday = dateYesterday();
  function dayOfMonth() {
    if (date.getMonth() === yesterday.getMonth()) {
      return date.getDate() <= yesterday.getDate();
    }
    return true;
  }

  if (date.getFullYear() === yesterday.getFullYear()) {
    return (
      dayOfMonth() &&
      date.getMonth() <= yesterday.getMonth()
    );
  }

  return (
    date.getFullYear() <= yesterday.getFullYear()
  );
}
