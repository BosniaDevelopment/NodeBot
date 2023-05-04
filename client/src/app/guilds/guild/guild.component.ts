/* eslint-disable @typescript-eslint/no-explicit-any */
import { Guild } from '@/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DynamicFormBuilder, DynamicFormGroup } from 'ngx-dynamic-form-builder';
import type { Server } from '@prisma/client';
import deepEqual from 'deep-equal';
import { plainToInstance } from 'class-transformer';
import { MessageService } from 'primeng/api';
import { GuildConfigService } from '@/core/services';
import { EditGuildConfig, meta } from './schema';
import { Permission, permissions } from '@common/permissions';

@Component({
	selector: 'app-guild',
	templateUrl: './guild.component.html',
	styleUrls: ['./guild.component.scss'],
	providers: [MessageService],
})
export class GuildComponent implements OnInit {
	public notAdminMessage = $localize`NodeBot is not administrator on this server, so it can work improperly`;

	public guild!: Guild;
	public guildConfig: Omit<Server, 'id'> | null = null;
	public form!: DynamicFormGroup<EditGuildConfig>;
	public publicInfo!: IGuildPublicInfo;

	public openedCategory!: Record<string, boolean>;

	public showSaveOverlay = true;

	public meta = meta;

	private readonly formBuilder = new DynamicFormBuilder();

	public get hasChanges(): boolean {
		return deepEqual(this.form.object, this.guildConfig, { strict: true });
	}

	public get isBotAdmin(): boolean {
		return permissions(this.publicInfo.botPermissions).has(Permission.Flags.ManageServer);
	}

	public suggestions(optionName: keyof EditGuildConfig) {
		const option = this.meta.options[optionName];

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		if (option.type !== 'enum-string') {
			return [];
		}

		return Object.keys(option.acceptedValues);
	}

	public readonly defaultConfig: Record<string, never> = plainToInstance(EditGuildConfig, {
		locale: 'default',
		antiSpam: false,
		antiSpamMaxFrequency: 0,
	}) as unknown as Record<string, never>;

	public constructor(
		private readonly route: ActivatedRoute,
		private readonly guildConfigService: GuildConfigService,
		private readonly messageService: MessageService
	) {
		this.openedCategory = {};
		this.meta.categories.forEach(({ name }) => {
			this.openedCategory[name] = false;
		});
	}

	public ngOnInit(): void {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		this.route.data.subscribe(({ guild, guildConfig: { config: guildConfig, publicInfo } }) => {
			this.guild = guild;
			
			if (!guildConfig) return;

			const { id, ...rest } = guildConfig;
			console.log(id, rest, publicInfo);
			this.publicInfo = publicInfo;

			this.guildConfig = rest as Omit<Server, 'id'>;
			
			const configCopy = { ...this.guildConfig };

			const instance = plainToInstance(EditGuildConfig, configCopy);

			this.form = this.formBuilder.rootFormGroup(EditGuildConfig, instance);
			this.form.object = instance;
		});
	}

	public saveForm(): void {
		if (!this.form.valid) return;

		this.guildConfigService.editConfig(this.guild.id, this.form.value).subscribe({
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			next: ({ id, ...config }) => {
				console.log('saved', id);

				this.guildConfig = config;

				this.form.markAsPristine();

				console.log(this.form.dirty);

				this.messageService.add({
					severity: 'info',
					detail: 'Saved!',
				});
			},
			error: console.error,
		});
	}

	public redirect(uri: string): void {
		location.href = uri;
	}

	public resetForm(): void {
		this.form.reset(this.guildConfig);
	}

	public typeOf(value: unknown) {
		return typeof value;
	}
}
