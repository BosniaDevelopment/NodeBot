import { Listener } from '@sapphire/framework';
import { Message } from 'discord.js';

export class MessageListener extends Listener {
	public constructor(context: Listener.Context, options: Listener.Options) {
		super(context, {
			...options,
			event: 'messageCreate'
		});
	}

	public run(message: Message) {
		// Handles messages
	}
}
