import { UserService } from '@/core/services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-guild',
	templateUrl: './guild.component.html',
	styleUrls: ['./guild.component.scss'],
})
export class GuildComponent implements OnInit {
	public guild!: Guild;

	public constructor(
		private readonly userService: UserService,
		private readonly route: ActivatedRoute,
		private readonly router: Router
	) { }

	public ngOnInit(): void {
		const guildId = this.route.snapshot.params['guildId'];

		if (!guildId || typeof guildId !== 'string')
			return void this.router.navigate(['/guilds']);

		this.userService.user.subscribe(user => {
			if (!user) {
				location.href = '/auth';
				return;
			}

			const foundedGuild = user.guilds.find(guild => guild.id === guildId);

			if (!foundedGuild)
				void this.router.navigate(['/guilds']);
			else
				this.guild = foundedGuild;
		});
	}
}
