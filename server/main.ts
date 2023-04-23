import { ConsoleLogger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';


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

	await app.listen(process.env.PORT);
}


main();
