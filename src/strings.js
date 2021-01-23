/**
 * adds a prefix to a string if it doesn't exist already
 * @param {string} value string to have the prefix added
 * @param {string} prefixValue expected prefix
 * @example
 * // returns flashsuper
 * addPrefix(super, flash)
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
 * Strips a string's prefix if present
 * @param {string} value string to be stripped
 * @param {Array<string>} prefixes a list of prefix's to strip
 * @example
 * // returns super
 * stripPrefix(superflash, super)
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
 * capitalise every word in a given sentence
 * @param {String} value sentence
 * @example
 * // returns Hello World
 * capitalise(hello world)
 */
export function capitalise(value) {
  return value
    .split(' ')
    .map((blob) => blob.charAt(0).toUpperCase() + blob.substring(1))
    .join(' ');
}

/**
 * split string to have spaces based on two conditions
 * split via capitol letters
 * @private
 * @param {string} value
 * @return {string}
 */
function splitValues(value) {
  const result = value.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
  return result.replace(/([a-z])([A-Z])/g, '$1 $2');
}

/**
 * Takes in Pascal, kebab, camel, snake case and converts to snake_case
 * @param {string} value
 * @example
 * // returns hello_world
 * toSnakeCase(helloWorld)
 */
export function toSnakeCase(value) {
  let result = splitValues(value);
  const symbolMatch = RegExp('[-_ ]', 'g');
  if (result.match(symbolMatch)) {
    result = result.replace(symbolMatch, '_');
  }
  return result.toLowerCase();
}

/**
 * Takes in Pascal, kebab, camel, snake case and converts to Title ase
 * @param {String} value - pascal, snake, camel case
 */
export function toTitleCase(value) {
  let result = splitValues(value);
  const symbolMatch = RegExp('[-_]', 'g');
  if (result.match(symbolMatch)) {
    result = result.replace(symbolMatch, ' ');
  }
  return capitalise(result);
}

/**
 * truncates text if it's length is greater than to equal to max length
 * @param {string} text - string to truncate
 * @param {number} maxLength - max length of string before truncating
 */
export function truncate(text, maxLength = 150) {
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.substring(0, maxLength)} ...`;
}

/**
 * mask a secret
 * @param {string} secret secret to be masked
 * @param {number} maskLength how much of the secret should be masked
 */
export function mask(secret, maskLength = 0) {
  if (maskLength >= secret.length || maskLength <= 0) {
    return '*'.repeat(secret.length);
  }
  const exposed = secret.substring(maskLength, secret.length);
  const masked = '*'.repeat((secret.length - exposed.length));
  return masked + exposed;
}

/**
 * mask half of the secret
 * @param {string} secret secret to be masked
 */
export function maskHalf(secret) {
  return mask(secret, (secret.length / 2));
}
