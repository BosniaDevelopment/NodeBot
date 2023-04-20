import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { primengModules } from '@/primeng-modules';
import { GuildsRoutingModule } from './guilds-routing.module';
import { GuildsComponent } from './guilds.component';
import { GuildComponent } from './guild/guild.component';

@NgModule({
	declarations: [GuildsComponent, GuildComponent],
	imports: [CommonModule, GuildsRoutingModule, ...primengModules],
})
export class GuildsModule {}
