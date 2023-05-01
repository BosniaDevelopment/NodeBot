import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '@/core/services';

@Component({
	selector: 'app-auth-callback',
	templateUrl: './auth-callback.component.html',
	styleUrls: ['./auth-callback.component.scss'],
})
export class AuthCallbackComponent implements OnInit {
	public constructor(
		private readonly userService: UserService,
		private readonly router: Router,
		private readonly route: ActivatedRoute
	) {}

	private reAuth(): void {
		location.href = '/auth';
	}

	public async ngOnInit(): Promise<void> {
		const code = this.route.snapshot.queryParams['code'];

		if (!code || typeof code !== 'string')
			return this.reAuth();

		try {
			await this.userService.logIn(code);
		} catch {
			location.href = '/auth';
			return;
		}

		this.router.navigate([ '/guilds' ]);
	}
}
