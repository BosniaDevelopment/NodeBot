import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from './user.service';
import { map } from 'rxjs';

export const AuthGuard: CanActivateFn = () => {
	const userService = inject(UserService);

	return userService.user.pipe(
		map((user) => {
			if (user) return true;

			location.href = '/auth';
			return false;
		})
	);
};
