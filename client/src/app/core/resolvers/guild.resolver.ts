import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Guild } from '@/core';
import { AuthState, UserService } from '@/core/services';
import { filter, map } from 'rxjs';

const isUser = (authState: AuthState): authState is User => typeof authState === 'object';

export const GuildResolver: ResolveFn<Guild> = (route: ActivatedRouteSnapshot) => {
	const userService = inject(UserService);
	const guildId = route.paramMap.get('guildId');

	return userService.user.pipe(
		filter(isUser),
		map(({ guilds }) => guilds.find((guild) => guild.id === guildId)),
		filter(Boolean),
		map(Guild.from)
	);
};
