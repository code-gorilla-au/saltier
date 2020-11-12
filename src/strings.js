/**
 * Strips a string's prefix if present
 * @param {string} value string to be stripped
 * @param {Array<string>} prefixes a list of prefix's to strip
 */
export function stripPrefix(value, ...prefixes) {
  let strippedValue = value;
  prefixes.forEach((p) => {
    if (strippedValue.startsWith(p)) {
      strippedValue = strippedValue.replace(p, '');
    }
  });
  return strippedValue;
}

/**
 * adds a prefix to a string if it doesn't exist already
 * @param {string} value string to have the prefix added
 * @param {string} prefixValue expected prefix
 */
export function addPrefix(value = '', prefixValue = '') {
  if (value === '' || prefixValue === '') {
    return value;
  }
  if (value.startsWith(prefixValue)) {
    return value;
  }
  return `${prefixValue}${value}`;
}

/**
 * capitalise every word in a given sentence
 * @param {String} value sentence
 */
export function capitalise(value) {
  return value
    .toLowerCase()
    .split(' ')
    .map((blob) => blob.charAt(0).toUpperCase() + blob.substring(1))
    .join(' ');
}

/**
 * Takes in Pascal, kebab, camel case and converts to title case
 * @param {String} value - pascal, pnake, pamel case
 */
export function toTitleCase(value) {
  let result = value.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
  result = result.replace(/([a-z])([A-Z])/g, '$1 $2');
  result = result.charAt(0).toUpperCase() + result.substring(1);
  const symbolMatch = RegExp('[-_]', 'g');
  if (result.match(symbolMatch)) {
    result = result.replace(symbolMatch, ' ');
    result = capitalise(result);
  }
  return result;
}

/**
 * truncates text if it's length is greater than to equal to max length
 * @param {string} text - string to truncate
 * @param {number} maxLength - max length of string before truncating
 */
export function truncateText(text, maxLength = 150) {
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.substring(0, maxLength)} ...`;
}
