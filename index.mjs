// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-buffer-ctors@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/buffer-alloc-unsafe@esm/index.mjs";var t=r,e=n,s=function(r){var n;for(n=0;n<r.length;n++)r[n]=0;return r};var u=function(r,n){return"generic"===r?function(r){var n,t;for(n=[],t=0;t<r;t++)n.push(0);return n}(n):"binary"===r?function(r){return s(e(r))}(n):function(r,n){var e=t(r);return e?new e(n):null}(r,n)};export{u as default};
//# sourceMappingURL=index.mjs.map
