import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { FastifyRequest } from 'fastify';
import { PartialGuild, User } from 'discord-oauth2';
import { AuthService } from './auth.service';

declare module 'fastify' {
	export interface FastifyRequest {
		[AuthGuard.userInfo]?: User;
		[AuthGuard.guilds]?: PartialGuild[];
	}
}

@Injectable()
export class AuthGuard implements CanActivate {
	public static readonly userInfo: unique symbol = Symbol('nbot-user-info');
	public static readonly guilds: unique symbol = Symbol('nbot-guilds');

	public constructor(private readonly authService: AuthService) {}

	public async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest<FastifyRequest>();
		const accessToken =
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			request.headers.authorization ?? request.body.accessToken ?? request.query.accessToken;

		if (!accessToken || typeof accessToken !== 'string') return false;

		request[AuthGuard.userInfo] = await this.authService.getUserInfo(accessToken);
		request[AuthGuard.guilds] = await this.authService.getGuilds(accessToken);

		return true;
	}
}
