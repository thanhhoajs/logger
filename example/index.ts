import { Logger } from '@thanhhoajs/logger';

const logger = Logger.get('EXAMPLE');
logger.info('Application has started');
logger.warn('This is a warning');
logger.error('An error occurred!');
logger.debug('Debug information');
logger.verbose('Detailed information');
logger.success('Operation successful');
