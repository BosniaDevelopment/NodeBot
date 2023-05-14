import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SapphireClient } from '@sapphire/framework';
import { GatewayIntentBits } from 'discord.js';
import { PrismaService } from '@/core/services/prisma.service';
import { IBotService, IBotStats, IGuildInfo } from './bot.service.type';
import { createSapphireLogger } from './sapphire-logger';

@Injectable()
export class NodeBot implements OnModuleInit, IBotService {
	private readonly token: string;
	private readonly logger = new Logger(NodeBot.name);
	
	public readonly client = new SapphireClient({
		logger: {
			instance: createSapphireLogger(this.logger)
		},
		intents: [
			GatewayIntentBits.MessageContent,
			GatewayIntentBits.Guilds,
			GatewayIntentBits.GuildMessages,
		],
	});

	public constructor(
		private readonly config: ConfigService,
		private readonly prisma: PrismaService
	) {
		this.token = this.config.getOrThrow<string>('NBOT_TOKEN');
	}

	public async onModuleInit() {
		await this.client.login(this.token);
		this.logger.log(`Logged in as ${this.client.user.username}`);
	}

	public async getBotStats(): Promise<IBotStats> {
		throw new Error('not implemented');
	}

	public async getGuildInfo(guildId: string): Promise<IGuildInfo> {
		throw new Error('not implemented');
	}
}