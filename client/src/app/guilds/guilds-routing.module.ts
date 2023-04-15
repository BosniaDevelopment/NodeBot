import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthGuard } from '@/core/services';
import { GuildsComponent } from './guilds.component';
import { GuildComponent } from './guild/guild.component';
import { GuildResolver } from '@/core/resolvers';

const routes: Route[] = [
    {
        path: '',
        component: GuildsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: ':guildId',
        component: GuildComponent,
        canActivate: [AuthGuard],
        resolve: {
            guild: GuildResolver
        }
    }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GuildsRoutingModule {}
