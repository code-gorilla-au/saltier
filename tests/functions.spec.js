import * as fns from '../src/functions';

describe('pipe()', () => {
  it('should return 3', () => {
    const stuff = fns.pipe(
      (value) => value + 2,
    )(1);
    expect(stuff).toEqual(3);
  });
  it('should return 3', () => {
    const stuff = fns.pipe(
      (value) => value * 2,
      (value) => value - 3,
    )(3);
    expect(stuff).toEqual(3);
  });
});

describe('compose()', () => {
  it('should return 3', () => {
    const stuff = fns.compose(
      (value) => value - 3,
      (value) => value * 2,
    )(3);
    expect(stuff).toEqual(3);
  });
  it('should return 3', () => {
    const stuff = fns.compose(
      (value) => value - 9,
      (value) => value * 4,
    )(3);
    expect(stuff).toEqual(3);
  });
});

describe('composeTwo()', () => {
  it('should return 3', () => {
    const stuff = fns.composeTwo(
      (value) => value + 1,
      (value) => value + 1,
    );
    expect(stuff(1)).toEqual(3);
  });
  it('should return 3', () => {
    const stuff = fns.composeTwo(
      (value) => value + 5,
      (value) => value - 3,
    );
    expect(stuff(1)).toEqual(3);
  });
  it('should return 3', () => {
    const stuff = fns.composeTwo(
      (value) => value - 3,
      (value) => value * 2,
    );
    expect(stuff(3)).toEqual(3);
  });
});

describe('debounce', () => {
  it('should invoke twice', async () => {
    let foo = 0;
    const bar = fns.debounce(() => {
      foo += 1;
    }, 100);
    bar();
    bar();
    await new Promise((r) => setTimeout(r, 110));
    bar();
    expect(foo).toEqual(2);
  });
  it('should pass args', async () => {
    let foo = 0;
    const bar = fns.debounce((value) => {
      foo += value;
    }, 100);
    bar(6);
    expect(foo).toEqual(6);
  });
  it('should be able to return a value', async () => {
    let foo = 1;
    const bar = fns.debounce((value) => {
      foo += value;
      return foo;
    }, 100);
    const baz = bar(6);
    expect(baz).toEqual(7);
  });
  it('should keep this context', async () => {
    const slap = {
      foo: 1,
      bar: 2,
      add4: function add4() {
        this.foo += 4;
        this.bar += 4;
      },
    };
    const bar = fns.debounce(slap.add4.bind(slap), 100);
    bar();
    expect(slap.foo).toEqual(5);
    expect(slap.bar).toEqual(6);
  });
});
