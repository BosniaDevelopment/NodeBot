import { Component, OnInit } from '@angular/core';
import { GlobalLoadingService } from './global-loading.service';

@Component({
	selector: 'app-global-loading',
	templateUrl: './global-loading.component.html',
	styleUrls: [ './global-loading.component.scss' ],
})
export class GlobalLoadingComponent implements OnInit {
	public loading = false;
	
	public constructor(
		private readonly globalLoadingService: GlobalLoadingService
	) {}

	public ngOnInit(): void {
		this.globalLoadingService.loadingMessage.subscribe(state => {
			this.loading = state;
		});
	}
}
