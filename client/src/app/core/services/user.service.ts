import { Injectable } from '@angular/core';
import autobind from 'autobind-decorator';
import { ApiService } from './api.service';
import { AccessTokenService } from './access-token.service';
import { BehaviorSubject, Observable, Subject, distinctUntilChanged } from 'rxjs';

export type AuthState = User | 'fetching' | 'unauthorized';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	public readonly userSubject: Subject<AuthState> = new BehaviorSubject<AuthState>('fetching');
	public readonly user: Observable<AuthState> = this.userSubject
		.asObservable()
		.pipe(distinctUntilChanged());

	public constructor(
		private readonly api: ApiService,
		private readonly accessTokenService: AccessTokenService
	) {}

	public fetchInfo(): void {
		this.setAuth('fetching');

		const authorization = this.accessTokenService.getAccessToken();

		if (!authorization) return this.destroyAuth();

		this.api.get<User>('/api/user', { headers: { authorization } }).subscribe({
			next: this.setAuth,
			error: this.destroyAuth,
		});
	}

	@autobind
	private setAuth(user: AuthState): void {
		this.userSubject.next(user);
	}

	@autobind
	public destroyAuth(): void {
		this.accessTokenService.destroyToken();
		this.userSubject.next('unauthorized');
	}

	public logIn(code: string): Promise<void> {
		return new Promise<void>((resolve, reject) => {
			this.api.post<{ code: string }>('/auth', { code }).subscribe({
				error: reject,
				next: ({ code: accessToken }) => {
					console.log('got token', accessToken);
					this.accessTokenService.saveAccessToken(accessToken);
					this.fetchInfo();
					resolve();
				},
			});
		});
	}
}
