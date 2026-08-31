import type { DResult } from '@zokugun/xtry';

import { ok } from '@zokugun/xtry';

import { getCallerSite } from './get-caller-site.js';

export function getCallerFile(): DResult<string> {
	const result = getCallerSite();

	if(result.fails) {
		return result;
	}

	return ok(result.value.file);
}
