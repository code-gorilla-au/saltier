import { isDateInPast, dateToUTC, daysBetween, daysSinceDate, dateYesterday } from './time';

describe('isPassedDate()', () => {
  it('last month should return true', () => {
    const testDate = new Date();
    const newMonth = testDate.getMonth() - 1;
    testDate.setMonth(newMonth);
    expect(isDateInPast(testDate)).toBeTruthy();
  });
  it('next month should return false', () => {
    const testDate = new Date();
    const newMonth = testDate.getMonth() + 1;
    testDate.setMonth(newMonth);
    expect(isDateInPast(testDate)).toBeFalsy();
  });
  it('yesterday should return true', () => {
    const testDate = new Date();
    const newDate = testDate.getDate() - 1;
    testDate.setDate(newDate);
    expect(isDateInPast(testDate)).toBeTruthy();
  });
  it('today should return false', () => {
    const testDate = new Date();
    const newDate = testDate.getDate() + 1;
    testDate.setDate(newDate);
    expect(isDateInPast(testDate)).toBeFalsy();
  });
  it('tomorrow should return false', () => {
    const testDate = new Date();
    const newDate = testDate.getDate() + 2;
    testDate.setDate(newDate);
    expect(isDateInPast(testDate)).toBeFalsy();
  });
  it('next year should return false', () => {
    const testDate = new Date();
    const newDate = testDate.setFullYear(testDate.getFullYear() + 1);
    expect(isDateInPast(newDate)).toEqual(false);
  });
});

describe('dateToUTC', () => {
  it('should return date to utc', () => {
    const test = new Date('11/25/2020');
    expect(dateToUTC(test)).toEqual(new Date('2020-11-25T00:00:00.000Z'));
  });
  it('should return date to error', () => {
    const test = new Date('foo');
    const result = dateToUTC(test);
    expect(result.toLocaleString()).toEqual('Invalid Date');
  });
});

describe('daysBetween()', () => {
  it('should return 0 days', () => {
    const test = daysBetween(new Date(), new Date());
    expect(test).toEqual(0);
  });
  it('should return 3 days', () => {
    const test = daysBetween(new Date('11/22/2020'), new Date('11/25/2020'));
    expect(test).toEqual(3);
  });
  it('should return 3 days', () => {
    const test = daysBetween(new Date('10/25/2020'), new Date('11/25/2020'));
    expect(test).toEqual(31);
  });
});

describe('daysSinceDate()', () => {
  it('should return 0 days', () => {
    expect(daysSinceDate()).toEqual(0);
  });
  it('should return 1 days', () => {
    const yesterday = dateYesterday();
    expect(daysSinceDate(yesterday)).toEqual(1);
  });
});
