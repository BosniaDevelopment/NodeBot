import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static'
import { ConfigModule } from '@nestjs/config';
import * as path from 'node:path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BotConfigModule } from './bot-config/bot-config.module';
import { PrismaService } from './services/prisma.service';
import { CoreModule } from './services/core.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: [path.resolve(__dirname, '../.env')],
		}),
		ServeStaticModule.forRoot({
			rootPath: path.join(__dirname, 'client'),
			exclude: ['/api/(.*)', '/auth']
		}),
		AuthModule,
		UserModule,
		BotConfigModule,
		CoreModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
