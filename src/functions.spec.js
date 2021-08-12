import * as fns from './functions';

describe('pipe()', () => {
  it('should return 3', () => {
    const addTwo = fns.pipe(
      (value) => value + 2,
    )(1);
    expect(addTwo).toEqual(3);
  });
  it('should return 3', () => {
    const mathPipe = fns.pipe(
      (value) => value * 2,
      (value) => value - 3,
    )(3);
    expect(mathPipe).toEqual(3);
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
    function add(val) {
      return (next) => val + next;
    }
    const stuff = fns.composeTwo(
      add(2),
      add(3),
    );
    expect(stuff(5)).toEqual(10);
  });
  it('should return 12', () => {
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
    await new Promise((r) => setTimeout(r, 110));
    expect(foo).toEqual(2);
  });
  it('should invoke with the last args provided', async () => {
    let foo = 0;
    const bar = fns.debounce((value) => {
      foo += value;
    }, 110);
    bar(6);
    bar(1);
    await new Promise((r) => setTimeout(r, 110));
    expect(foo).toEqual(1);
  });
  it('should be able to return a value', async () => {
    let foo = 1;
    const bar = fns.debounce((value) => {
      foo += value;
      return foo;
    }, 100);
    await new Promise((r) => setTimeout(r, 110));
    const baz = bar(6);
    expect(baz).toEqual(foo);
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
    await new Promise((r) => setTimeout(r, 110));
    expect(slap.foo).toEqual(5);
    expect(slap.bar).toEqual(6);
  });
});

describe('throttle()', () => {
  it('should invoke 1 times', async () => {
    let count = 0;
    const bar = fns.throttle(() => {
      count += 1;
    }, 100);
    bar();
    bar();
    bar();
    await new Promise((r) => setTimeout(r, 110));
    expect(count).toEqual(1);
  });
  it('should invoke 2 times', async () => {
    let count = 0;
    const bar = fns.throttle(() => {
      count += 1;
    }, 100);
    bar();
    bar();
    bar();
    await new Promise((r) => setTimeout(r, 110));
    bar();
    expect(count).toEqual(2);
  });
  it('should invoke with the last args provided', async () => {
    let foo = 0;
    const bar = fns.throttle((value) => {
      foo += value;
    }, 110);
    bar(6);
    bar(1);
    await new Promise((r) => setTimeout(r, 110));
    expect(foo).toEqual(1);
  });
  it('should return value', async () => {
    let foo = 1;
    const bar = fns.throttle((value) => {
      foo += value;
      return foo;
    }, 100);
    await new Promise((r) => setTimeout(r, 110));
    const baz = bar(6);
    expect(baz).toEqual(foo);
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
    const bar = fns.throttle(slap.add4.bind(slap), 100);
    bar();
    await new Promise((r) => setTimeout(r, 110));
    expect(slap.foo).toEqual(5);
    expect(slap.bar).toEqual(6);
  });
});

describe('trampoline()', () => {
  it('should return 1', () => {
    const test = fns.trampoline((val) => val);
    expect(test(1)).toEqual(1);
  });
  it('should return 10', () => {
    const test = fns.trampoline((val) => val * 2);
    expect(test(5)).toEqual(10);
  });
  it('call stack should not exceed', () => {
    function recursiveFn(n) {
      if (n < 0) {
        return true;
      }
      return function f() {
        return recursiveFn(n - 1);
      };
    }
    const recuse = fns.trampoline(recursiveFn);
    const test = recuse(100000);
    expect(test).toEqual(true);
  });
});
