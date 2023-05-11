import { Guild } from '@/core';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-guild-card',
	templateUrl: './guild-card.component.html',
	styleUrls: [ './guild-card.component.scss' ],
})
export class GuildCardComponent {
	@Input() guild!: Guild;
	@Input() clickable!: boolean;
	@Input() styleClass = '';
}
