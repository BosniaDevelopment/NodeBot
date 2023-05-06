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
		const queryParams = this.route.snapshot.queryParams;
		const { code, error, guild_id: guildId } = queryParams;

		if (error) {
			this.router.navigate([ '/' ]);
			return;
		}

		if (!code || typeof code !== 'string')
			return this.reAuth();

		try {
			await this.userService.logIn(code);
		} catch {
			location.href = '/auth';
			return;
		}

		if (guildId)
			this.router.navigate([ `/guilds/${guildId}` ]);
		else
			this.router.navigate([ '/guilds' ]);
	}
}
