import type { Server, Locale } from '@prisma/client';
import { Expose } from 'class-transformer-global-storage';
import { IsBoolean, IsNumber, IsNumberString, Min, IsIn, IsString } from 'class-validator';

export class EditGuildConfig implements Omit<Server, 'id'> {
	@Expose()
	@IsString()
	@IsIn([ 'default', 'en_US', 'ru', 'uk' ] as Locale[])
	public locale!: Locale;

	@Expose()
	@IsBoolean()
	public antiSpam!: boolean;

	@Expose()
	@IsNumber()
	@Min(0)
	public antiSpamMaxFrequency!: number;
}

export class IdentifiableEditGuildConfig extends EditGuildConfig {
	@Expose()
	@IsNumberString()
	public id!: string;
}
