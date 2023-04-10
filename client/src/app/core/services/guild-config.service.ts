import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { AccessTokenService } from './access-token.service';

@Injectable({
	providedIn: 'root',
})
export class GuildConfigService {
	constructor(
		private readonly accessTokenService: AccessTokenService,
		private readonly api: ApiService
	) {}
}
