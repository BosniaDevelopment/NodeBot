import { Guild } from '@/core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DynamicFormBuilder, DynamicFormGroup } from 'ngx-dynamic-form-builder';
import type { Server } from '@prisma/client';
import { EditGuildConfig } from './schema';
import { plainToInstance } from 'class-transformer';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
	selector: 'app-guild',
	templateUrl: './guild.component.html',
	styleUrls: ['./guild.component.scss'],
})
export class GuildComponent implements OnInit {
	@ViewChild('saveOverlay')
	public saveOverlay!: ElementRef<OverlayPanel>;

	public guild!: Guild;
	public guildConfig: Omit<Server, 'id'> | null = null;
	public form!: DynamicFormGroup<EditGuildConfig>;

	private readonly formBuilder = new DynamicFormBuilder;

	public readonly defaultConfig: Record<string, never> = plainToInstance(EditGuildConfig, {
		antiSpam: false,
		antiSpamMaxFrequency: 0
	}) as unknown as Record<string, never>;

	public constructor(
		private readonly route: ActivatedRoute,
	) {}

	public ngOnInit(): void {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		this.route.data.subscribe(({ guild, guildConfig: { id, ...guildConfig } }) => {
			this.guild = guild;
			this.guildConfig = guildConfig as Omit<Server, 'id'>;
			this.form = this.formBuilder.rootFormGroup(EditGuildConfig, { ...this.guildConfig });
			this.form.object = plainToInstance(EditGuildConfig, this.guildConfig);
		});

		console.log(this.saveOverlay);
		this.saveOverlay.nativeElement.toggle(undefined);
	}

	public typeOf(value: unknown) {
		return typeof value;
	}
}
