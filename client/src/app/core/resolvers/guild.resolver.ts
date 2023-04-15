import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Guild } from '@/core';
import { UserService } from '@/core/services';
import { filter, map } from 'rxjs';

export const GuildResolver: ResolveFn<Guild> = (route: ActivatedRouteSnapshot) => {
    const userService = inject(UserService);
    const guildId = route.paramMap.get('guildId');

    const idEquality = (guild: IGuild | Guild) => guild.id === guildId;

    return userService.user.pipe(
        filter(Boolean),
        filter(({ guilds }) => guilds.some(idEquality)),
        map(({ guilds }) => guilds.find(idEquality)!),
        map(Guild.from),
    );
}
