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
		this.client.prisma = prisma;
		this.token = this.config.getOrThrow<string>('NBOT_TOKEN');
	}

	public async onModuleInit() {
		await this.client.login(this.token);
		this.logger.log(`Logged in as ${this.client.user.username}`);
	}

	public async getBotStats(): Promise<IBotStats> {
		return {
			tag: this.client.user.tag,
			id: this.client.user.id,
			servers: this.client.guilds.cache.size,
			users: this.client.users.cache.size,
		};
	}

	public async getGuildInfo(guildId: string): Promise<IGuildInfo> {
		const guild = await this.client.guilds.fetch(guildId);
		const channels = await guild.channels.fetch();
		
		const textChannels: Record<`${number}`, string> = {};

		channels.forEach(({ id, name }) => textChannels[id as `${number}`] = name);
		const botAsMember = await guild.members.fetchMe();

		return {
			textChannels,
			botPermissions: botAsMember.permissions.toJSON(),
		};
	}
}