import {
  stripPrefix,
  prefix,
  toTitleCase,
  capitalise,
  truncateText,
} from '../src/strings';

describe('Strings', () => {
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
});

describe('prefix()', () => {
  it('should return prefix', () => {
    expect(prefix('hello', 'world')).toEqual('worldhello');
  });
  it('should return string without prefix', () => {
    expect(prefix('hello')).toEqual('hello');
  });
  it('should return empty string', () => {
    expect(prefix()).toEqual('');
  });
  it('should return empty string', () => {
    expect(prefix('', 'foo')).toEqual('');
  });
  it('should return string without extra prefix', () => {
    expect(prefix('fooworld', 'foo')).toEqual('fooworld');
  });
});

describe('toTitleCase()', () => {
  it('Should return title case', () => {
    expect(toTitleCase('FooBar')).toEqual('Foo Bar');
  });
  it('Should return title case', () => {
    expect(toTitleCase('FeeFoo')).toEqual('Fee Foo');
  });
  it('Should return title case', () => {
    expect(toTitleCase('ASICCase')).toEqual('ASIC Case');
  });
});

describe('capitalise()', () => {
  it('Should return title case', () => {
    expect(capitalise('foo bar')).toEqual('Foo Bar');
  });
  it('Should return title case', () => {
    expect(capitalise('slap bee')).toEqual('Slap Bee');
  });
  it('Should return title case', () => {
    expect(capitalise('fortran')).toEqual('Fortran');
  });
});

describe('truncateText()', () => {
  it('should return truncated text', () => {
    const text = 'hello world';
    expect(truncateText(text, 5)).toEqual('hello ...');
  });
  it('should return all text', () => {
    const text = 'hello world';
    expect(truncateText(text, 50)).toEqual('hello world');
  });
  it('should return all text', () => {
    const text = 'hello world';
    expect(truncateText(text)).toEqual('hello world');
  });
});
