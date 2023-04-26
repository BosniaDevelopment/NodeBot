import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { primengModules } from '@/primeng-modules';
import { GuildsRoutingModule } from './guilds-routing.module';
import { GuildsComponent } from './guilds.component';
import { GuildComponent } from './guild/guild.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlPipe } from './pipes/form-control.pipe';
import { AsNeverPipe } from './pipes/as-never.pipe';

@NgModule({
	declarations: [GuildsComponent, GuildComponent, FormControlPipe, AsNeverPipe],
	imports: [CommonModule, GuildsRoutingModule, ReactiveFormsModule, ...primengModules],
})
export class GuildsModule {}
