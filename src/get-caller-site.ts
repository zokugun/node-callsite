import type { DResult } from '@zokugun/xtry';
import type { CallSite } from './types.js';

import { err, ok } from '@zokugun/xtry';

import { getCallSites } from './get-call-sites.js';

export function getCallerSite(): DResult<CallSite> {
	const [, callSite] = getCallSites(2);

	if(callSite) {
		return ok(callSite);
	}

	return err('Unable to determine the caller file path');
}
