import * as arrays from '../src/array';

describe('unique()', () => {
  it('should return a list of numbers', () => {
    const list = [1, 2, 3, 4, 4, 4, 4, 4];
    const test = arrays.unique(list);
    expect(test).toEqual([1, 2, 3, 4]);
  });
  it('should return a empty list', () => {
    const test = arrays.unique();
    expect(test).toEqual([]);
  });
  it('should return a list of strings', () => {
    const list = ['one', 'two', 'three', 'three'];
    const test = arrays.unique(list);
    expect(test).toEqual(['one', 'two', 'three']);
  });
  it('should return a list of objects', () => {
    const list = [
      { hello: 1 },
      { hello: 1 },
      { foo: 2 },
    ];
    const test = arrays.unique(list);
    expect(test).toEqual([{ hello: 1 }, { foo: 2 }]);
  });
});

describe('tail', () => {
  it('should return 2,3,4', () => {
    const list = [1, 2, 3, 4];
    const test = arrays.tail(list);
    expect(test).toEqual([2, 3, 4]);
  });
  it('should return empty list', () => {
    const test = arrays.tail();
    expect(test).toEqual([]);
  });
  it('should return two,three, four', () => {
    const list = ['one', 'two', 'three', 'four'];
    const test = arrays.tail(list);
    expect(test).toEqual(['two', 'three', 'four']);
  });
});

describe('chunk()', () => {
  it('should return chunk 2 items', () => {
    const test = arrays.chunk(2, [1, 2, 3, 4]);
    expect(test).toEqual([[1, 2], [3, 4]]);
  });
  it('should return chunk 3 items', () => {
    const test = arrays.chunk(3, [1, 2, 3, 4]);
    expect(test).toEqual([[1, 2, 3], [4]]);
  });
  it('should return chunk of 4 items', () => {
    const test = arrays.chunk(4, [1, 2, 3, 4]);
    expect(test).toEqual([[1, 2, 3, 4]]);
  });
  it('should return whole list', () => {
    const test = arrays.chunk(5, [1, 2, 3, 4]);
    expect(test).toEqual([[1, 2, 3, 4]]);
  });
});

describe('union()', () => {
  it('should return 1,2', () => {
    const test = arrays.union([1], [2]);
    expect(test).toEqual([1, 2]);
  });
  it('should join 1,2,3', () => {
    const test = arrays.union([1, 2, 3], [2, 3]);
    expect(test).toEqual([1, 2, 3]);
  });
  it('should join 1,2,3,[4]', () => {
    const test = arrays.union([1, 2, 3], [2, 3, [4]]);
    expect(test).toEqual([1, 2, 3, [4]]);
  });
});
