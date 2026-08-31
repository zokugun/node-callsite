import { expect, it } from 'vitest';

import { getCallerFile, getCallerSite, getCallSites } from '../src/index.js';

it('returns no call sites for a non-positive limit', () => { // {{{
	expect(getCallSites(0)).to.eql([]);
	expect(getCallSites(-1)).to.eql([]);
}); // }}}

it('returns call sites up to the requested limit', () => { // {{{
	const callSites = getCallSites(2);

	expect(callSites.length).to.be.at.most(2);
	expect(callSites.length).to.be.greaterThan(0);

	for(const callSite of callSites) {
		expect(callSite.file).to.be.a('string').and.not.empty;
		expect(callSite.line).to.be.a('number').and.to.be.greaterThan(0);
		expect(callSite.column).to.be.a('number').and.to.be.greaterThan(0);
	}
}); // }}}

it('returns a call site and its caller file as successful results', () => { // {{{
	const callSiteResult = getCallerSite();
	const callerFileResult = getCallerFile();

	expect(callSiteResult.fails).toBe(false);
	expect(callerFileResult.fails).toBe(false);

	if(!callSiteResult.fails && !callerFileResult.fails) {
		expect(callSiteResult.value.file).to.eql(callerFileResult.value);
	}
}); // }}}
