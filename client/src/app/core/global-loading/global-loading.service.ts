import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class GlobalLoadingService {
	private readonly loadingMessageSubject = new BehaviorSubject<boolean>(false);

	public readonly loadingMessage = this.loadingMessageSubject
		.asObservable()
		.pipe(distinctUntilChanged());

	public start(): void {
		this.loadingMessageSubject.next(true);
	}

	public stop(): void {
		this.loadingMessageSubject.next(false);
	}
}
