<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=1_M5tYoaKfXpqsOAPQl3WVWs9u5NWrG76" alt="ThanhHoa Logo" width="300"/>
</p>

# @thanhhoajs/logger

A powerful and flexible logger designed specifically for the @thanhhoajs ecosystem, optimized for high performance with Bun and TypeScript.

## Features

- 🚀 High Performance: Optimized to work blazingly fast with the Bun runtime.
- 🎨 Rich Colors: Supports logging with various colors for easy differentiation of log levels.
- 🔍 TypeScript Ready: Fully written in TypeScript, providing complete type definitions.
- 🔧 Easily Customizable: Flexible for configuration and extension.
- 🧪 Thoroughly Tested: Includes a comprehensive test suite to ensure reliability.

## Installation

```bash
bun add @thanhhoajs/logger
```

## Usage

```typescript
import { Logger } from '@thanhhoajs/logger';

const logger = Logger.get('EXAMPLE');

logger.info('Application has started');
logger.warn('This is a warning');
logger.error('An error occurred!');
logger.debug('Debug information');
logger.verbose('Detailed information');
logger.success('Operation successful');
```

## API Overview

- `info(message: string)`: Log general information
- `warn(message: string)`: Log warnings
- `error(message: string)`: Log errors
- `debug(message: string)`: Log debug information
- `verbose(message: string)`: Log detailed information
- `success(message: string)`: Log success messages

## Author

Nguyen Nhu Khanh <kwalker.nnk@gmail.com>

## License

[MIT License](https://github.com/thanhhoajs/websocket?tab=MIT-1-ov-file)
