import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { PartialGuild, User } from 'discord-oauth2';
import { AuthService } from './auth.service';

declare module 'express' {
	export interface Request {
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
		const request = context.switchToHttp().getRequest<Request>();
		const accessToken =
			request.headers.authorization ?? request.body.accessToken ?? request.query.accessToken;

		if (!accessToken || typeof accessToken !== 'string') return false;

		request[AuthGuard.userInfo] = await this.authService.getUserInfo(accessToken);
		request[AuthGuard.guilds] = await this.authService.getGuilds(accessToken);

		return true;
	}
}
