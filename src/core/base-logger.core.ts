import {
  type Color,
  type ILogger,
  type LogConfig,
  type LogLevel,
  Colors,
} from '@thanhhoajs/logger';

export class BaseLogger implements ILogger {
  private static readonly LOG_CONFIGS: ReadonlyMap<LogLevel, LogConfig> =
    new Map([
      ['INFO', { level: 'INFO', levelColor: 'Blue', messageColor: 'Blue' }],
      [
        'SUCCESS',
        { level: 'SUCCESS', levelColor: 'Green', messageColor: 'Green' },
      ],
      ['WARN', { level: 'WARN', levelColor: 'Yellow', messageColor: 'Yellow' }],
      ['DEBUG', { level: 'DEBUG', levelColor: 'Cyan', messageColor: 'Cyan' }],
      ['ERROR', { level: 'ERROR', levelColor: 'Red', messageColor: 'Red' }],
      [
        'VERBOSE',
        { level: 'VERBOSE', levelColor: 'Magenta', messageColor: 'Magenta' },
      ],
      [
        'TRACE',
        { level: 'TRACE', levelColor: 'BrownGray', messageColor: 'BrownGray' },
      ],
    ]);

  private readonly namePrefix: string;

  constructor(private readonly name: string) {
    this.namePrefix = `${Colors.DarkYellow}[${name}]${Colors.Reset} `;
  }

  private colorize(text: string, colorName: Color): string {
    return `${Colors[colorName]}${text}${Colors.Reset}`;
  }

  private log(config: LogConfig, ...messageParts: any[]): void {
    const timestamp = new Date().toISOString();
    const logLevel = this.colorize(`[${config.level}]`, config.levelColor);
    const timestampStr = this.colorize(timestamp, 'Gray');

    const message = messageParts
      .map((part) => {
        if (part === null || part === undefined) return '';
        return typeof part === 'object'
          ? this.colorize(JSON.stringify(part, null, 2), config.messageColor)
          : this.colorize(String(part), config.messageColor);
      })
      .join(' ');

    console.log(`${this.namePrefix}${logLevel} ${timestampStr}: ${message}`);
  }

  public info(message: string): void {
    this.log(BaseLogger.LOG_CONFIGS.get('INFO')!, message);
  }

  public success(message: string): void {
    this.log(BaseLogger.LOG_CONFIGS.get('SUCCESS')!, message);
  }

  public warn(message: string): void {
    this.log(BaseLogger.LOG_CONFIGS.get('WARN')!, message);
  }

  public debug(...messageParts: any[]): void {
    this.log(BaseLogger.LOG_CONFIGS.get('DEBUG')!, ...messageParts);
  }

  public error(...messageParts: any[]): void {
    this.log(BaseLogger.LOG_CONFIGS.get('ERROR')!, ...messageParts);
  }

  public verbose(...messageParts: any[]): void {
    this.log(BaseLogger.LOG_CONFIGS.get('VERBOSE')!, ...messageParts);
  }

  public trace(...messageParts: any[]): void {
    this.log(BaseLogger.LOG_CONFIGS.get('TRACE')!, ...messageParts);
  }
}
