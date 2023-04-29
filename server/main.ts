import { watch } from 'chokidar';
import { ConsoleLogger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join, relative, sep } from 'path';
import { locales } from './locales';


async function main() {
	const logger = new ConsoleLogger(main.name);
	
	process.on('warning', (warn) => {
		logger.warn(warn.stack);
	});
	
	process.on('uncaughtException', (error) => {
		logger.error(error.stack ?? error.message);
	});

	const app = await NestFactory.create<NestExpressApplication>(AppModule);

	app.useGlobalPipes(new ValidationPipe);

	await app.listen(process.env.PORT, '0.0.0.0');

	if (process.env.NODE_ENV === 'development') {
		const watchPath = join(__dirname, '..', 'client');

		logger.log(`Working directory: ${process.cwd()}`);
		logger.log(`Watching: ${relative(process.cwd(), watchPath)}`);
		
		watch(watchPath).on('addDir', (newDir) => {
			const [ dir ] = relative(watchPath, newDir).split(sep);
			
			if (dir.length === 0) return;
			if (locales.includes(dir)) return;

			logger.log(`New locale detected: ${dir}, updating locales list`);
			locales.push(dir);
		});
	}
}

main();
