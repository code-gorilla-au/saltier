import * as compose from './functions';

describe('pipe()', () => {
  it('should return 3', () => {
    const stuff = compose.pipe(
      (value) => value + 2,
    )(1);
    expect(stuff).toEqual(3);
  });
  it('should return 3', () => {
    const stuff = compose.pipe(
      (value) => value * 2,
      (value) => value - 3,
    )(3);
    expect(stuff).toEqual(3);
  });
});

describe('compose()', () => {
  it('should return 3', () => {
    const stuff = compose.compose(
      (value) => value - 3,
      (value) => value * 2,
    )(3);
    expect(stuff).toEqual(3);
  });
  it('should return 3', () => {
    const stuff = compose.compose(
      (value) => value - 9,
      (value) => value * 4,
    )(3);
    expect(stuff).toEqual(3);
  });
});

describe('composeTwo()', () => {
  it('should return 3', () => {
    const stuff = compose.composeTwo(
      (value) => value + 1,
      (value) => value + 1,
    );
    expect(stuff(1)).toEqual(3);
  });
  it('should return 3', () => {
    const stuff = compose.composeTwo(
      (value) => value + 5,
      (value) => value - 3,
    );
    expect(stuff(1)).toEqual(3);
  });
  it('should return 3', () => {
    const stuff = compose.composeTwo(
      (value) => value - 3,
      (value) => value * 2,
    );
    expect(stuff(3)).toEqual(3);
  });
});
