import {
  Color,
  type ILogger,
  type LogConfig,
  type LogLevel,
} from '@thanhhoajs/logger';

export class BaseLogger implements ILogger {
  private readonly logConfigs: Map<LogLevel, LogConfig> = new Map([
    [
      'INFO',
      { level: 'INFO', levelColor: Color.Blue, messageColor: Color.Blue },
    ],
    [
      'SUCCESS',
      { level: 'SUCCESS', levelColor: Color.Green, messageColor: Color.Green },
    ],
    [
      'WARN',
      { level: 'WARN', levelColor: Color.Yellow, messageColor: Color.Yellow },
    ],
    [
      'DEBUG',
      { level: 'DEBUG', levelColor: Color.Cyan, messageColor: Color.Cyan },
    ],
    [
      'ERROR',
      { level: 'ERROR', levelColor: Color.Red, messageColor: Color.Red },
    ],
    [
      'VERBOSE',
      {
        level: 'VERBOSE',
        levelColor: Color.Magenta,
        messageColor: Color.Magenta,
      },
    ],
  ]);

  constructor(private name: string) {}

  private colorize(text: string, color: Color): string {
    return `${color}${text}${Color.Reset}`;
  }

  private async log(config: LogConfig, message: string): Promise<void> {
    const timestamp = new Date().toISOString();
    const logMessage =
      `${this.colorize(`[${this.name}]`, Color.Magenta)} ` +
      `${this.colorize(`[${config.level}]`, config.levelColor)} ` +
      `${this.colorize(timestamp, Color.Gray)}: ` +
      `${this.colorize(message, config.messageColor)}`;

    setImmediate(() => {
      try {
        console.log(logMessage);
      } catch (error) {
        console.error('Failed to log message:', error);
      }
    });
  }

  public async info(message: string): Promise<void> {
    await this.log(this.logConfigs.get('INFO')!, message);
  }

  public async success(message: string): Promise<void> {
    await this.log(this.logConfigs.get('SUCCESS')!, message);
  }

  public async warn(message: string): Promise<void> {
    await this.log(this.logConfigs.get('WARN')!, message);
  }

  public async debug(message: string): Promise<void> {
    await this.log(this.logConfigs.get('DEBUG')!, message);
  }

  public async error(message: string): Promise<void> {
    await this.log(this.logConfigs.get('ERROR')!, message);
  }

  public async verbose(message: string): Promise<void> {
    await this.log(this.logConfigs.get('VERBOSE')!, message);
  }
}
