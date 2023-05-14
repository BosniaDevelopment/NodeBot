import { SapphireClient } from '@sapphire/framework';
import { GatewayIntentBits } from 'discord.js';

export class NodeBot {
	private token: string;
	public readonly client = new SapphireClient({
		intents: [
			GatewayIntentBits.MessageContent,
			GatewayIntentBits.Guilds,
			GatewayIntentBits.GuildMessages,
		],
	});

	public constructor(token: string) {
		this.token = token;
	}

	public async start() {
		await this.client.login(this.token);
	}
}