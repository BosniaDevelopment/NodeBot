import { Injectable } from '@angular/core';
import type { Server } from '@prisma/client';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { AccessTokenService } from './access-token.service';

@Injectable({
	providedIn: 'root',
})
export class GuildConfigService {
	public constructor(
		private readonly accessTokenService: AccessTokenService,
		private readonly api: ApiService
	) {}

	public getConfig(id: string): Observable<Server> {
		const token = this.accessTokenService.getAccessToken();

		if (!token) throw new Error('Don\'t set access token');

		return this.api.get<Server>(`/api/bot-config/${id}`, { headers: { authorization: token } });
	}
}
