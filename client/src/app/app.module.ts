import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { HeaderComponent } from './header/header.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { LocaleSwitcherComponent } from './locale-switcher/locale-switcher.component';
import { primengModules } from './primeng-modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		AuthCallbackComponent,
		LocaleSwitcherComponent,
		HomeComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CommonModule,
		AppRoutingModule,
		CoreModule,
		...primengModules,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
