import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { HeaderComponent } from './header/header.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { LocaleSwitcherComponent } from './locale-switcher/locale-switcher.component';
import { primengModules } from './primeng-modules';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorizationComponent } from './authorization/authorization.component';
import { FooterComponent } from './footer/footer.component';
import { GlobalLoadingModule } from './core/global-loading/global-loading.module';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		AuthCallbackComponent,
		LocaleSwitcherComponent,
		HomeComponent,
		AuthorizationComponent,
		FooterComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CommonModule,
		AppRoutingModule,
		CoreModule,
		FormsModule,
		GlobalLoadingModule,
		ReactiveFormsModule,
		...primengModules,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
