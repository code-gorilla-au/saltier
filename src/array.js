/**
 * return the tail of an array
 * @param {Array<any>} list array
 */
export function tail(list = []) {
  return list.slice(1);
}

/**
 * return unique elements from an array
 * @param {Array<any>} list array
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

/**
 * slice up an array into chunks
 * @param {number} chunkSize number of elements per array
 * @param {Array<any>} list array to be chunked
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
