import { isPassedDate } from '../src/time';

describe('isPassedDate()', () => {
  it('last month should return true', () => {
    const testDate = new Date();
    const newMonth = testDate.getMonth() - 1;
    testDate.setMonth(newMonth);
    expect(isPassedDate(testDate)).toBeTruthy();
  });
  it('yesterday should return true', () => {
    const testDate = new Date();
    const newDate = testDate.getDate() - 1;
    testDate.setDate(newDate);
    expect(isPassedDate(testDate)).toBeTruthy();
  });
  it('today should return false', () => {
    const testDate = new Date();
    const newDate = testDate.getDate() + 1;
    testDate.setDate(newDate);
    expect(isPassedDate(testDate)).toBeFalsy();
  });
  it('tomorrow should return false', () => {
    const testDate = new Date();
    const newDate = testDate.getDate() + 2;
    testDate.setDate(newDate);
    expect(isPassedDate(testDate)).toBeFalsy();
  });
});
