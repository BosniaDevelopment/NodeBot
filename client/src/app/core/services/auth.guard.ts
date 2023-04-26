import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './user.service';
import { map } from 'rxjs';

export const AuthGuard: CanActivateFn = (_, { url: next }) => {
	const userService = inject(UserService);
	const router = inject(Router);

	return userService.user.pipe(
		map((user) => {
			if (typeof user === 'object') return true;

			if (user === 'fetching')
				router.navigate([ 'loading' ], { queryParams: { next } });
			else if (user === 'unauthorized')
				location.href = '/auth';

			return false;
		})
	);
};
