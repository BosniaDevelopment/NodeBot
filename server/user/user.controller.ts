import { AuthGuard } from '@/auth/auth.guard';
import { Guilds, UserInfo } from '@/auth/decorators';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { PartialGuild, User } from 'discord-oauth2';

@Controller('api/user')
@UseGuards(AuthGuard)
export class UserController {
	@Get() userInfo(@UserInfo() user: User, @Guilds() guilds: PartialGuild[]) {
		return { info: user, guilds };
	}
}
