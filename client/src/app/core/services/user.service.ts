import { Injectable } from '@angular/core';
import autobind from 'autobind-decorator';
import { ApiService } from './api.service';
import { AccessTokenService } from './access-token.service';
import { BehaviorSubject, Observable, Subject, distinctUntilChanged } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	public readonly userSubject: Subject<User | false> = new BehaviorSubject<User | false>(false);
	public readonly user: Observable<User | false> = this.userSubject
		.asObservable()
		.pipe(distinctUntilChanged());

	public constructor(
		private readonly api: ApiService,
		private readonly accessTokenService: AccessTokenService
	) {}

	public fetchInfo(): void {
		const authorization = this.accessTokenService.getAccessToken();

		if (!authorization) return this.destroyAuth();

		this.api.get<User>('/api/user', { headers: { authorization } }).subscribe({
			next: this.setAuth,
			error: this.destroyAuth,
		});
	}

	@autobind
	private setAuth(user: User): void {
		this.userSubject.next(user);
	}

	@autobind
	public destroyAuth(): void {
		this.accessTokenService.destroyToken();
		this.userSubject.next(false);
	}

	public logIn(code: string): void {
		this.api.post<{ code: string }>('/auth', { code }).subscribe(({ code: accessToken }) => {
			console.log('got token', accessToken);
			this.accessTokenService.saveAccessToken(accessToken);
			this.fetchInfo();
		});
	}
}
