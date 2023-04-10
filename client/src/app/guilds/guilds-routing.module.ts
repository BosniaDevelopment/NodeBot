import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthGuard } from '@/core/services';
import { GuildsComponent } from './guilds.component';
import { GuildComponent } from './guild/guild.component';

const routes: Route[] = [
    {
        path: '',
        component: GuildsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: ':guildId',
        component: GuildComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GuildsRoutingModule {}
