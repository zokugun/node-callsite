import type { CallSite } from './types.js';

// tsc-leda-comment-next-line-if-commonjs
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const FILE_PATH_REGEX = /(file:\/\/\/[^\s()]{1,128}|\/[^\s()]{1,128}):(\d+):(\d+)/;
// tsc-leda-toggle-next-line-if-commonjs
// const MODULE_DIRECTORY = `${__dirname}/`;
const MODULE_DIRECTORY = `${dirname(fileURLToPath(import.meta.url))}/`;

export function getCallSites(maxResult: number = Number.MAX_SAFE_INTEGER): CallSite[] {
	if(maxResult <= 0) {
		return [];
	}

	const result: CallSite[] = [];
	const lines = new Error().stack?.split('\n').slice(1) ?? [];

	for(const line of lines) {
		const match = FILE_PATH_REGEX.exec(line);

		if(!match) {
			continue;
		}

		const file = match[1].startsWith('file:') ? fileURLToPath(match[1]) : match[1];

		if(file.startsWith(MODULE_DIRECTORY)) {
			continue;
		}

		result.push({
			file,
			line: Number(match[2]),
			column: Number(match[3]),
		});

		if(result.length >= maxResult) {
			return result;
		}
	}

	return result;
}
