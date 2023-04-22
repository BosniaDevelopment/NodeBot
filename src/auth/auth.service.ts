import { WithCode } from '@/dto/with-code';
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as DiscordOAuth2 from 'discord-oauth2';

@Injectable()
export class AuthService {
	private readonly logger = new Logger(AuthService.name);
	
	private readonly oauth2: DiscordOAuth2;
	public readonly uri: string;

	public constructor(config: ConfigService) {
		const clientId = config.getOrThrow<string>('NBOT_CLIENT_ID');
		const clientSecret = config.getOrThrow<string>('NBOT_CLIENT_SECRET');
		const redirectUri = config
			.getOrThrow<string>('NBOT_REDIRECT_URI')
			.replaceAll('{PORT}', config.getOrThrow<string>('PORT'));
		const scope = config.getOrThrow<string>('NBOT_SCOPES');

		this.oauth2 = new DiscordOAuth2({
			clientId,
			clientSecret,
			redirectUri,
		});

		this.uri = this.oauth2.generateAuthUrl({ scope });

		this.logger.log(`Auth url: ${this.uri}`);
	}

	private static createAuthError(error?: Error): never {
		throw new UnauthorizedException('Unauthorized', { cause: error });
	}

	public async authorize(code: string): Promise<WithCode> {
		try {
			const { access_token: accessToken } = await this.oauth2.tokenRequest({
				code,
				grantType: 'authorization_code',
				scope: process.env.NBOT_SCOPES.split(/\s+/),
			});

			this.logger.log(`authorized user with access token ${accessToken}`);

			return { code: accessToken };
		} catch (err: unknown) {
			if (err instanceof Error)
				AuthService.createAuthError(err);
		}
	}

	public async getGuilds(accessToken: string): Promise<DiscordOAuth2.PartialGuild[]> {
		return await this.oauth2.getUserGuilds(accessToken).catch(AuthService.createAuthError);
	}

	public async getUserInfo(accessToken: string): Promise<DiscordOAuth2.User> {
		return await this.oauth2.getUser(accessToken).catch(AuthService.createAuthError);
	}
}
