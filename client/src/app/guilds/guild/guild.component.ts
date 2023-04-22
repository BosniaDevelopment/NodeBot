import { Guild } from '@/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import type { Server } from '@prisma/client';

@Component({
	selector: 'app-guild',
	templateUrl: './guild.component.html',
	styleUrls: ['./guild.component.scss'],
})
export class GuildComponent implements OnInit {
	public guild!: Guild;
	public guildConfig!: Server | null;

	public constructor(private readonly route: ActivatedRoute) {}

	public ngOnInit(): void {
		this.route.data.subscribe(({ guild, guildConfig }) => {
			this.guild = guild;
			this.guildConfig = guildConfig;
		});
	}
}
