/**
 * Milliseconds per second
 * @private
 */
const msPerSec = 1000;
/**
 * Milliseconds per minute
 * @private
 */
const msPerMin = msPerSec * 60;

/**
 * Milliseconds per hour
 * @private
 */
const msPerHour = msPerMin * 60;

/**
 * Milliseconds per day
 * @private
 */
const msPerDay = msPerHour * 24;

/**
 * Milliseconds per week
 * @private
 */
const msPerWeek = msPerDay * 7;

/**
 * Milliseconds per month
 * @private
 */
const msPerMonth = msPerDay * 28;

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
  return Math.trunc((dateToUTC(endDate) - dateToUTC(startDate)) / msPerDay);
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

/**
 * checks if a date is within a specified date range
 * @param {Date} date date to be checked
 * @param {Date} startDate lower bound of date range
 * @param {Date} endDate upper bound of date range
 * @returns {boolean} boolean
 * @example
 * // returns true
 * isBetweenDateRange(today(), yesterday(), tomorrow())
 */
export function isBetweenDateRange(date, startDate, endDate) {
  const isAfterDate = daysBetween(startDate, date) >= 0;
  const isBeforeDate = daysBetween(date, endDate) >= 0;
  if (!isAfterDate) {
    return false;
  }
  return isBeforeDate;
}

/**
 * @typedef {Object} RelativeTimeFormat
 * @property {Number} relativeValue - relative value (can be negative)
 * @property {String} formatUnit - format units (seconds, minutes, days, weeks, months)
 */

/**
 * returns the relative value and unit measurement for a difference between time.
 * @private
 * @param {Date} sourceDate
 * @param {Date} targetDate
 * @returns {RelativeTimeFormat}
 */
function getRelativeDiff(sourceDate = new Date(), targetDate = new Date()) {
  const rawDifference = targetDate.getTime() - sourceDate.getTime();
  const isNegative = Math.sign(rawDifference) === -1;
  let formatUnit = 'minute';
  let relativeValue = 0;
  const difference = Math.abs(rawDifference);
  if (difference < msPerMin) {
    formatUnit = 'second';
    relativeValue = Math.trunc(difference / msPerSec);
  }
  if (difference >= msPerMin && difference < msPerHour) {
    formatUnit = 'minute';
    relativeValue = Math.trunc(difference / msPerMin);
  }
  if (difference >= msPerHour && difference < msPerDay) {
    formatUnit = 'hour';
    relativeValue = Math.trunc(difference / msPerHour);
  }
  if (difference >= msPerDay && difference < msPerWeek) {
    formatUnit = 'day';
    relativeValue = Math.trunc(difference / msPerDay);
  }
  if (difference >= msPerWeek && difference < msPerMonth) {
    formatUnit = 'week';
    relativeValue = Math.trunc(difference / msPerWeek);
  }
  if (difference >= msPerMonth) {
    formatUnit = 'month';
    relativeValue = Math.trunc(difference / msPerMonth);
  }
  relativeValue = isNegative ? -Math.abs(relativeValue) : relativeValue;
  return {
    relativeValue, formatUnit,
  };
}

/**
 * returns the date relative time formatting
 * @param {Date} date - date to format
 * @returns {string} date in string format
 */
export function relativeFromToday(date = new Date()) {
  if (!(date instanceof Date) && !Number.isNaN(date)) {
    throw Error('date must be a date object');
  }
  const today = new Date();
  const { relativeValue, formatUnit } = getRelativeDiff(today, date);
  return new Intl.RelativeTimeFormat().format(relativeValue, formatUnit);
}
