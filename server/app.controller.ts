/* eslint-disable @typescript-eslint/no-empty-function */

import * as path from 'node:path';
import * as fs from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import { lookup as lookupMime } from 'mime-types';
import type { FastifyReply, FastifyRequest } from 'fastify';
import { Controller, Get, HttpException, HttpStatus, Next, Redirect, Req, Res } from '@nestjs/common';
import { locales } from '@/locales';
import { Locale } from '@/core/decorators/locale.decorator';

@Controller()
export class AppController {
	public static readonly staticRoot: string = path.join(__dirname, '..', 'dist', 'client');

	public getStaticFilePath(locale: string, rest: string[]): string {
		return path.join(AppController.staticRoot, locale, rest.join('/').replace(/\?.$/g, ''));
	}

	@Get('/invite')
	@Redirect('/auth/invite')
	invite() {}

	@Get('*')
	async serveStatic(
		@Req() req: FastifyRequest,
		@Res() res: FastifyReply,
		@Next() next: VoidFunction,
		@Locale() preferredLocale: string,
	): Promise<void> {
		let [locale = preferredLocale, ...rest] = req.url.split('/').filter(Boolean);

		if (locale === 'api' || locale === 'auth') return void next();

		if (!locales.includes(locale)) {
			rest.unshift(locale);
			locale = preferredLocale;
		}

		if (rest.length === 0) rest.push('index.html');

		await fs.stat(this.getStaticFilePath(locale, rest)).catch(() => (rest = ['index.html']));

		const filepath = this.getStaticFilePath(locale, rest);

		const type = lookupMime(filepath);

		if (!type) {
			throw new HttpException({
				message: `Unknown file type "${type}" of file ${path.relative(process.cwd(), filepath)}`,
			}, HttpStatus.INTERNAL_SERVER_ERROR);
		}

		res.type(type).send(createReadStream(filepath));
	}
}
