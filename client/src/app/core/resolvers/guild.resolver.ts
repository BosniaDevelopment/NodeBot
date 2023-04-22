import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Guild } from '@/core';
import { UserService } from '@/core/services';
import { filter, map } from 'rxjs';

export const GuildResolver: ResolveFn<Guild> = (route: ActivatedRouteSnapshot) => {
	const userService = inject(UserService);
	const guildId = route.paramMap.get('guildId');

	return userService.user.pipe(
		filter(Boolean),
		map(({ guilds }) => guilds.find(guild => guild.id === guildId)),
		filter(Boolean),
		map(Guild.from)
	);
};
