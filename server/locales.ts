import * as fs from 'node:fs';
import { join } from 'node:path';

let locales: string[] = [];

try {
	locales = fs.readdirSync(join(__dirname, '..', 'dist', 'client'), 'utf-8')
		.filter(dirname => fs.statSync(join(__dirname, '..', 'dist', 'client', dirname)).isDirectory());
} catch {
	process.emitWarning('Failed to load locales list');
}

export { locales };
