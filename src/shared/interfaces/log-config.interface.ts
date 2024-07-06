import type { Color, LogLevel } from '@thanhhoajs/logger';

export interface LogConfig {
  level: LogLevel;
  levelColor: Color;
  messageColor: Color;
}
