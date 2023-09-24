// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-buffer-ctors@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/buffer-alloc-unsafe@v0.1.0-esm/index.mjs";function t(t,e){return"generic"===t?function(r){var n,t;for(n=[],t=0;t<r;t++)n.push(0);return n}(e):"binary"===t?function(r){return function(r){var n;for(n=0;n<r.length;n++)r[n]=0;return r}(n(r))}(e):function(n,t){var e=r(n);return e?new e(t):null}(t,e)}export{t as default};
//# sourceMappingURL=index.mjs.map
