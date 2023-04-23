import * as fs from 'node:fs';
import { join } from 'node:path';

let locales: string[] = [];

try {
	locales = fs.readdirSync(join(__dirname, '..', 'client'), 'utf-8');
} catch {
	process.emitWarning('Failed to load locales list');
}

export { locales };
