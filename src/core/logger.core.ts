import { BaseLogger } from '@thanhhoajs/logger';

export class Logger {
  private static loggers: Record<string, BaseLogger> = {};

  public static get(name: string = 'THANHHOA'): BaseLogger {
    if (!this.loggers[name]) {
      this.loggers[name] = new BaseLogger(name);
    }
    return this.loggers[name];
  }
}
