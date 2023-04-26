import { UserService } from '@/core/services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-loading',
	templateUrl: './loading.component.html',
	styles: [],
})
export class LoadingComponent implements OnInit {
	public constructor(
		private readonly userService: UserService,
		private readonly route: ActivatedRoute
	) {}

	public ngOnInit(): void {
		return;
	}
}
