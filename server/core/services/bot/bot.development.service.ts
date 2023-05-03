import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ChannelType, Client, Guild, IntentsBitField } from 'discord.js';
import { BotService, IBotStats, IGuildInfo } from './bot.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DevBotService extends BotService implements OnModuleInit {
	private readonly logger = new Logger(BotService.name);
	private readonly token: string;

	private readonly client = new Client({
		intents: new IntentsBitField(7796),
	});

	public constructor(config: ConfigService) {
		super();
		this.token = config.getOrThrow<string>('NBOT_TOKEN');
	}

	public async onModuleInit() {
		await this.client.login(this.token);
		this.logger.log(`Logged in as ${this.client.user.tag} (ID: ${this.client.user.id})`);
	}

	public async getBotStats(): Promise<IBotStats> {
		return {
			id: this.client.user.id,
			tag: this.client.user.tag,
			servers: this.client.guilds.cache.size,
			users: this.client.users.cache.size
		};
	}

	public async getGuildInfo(guildId: string): Promise<IGuildInfo> {
		let guild: Guild;
		
		try {
			guild = this.client.guilds.cache.get(guildId)
				?? await this.client.guilds.fetch(guildId);
		} catch {
			throw new Error(`${guildId}: bot is not member of this server`);
		}

		const botAsMember = guild.members.me ?? await guild.members.fetchMe();

		await botAsMember.guild.fetch();

		return {
			botPermissions: botAsMember.permissions.bitfield.toString(),
			textChannels: guild.channels.cache
				.filter(channel => channel.type === ChannelType.GuildText)
				.map(channel => channel.name)
		};
	}
}
