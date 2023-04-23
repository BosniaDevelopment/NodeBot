import { Module } from '@nestjs/common';
import { GuildConfigService } from './guild-config.service';
import { BotConfigController } from './bot-config.controller';
import { CoreModule } from '@/services/core.module';
import { AuthModule } from '@/auth/auth.module';

@Module({
	providers: [GuildConfigService],
	controllers: [BotConfigController],
	imports: [CoreModule, AuthModule],
})
export class BotConfigModule {}
