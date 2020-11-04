import { pipe } from './compose';

describe('should work', () => {
  it('pipe()', () => {
    const stuff = pipe(
      (value) => value + 2,
    )(1);
    expect(stuff).toEqual(3);
  });
});
