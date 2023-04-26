import { Injectable } from '@angular/core';
import type { Server } from '@prisma/client';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { AccessTokenService } from './access-token.service';
import { EditGuildConfig } from '@/guilds/guild/schema';

@Injectable({
	providedIn: 'root',
})
export class GuildConfigService {
	public constructor(
		private readonly accessTokenService: AccessTokenService,
		private readonly api: ApiService
	) {}

	private createHeaders(): Record<string, string> {
		const token = this.accessTokenService.getAccessToken();

		if (!token) throw new Error('Don\'t set access token');

		return { authorization: token };
	}

	public getConfig(id: string): Observable<Server> {
		return this.api.get<Server>(`/api/bot-config/${id}`, { headers: this.createHeaders() });
	}

	public editConfig(id: string, config: EditGuildConfig): Observable<Server> {
		return this.api.put<Server>(`/api/bot-config/${id}`, {
			...config,
			accessToken: this.createHeaders()['authorization']
		});
	}
}
