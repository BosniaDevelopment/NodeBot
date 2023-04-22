import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class AccessTokenService {
	public static readonly localStorageKey: string = 'discord-oauth2-access-token';

	public getAccessToken(): string | null {
		return localStorage.getItem(AccessTokenService.localStorageKey);
	}

	public saveAccessToken(token: string): void {
		return localStorage.setItem(AccessTokenService.localStorageKey, token);
	}

	public destroyToken(): void {
		return localStorage.removeItem(AccessTokenService.localStorageKey);
	}
}
