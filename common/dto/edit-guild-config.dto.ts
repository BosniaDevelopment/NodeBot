import type { Server } from '@prisma/client';
import { Expose } from 'class-transformer';
import { IsBoolean, IsNumber, IsNumberString, Min } from 'class-validator';

export class EditGuildConfig implements Omit<Server, 'id'> {
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
