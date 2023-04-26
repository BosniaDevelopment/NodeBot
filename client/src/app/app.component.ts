import { Component, OnInit } from '@angular/core';
import { UserService } from './core/services';

@Component({
	selector: 'app-root',
	template: `
		<app-header />
		<router-outlet />
		<p-messages />
	`,
	styles: [],
})
export class AppComponent implements OnInit {
	public title = 'NodeBot dashboard';

	public constructor(
		private readonly userService: UserService
	) {}

	public ngOnInit(): void {
		this.userService.fetchInfo();
	}
}
