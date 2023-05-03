import type { Server } from '@prisma/client';
import { Expose } from 'class-transformer-global-storage';
import { IsBoolean, IsNumber, Min } from 'class-validator';

export class EditGuildConfig implements Omit<Server, 'id'> {
	public static readonly meta: Record<keyof EditGuildConfig, string> = {
		antiSpam: $localize`Spam protection`,
		antiSpamMaxFrequency: $localize`Maximum messages frequency`,
		kefir: 'Kefir',
	};

	@Expose()
	@IsBoolean()
	public kefir!: boolean;

	@Expose()
	@IsBoolean()
	public antiSpam!: boolean;

	@Expose()
	@IsNumber()
	@Min(0)
	public antiSpamMaxFrequency!: number;
}
