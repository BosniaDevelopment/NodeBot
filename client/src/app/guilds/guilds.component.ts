import { Guild, Permission } from '@/core';
import { UserService } from '@/core/services';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-guilds',
	templateUrl: './guilds.component.html',
	styleUrls: ['./guilds.component.scss'],
})
export class GuildsComponent implements OnInit {
	public guilds: Guild[] = [];

	public constructor(private readonly userService: UserService) {}

	public ngOnInit(): void {
		this.userService.user.subscribe((user) => {
			if (!user) {
				this.guilds = [];
				return;
			}
			
			this.guilds = user.guilds
				.map(Guild.from)
				.filter(guild => guild.hasPermission(Permission.ManageServer));
		});
	}
}
