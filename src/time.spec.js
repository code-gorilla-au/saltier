import {
  isDateInPast,
  dateToUTC,
  daysBetween,
  daysSinceDate,
  dateYesterday,
  isBetweenDateRange,
  relativeFromToday,
  relativeFromDate,
} from './time';

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

describe('isBetweenDateRange()', () => {
  it('date before range should return false', () => {
    const yesterday = dateYesterday();
    const tomorrow = new Date();
    const newDate = tomorrow.getDate() + 1;
    tomorrow.setDate(newDate);
    const test = isBetweenDateRange(yesterday, new Date(), tomorrow);
    expect(test).toEqual(false);
  });
  it('date after range should return false', () => {
    const dayAfter = new Date();
    const anotherDate = dayAfter.getDate + 3;
    dayAfter.setDate(anotherDate);
    const tomorrow = new Date();
    const newDate = tomorrow.getDate() + 1;
    tomorrow.setDate(newDate);
    const test = isBetweenDateRange(dayAfter, new Date(), tomorrow);
    expect(test).toEqual(false);
  });
  it('date within range should return true', () => {
    const tomorrow = new Date();
    const newDate = tomorrow.getDate() + 1;
    tomorrow.setDate(newDate);
    const yesterday = dateYesterday();
    const test = isBetweenDateRange(new Date(), yesterday, tomorrow);
    expect(test).toEqual(true);
  });
  it('date equal to start date should return true', () => {
    const tomorrow = new Date();
    const newDate = tomorrow.getDate() + 1;
    tomorrow.setDate(newDate);
    const yesterday = dateYesterday();
    const test = isBetweenDateRange(yesterday, yesterday, tomorrow);
    expect(test).toEqual(true);
  });
  it('date equal to end date should return true', () => {
    const tomorrow = new Date();
    const newDate = tomorrow.getDate() + 1;
    tomorrow.setDate(newDate);
    const yesterday = dateYesterday();
    const test = isBetweenDateRange(tomorrow, yesterday, tomorrow);
    expect(test).toEqual(true);
  });
});

describe('relativeFromToday', () => {
  it('should return 1 second ago', () => {
    const oneSecondAgo = new Date();
    const sub1Sec = oneSecondAgo.getSeconds() - 1;
    oneSecondAgo.setSeconds(sub1Sec);
    expect(relativeFromToday(oneSecondAgo)).toEqual('1 second ago');
  });
  it('should return 2 seconds ago', () => {
    const twoSecondsAgo = new Date();
    const sub2Sec = twoSecondsAgo.getSeconds() - 2;
    twoSecondsAgo.setSeconds(sub2Sec);
    expect(relativeFromToday(twoSecondsAgo)).toEqual('2 seconds ago');
  });
  it('should return 1 minute ago', () => {
    const now = new Date();
    const sub1Min = now.getMinutes() - 1;
    now.setMinutes(sub1Min);
    expect(relativeFromToday(now)).toEqual('1 minute ago');
  });
  it('should return 1 hour ago', () => {
    const now = new Date();
    const sub1Min = now.getHours() - 1;
    now.setHours(sub1Min);
    expect(relativeFromToday(now)).toEqual('1 hour ago');
  });
  it('should return 1 day ago', () => {
    const now = new Date();
    const sub1Day = now.getDate() - 1;
    now.setDate(sub1Day);
    expect(relativeFromToday(now)).toEqual('1 day ago');
  });
  it('should return 1 month ago', () => {
    const lastMonth = new Date();
    const sub1Month = lastMonth.getMonth() - 1;
    lastMonth.setMonth(sub1Month);
    expect(relativeFromToday(lastMonth)).toEqual('1 month ago');
  });
  it.todo('should return 1 year ago');
  it.todo('should return in 1 year');
  it('should throw error if not date', () => {
    expect(() => {
      relativeFromToday(132);
    }).toThrowError('date must be a date object');
  });
  it('should return in 1 month', () => {
    const nextMonth = new Date();
    const add1Month = nextMonth.getMonth() + 1;
    nextMonth.setMonth(add1Month);
    expect(relativeFromToday(nextMonth)).toEqual('in 1 month');
  });
  it('should return in 1 day', () => {
    const nextDay = new Date();
    const add1Day = nextDay.getDate() + 1;
    nextDay.setDate(add1Day);
    expect(relativeFromToday(nextDay)).toEqual('in 1 day');
  });
  it('should return in 1 hour', () => {
    const nextHour = new Date();
    const add1Hour = nextHour.getHours() + 1;
    nextHour.setHours(add1Hour);
    expect(relativeFromToday(nextHour)).toEqual('in 1 hour');
  });
  it('should return in 1 minute', () => {
    const nextMin = new Date();
    const add1Hour = nextMin.getMinutes() + 1;
    nextMin.setMinutes(add1Hour);
    expect(relativeFromToday(nextMin)).toEqual('in 1 minute');
  });
  it('should return in 1 second', () => {
    const nextSecond = new Date();
    const add1Sec = nextSecond.getSeconds() + 1;
    nextSecond.setSeconds(add1Sec);
    expect(relativeFromToday(nextSecond)).toEqual('in 1 second');
  });
});

describe('relativeFromDate', () => {
  it('today + yesterday should return 1 day', () => {
    expect(relativeFromDate(new Date(), dateYesterday())).toEqual('1 day ago');
  });
  it('yesterday + today should return tomorrow', () => {
    expect(relativeFromDate(dateYesterday(), new Date())).toEqual('in 1 day');
  });
});
