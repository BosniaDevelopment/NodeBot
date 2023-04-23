import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, UseGuards } from '@nestjs/common';
import { PartialGuild } from 'discord-oauth2';
import { Guilds } from '@/auth/decorators';
import { AuthGuard } from '@/auth/auth.guard';
import { GuildConfigService } from './guild-config.service';
import { EditGuildConfig } from '@common/dto/edit-guild-config.dto';

@Controller('api/bot-config')
@UseGuards(AuthGuard)
export class BotConfigController {
	public constructor(private readonly guildConfigService: GuildConfigService) {}

	@Get('/:guildId')
	public async getConfig(@Param('guildId') guildId: string, @Guilds() guilds: PartialGuild[]) {
		const guild = guilds.find((guild) => guild.id === guildId);

		if (!guild || !guild.owner)
			throw new HttpException('You are not owner on this guild', HttpStatus.BAD_REQUEST);

		return await this.guildConfigService.getConfig(guild.id);
	}

	@Post('/:guildId')
	public async editConfig(
		@Body() config: EditGuildConfig,
		@Guilds() guilds: PartialGuild[],
		@Param('guildId') guildId: string,
	) {
		const guild = guilds.find((guild) => guild.id === guildId);

		if (!guild || !guild.owner)
			throw new HttpException('You are not owner on this guild', HttpStatus.BAD_REQUEST);

		await this.guildConfigService.edit({ id: guildId, ...config });
	}
}
