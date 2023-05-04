import { EditGuildConfig } from '@common/dto/edit-guild-config.dto';
import type { Locale } from '@prisma/client';

export { EditGuildConfig };

type Option = keyof EditGuildConfig;

type OptionValue = {
	name: string;
	description?: string;
} & ({
	type: 'enum-string';
	acceptedValues: Record<string, string>;
} | {
	type: 'free-string' | 'number' | 'boolean';
});

interface IFormMetaData {
	options: Record<Option, OptionValue>;
	categories: {
		name: string;
		description?: string;
		options: Option[];
	}[]
}

export const _meta: Record<keyof EditGuildConfig, string> = {
	antiSpam: $localize`Spam protection`,
	antiSpamMaxFrequency: $localize`Maximum messages frequency`,
	locale: $localize`Server locale`
};

export const meta: IFormMetaData = {
	options: {
		antiSpam: {
			name: $localize`Spam protection`,
			type: 'boolean'
		},
		antiSpamMaxFrequency: {
			name: $localize`Maximum messages frequency`,
			type: 'number'
		},
		locale: {
			name: $localize`Server locale`,
			type: 'enum-string',
			acceptedValues: {
				default: $localize`Automatically`,
				en_US: $localize`English`,
				ru: $localize`Russian`,
				uk: $localize`Ukrainian`
			} as Record<Locale, string>
		}
	},
	categories: [
		{
			name: $localize`General`,
			description: $localize`General options of NodeBot`,
			options: [ 'locale' ]
		},
		{
			name: $localize`Spam protection`,
			description: $localize`Options of NodeBot's spam protection`,
			options: [ 'antiSpam', 'antiSpamMaxFrequency' ]
		}
	],
};
