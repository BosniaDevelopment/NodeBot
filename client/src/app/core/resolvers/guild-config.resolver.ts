import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import type { Server } from '@prisma/client';
import { GuildConfigService } from '../services';

export const GuildConfigResolver: ResolveFn<Server> = async (route: ActivatedRouteSnapshot) => {
	const guildId = route.paramMap.get('guildId');

	if (!guildId) throw new Error('No :guildId param');

	const guildConfigService = inject(GuildConfigService);

	return await guildConfigService.getConfig(guildId);
};
