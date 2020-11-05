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
