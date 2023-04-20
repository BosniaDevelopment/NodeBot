import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuildsModule } from './guilds/guilds.module';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'auth-callback', component: AuthCallbackComponent },
	{
		path: 'guilds',
		loadChildren: () => GuildsModule
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
