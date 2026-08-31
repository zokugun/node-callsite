[@zokugun/callsite](https://github.com/zokugun/node-callsite)
=============================================================

[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)
[![NPM Version](https://img.shields.io/npm/v/@zokugun/callsite?color=brightgreen)](https://www.npmjs.com/package/@zokugun/callsite)
[![NodeJS Version](https://img.shields.io/badge/node.js-%3E%3D%2018.20-green)](#requirements)
[![Modules](https://img.shields.io/badge/modules-ESM%20%7C%20CJS-green)](#requirements)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-f87171?logo=kofi&logoColor=white)](https://ko-fi.com/daiyam)
[![Liberapay](https://img.shields.io/badge/Liberapay-facc15?logo=liberapay&logoColor=black)](https://liberapay.com/daiyam/donate)
[![PayPal](https://img.shields.io/badge/PayPal-5277C3?logo=paypal&logoColor=white)](https://paypal.me/daiyam99)

> A utility for retrieving precise source code coordinates from the execution stack through a simple API.

Features
--------

- **Simple API**: Use clear, descriptive functions to fetch caller information.
- **Call Site Extraction**: Get a list of all stack frames in the current execution.
- **Caller Identification**: Quickly find the file path that called your function.
- **Type Safety**: Fully typed with TypeScript for reliable development and autocomplete.
- **Result Pattern**: Use a success/failure result type to handle missing stack data safely.
- **Configurable Depth**: Limit the number of results returned from the stack trace.

Installation
------------

```bash
npm add @zokugun/callsite
```

Requirements
------------

- **Node.js**: `v18.20` or higher
- **Modules**: ECMAScript Modules (`ESM`) or CommonJS (`CJS`)

Quick Start
-----------

```typescript
import { getCallerFile } from '@zokugun/callsite';

function printCallerPath(): void {
   const result = getCallerFile();

   if(result.fails) {
      return;
   }

   const filePath = result.value;

   console.log(`Called by file: ${filePath}`);
}
```

API Reference
-------------

```typescript
type CallSite = {
   column: number;
   file: string;
   line: number;
};

function getCallSites(maxResult?: number): CallSite[];
function getCallerFile(): DResult<string>;
function getCallerSite(): DResult<CallSite>;
```

Contributions
-------------

Contributions are most welcome. Please:

- Open issues and feature requests under the repository discussions.
- Follow the [`CONTRIBUTING.md`](./CONTRIBUTING.md).

Donations
---------

Support this project by becoming a financial contributor.

<table>
   <tr>
      <td><img src="https://raw.githubusercontent.com/daiyam/assets/master/icons/256/funding_kofi.png" alt="Ko-fi" width="80px" height="80px"></td>
      <td><a href="https://ko-fi.com/daiyam" target="_blank">ko-fi.com/daiyam</a></td>
   </tr>
   <tr>
      <td><img src="https://raw.githubusercontent.com/daiyam/assets/master/icons/256/funding_liberapay.png" alt="Liberapay" width="80px" height="80px"></td>
      <td><a href="https://liberapay.com/daiyam/donate" target="_blank">liberapay.com/daiyam/donate</a></td>
   </tr>
   <tr>
      <td><img src="https://raw.githubusercontent.com/daiyam/assets/master/icons/256/funding_paypal.png" alt="PayPal" width="80px" height="80px"></td>
      <td><a href="https://paypal.me/daiyam99" target="_blank">paypal.me/daiyam99</a></td>
   </tr>
</table>

License
-------

Copyright &copy; 2026-present Baptiste Augrain

Licensed under the [MIT license](https://opensource.org/licenses/MIT).
