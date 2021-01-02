import {
  stripPrefix,
  addPrefix,
  toTitleCase,
  capitalise,
  truncate,
  maskHalf,
  maskSecret,
} from '../src/strings';

describe('stripPrefix()', () => {
  it('should trim a phone', () => {
    const test = '+811234';
    expect(stripPrefix(test, '+81')).toEqual('1234');
  });
  it('should trim a string', () => {
    const test = 'foo4403';
    expect(stripPrefix(test, 'foo')).toEqual('4403');
  });
  it('should trim a string and space', () => {
    const test = 'foo 4403';
    expect(stripPrefix(test, 'foo ')).toEqual('4403');
  });
  it('should trim a string and space', () => {
    const test = 'foobarbin';
    expect(stripPrefix(test, 'foo', 'bar')).toEqual('bin');
  });
  it('should not trim', () => {
    const test = 'foobarbin';
    expect(stripPrefix(test, ['slash'])).toEqual(test);
  });
});

describe('prefix()', () => {
  it('should return worldhello', () => {
    expect(addPrefix('hello', 'world')).toEqual('worldhello');
  });
  it('should return string without prefix', () => {
    expect(addPrefix('hello')).toEqual('hello');
  });
  it('should return empty string', () => {
    expect(addPrefix()).toEqual('');
  });
  it('should return empty string', () => {
    expect(addPrefix('', 'foo')).toEqual('');
  });
  it('should return string without extra prefix', () => {
    expect(addPrefix('fooworld', 'foo')).toEqual('fooworld');
  });
});

describe('toTitleCase()', () => {
  it('Should return title case: Foo Bar', () => {
    expect(toTitleCase('FooBar')).toEqual('Foo Bar');
  });
  it('Should return title case: Fee Foo', () => {
    expect(toTitleCase('FeeFoo')).toEqual('Fee Foo');
  });
  it('Should return title case: ASIC Case', () => {
    expect(toTitleCase('ASICCase')).toEqual('ASIC Case');
  });
  it('Should return title case: Kebab Case', () => {
    expect(toTitleCase('kebab-case')).toEqual('Kebab Case');
  });
  it('Should return title case: Snake Case', () => {
    expect(toTitleCase('snake_case')).toEqual('Snake Case');
  });
  it('Should return title case: Camel Case', () => {
    expect(toTitleCase('camelCase')).toEqual('Camel Case');
  });
});

describe('capitalise()', () => {
  it('Should return sentence capitalised', () => {
    expect(capitalise('foo bar')).toEqual('Foo Bar');
  });
  it('Should return sentence capitalised', () => {
    expect(capitalise('slap bee')).toEqual('Slap Bee');
  });
  it('Should return sentence capitalised', () => {
    expect(capitalise('fortran')).toEqual('Fortran');
  });
  it('Should return sentence capitalised', () => {
    expect(capitalise('forTran')).toEqual('Fortran');
  });
});

describe('truncateText()', () => {
  it('should return truncated text', () => {
    const text = 'hello world';
    expect(truncate(text, 5)).toEqual('hello ...');
  });
  it('should return all text', () => {
    const text = 'hello world';
    expect(truncate(text, 50)).toEqual('hello world');
  });
  it('should return all text', () => {
    const text = 'hello world';
    expect(truncate(text)).toEqual('hello world');
  });
});

describe('maskHalf()', () => {
  it('should return sl**', () => {
    const text = 'slap';
    expect(maskHalf(text)).toEqual('sl**');
  });
  it('should return fel***', () => {
    const text = 'fellow';
    expect(maskHalf(text)).toEqual('fel***');
  });
  it('should return bl***', () => {
    const text = 'blind';
    expect(maskHalf(text)).toEqual('bl***');
  });
});

describe('maskSecret()', () => {
  it('should mask foo', () => {
    const text = 'foo';
    expect(maskSecret(text)).toEqual('***');
  });
  it('should mask follow', () => {
    const text = 'follow';
    expect(maskSecret(text)).toEqual('******');
  });
});
