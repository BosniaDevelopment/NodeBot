import { Guild } from '@/core';
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
		private readonly route: ActivatedRoute
	) { }

	public ngOnInit(): void {
		this.route.data.subscribe(({ guild }) => this.guild = guild);
	}
}
