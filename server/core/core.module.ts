import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './services/prisma.service';
import { NodeBot } from './services/bot/bot.service';

@Module({
	imports: [ConfigModule],
	providers: [
		PrismaService,
		NodeBot,
	],
	exports: [PrismaService, NodeBot],
})
export class CoreModule {}
