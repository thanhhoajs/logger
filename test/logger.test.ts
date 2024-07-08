import { expect, test, spyOn } from 'bun:test';
import { Logger } from '@thanhhoajs/logger';

test('Logger factory', () => {
  const logger1 = Logger.get('THANHHOA');
  const logger2 = Logger.get('TEST');
  const logger3 = Logger.get('THANHHOA');

  expect(typeof logger1).toBe('object');
  expect(typeof logger2).toBe('object');

  expect(logger1).toBe(logger3);

  expect(logger1).not.toBe(logger2);

  const consoleSpy = spyOn(console, 'log');

  logger1.info('Test info');
  expect(consoleSpy).toHaveBeenCalledTimes(1);
  expect(consoleSpy).toHaveBeenCalledWith(
    expect.stringContaining('[THANHHOA]'),
  );
  expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('[INFO]'));

  logger2.error('Test error');
  expect(consoleSpy).toHaveBeenCalledTimes(2);
  expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('[TEST]'));
  expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));

  consoleSpy.mockRestore();
});

test('Logger methods', () => {
  const logger = Logger.get('TestLogger');
  const consoleSpy = spyOn(console, 'log');

  logger.info('Info message');
  expect(consoleSpy).toHaveBeenCalledTimes(1);
  expect(consoleSpy.mock.calls[0][0]).toContain('[TestLogger]');
  expect(consoleSpy.mock.calls[0][0]).toContain('[INFO]');
  expect(consoleSpy.mock.calls[0][0]).toContain('Info message');

  logger.error('Error message');
  expect(consoleSpy).toHaveBeenCalledTimes(2);
  expect(consoleSpy.mock.calls[1][0]).toContain('[TestLogger]');
  expect(consoleSpy.mock.calls[1][0]).toContain('[ERROR]');
  expect(consoleSpy.mock.calls[1][0]).toContain('Error message');

  logger.warn('Warning message');
  expect(consoleSpy).toHaveBeenCalledTimes(3);
  expect(consoleSpy.mock.calls[2][0]).toContain('[TestLogger]');
  expect(consoleSpy.mock.calls[2][0]).toContain('[WARN]');
  expect(consoleSpy.mock.calls[2][0]).toContain('Warning message');

  logger.debug('Debug message');
  expect(consoleSpy).toHaveBeenCalledTimes(4);
  expect(consoleSpy.mock.calls[3][0]).toContain('[TestLogger]');
  expect(consoleSpy.mock.calls[3][0]).toContain('[DEBUG]');
  expect(consoleSpy.mock.calls[3][0]).toContain('Debug message');

  logger.verbose('Verbose message');
  expect(consoleSpy).toHaveBeenCalledTimes(5);
  expect(consoleSpy.mock.calls[4][0]).toContain('[TestLogger]');
  expect(consoleSpy.mock.calls[4][0]).toContain('[VERBOSE]');
  expect(consoleSpy.mock.calls[4][0]).toContain('Verbose message');

  logger.success('Success message');
  expect(consoleSpy).toHaveBeenCalledTimes(6);
  expect(consoleSpy.mock.calls[5][0]).toContain('[TestLogger]');
  expect(consoleSpy.mock.calls[5][0]).toContain('[SUCCESS]');
  expect(consoleSpy.mock.calls[5][0]).toContain('Success message');

  consoleSpy.mockRestore();
});
