import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import type { Server } from '@prisma/client';
import { firstValueFrom as promisify } from 'rxjs';
import { AccessTokenService, ApiService, GuildConfigService } from '../services';
import { GlobalLoadingService } from '../global-loading/global-loading.service';

type Res = {
	config: Server;
	publicInfo: IGuildPublicInfo;
}

export const GuildConfigResolver: ResolveFn<Res> = async (route: ActivatedRouteSnapshot) => {
	const guildId = route.paramMap.get('guildId');

	if (!guildId) throw new Error('No :guildId param');

	const guildConfigService = inject(GuildConfigService);
	const api = inject(ApiService);
	const accessTokenService = inject(AccessTokenService);
	const globalLoadingService = inject(GlobalLoadingService);

	globalLoadingService.start();

	const [
		config, publicInfo
	] = await Promise.all([
		promisify(guildConfigService.getConfig(guildId)),
		promisify(api.get<IGuildPublicInfo>(`/api/bot-config/${guildId}/public`, {
			headers: {
				authorization: accessTokenService.getAccessToken() ?? ''
			}
		}))
	]);

	globalLoadingService.stop();

	return { config, publicInfo };
};
