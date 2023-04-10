import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { WithCode } from '@/dto/with-code';

@Controller('auth')
export class AuthController {
	public constructor(private readonly authService: AuthService) {}

	@Get()
	index(@Res() res: Response) {
		res.redirect(this.authService.uri);
	}

	@Get('uri') url() {
		return this.authService.uri;
	}

	@Post()
	async accessCode(@Body() { code }: WithCode) {
		return await this.authService.authorize(code);
	}
}
