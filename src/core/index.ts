import {
  Color,
  type ILogger,
  type LogConfig,
  type LogLevel,
} from '@thanhhoajs/logger';

export class Logger implements ILogger {
  private static instance: Logger;
  private readonly logConfigs: Record<LogLevel, LogConfig> = {
    INFO: { level: 'INFO', levelColor: Color.Blue, messageColor: Color.White },
    LOG: { level: 'LOG', levelColor: Color.Green, messageColor: Color.Green },
    WARN: {
      level: 'WARN',
      levelColor: Color.Yellow,
      messageColor: Color.Yellow,
    },
    DEBUG: { level: 'DEBUG', levelColor: Color.Cyan, messageColor: Color.Cyan },
    ERROR: { level: 'ERROR', levelColor: Color.Red, messageColor: Color.Red },
    VERBOSE: {
      level: 'VERBOSE',
      levelColor: Color.Magenta,
      messageColor: Color.Magenta,
    },
  };

  private constructor(private name: string = 'THANHHOA') {}

  public static getInstance(baseName?: string): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger(baseName);
    }
    return Logger.instance;
  }

  private colorize(text: string, color: Color): string {
    return `${color}${text}${Color.Reset}`;
  }

  private log(config: LogConfig, message: string): void {
    const timestamp = new Date().toISOString();
    console.log(
      `${this.colorize(`[${this.name}]`, Color.Magenta)} ${this.colorize(
        `[${config.level}]`,
        config.levelColor,
      )} ${this.colorize(timestamp, Color.Gray)}: ${this.colorize(
        message,
        config.messageColor,
      )}`,
    );
  }

  public info(message: string): void {
    this.log(this.logConfigs.INFO, message);
  }

  public success(message: string): void {
    this.log(this.logConfigs.LOG, message);
  }

  public warn(message: string): void {
    this.log(this.logConfigs.WARN, message);
  }

  public debug(message: string): void {
    this.log(this.logConfigs.DEBUG, message);
  }

  public error(message: string): void {
    this.log(this.logConfigs.ERROR, message);
  }

  public verbose(message: string): void {
    this.log(this.logConfigs.VERBOSE, message);
  }
}
