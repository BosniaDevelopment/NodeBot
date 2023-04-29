import { Component, OnInit } from '@angular/core';
import { UserService } from '@/core/services';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	public user?: User['info'];
	public authorized = false;

	public readonly userMenuItems: MenuItem[] = [
		{
			label: 'Выйти',
			icon: 'pi pi-fw pi-power-off',
		},
	];

	public constructor(
		private readonly userService: UserService,
		private readonly router: Router
	) {}

	public get screenWidth() {
		return window.innerWidth;
	}

	public ngOnInit(): void {
		this.userService.user.subscribe((user) => {
			if (typeof user !== 'object') {
				this.user = undefined;
				this.authorized = false;
			} else {
				console.log(user);
				this.user = user.info;
				this.authorized = true;
			}
		});
	}

	public redirect(link: string): void {
		location.href = link;
	}

	public logOut(): void {
		this.userService.destroyAuth();
		this.router.navigate(['/']);
	}

	public displayAvatarUrl(): string {
		if (!this.user?.avatar)
			return 'https://cdn.discordapp.com/icons/1096509092215935066/a2909fc5aa9b768075f474577f498d24.webp';

		const base = `https://cdn.discordapp.com/avatars/${this.user?.id}/${this.user?.avatar}`;
		let format: string;

		if (this.user?.avatar.startsWith('a_')) format = 'gif';
		else format = 'png';

		return `${base}.${format}`;
	}
}
