import { Logger } from '@nestjs/common';
import { Logger as SapphireLogger, LogLevel } from '@sapphire/framework';

export function createSapphireLogger(original: Logger): SapphireLogger {
	const logger: SapphireLogger = {
		level: LogLevel.Error,
		debug: (...values) => original.debug(values.join(' ')),
		error: (...values) => original.error(values.join(' ')),
		fatal: (...values) => original.error(values.join(' ')),
		has: (level) => level < logger.level,
		info: (...values) => original.log(values.join(' ')),
		trace: (...values) => original.log(values.join(' ')),
		warn: (...values) => original.warn(values.join(' ')),
		write: (level, ...values) => {
			const logLevel = Math.floor(level / 10);

			switch (logLevel) {
			case 2:
				return logger.debug(...values);
			case 3:
				return logger.info(...values);
			case 4:
				return logger.warn(...values);
			case 5:
				return logger.error(...values);
			case 6:
				return logger.fatal(...values);
			default:
				return logger.trace(...values);
			}
		},
	};

	return logger;
}
