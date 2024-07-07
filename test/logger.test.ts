import { expect, test, mock, spyOn } from 'bun:test';
import { Logger } from '@thanhhoajs/logger';

test('Logger singleton', () => {
  const logger1 = Logger.getInstance('THANHHOA');
  const logger2 = Logger.getInstance('TEST');
  expect(logger1).toBe(logger2);
});

test('Logger methods', () => {
  const logger = Logger.getInstance('TestLogger');
  const consoleSpy = spyOn(console, 'log');

  logger.info('Info message');
  expect(consoleSpy).toHaveBeenCalledTimes(1);
  expect(consoleSpy.mock.calls[0][0]).toContain('[INFO]');
  expect(consoleSpy.mock.calls[0][0]).toContain('Info message');

  logger.error('Error message');
  expect(consoleSpy).toHaveBeenCalledTimes(2);
  expect(consoleSpy.mock.calls[1][0]).toContain('[ERROR]');
  expect(consoleSpy.mock.calls[1][0]).toContain('Error message');

  logger.warn('Warning message');
  expect(consoleSpy).toHaveBeenCalledTimes(3);
  expect(consoleSpy.mock.calls[2][0]).toContain('[WARN]');
  expect(consoleSpy.mock.calls[2][0]).toContain('Warning message');

  logger.debug('Debug message');
  expect(consoleSpy).toHaveBeenCalledTimes(4);
  expect(consoleSpy.mock.calls[3][0]).toContain('[DEBUG]');
  expect(consoleSpy.mock.calls[3][0]).toContain('Debug message');

  logger.verbose('Verbose message');
  expect(consoleSpy).toHaveBeenCalledTimes(5);
  expect(consoleSpy.mock.calls[4][0]).toContain('[VERBOSE]');
  expect(consoleSpy.mock.calls[4][0]).toContain('Verbose message');

  logger.success('Log message');
  expect(consoleSpy).toHaveBeenCalledTimes(6);
  expect(consoleSpy.mock.calls[5][0]).toContain('[SUCCESS]');
  expect(consoleSpy.mock.calls[5][0]).toContain('Log message');
});
