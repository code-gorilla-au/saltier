import { timer } from './timers';

describe('timer()', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should emit callback twice', () => {
    const callback = jest.fn();
    const stopwatch = timer(10, callback);
    stopwatch.start();
    jest.advanceTimersByTime(2000);
    expect(callback).toHaveBeenCalledWith(9);
    expect(callback).toHaveBeenCalledWith(8);
  });
  it('pausing timer should stop the countdown', () => {
    const callback = jest.fn();
    const stopwatch = timer(10, callback);
    stopwatch.start();
    jest.advanceTimersByTime(1500);
    stopwatch.pause();
    jest.advanceTimersByTime(10000);
    expect(callback).toHaveBeenCalledWith(9);
    expect(callback).toHaveBeenCalledTimes(1);
  });
  it('resetting timer should restart the countdown', () => {
    const callback = jest.fn();
    const stopwatch = timer(10, callback);
    stopwatch.start();
    jest.advanceTimersByTime(1500);
    stopwatch.pause();
    expect(callback).toHaveBeenCalledWith(9);
    expect(callback).toHaveBeenCalledTimes(1);
    stopwatch.reset();
    jest.advanceTimersByTime(1500);
    expect(callback).toHaveBeenCalledWith(9);
    expect(callback).toHaveBeenCalledTimes(3);
  });
});
