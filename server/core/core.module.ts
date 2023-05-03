import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaService } from './services/prisma.service';
import { BotService } from './services/bot/bot.service';

@Module({
	imports: [ConfigModule],
	providers: [
		PrismaService,
		{
			provide: BotService,
			inject: [ConfigService],
			useFactory: (config: ConfigService) => {
				return config.getOrThrow<string>('NODE_ENV') === 'development'
					? import('./services/bot/bot.development.service')
						.then(({ DevBotService }) => new DevBotService(config))
					: import('./services/bot/bot.production.service')
						.then(({ ProdBotService }) => new ProdBotService(config));
			},
		},
	],
	exports: [PrismaService, BotService],
})
export class CoreModule {}
