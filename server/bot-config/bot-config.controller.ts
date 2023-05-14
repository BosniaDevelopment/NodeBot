import { Body, Controller, Get, HttpException, HttpStatus, Param, Put, UseGuards } from '@nestjs/common';
import { PartialGuild } from 'discord-oauth2';
import { Guilds } from '@/auth/decorators';
import { AuthGuard } from '@/auth/auth.guard';
import { GuildConfigService } from './guild-config.service';
import { EditGuildConfig } from '@common/dto/edit-guild-config.dto';
import { Permission } from '@common/permissions';
import { NodeBot } from '@/core/services/bot/bot.service';

@Controller('api/bot-config')
@UseGuards(AuthGuard)
export class BotConfigController {
	public constructor(
		private readonly guildConfigService: GuildConfigService,
		private readonly nodeBot: NodeBot
	) {}

	public canConfigure(guild?: PartialGuild): void {
		const permissions = +(guild?.permissions ?? '0');
		
		if (new Permission(permissions).has(Permission.Flags.ManageServer))
			return;

		throw new HttpException('You are not owner on this guild', HttpStatus.BAD_REQUEST);
	}

	@Get('/:guildId')
	public async getConfig(@Param('guildId') guildId: string, @Guilds() guilds: PartialGuild[]) {
		const guild = guilds.find((guild) => guild.id === guildId);

		this.canConfigure(guild);

		return await this.guildConfigService.getConfig(guild.id);
	}

	@Get('/:guildId/public')
	public async getPublicInfo(@Param('guildId') guildId: string) {
		try {
			return await this.nodeBot.getGuildInfo(guildId);
		} catch {
			return null;
		}
	}

	@Put('/:guildId')
	public async editConfig(
		@Body() config: EditGuildConfig,
		@Guilds() guilds: PartialGuild[],
		@Param('guildId') guildId: string,
	) {
		delete config['accessToken' as never];

		const guild = guilds.find((guild) => guild.id === guildId);

		this.canConfigure(guild);

		await this.guildConfigService.edit({ id: guild.id, ...config });

		return await this.guildConfigService.getConfig(guild.id);
	}
}
