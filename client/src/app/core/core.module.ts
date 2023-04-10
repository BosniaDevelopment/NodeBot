import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AccessTokenService, ApiService, GuildConfigService, UserService } from './services';

@NgModule({
	declarations: [],
	providers: [
		AccessTokenService,
		ApiService,
		UserService,
		GuildConfigService
	],
	imports: [CommonModule, HttpClientModule],
})
export class CoreModule {}
