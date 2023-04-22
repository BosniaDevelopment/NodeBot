import { UserService } from '@/core/services';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';

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
		this.userService.user.pipe(tap(user => this.loggedIn = !!user));
	}
}
