import { Component } from '@angular/core';

@Component({
	selector: 'app-locale-switcher',
	templateUrl: './locale-switcher.component.html',
	styleUrls: ['./locale-switcher.component.scss'],
})
export class LocaleSwitcherComponent {
	public readonly locales: Record<string, string> = {
		'en': 'English',
		'ua': 'Українська'
	};

	public redirect(locale: string): void {
		location.href = `/${locale}`;
	}
}
