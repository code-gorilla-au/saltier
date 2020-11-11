import * as arrays from '../src/array';

describe('unique()', () => {
  it('should return a list of numbers', () => {
    const list = [1, 2, 3, 4, 4, 4, 4, 4];
    const test = arrays.unique(list);
    expect(test).toEqual([1, 2, 3, 4]);
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
  it('should return two,three, four', () => {
    const list = ['one', 'two', 'three', 'four'];
    const test = arrays.tail(list);
    expect(test).toEqual(['two', 'three', 'four']);
  });
});
