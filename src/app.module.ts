import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as path from 'node:path';
import * as fs from 'node:fs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BotConfigModule } from './bot-config/bot-config.module';
import { CoreModule } from './services/core.module';

export const locales = fs.readdirSync(path.join(__dirname, 'client'), 'utf-8');

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: [path.resolve(__dirname, '../.env')],
		}),
		AuthModule,
		UserModule,
		BotConfigModule,
		CoreModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
