/**
 * Creates a new nested array with array elements chunked
 * @param {number} chunkSize number of elements per array
 * @param {Array<any>} list array to be chunked
 * @example
 * // returns [[1,2],[3,4]]
 * chunk([1,2,3,4], 2)
 */
export function chunk(chunkSize, list) {
  if (chunkSize >= list) {
    return list;
  }
  let result = [];
  const tmpList = [...list];
  while (tmpList.length > 0) {
    result = [...result, tmpList.splice(0, chunkSize)];
  }
  return result;
}

/**
 * returns the tail of an array in a brand new array
 * @param {Array<any>} list array
 * @example
 * // returns [2,3,4]
 * tail([1,2,3,4])
 */
export function tail(list = []) {
  return list.slice(1);
}

/**
 * return unique elements from an array
 * @param {Array<any>} list array
 * @example
 * // returns [1,2,3,4]
 * unique([1,1,1,2,3,3,3,4,4,4])
 */
export function unique(list = []) {
  const cache = {};
  let result = [];
  list.forEach((item) => {
    const stringItem = JSON.stringify(item);
    if (cache[stringItem] === undefined) {
      result = [...result, item];
      cache[stringItem] = 1;
    }
  });
  return result;
}

/**
 * Creates an array of unique values, in order, from all given arrays using
 * @param  {...Array<any>} lists arrays to be merged
 * @returns {Array<any>}
 * @example
 * // returns [1,2,3,4]
 * union([1,2],[3,4])
 */
export function union(...lists) {
  let merged = [];
  lists.forEach((list) => {
    if (!Array.isArray(list)) {
      throw Error('list is not an array');
    }
    merged = [...merged, ...list];
  });
  const result = unique(merged);
  return result;
}
