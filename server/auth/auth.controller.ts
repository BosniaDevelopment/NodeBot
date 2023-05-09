import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { AuthService } from './auth.service';
import { WithCode } from '@/dto/with-code';

@Controller('auth')
export class AuthController {
	public constructor(private readonly authService: AuthService) {}

	@Get()
	@HttpCode(HttpStatus.TEMPORARY_REDIRECT)
	index(@Res() res: FastifyReply) {
		res.redirect(this.authService.uri);
	}

	@Get('invite')
	@HttpCode(HttpStatus.TEMPORARY_REDIRECT)
	inviteBot(@Res() res: FastifyReply) {
		res.redirect(this.authService.addBotUri);
	}

	@Get('uri') url() {
		return this.authService.uri;
	}

	@Post()
	async accessCode(@Body() { code }: WithCode) {
		return await this.authService.authorize(code);
	}
}
