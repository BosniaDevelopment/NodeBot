import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ChildProcess, spawn } from 'node:child_process';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { BotService, IBotStats, IGuildInfo } from './bot.service';

@Injectable()
export class ProdBotService extends BotService implements OnModuleInit {
	private readonly logger = new Logger(BotService.name);
	private child!: ChildProcess;

	private get endpoint(): string {
		return `http://localhost:${this.config.getOrThrow<string>('NODEBOT_API_PORT')}`;
	}

	public constructor(private readonly config: ConfigService) {
		super();
	}

	public async getBotStats(): Promise<IBotStats> {
		return await axios.get(`${this.endpoint}/stats`).then(({ data }) => data);
	}

	public async getGuildInfo(guildId: string): Promise<IGuildInfo> {
		return await axios.get(`${this.endpoint}/guilds/${guildId}`).then(({ data }) => data);
	}

	public async onModuleInit(): Promise<void> {
		const waitSymbol = this.config.getOrThrow<string>('NODEBOT_API_LISTEN_SYMBOL');
		const python = this.config.get<string | null>('PYTHON_PATH') ?? 'python';

		this.child = spawn(python, ['-m', 'bot']);

		await new Promise<void>((resolve) => {
			this.child.stdout.on('data', async (data) => {
				const message = data.toString('utf-8').trim();

				if (message !== waitSymbol) {
					this.logger.log(message);
					return;
				}

				resolve();
			});

		});

		this.logger.log('Got the symbol');

		const { tag, id } = await this.getBotStats();

		this.logger.log(`Logged in as ${tag} (ID: ${id})`);

		this.child.stdout.removeAllListeners('data');

		this.child.stdout.on('data', (data) => {
			this.logger.log(data.toString('utf-8').trim());
		});

		this.child.stderr.on('data', (data) => {
			this.logger.error(data.toString('utf-8').trim());
		});
	}
}
