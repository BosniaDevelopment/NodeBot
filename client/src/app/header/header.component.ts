import { Component, OnInit } from '@angular/core';
import { UserService } from '@/core/services';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	public user?: User;
	public authorized: boolean = false;
	
	public constructor(
		private readonly userService: UserService
	) {}

	public ngOnInit(): void {
		this.userService.user.subscribe((user) => {
			if (!user) {
				this.user = undefined;
				this.authorized = false
			} else {
				console.log(user);
				this.user = user;
				this.authorized = true;
			}
		});
	}
}
