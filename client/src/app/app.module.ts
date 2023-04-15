import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { HeaderComponent } from './header/header.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { LocaleSwitcherComponent } from './locale-switcher/locale-switcher.component';

@NgModule({
	declarations: [AppComponent, HeaderComponent, AuthCallbackComponent, LocaleSwitcherComponent],
	imports: [BrowserModule, AppRoutingModule, CoreModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
