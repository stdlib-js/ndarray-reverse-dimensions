// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{primitives as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer-array@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.2.3-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-reverse-dimensions@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.3-esm/index.mjs";function n(n,i){if(!e(n))throw new TypeError(t("null4f",n));if(!r(i))throw new TypeError(t("invalid argument. Second argument must be an array of integers. Value: `%s`.",i));return s(n,i,!1)}export{n as default};
//# sourceMappingURL=index.mjs.map
