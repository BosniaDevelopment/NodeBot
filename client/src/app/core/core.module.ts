import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AccessTokenService, ApiService, GuildConfigService, UserService } from './services';
import { ParallaxDirective } from './directives/parallax-effect.directive';
import { GlobalLoadingModule } from './global-loading/global-loading.module';

@NgModule({
	declarations: [ParallaxDirective],
	providers: [AccessTokenService, ApiService, UserService, GuildConfigService],
	imports: [CommonModule, HttpClientModule, GlobalLoadingModule],
	exports: [ParallaxDirective, GlobalLoadingModule],
})
export class CoreModule {}
