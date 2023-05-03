import { EditGuildConfig } from '@common/dto/edit-guild-config.dto';

export { EditGuildConfig };

export const meta: Record<keyof EditGuildConfig, string> = {
	antiSpam: $localize`Spam protection`,
	antiSpamMaxFrequency: $localize`Maximum messages frequency`,
	locale: $localize`Server locale`
};
