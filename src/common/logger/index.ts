import { WinstonModuleOptions, utilities } from 'nest-winston';
import { format, transports } from 'winston';

export const LOGGER_OPTIONS: WinstonModuleOptions = {
  exitOnError: false,
  transports: [
    new transports.Console({
      level: 'info',
      format: format.combine(
        format.ms(),
        utilities.format.nestLike('Nest-Ollama', {
          colors: true,
          prettyPrint: true,
        }),
      ),
    }),
    new transports.File({
      level: 'error',
      format: format.json(),
      filename: 'log/error.log',
    }),
  ],
};
