import { UserService } from '@/core/services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-loading',
	templateUrl: './loading.component.html',
	styleUrls: [ './loading.component.scss' ],
})
export class LoadingComponent implements OnInit {
	public next!: string;

	public constructor(
		private readonly userService: UserService,
		private readonly router: Router,
		private readonly route: ActivatedRoute
	) {}

	public ngOnInit(): void {
		this.route.queryParams.subscribe(({ next }) => {
			this.next = next;
		});

		this.userService.user.subscribe((authState) => {
			if (authState === 'fetching') return;
			
			if (authState === 'unauthorized') {
				location.href = '/auth';
				return;
			}

			this.router.navigate([ this.next ]);
		});
	}
}
