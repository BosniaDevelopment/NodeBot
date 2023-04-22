import * as path from 'node:path';
import * as fs from 'node:fs/promises';
import { Controller, Get, Next, Redirect, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { locales } from '@/locales';

@Controller()
export class AppController {
    public static readonly staticRoot: string = path.join(__dirname, 'client');

    public getStaticFilePath(locale: string, rest: string[]): string {
        return path.join(AppController.staticRoot, locale, rest.join('/').replace(/\?.$/g, ''));
    }

    @Get('/')
    @Redirect('/en')
    main() {}

    @Get('**')
    async serveStatic(
        @Req() req: Request,
        @Res() res: Response,
        @Next() next: VoidFunction
    ): Promise<void> {
        let [locale, ...rest] = req.originalUrl.split('/').filter(Boolean);

        if (locale === 'api' || locale === 'auth')
            return void next();

        if (!locales.includes(locale)) {
            rest.unshift(locale);
            locale = 'en';
        }

        if (rest.length === 0)
            rest.push('index.html');

        await fs.stat(this.getStaticFilePath(locale, rest))
            .catch(() => rest = [ 'index.html' ]);

        res.sendFile(this.getStaticFilePath(locale, rest));
    }
}
