import { Component, OnInit } from '@angular/core';
import { UserService } from './core/services';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
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
