export interface ILogger {
  info(message: string): void;
  success(message: string): void;
  warn(message: string): void;
  debug(...messageParts: any[]): void;
  error(...messageParts: any[]): void;
  verbose(...messageParts: any[]): void;
  trace(...messageParts: any[]): void;
}
