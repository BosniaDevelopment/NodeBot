import { NgModule } from '@angular/core';
import { GuildCardComponent } from './guild-card/guild-card.component';
import { CommonModule } from '@angular/common';
import { primengModules } from '@/primeng-modules';

@NgModule({
	imports: [CommonModule, ...primengModules],
	declarations: [GuildCardComponent],
	exports: [GuildCardComponent],
})
export class ComponentsModule {}
