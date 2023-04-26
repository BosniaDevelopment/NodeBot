import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'never',
})
export class AsNeverPipe implements PipeTransform {
	public transform(value: unknown): never {
		return value as never;
	}
}
