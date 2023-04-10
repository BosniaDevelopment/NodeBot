import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
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

	public ngOnInit(): void {
		const code = this.route.snapshot.queryParams['code'];

		if (!code || typeof code !== 'string')
			return this.reAuth();

		this.userService.logIn(code);

		this.userService.user.pipe(tap(user => {
			if (!user)
				return this.reAuth();

			this.router.navigate(['/']);
		}));
	}
}
