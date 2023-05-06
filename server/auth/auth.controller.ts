import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { AuthService } from './auth.service';
import { WithCode } from '@/dto/with-code';

@Controller('auth')
export class AuthController {
	public constructor(private readonly authService: AuthService) {}

	@Get()
	index(@Res() res: FastifyReply) {
		res.redirect(this.authService.uri);
	}

	@Get('invite')
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
