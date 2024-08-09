import { expect, test, spyOn } from 'bun:test';
import { Logger } from '@thanhhoajs/logger';

test('Logger factory', async () => {
  const logger1 = Logger.get('THANHHOA');
  const logger2 = Logger.get('TEST');
  const logger3 = Logger.get('THANHHOA');

  expect(typeof logger1).toBe('object');
  expect(typeof logger2).toBe('object');

  expect(logger1).toBe(logger3); // Same instance for the same name

  expect(logger1).not.toBe(logger2); // Different instance for different names

  const consoleSpy = spyOn(console, 'log');

  await logger1.info('Test info');
  await Bun.sleep(0); // Ensures all async logs are processed
  expect(consoleSpy).toHaveBeenCalledTimes(1);
  expect(consoleSpy).toHaveBeenCalledWith(
    expect.stringContaining('[THANHHOA]'),
  );
  expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('[INFO]'));

  await logger2.error('Test error');
  await Bun.sleep(0); // Ensures all async logs are processed
  expect(consoleSpy).toHaveBeenCalledTimes(2);
  expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('[TEST]'));
  expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));

  consoleSpy.mockRestore();
});

test('Logger methods', async () => {
  const logger = Logger.get('TestLogger');
  const consoleSpy = spyOn(console, 'log');

  await logger.info('Info message');
  await Bun.sleep(0); // Ensures all async logs are processed
  expect(consoleSpy).toHaveBeenCalledTimes(1);
  expect(consoleSpy.mock.calls[0][0]).toContain('[TestLogger]');
  expect(consoleSpy.mock.calls[0][0]).toContain('[INFO]');
  expect(consoleSpy.mock.calls[0][0]).toContain('Info message');

  await logger.error('Error message');
  await Bun.sleep(0); // Ensures all async logs are processed
  expect(consoleSpy).toHaveBeenCalledTimes(2);
  expect(consoleSpy.mock.calls[1][0]).toContain('[TestLogger]');
  expect(consoleSpy.mock.calls[1][0]).toContain('[ERROR]');
  expect(consoleSpy.mock.calls[1][0]).toContain('Error message');

  await logger.warn('Warning message');
  await Bun.sleep(0); // Ensures all async logs are processed
  expect(consoleSpy).toHaveBeenCalledTimes(3);
  expect(consoleSpy.mock.calls[2][0]).toContain('[TestLogger]');
  expect(consoleSpy.mock.calls[2][0]).toContain('[WARN]');
  expect(consoleSpy.mock.calls[2][0]).toContain('Warning message');

  await logger.debug('Debug message');
  await Bun.sleep(0); // Ensures all async logs are processed
  expect(consoleSpy).toHaveBeenCalledTimes(4);
  expect(consoleSpy.mock.calls[3][0]).toContain('[TestLogger]');
  expect(consoleSpy.mock.calls[3][0]).toContain('[DEBUG]');
  expect(consoleSpy.mock.calls[3][0]).toContain('Debug message');

  await logger.verbose('Verbose message');
  await Bun.sleep(0); // Ensures all async logs are processed
  expect(consoleSpy).toHaveBeenCalledTimes(5);
  expect(consoleSpy.mock.calls[4][0]).toContain('[TestLogger]');
  expect(consoleSpy.mock.calls[4][0]).toContain('[VERBOSE]');
  expect(consoleSpy.mock.calls[4][0]).toContain('Verbose message');

  await logger.success('Success message');
  await Bun.sleep(0); // Ensures all async logs are processed
  expect(consoleSpy).toHaveBeenCalledTimes(6);
  expect(consoleSpy.mock.calls[5][0]).toContain('[TestLogger]');
  expect(consoleSpy.mock.calls[5][0]).toContain('[SUCCESS]');
  expect(consoleSpy.mock.calls[5][0]).toContain('Success message');

  consoleSpy.mockRestore();
});
