export interface ILogger {
  info(message: string): void;
  success(message: string): void;
  warn(message: string): void;
  debug(message: string): void;
  error(message: string): void;
  verbose(message: string): void;
}
