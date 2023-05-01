import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-locale-switcher',
	templateUrl: './locale-switcher.component.html',
	styleUrls: ['./locale-switcher.component.scss'],
})
export class LocaleSwitcherComponent {
	public readonly locales: Record<string, string> = {
		'en': 'English',
		'ru': 'Русский',
		'uk': 'Українська'
	};

	public constructor(
		private readonly router: Router
	) { }

	public redirect(locale: string): void {
		document.cookie = `locale=${locale}`;
		location.href = `/${locale}/${this.router.url}`;
	}
}
