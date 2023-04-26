import { UserService } from '@/core/services';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ],
})
export class HomeComponent implements OnInit {
	public loggedIn = false;

	public constructor(
		private readonly userService: UserService
	) { }

	public redirect(link: string): void {
		location.href = link;
	}

	public ngOnInit(): void {
		this.userService.user.subscribe((user) => {
			this.loggedIn = typeof user === 'object';
		});
	}
}
