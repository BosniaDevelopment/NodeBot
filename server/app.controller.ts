/* eslint-disable @typescript-eslint/no-empty-function */

import * as path from 'node:path';
import * as fs from 'node:fs/promises';
import { Controller, Get, Next, Redirect, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { locales } from '@/locales';
import { Locale } from '@/core/decorators/locale.decorator';

@Controller()
export class AppController {
	public static readonly staticRoot: string = path.join(__dirname, '..', 'client');

	public getStaticFilePath(locale: string, rest: string[]): string {
		return path.join(AppController.staticRoot, locale, rest.join('/').replace(/\?.$/g, ''));
	}

	@Get('/')
	main(
		@Locale() locale: string,
		@Res() res: Response
	) {
		res.redirect(`/${locale}`);
	}

	@Get('/invite')
	@Redirect('/auth/invite')
	invite() {}

	@Get('/locale')
	locale(@Locale() locale: unknown) {
		return locale;
	}

	@Get('**')
	async serveStatic(
		@Req() req: Request,
		@Res() res: Response,
		@Next() next: VoidFunction,
		@Locale() preferredLocale: string,
	): Promise<void> {
		let [locale, ...rest] = req.originalUrl.split('/').filter(Boolean);

		if (locale === 'api' || locale === 'auth') return void next();

		if (!locales.includes(locale)) {
			rest.unshift(locale);
			locale = preferredLocale;
		}

		if (rest.length === 0) rest.push('index.html');

		await fs.stat(this.getStaticFilePath(locale, rest)).catch(() => (rest = ['index.html']));

		res.sendFile(this.getStaticFilePath(locale, rest));
	}
}
