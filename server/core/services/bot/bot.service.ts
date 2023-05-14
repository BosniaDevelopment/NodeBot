import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SapphireClient, LogLevel } from '@sapphire/framework';
import { GatewayIntentBits, Guild } from 'discord.js';
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
		const tag: string = this.client.user.tag;
		const id: string = this.client.user.id;
		const servers: number = this.client.guilds.holds.length;
		const users: number = this.client.users.holds.length;

		return {
			tag,
			id,
			servers,
			users,
		};
	}

	public async getGuildInfo(guildId: string): Promise<IGuildInfo> {
		// let guild = await this.client.guilds.fetch(guildId);
		// let channels = await guild.channels.fetch();
	}
}