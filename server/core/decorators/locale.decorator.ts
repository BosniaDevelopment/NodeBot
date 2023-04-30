import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { Request } from 'express';
import { locales as supported } from '@/locales';

export const Locale = createParamDecorator((_: void, ctx: ExecutionContext) => {
	const req = ctx.switchToHttp().getRequest<Request>();

	const { cookie = '', ['accept-language']: acceptLanguage } = req.headers;

	let browserLocale: string;

	if (typeof acceptLanguage === 'string') {
		browserLocale = acceptLanguage
			.split(',')
			.map((str) => str.replace(/;.*$/, ''))
			.find((locale) => supported.includes(locale));
	}

	browserLocale ??= 'en';

	const cookieLocale = cookie.match(/(?<=locale=)\w+(?=)/g);

	return cookieLocale?.[0] ?? browserLocale;
});
